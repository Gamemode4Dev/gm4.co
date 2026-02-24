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
  <meta name="keywords" content="Minecraft, Datapacks, Public Server, World Downloads">
  <meta name="description" content="A box sliding puzzle map made by Gamemode 4">
  <meta property="og:site_name" content="Gamemode 4">
  <meta property="og:title" content="Gamemode 4: World Downloads" />
  <meta property="og:description" content="The final world downloads of our past public servers">
  <meta property="og:image" content="https://gm4.co/images/logo/logo_256.png">
  <meta property="og:url" content="https://gm4.co/downloads">
  <meta property="og:image:width" content="256">
  <meta property="og:image:height" content="256">

  <link rel="icon" type="image/svg" href="../images/logo/logo_clear.svg" sizes="any">
  <title>Gamemode 4: World Downloads</title>
  <link rel="stylesheet" href="../includes/homepage.css?hash=a<?php echo hash_file("crc32", "../includes/homepage.css"); ?>" />
  <link rel="stylesheet" href="downloads.css?hash=a<?php echo hash_file("crc32", "downloads.css"); ?>" />
  <script src="https://www.gm4.co/includes/jquery-3.6.0.min.js"></script>
  <script src="../includes/tracks.js?hash=<?php echo hash_file("crc32", "../includes/tracks.js"); ?>"></script>
  <script src="downloads.js?hash=<?php echo hash_file("crc32", "downloads.js"); ?>"></script>
</head>

<body class="light">
  <?php include '../includes/header.php'; ?>
  <div class="downloadsSlides slideshow track">
    <div class="trackButton trackButtonLeft"></div>
    <div class="trackButton trackButtonRight"></div>
    <div class="trackContainer">
      <div class="trackItem bottom-left" style="background-image: url(/images/slideshow/server7_1.png);">
        <h2>Public Server 7</h2>
      </div>
      <div class="trackItem bottom-left" style="background-image: url(/images/server/ps8_players.png);">
        <h2>Public Server 8</h2>
      </div>
      <div class="trackItem bottom-left" style="background-image: url(/images/server/ps9_banner.png);">
        <h2>Public Server 9</h2>
      </div>
      <div class="trackItem bottom-left" style="background-image: url(/images/server/ps10_spawn.png);">
        <h2>Public Server 10</h2>
      </div>
    </div>
  </div>
  <div class="infoContainer">
		<h2>Public Server World Downloads</h2>
    <p>
      Below are the final world downloads and some pre-season world downloads for each season from the first to the previous.
    </p>
  </div>
  <main id="downloads">
  </main>
  <div class="center">
    <?php include '../includes/footer.php'; ?>
  </div>
</body>

</html>
