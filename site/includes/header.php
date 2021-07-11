<link rel="stylesheet" href="https://gm4.co/includes/header.css?nocache=<?php echo(rand(0,999999)); ?>" />
<script src="https://gm4.co/includes/header.js?nocache=<?php echo(rand(0,999999)); ?>"></script>
<header>
  <a class="home" href="https://gm4.co/">
    <img src="https://gm4.co/images/logo/logo_clear.svg" height="32" alt="Gamemode 4 Logo"/>
    <h1>Gamemode 4</h1>
  </a>
  <nav>
    <ul>
      <li>
        <a href="https://gm4.co/#modules">Modules</a>
      </li>
      <li>
        <a href="https://gm4.co/wiki" target="_blank">Wiki</a>
      </li>
      <li>
        <a href="https://gm4.co/server">Server</a>
      </li>
    </ul>
  </nav>
  <span class="themeButton" onclick="toggleTheme()"></span>
</header>
<div id="dataRequestBox">
  <p>Allow GM4 to remember your preferences?</p>
  <span class="smallButton" onclick="storeUserPreferences()">Allow</span>
  <span class="smallButton" onclick="$(this).parent().hide();dataprompted=true;">Dismiss</span>
</div>
