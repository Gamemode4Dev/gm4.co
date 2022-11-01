<link rel="stylesheet" href="/includes/header.css?hash=<?php echo hash_file("crc32", __DIR__ . "/header.css"); ?>" />
<script src="/includes/header.js?hash=<?php echo hash_file("crc32", __DIR__ . "/header.js"); ?>"></script>
<header>
  <a class="home" href="/">
    <img src="/images/logo/logo_clear.svg" height="32" width="32" alt="Gamemode 4 Logo"/>
    <h1>Gamemode 4</h1>
  </a>
  <nav>
    <ul>
      <li>
        <a href="/wiki" target="_blank" rel="noreferrer"><h1>Wiki</h1></a>
      </li>
      <li>
        <a href="//blog.gm4.co" target="_blank" rel="noreferrer"><h1>Blog</h1></a>
      </li>
      <li>
        <a href="/server"><h1>Server</h1></a>
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
