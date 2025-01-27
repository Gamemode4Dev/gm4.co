<?php
//created 14 December
header('Access-Control-Allow-Origin:');
?>
<!DOCTYPE html>
<html lang="en">
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KDNJ7GR1VK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KDNJ7GR1VK');
</script>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#4AA0C7">
<meta name="keywords" content="data packs, data pack, datapacks, datapack, minecraft, minecraft java, commands, mods, mod, plugins, plugin, vanilla, how to install, community, quality of life, balanced, server, public, free, 1.17, 1.16, 1.15, 1.14, 1.13">
<meta name="description" content="A collection of data packs that can be added to survival Minecraft in any combination to create a new, exciting feel without the use of mods or plugins. This website allows you to download the latest versions of Gamemode 4 modules and links to our Discord, Twitter, public Minecraft server and github."/>
<meta property="og:site_name" content="Gamemode 4 Server"/>
<meta property="og:title" content="A multiplayer vanilla Minecraft world with a spicy Gamemode 4 twist."/>
<meta property="og:description" content="A collection of data packs that can be added to survival Minecraft in any combination to create a new, exciting feel without the use of mods or plugins. This website allows you to download the latest versions of Gamemode 4 modules and links to our Discord, Twitter, public Minecraft server and github."/>
<meta property="og:image" content="https://gm4.co/images/server/ps10_logo.png">
<meta property="og:url" content="https://gm4.co/server">

<link rel="icon" type="image/svg" href="https://www.gm4.co/images/logo/logo_clear.svg" sizes="any">
<link rel = "stylesheet" href="includes/header.css?hash=<?php echo hash_file("crc32","includes/header.css"); ?>" />
<script src="https://www.gm4.co/includes/jquery-3.6.0.min.js"></script>
<link rel = "stylesheet" href="https://www.gm4.co/includes/server.css?hash=<?php echo hash_file("crc32","includes/server.css"); ?>" />
<script src="/includes/tracks.js?hash=<?php echo hash_file("crc32", __DIR__ . "/includes/tracks.js"); ?>"></script>
<script src="/includes/server.js?hash=<?php echo hash_file("crc32", __DIR__ . "/includes/server.js"); ?>"></script>
<title>Gamemode 4 - Server</title>
</head>
<body class="light">
	<?php include_once($dev."includes/header.php"); ?>

	<div class="serverSplash slideshow track">
		<div class="trackContainer">
			<div class="trackItem" style="background-image: url(images/server/ps10_banner.png);">
				<img src="/images/server/ps10_logo.png">
				<div>
					<h2>Gamemode 4</h2>
					<h2>Public Server 10</h2>
				</div>
			</div>
		</div>
	</div>

	<div class="infoContainer">
		<h2>Gamemode 4 has a Public Server!</h2>
    <h3>IP: <span class="serverIp">server.gm4.co<div class="copyButton" title="Copy server IP"></div></span></h3>
		<br />
    <p>A new public server is here! To keep up to date with all the latest news, <a href='https://gm4.co/discord'>join our Discord Server!</a></p>
		<p>Looking for the world downloads of our past seasons? <a href="https://gm4.co/downloads">Check out our downloads page!</a></p>
		<br />

		<div class="serverSlides slideshow track">
			<div class="trackButton trackButtonLeft"></div>
			<div class="trackButton trackButtonRight"></div>
			<div class="trackContainer">
				<div class="trackItem bottom-left" style="background-image: url(images/server/ps10_spawn.png);">
					<h2>A welcoming spawn</h2>
					<p>Don't like living alone? Get cosy at the spawn town that every server has</p>
				</div>
				<div class="trackItem bottom-left" style="background-image: url(images/server/ps8_players.png);">
					<h2>Active community</h2>
					<p>An active, lively community of players who all like Survival with a twist</p>
				</div>
			</div>
		</div>
	</div>

  <?php include_once("includes/footer.php"); ?>
  
</body>
</html>
