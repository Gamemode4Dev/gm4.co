<?php
/*
created 19 august 2020
*/
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#4AA0C7">
<meta property="og:site_name" content="Gamemode 4"/>
<meta property="og:title" content="Minecraft Datapacks carefully balanced for spicing up survival gameplay."/>
<meta property="og:description" content="A collection of game plugins using datapacks that can be added to survival Minecraft in any combination to create a new, exciting feel without the use of mods or plugins."/>
<meta property="og:image" content="https://gm4.co/images/logo/logo_256.png">
<meta property="og:url" content="https://gm4.co">
<meta property="og:image:width" content="256"/>
<meta property="og:image:height" content="256"/>

<link rel="icon" type="image/svg" href="images/logo/logo_clear.svg" sizes="any">
<link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="includes/homepage.css?nocache=<?php echo(rand(0,999999)); ?>" />
<title>Gamemode 4</title>
<script async="" src="//www.google-analytics.com/analytics.js"></script><script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-63061711-1', 'auto');
  ga('send', 'pageview');
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="includes/homepage.js?nocache=<?php echo(rand(0,999999)); ?>"></script>
</head>
<body class="light">
<?php include 'includes/header.php';?>
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
    <a class="discordLink" href="https://discord.gg/0qLGgv7JGfIXf45t" target="_blank">
      <img src="/images/logo/discord.svg" alt="Discord Logo">Discord
    </a>
    <a class="githubLink" href="https://github.com/Gamemode4Dev/GM4_Datapacks" target="_blank">
      <img src="/images/logo/github.svg" alt="GitHub Logo">GitHub
    </a>
    <a class="patreonLink" href="https://www.patreon.com/gamemode4" target="_blank">
      <img src="/images/logo/patreon.png" alt="Patreon Logo">Patreon
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
    </select>
    <input id="textSearch" type="text" placeholder="search..." onkeyup="textSearch()"/>
  </div>
</div>
<iframe name='download_frame' style='display:none;'></iframe>
<?php include 'includes/footer.php';?>
</body>
</html>
