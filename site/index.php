<?php
/*
created 19 august 2020
*/
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
<meta name="keywords" content="data packs, data pack, data packs, data packs, minecraft, minecraft java, commands, mods, mod, plugins, plugin, vanilla, how to install, community, quality of life, balanced, server, public, free, 1.17, 1.16, 1.15, 1.14, 1.13">
<meta name="description" content="A collection of datapacks that can be added to survival Minecraft in any combination to create a new, exciting feel without the use of mods or plugins.">
<meta property="og:site_name" content="Gamemode 4">
<meta property="og:title" content="Minecraft data packs carefully balanced for spicing up survival gameplay."/>
<meta property="og:description" content="A collection of data packs that can be added to survival Minecraft in any combination to create a new, exciting feel without the use of mods or plugins.">
<meta property="og:image" content="https://gm4.co/images/logo/logo_256.png">
<meta property="og:url" content="https://gm4.co">
<meta property="og:image:width" content="256">
<meta property="og:image:height" content="256">

<link rel="icon" type="image/svg" href="images/logo/logo_clear.svg" sizes="any">
<link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="includes/homepage.css?hash=<?php echo hash_file("crc32","includes/homepage.css"); ?>" />
<title>Gamemode 4</title>
<script src="https://www.gm4.co/includes/jquery-3.6.0.min.js"></script>
</head>
<body class="light">
<?php include 'includes/header.php';?>
<script src="includes/homepage.js?hash=<?php echo hash_file("crc32","includes/homepage.js"); ?>"></script>
<div class="slideshow track">
  <div class="trackButton trackButtonLeft"></div>
  <div class="trackButton trackButtonRight"></div>
  <div class="trackContainer"></div>
</div>
<div class="landing">
  <div class="landingInfo">
    <h2>Gamemode 4</h2>
    <p>Gamemode 4 is an open-source data pack collection designed to augment the vanilla survival experience. We aim to provide well balanced, vanilla-like extensions, all whilst having minimal performance impact!</p>
    <p>Extensive documentation, focus on compatibility, and our design language make Gamemode 4 the number one choice for accessible survival mods.</p>
    <p>Our history originates from the 1.8 update with the introduction of the more flexible command syntax. With each update, we have consistently updated, optimized and created new content as the tools available have been expanded.</p>
    <p>These modules have been featured on a season of Hermitcraft, used in a variety of Lets Play worlds, and currently feature on our bleeding-edge Public Server, where we test the latest changes.</p>
  </div>
  <div class="landingLinks">
    <h2>Join our community</h2>
    <a class="discordLink squircleLink" href="https://discord.gg/0qLGgv7JGfIXf45t" target="_blank" rel="noopener">
      <img src="/images/logo/discord.svg" alt="Discord Logo">Discord
    </a>
    <a class="githubLink squircleLink" href="https://github.com/Gamemode4Dev/GM4_Datapacks" target="_blank" rel="noopener">
      <img src="/images/logo/github.svg" alt="GitHub Logo">GitHub
    </a>
    <a class="patreonLink squircleLink" href="https://www.patreon.com/gamemode4" target="_blank" rel="noopener">
      <img src="/images/logo/patreon.svg" alt="Patreon Logo">Patreon
    </a>
  </div>
</div>
<div class="moduleNavBar">
  <a href="#browse" class="moduleNavButton active noselect">Browse</a>
  <a href="#modules" class="moduleNavButton noselect">All Modules</a>
</div>
<div id="browse" class="moduleView active"></div>
<div id="modules" class="moduleView">
  <div class="moduleFilter">
    <select id="versionSelect" onchange="versionView()">
      <option value="loading">Loading...</option>
    </select><label for="versionSelect" style="display:none">Select Version</label>
    <input id="textSearch" type="text" placeholder="search..." onkeyup="textSearch()"/><label for="textSearch" style="display:none">Search</label>
  </div>
</div>
<iframe name='download_frame' style='display:none;'></iframe>
<?php include 'includes/footer.php';?>
</body>
</html>
