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
<meta name="description" content="A collection of data packs that can be added to survival Minecraft in any combination to create a new, exciting feel without the use of mods or plugins. This website allows you to download the latest versions of Gamemode 4 modules and links to our Discord, Twitter, public Minecraft server and github."/>
<meta property="og:site_name" content="Gamemode 4 Server"/>
<meta property="og:title" content="A multiplayer vanilla Minecraft world with a spicy Gamemode 4 twist."/>
<meta property="og:description" content="A collection of data packs that can be added to survival Minecraft in any combination to create a new, exciting feel without the use of mods or plugins. This website allows you to download the latest versions of Gamemode 4 modules and links to our Discord, Twitter, public Minecraft server and github."/>
<meta property="og:image" content="https://gm4.co/images/logo_256.png">
<meta property="og:url" content="https://gm4.co">
<meta property="og:image:width" content="256"/>
<meta property="og:image:height" content="256"/>

<link rel="icon" type="image/svg" href="https://www.gm4.co/images/logo/logo_clear.svg" sizes="any">
<link rel = "stylesheet" href="includes/header.css?hash=<?php echo hash_file("crc32","includes/header.css"); ?>" />
<link rel = "stylesheet" href="includes/module.css" />
<link rel = "stylesheet" href="includes/homepage.css" />
<script src="https://www.gm4.co/includes/jquery-3.6.0.min.js"></script>
<script src="includes/tracks.js?hash=<?php echo hash_file("crc32","includes/tracks.css"); ?>"></script>
<script src="includes/module.js?hash=<?php echo hash_file("crc32","includes/module.css"); ?>"></script>
<script src="includes/modulePage.js?hash=<?php echo hash_file("crc32","includes/modulePage.css"); ?>"></script>
<title>ModuleName - Gamemode 4 Data Pack</title>
</head>
<body class="light">
	<?php include 'includes/header.php';?>

	<main>
		<section class="horizontalSplitDisplay" id="moduleDisplay">
			<div id="moduleIcon"></div>
			<div class="splitContainer" id="moduleInfo">
				<div class="horizontalSplitDisplay" id="moduleTitle">
					<h1 class="moduleName">&nbsp;</h1>
				</div>
				<p id="moduleDescription" class='descriptionTextBox'>&nbsp;</p>
			</div>
		</section>
		<section id="downloadSection" class="currentStep" data-step="download">
			<h2>Download <span class="moduleName"></span> for Java</h2>
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
