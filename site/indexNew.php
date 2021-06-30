<?php
/*
created 19 august 2020

This is the module browse page. It is currently intended to be the homepage of
the entire website and will eventually feature cards and categories for things
other than modules - advertising cards for Discord, wiki etc.

Essentially it is a container page that is populated with actual content by
includes/homepage.js
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
<div id="dataRequestBox">
  <p>Allow GM4 to remember your preferences?</p>
  <span class="smallButton" onclick="storeUserPreferences()">Allow</span>
  <span class="smallButton" onclick="$(this).parent().hide();dataprompted=true;">Dismiss</span>
</div>
<header>
  <a class="home" href="https://www.gm4.co/">
    <img src="images/logo/logo_clear.svg" height="32px" alt="Gamemode 4 Logo"/>
    <h1>Gamemode 4</h1>
  </a>
  <nav>
    <ul>
      <li>
        <span onclick="switchView('All Modules', $('#allModules')[0], true)">Modules</span>
      </li>
      <li>
        <a href="https://www.gm4.co/wiki" target="_blank">Wiki</a>
      </li>
      <li>
        <a href="https://www.gm4.co/server">Server</a>
      </li>
    </ul>
  </nav>
  <span class="themeButton" onclick="toggleTheme()"></span>
</header>
<div class="slideshow track">
  <div class="trackButton trackButtonLeft"></div>
  <div class="trackButton trackButtonRight"></div>
  <div class="trackContainer"></div>
</div>
<div class="landing">
  <div class="landingInfo">
    Gamemode 4 is a collection of carefully constructed datapack modules that can be easily added to your Minecraft world to add to your gameplay experience without the need for mods!
  </div>
  <div class="landingLinks">
    <h2>Join our community</h2>
    <a class="discordLink" href="https://discord.gg/0qLGgv7JGfIXf45t">
      <img src="/images/logo/discord.svg" alt="Discord Logo">Discord
    </a>
    <a class="githubLink" href="https://github.com/Gamemode4Dev/GM4_Datapacks">
    <img src="/images/logo/github.svg" alt="GitHub Logo">GitHub
    </a>
  </div>
</div>
<div class="moduleNavBar">
  <span onclick="switchView('Browse',this)" class="moduleNavButton moduleNavButtonSelected noselect">Browse</span>
  <span id="allModules" onclick="switchView('All Modules',this)" class="moduleNavButton noselect">All Modules</span>
</div>
<div id="modules" style="display:none">
  <div class="moduleFilter">
    <select id="versionSelect" onchange="versionView()">
      <option value="loading">Loading...</option>
    </select>
    <input id="textSearch" type="text" placeholder="search..." onkeyup="textSearch()"/>
  </div>
</div>
<div id="browse"></div>
<iframe name='download_frame' style='display:none;'></iframe>
<footer>
  <p>
    Copyright &copy; <?php echo(date('Y')); ?> Gamemode 4<br>
    <a href="https://discord.com/invite/erHDVhPY" target="_blank">Discord</a> | <a href="https://github.com/Gamemode4Dev/GM4_Datapacks" target="_blank">Github</a> | <a href="https://twitter.com/GM4Official" target="_blank">Twitter</a>
  </p>
  <p class="small">
    Gamemode 4 is not an official Minecraft product, and is not approved by or associated with Mojang Studios. "Minecraft" is a trademark of Mojang AB and any usage of the Minecraft brand on this site is used in accordance with Mojang Studios' <a href="https://account.mojang.com/terms?ref=ft#brand" target="_blank">Brand and Asset Guidelines</a>.
  </p>
</footer>
</body>
</html>
