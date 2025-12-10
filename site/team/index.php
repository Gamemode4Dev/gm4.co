<?php
// Load team members from JSON file
$json = file_get_contents('team.json');
$team = json_decode($json, true);
// Sort team alphabetically
usort($team, function($a, $b) {
  return strcasecmp($a['name'], $b['name']);
});
?>

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
  <meta property="og:site_name" content="Gamemode 4">
  <meta property="og:title" content="Gamemode 4: Meet the Team" />
  <meta property="og:image" content="https://gm4.co/team/logo/group_picture_2024.png">
  <meta property="og:url" content="https://gm4.co/team">
  <meta property="og:image:width" content="256">
  <meta property="og:image:height" content="256">

  <link rel="icon" type="image/svg" href="../images/logo/logo_clear.svg" sizes="any">
  <title>Gamemode 4: Meet the Team</title>
  <link rel="stylesheet" href="../includes/homepage.css?hash=a<?php echo hash_file("crc32", "../includes/homepage.css"); ?>" />
  <link rel="stylesheet" href="team.css?hash=a<?php echo hash_file("crc32", "team.css"); ?>" />
  <script src="https://www.gm4.co/includes/jquery-3.6.0.min.js"></script>
</head>
<body>
  <?php include '../includes/header.php'; ?>

  <div class="serverSplash slideshow track">
		<div class="trackContainer">
			<div class="trackItem" style="background-image: url(group_picture_2024.png);">
			</div>
		</div>
	</div>

  <div class="infoContainer">
    <h2>Meet the Team</h2>

    <?php foreach ($team as $member): ?>
      <div class="team-member">
        <img class="team-member-image" src="https://mc-heads.net/avatar/<?= $member['minecraft_name'] ?>/16" alt="<?= $member['name'] ?>">
        <div>
          <h2>
            <span><?= $member['name'] ?></span>
            <?php if (!empty($member['links'])): ?>
            <span class="team-member-links">
              <?php foreach ($member['links'] as $link): ?>
                <?php
                  $icons = [
                    'bsky.app' => '/images/logo/bluesky.svg',
                    'github.com' => '/images/logo/github.svg',
                    'ko-fi.com' => '/images/logo/kofi.svg',
                    'linktr.ee' => '/images/logo/linktree.svg',
                    'twitter.com' => '/images/logo/twitter.svg',
                  ];
                  $domain = parse_url($link, PHP_URL_HOST);
                  $icon = isset($icons[$domain])
                    ? '<img src="' . $icons[$domain] . '" alt="' . ucfirst(explode('.', $domain)[0]) . '">'
                    : '<span>🔗</span>';
                ?>
                <a href="<?= $link ?>" target="_blank"><?= $icon ?></a>
              <?php endforeach; ?>
            </span>
          <?php endif; ?>
          </h2>
          <p><?= $member['description'] ?></p>
        </div>
      </div>
    <?php endforeach; ?>
  </div>

  <?php include '../includes/footer.php'; ?>

</body>
</html>
