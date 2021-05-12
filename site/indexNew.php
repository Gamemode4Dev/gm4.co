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
<div class="landing">
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
  <div class="landingInfo">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur sit, quisquam soluta exercitationem hic! Reprehenderit repellendus rem velit blanditiis asperiores est tempora vel, magnam neque enim ipsa, sequi necessitatibus.
  </div>
</div>
<div class="pageShadowDown">
  ↓ Scroll down ↓
</div>
<div class="moduleNavBar">
  <span onclick="switchView('Browse',this)" class="moduleNavButton moduleNavButtonSelected noselect">Browse</span>
  <span id="allModules" onclick="switchView('All Modules',this)" class="moduleNavButton noselect">All Modules</span>
</div>
<div id="allModulesContainer" style="display:none">
  <select id="versionSelect" class="textSpace" onchange="versionView()">
    <option value="loading">Loading...</option>
  </select>
  <input id="textSearch" type="text" class="textSpace" placeholder="search..." onkeyup="textSearch()"/>
</div>
<div id="categoriesContainer">
  <!-- <h2>Resources &amp; Tools</h2>
  <div class="categoryBar">
    <a href="https://www.gm4.co/resource-pack"><div id="resourcepack_card" class="moduleCard noselect" data-resource_id="resourcepack">
      <p class="cardName">Resource Pack</p>
    </div></a><div class="moduleCard noselect" data-resource_id="discord">
      <iframe id="discordIFrame"src="" width="96%" height="96%" allowtransparency="true" style="position:absolute;top:2%;left:2%;border-radius:20px" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div><a href="https://gm4.co/modules/generator"><div id="generator_card" class="moduleCard noselect" data-resource_id="generator">
      <img src="images/resource_cards/generator_icon.png">
      <p class="cardName">Module Template</p>
    </div></a>
  </div> -->
</div>
<iframe name='download_frame' style='display:none;'></iframe>
<div id="footer">
  <div id="footerContainer">
    <p>Copyright &copy; <?php echo(date('Y')); ?> Gamemode 4<br>
    <a href="https://discord.com/invite/erHDVhPY" target="_blank">Discord</a> | <a href="https://github.com/Gamemode4Dev/GM4_Datapacks" target="_blank">Github</a> | <a href="https://twitter.com/GM4Official" target="_blank">Twitter</a>
    </p>
    <p class="small">Gamemode 4 is not an official Minecraft product, and is not approved by or associated with Mojang Studios. "Minecraft" is a trademark of Mojang AB and any usage of the Minecraft brand on this site is used in accordance with Mojang Studios' <a href="https://account.mojang.com/terms?ref=ft#brand" target="_blank">Brand and Asset Guidelines</a>.</p>
  </div>
</div>
</body>
</html>
