<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63061711-1"></script>
  <script async src="/includes/lazysizes.min.js"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-63061711-1');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#4AA0C7">
  <meta name="keywords" content="Social Deduction, Minecraft, 26.3, Datapacks, Custom Resourcepack">
  <meta name="description" content="A social deduction game made by Gamemode 4">
  <meta property="og:site_name" content="Gamemode 4">
  <meta property="og:title" content="Gamemode 4: The Masquerade" />
  <meta property="og:description" content="A social deduction map for Minecraft 26.3">
  <meta property="og:image" content="https://gm4.co/images/logo/logo_256.png">
  <meta property="og:url" content="https://gm4.co/masquerade">
  <meta property="og:image:width" content="256">
  <meta property="og:image:height" content="256">

  <link rel="icon" type="image/svg" href="/images/logo/logo_clear.svg" sizes="any">
  <title>Gamemode 4: The Masquerade</title>
  <link rel="stylesheet" href="/includes/homepage.css?hash=a<?php echo hash_file("crc32", "../includes/homepage.css"); ?>" />
  <link rel="stylesheet" href="/masquerade/masquerade.css?hash=a<?php echo hash_file("crc32", "masquerade.css"); ?>" />
  <script src="/includes/jquery-3.6.0.min.js"></script>
  <script src="/includes/tracks.js?hash=<?php echo hash_file("crc32", "../includes/tracks.js"); ?>"></script>
  <script src="/masquerade/masquerade.js?hash=<?php echo hash_file("crc32", "masquerade.js"); ?>"></script>
</head>

<body class="light">
  <?php include '../includes/header.php'; ?>
  <div class="splash">
    <img src="/masquerade/masquerade_splash.png" alt="">
    <img class="splash-overlay" src="/masquerade/masquerade_title.png" alt="The Masquerade">
  </div>
  <div class="poster">
    <h1>The Masquerade is a social deduction game for 5-15 players.</h1>
    <br>
    <br>
    <h2 style="font-style:italic"> Don your mask and be ready for your debut in the game of deduction and deception that is <strong>The Masquerade</strong>!</h2>
    <br>
    <div class="posterPair">
      <div class="posterPairBox">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9AARPGDzbYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="posterPairBox" id="poster-pair-box-right">
        <h2>The Goal:</h2>
        <p>Every player will take one of 100 unique roles with different abilities. Good must find and execute the Demon, while Evil picks them off one by one!</p>
        <p>Have secret conversations using the Line of Sight based chat. Explore the mansion for clues, and convince your peers during trials.</p>
        <p>The dead continue to linger! Talk to their ghost to solve the mystery, assuming you can trust them...</p>
      </div>
    </div>
  </div>
  <div class="buttonGrid downloads">
    <p class="worldVersionInfo">For Minecraft: Java Edition 26.3</p>
    <a href="https://github.com/Gamemode4Dev/The_Masquerade/releases/latest/download/The_Masquerade.zip" class="squircleLink worldDownloadLink">
      <img src="/images/filled_map.svg">
      <span>Download the Map</span>
    </a>
    <a href="https://github.com/Gamemode4Dev/The_Masquerade_RP/releases/latest/download/The_Masquerade_RP.zip" class="squircleLink resourcePackDownloadLink">
      <img src="/images/message_in_a_bottle.svg">
      Download Latest Resource Pack
    </a>
    <a href="/discord" target="_blank" class="squircleLink viewCodeLink">
      <img src="/images/logo/discord.svg">
      Get Help on Discord
    </a>
  </div>
  <div class="credits">
    <h2>Credits</h3>
      <div class="credits-list">
        <div class="creator">
          <div class="creator-image">
            <img loading="lazy" src="https://mc-heads.net/avatar/djoness/16"></img>
            <h4>Djones</h4>
          </div>
          <p>Game Design</p>
          <p>& Datapack</p>
        </a>
        </div>
        <div class="creator">
        <a href="https://linktr.ee/kyrius" target="_blank">
          <div class="creator-image">
            <img loading="lazy" src="https://mc-heads.net/avatar/kyrkis/16"></img>
            <h4>Kyrius</h4>
          </div>
          <p>Build</p>
          <p>& Resource Pack</p>
        </a>
        </div>
        <div class="creator">
          <div class="creator-image">
            <img loading="lazy" src="https://mc-heads.net/avatar/bpr02/16"></img>
            <h4>BPR</h4>
          </div>
          <p>Shaders</p>
          <p>& Tech Support</p>
        </a>
        </div>
      </div>
      <div class="credits-list">
        <div class="creator small">
          <div class="creator-image">
            <img loading="lazy" src="https://mc-heads.net/avatar/rednls/16"></img>
            <h4>Rednls</h4>
          </div>
          <p>Sound Design & SFX</p>
        </div>
        <div class="creator small">
          <div class="creator-image">
            <img loading="lazy" src="https://mc-heads.net/avatar/catter1/16"></img>
            <h4>Catter</h4>
          </div>
          <p>Wiki & Playtest Lead</p>
        </div>
        <div class="creator small">
        <a href="https://www.youtube.com/@Looshable" target="_blank">
          <div class="creator-image">
            <img loading="lazy" src="https://mc-heads.net/avatar/looshable/16"></img>
            <h4>Looshable</h4>
          </div>
          <p>Trailer</p>
        </div>
        <div class="creator small">
          <div class="creator-image">
            <img loading="lazy" src="https://mc-heads.net/avatar/liamsauce/16"></img>
            <h4>Liam</h4>
          </div>
          <p>Music</p>
        </div>
  </div>

  <div class="center">
    <?php include '../includes/footer.php'; ?>
  </div>
</body>

</html>
