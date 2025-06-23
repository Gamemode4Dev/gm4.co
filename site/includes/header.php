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
        <a href="/team"><h1>Team</h1></a>
      </li>
      <li class="dropdown">
        <a href="/server">
          <h1>Server</h1>
        </a>
        <div class="dropdown-content">
        <a class="dropdown-map-info" href="/server">
          <div>Public Server 10</div>
        </a>
        <a class="dropdown-entry" href="/downloads">
          <div>Previous Downloads</div>
        </a>
        </div>
      </li>
      <li class="dropdown">
        <h1>Maps</h1>
        <div class="dropdown-content">
          <a class="dropdown-map-info" href="/evergrowth">
            <div>Evergrowth</div>
            <div class="dropdown-entry-info">Puzzle - 1.21.6</div>
          </a>
          <a class="dropdown-entry" href="/obsolescence">
            <div>Obsolescence</div>
            <div class="dropdown-entry-info">CTM - 1.17</div>
          </a>
        </div>
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
