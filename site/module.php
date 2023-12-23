<?php
	// /module.php?module=apple-trees -> $module="gm4_apple_trees"
	$module_id = "gm4_" . preg_replace("/-/","_", $_GET['module']);

	$sources = json_decode(file_get_contents('modules/module_sources.json'), true);

	$module = NULL;
	foreach ($sources as $source) {
		foreach ($source["versions"] as $version) {
			global $module;

			$cache = preg_replace("/\//", "-", $source["repo"]) . "-" . $version["id"] . ".cache";
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
				break;
			}
		}
		if ($module != NULL) {
			break;
		}
	}

	if (!isset($module)) {
		$module = [
			"name" => "Unknown module",
			"description" => "Sorry, this module doesn't exist!",
		];
	}

	$module_icon = "https://raw.githubusercontent.com/Gamemode4Dev/GM4_Datapacks/master/" . $module_id . "/pack.png";
	$file_headers = @get_headers($module_icon);
	if ($file_headers[0] == 'HTTP/1.1 404 Not Found' || $file_headers[0] == 'HTTP/1.0 404 Not Found') {
		$module_icon = "/modules/media/placeholder.png";
	}

?>
<!DOCTYPE html>
<html lang="en">
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-63061711-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-63061711-1');
</script>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#4AA0C7">
<meta name="keywords" content="data packs, data pack, datapacks, datapack, minecraft, minecraft java, commands, mods, mod, plugins, plugin, vanilla, how to install, community, quality of life, balanced, server, public, free, 1.17, 1.16, 1.15, 1.14, 1.13">
<meta name="description" content="<?php echo $module["name"] ?>"/>
<meta property="og:site_name" content="Gamemode 4 - <?php echo $module["name"] ?>"/>
<meta property="og:title" content="<?php echo $module["description"] ?>"/>
<meta property="og:description" content="Download <?php echo $module["name"] ?> for Minecraft Java"/>
<meta property="og:image" content="<?php echo $module_icon ?>">
<meta property="og:url" content="https://gm4.co">
<meta property="og:image:width" content="200"/>
<meta property="og:image:height" content="200"/>

<link rel="icon" type="image/svg" href="https://www.gm4.co/images/logo/logo_clear.svg" sizes="any">
<link rel = "stylesheet" href="/includes/module.css" />
<link rel = "stylesheet" href="/includes/homepage.css" />
<script src="https://www.gm4.co/includes/jquery-3.6.0.min.js"></script>
<script src="/includes/tracks.js?hash=<?php echo hash_file("crc32", __DIR__ . "/includes/tracks.js"); ?>"></script>
<script src="/includes/module.js?hash=<?php echo hash_file("crc32", __DIR__ . "/includes/module.js"); ?>"></script>
<script src="/includes/modulePage.js?hash=<?php echo hash_file("crc32", __DIR__ . "/includes/modulePage.js"); ?>"></script>
<script>
	loadedModuleId = '<?php echo htmlentities($module_id) ?>';
	const MODULE_SOURCES = JSON.parse(`<?php echo file_get_contents('modules/module_sources.json') ?>`);
</script>
<title><?php echo $module["name"] ?> - Gamemode 4 Data Pack</title>
</head>
<body class="light">
	<?php include 'includes/header.php';?>
	<main>
		<section class="horizontalSplitDisplay" id="moduleDisplay">
			<div id="moduleIcon"></div>
			<div class="splitContainer" id="moduleInfo">
				<div class="horizontalSplitDisplay" id="moduleTitle">
					<h1 class="moduleName"><?php echo $module["name"] ?></h1>
				</div>
				<p id="moduleDescription" class='descriptionTextBox'><?php echo $module["description"] ?></p>
			</div>
		</section>
		<section id="downloadSection" class="currentStep" data-step="download">
			<h2>Download <span class="moduleName"><?php echo $module["name"] ?></span> for Java</h2>
			<div id="versionDownloads">
				<div class="noselect squircleLink selectedVersion" style="display:inline-block;width:100px">&nbsp;</div>
				<div class="noselect squircleLink" style="display:inline-block;width:100px">&nbsp;</div>
				<div class="noselect squircleLink" style="display:inline-block;width:100px">&nbsp;</div>
			</div>
		</section>
	</main>

	<?php include 'includes/footer.php';?>

</body>
</html>
