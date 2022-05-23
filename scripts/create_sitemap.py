import requests
import json

with open('site/sitemap.txt', 'r') as f:
	sitemap = set([l.strip() for l in f.readlines()])

with open('site/modules/module_sources.json', 'r') as f:
	module_sources = json.load(f)

for source in module_sources:
	for version in source['versions']:
		res = requests.get(f'https://raw.githubusercontent.com/{source["repo"]}/release/{version["id"]}/meta.json')

		modules = res.json()['modules']
		module_urls = [
			f"https://gm4.co/modules/{m['id'].removeprefix('gm4_').replace('_', '-')}"
			for m in modules
		]
		sitemap = sitemap.union(module_urls)

with open('site/sitemap.txt', 'w') as f:
	f.write('\n'.join(sorted(list(sitemap))) + '\n')
