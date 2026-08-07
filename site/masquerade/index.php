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
  <meta name="keywords" content="Social Deduction, Minecraft, 26.2, Datapacks, Custom Resourcepack">
  <meta name="description" content="A social deduction game made by Gamemode 4">
  <meta property="og:site_name" content="Gamemode 4">
  <meta property="og:title" content="Gamemode 4: The Masquerade" />
  <meta property="og:description" content="A box sliding, mind twisting puzzle map for Minecraft 26.2">
  <meta property="og:image" content="https://gm4.co/images/logo/logo_256.png">
  <meta property="og:url" content="https://gm4.co/masquerade">
  <meta property="og:image:width" content="256">
  <meta property="og:image:height" content="256">

  <link rel="icon" type="image/svg" href="/images/logo/logo_clear.svg" sizes="any">
  <title>Gamemode 4: The Masquerade</title>
  <link rel="stylesheet" href="/includes/homepage.css?hash=a<?php echo hash_file("crc32", "../includes/homepage.css"); ?>" />
  <link rel="stylesheet" href="/masquerade/masquerade.css?hash=a<?php echo hash_file("crc32", "evergrowth.css"); ?>" />
  <script src="/includes/jquery-3.6.0.min.js"></script>
  <script src="/includes/tracks.js?hash=<?php echo hash_file("crc32", "../includes/tracks.js"); ?>"></script>
</head>

<body class="light">
  <?php include '../includes/header.php'; ?>
  <div class="splash">
    <img src="/masquerade/masquerade_splash.jpg" alt="">
  </div>
  <div class="poster">
    <h1>The Masquerade is a social deduction game.</h1>
    <br>
    <h2 style="font-style:italic">Coming soon!</h2>
  </div>
  <div class="center">
    <?php include '../includes/footer.php'; ?>
  </div>
</body>

</html>
