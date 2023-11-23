<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63061711-1"></script>
  <script async src="https://gm4.co/includes/lazysizes.min.js"></script>
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
  <meta name="keywords" content="Puzzle Map, 1.20, Minecraft, Datapacks, Custom Resourcepack">
  <meta name="description" content="A box sliding puzzle map made by Gamemode 4">
  <meta property="og:site_name" content="Gamemode 4">
  <meta property="og:title" content="Gamemode 4: Evergrowth" />
  <meta property="og:description" content="A box sliding, mind twisting puzzle map for Minecraft 1.20">
  <meta property="og:image" content="https://gm4.co/images/logo/logo_256.png">
  <meta property="og:url" content="https://gm4.co/evergrowth">
  <meta property="og:image:width" content="256">
  <meta property="og:image:height" content="256">

  <link rel="icon" type="image/svg" href="../images/logo/logo_clear.svg" sizes="any">
  <title>Gamemode 4: Evergrowth</title>
  <link rel="stylesheet" href="../includes/homepage.css?hash=a<?php echo hash_file("crc32", "../includes/homepage.css"); ?>" />
  <link rel="stylesheet" href="evergrowth.css?hash=a<?php echo hash_file("crc32", "evergrowth.css"); ?>" />
  <script src="https://www.gm4.co/includes/jquery-3.6.0.min.js"></script>
  <script src="../includes/tracks.js?hash=<?php echo hash_file("crc32", "../includes/tracks.js"); ?>"></script>
  <script src="evergrowth.js?hash=<?php echo hash_file("crc32", "evergrowth.js"); ?>"></script>
</head>

<body class="light">
  <?php include '../includes/header.php'; ?>
  <div id="splash">
    <div id="logo"></div>
  </div>
  <div class="poster">
    <h1>Evergrowth is an block pushing, mind bending Puzzle Map.</h1>
    <br>
    <br>
    <h2 style="font-style:italic"> What is with the giant glowing tree at the center of the world? Why is this place abandoned? <strong>Evergrowth</strong>!</h2>
    <br>
    <div class="posterPair">
      <div class="posterPairBox">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HTwCD5T7S0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="posterPairBox">
        <h2>The Goal:</h2>
        <p>Discover the weird and wonderful puzzles of pushing boxes. Discover the mystery behind the giant glowing tree at the center of the map.</p>
        <p>Evergrowth contains a large variety of Puzzle Mechanics, but all focused on pushing boxes and getting yourself out of tricky logical conundrums!</p>
      </div>
    </div>
    <p style="clear: both;">Spread throughout the map are a variety of collectables and extra tough "meta" puzzles, for those who want to go even further to break their brain!</p>
  </div>
  <div class="buttonGrid downloads">
    <a href="https://github.com/Gamemode4Dev/evergrowth" class="squircleLink worldDownloadLink">
      <img src="/images/filled_map.svg">
      Download the Map
    </a>
    <a href="https://github.com/Gamemode4Dev/evergrowth" class="squircleLink resourcePackDownloadLink">
      <img src="/images/message_in_a_bottle.svg">
      Download Resource Pack
    </a>
    <a href="https://github.com/Gamemode4Dev/evergrowth" class="squircleLink viewCodeLink">
      <img src="/images/logo/github.svg">
      Read Install Instructions
    </a>
  </div>
  <div class="credits">
    <h2>Credits</h3>
      <div class="credits-list">
        <div class="creator">
          <div class="creator-image">
            <img src="https://cravatar.eu/helmavatar/thanathor/16.png"></img>
            <h4>Thanathor</h4>
          </div>
          <p>Datapack Development</p>
        </div>
        <div class="creator">
          <div class="creator-image">
            <img src="https://cravatar.eu/helmavatar/kyrkis/16.png"></img>
            <h4>Kyrkis</h4>
          </div>
          <p>Datapack Development</p>
        </div>
      </div>
      <div class="credits-list">
        <div class="creator small">
          <div class="creator-image">
            <img src="https://cravatar.eu/helmavatar/toffeemax/16.png"></img>
            <h4>ToffeeMax</h4>
          </div>
          <p>Music</p>
        </div>
        <div class="creator small">
          <div class="creator-image">
            <img src="https://cravatar.eu/helmavatar/raasdonder/16.png"></img>
            <h4>Raasdonder</h4>
          </div>
          <p>Sound FXs</p>
        </div>
        
        <div class="creator small">
          <div class="creator-image">
            <img src="https://cravatar.eu/helmavatar/bartthebart/16.png"></img>
            <h4>BartTheBart</h4>
          </div>
          <p>Supplimentary Music</p>
        </div>
      </div>
  </div>
  <div id="loop_gif">
  </div>
  <div class="center">
    <?php include '../includes/footer.php'; ?>
  </div>
</body>

</html>
