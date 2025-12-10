/* global MODULE_SOURCES selectedVersion modules fetchModulesAndResources initTrack createModuleCard loadModuleCategories updateIncludedModules, getIncludedModules */

const SUPPORTERS = [
	'BPK001',
	'Pelik_',
	'Darkest9469V2',
	'Levertion',
	'kruthers',
	'kyrkis',
	'miraku_memo',
	'venomousbirds',
	'TheEpyonProject',
	'Modulorium',
	'Hozz',
	'Jackohhh',
	'luegxrl',
	'ShadowSlam',
	'TransportLayer',
	'SpecialBuilder32',
	'Hero29',
	'Dantifreeze',
	'suppergerrie2',
	'SpiderRobotMan'
]

window.addEventListener('DOMContentLoaded', () => {
	Promise.all([
		fetchModulesAndResources(),
		fetch('/images/slideshow/slides.json').then(r => r.json()),
		fetch('/modules/module_categories.json').then(r => r.json()),
	])
		.then(async ([modules, slideshow, categories]) => {

			// Header slideshow
			for (const slide of slideshow.slides) {
				const external = slide.link.startsWith('https://') && !slide.link.startsWith('https://gm4.co/')
				$('.slideshow > .trackContainer').append(`<${slide.link ? `a href=${slide.link}` : 'div'} ${external ? 'target="_blank"' : ''} data-bg="images/slideshow/${slide.background_image}" class="lazyload trackItem ${slide.text.position || 'bottom-left'} ${slide.darken ? 'darken' : ''}" style="background-image:url(images/slideshow/${slide.low_resolution_background_image});">${slide.text ? `<h2>${slide.text.header}</h2><p>${slide.text.paragraph}</p>` : ''}${slide.link ? '</a>' : '</div>'}`);
			}
			initTrack($('.slideshow'), 8000);
			//scale up lazyloaded low res background images (such as the slideshow)
			document.addEventListener('lazybeforeunveil', (e)=> {
				const bg = e.target.getAttribute('data-bg');
				if(bg) {
					e.target.style.backgroundImage = 'url(' + bg + ')';
				}
			});

			for (const supporter of SUPPORTERS) {
				$('.supporters-list').append(`<img src="https://mc-heads.net/avatar/${supporter}/16" alt="${supporter}" title="${supporter}" />`)
			}

			// Browse tab
			loadModuleCategories(document.getElementById('browse'), categories.module_categories);

			// All Modules tab
			const moduleFilter = createModuleFilter();
			document.getElementById('modules').append(moduleFilter);

			[...modules.values()]
				.filter(mod => mod.id !== 'gm4_resource_pack')
				.sort((a, b) => a.name.localeCompare(b.name))
				.forEach(mod => {
					const moduleLink = document.createElement('a');
					if (!mod.versions.includes(selectedVersion)) {
						moduleLink.classList.add('wrongVersion');
					}
					moduleLink.setAttribute('data-module', mod.id);
					moduleLink.href = `/modules/${mod.id.replace(/^gm4_/, '').replace(/_/g, '-')}`;
					const moduleCard = createModuleCard(mod.id);
					moduleLink.append(moduleCard);
					document.getElementById('modules').append(moduleLink);
				});

			// Module selection box
			updateIncludedModules(getIncludedModules());
		});
});

window.addEventListener('popstate', () => {
	$('.moduleNavButton').removeClass('active');
	$(`.moduleNavButton[href="${location.hash}"]`).addClass('active');
	$('.moduleView').removeClass('active');
	$(location.hash).addClass('active');
});

function createModuleFilter() {
	const moduleFilter = document.createElement('div');
	moduleFilter.classList.add('moduleFilter');

	const filterModules = (name, predicate) => {
		document.querySelectorAll('[data-module]').forEach(e => {
			const mod = modules.get(e.getAttribute('data-module'));
			e.classList.toggle(name, !predicate(mod));
		});
	};

	const versionSelect = document.createElement('select');
	[...MODULE_SOURCES[0].versions, { id: 'older', name: 'Earlier Versions...' }].forEach(version => {
		const option = document.createElement('option');
		option.value = version.id;
		option.textContent = `Minecraft Java ${version.name}`;
		versionSelect.append(option);
	});
	versionSelect.addEventListener('change', () => {
		if (versionSelect.value === 'older') {
			window.location = '/old-modules';
		} else {
			filterModules('wrongVersion', mod => mod.versions.includes(versionSelect.value));
		}
	});
	moduleFilter.append(versionSelect);

	const textSearch = document.createElement('input');
	textSearch.placeholder = 'Search...';
	textSearch.addEventListener('keyup', () => {
		const filter = textSearch.value.toLowerCase();
		filterModules('wrongFilter', mod => (
			mod.name.toLowerCase().includes(filter)) ||
			mod.search_keywords?.some(kw => kw.toLowerCase().includes(filter)
		))
	});
	moduleFilter.append(textSearch);

	return moduleFilter;
}
