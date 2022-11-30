<?php
//created 14 December
header('Access-Control-Allow-Origin:');
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

gtag('config', 'UA-63061711-1', {cookie_flags:'SameSite=None;Secure'});
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
<script src="https://www.gm4.co/includes/jquery-3.6.0.min.js"></script>
<link rel = "stylesheet" href="https://www.gm4.co/includes/server.css?hash=<?php echo hash_file("crc32","includes/server.css"); ?>" />
<title>Gamemode 4 - Server</title>
</head>
<body class="light">
	<?php include_once($dev."includes/header.php"); ?>

	<div id="infoContainer">
		<div id="slideshow">
			<div class='slide'>
			<h2>This page is currently being worked on. Check back later!</h2>
            <h4>To keep up to date with all the latest news, <a href='https://gm4.co/discord'>join our Discord Server!</a></h4>
				<!--<iframe title="Gamemode 4 public server trailer" style="position:relative;display:inline-block;width:95vw;max-width:1075px;height:53vw;max-height:604px;border:0px;" src="https://www.youtube.com/embed/W4KGS5-Hdjs" allowfullscreen></iframe>-->
			</div>
			<div class='slide'>

			</div>
		</div>
	</div>
  
  <?php include_once("includes/footer.php"); ?>
  
</body>
</html>
