<?php
	function load_module($module_id) {
		$sources = json_decode(file_get_contents(__DIR__ . '/../modules/module_sources.json'), true);

		foreach ($sources as $source) {
			foreach ($source["versions"] as $version) {
				$cache = __DIR__ . "/../" . "resources-cache/" . preg_replace("/\//", "-", $source["repo"]) . "-" . $version["id"] . ".cache";
				if (file_exists($cache) && time() - filemtime($cache) < 60 * 60 * 24) {
					$contents = file_get_contents($cache);
				} else {
					$meta_url = "https://raw.githubusercontent.com/" . $source["repo"] . "/release/" . $version["id"] . "/meta.json";
					$contents = file_get_contents($meta_url);
					file_put_contents($cache, $contents);
				}
		
				$meta = json_decode($contents, true);
				$results = array_filter($meta["modules"], function($el) {
					global $module_id;
					return $el["id"] == $module_id;
				});
				if (count($results) > 0) {
					$module = current($results);
					return [
						"module" => $module,
						"source" => $source,
						"meta" => $meta,
					];
				}
			}
		}

		return [
			"module" => NULL,
			"source" => NULL,
			"meta" => NULL,
		];
	}
?>
