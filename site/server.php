<?php
//created 14 December
$my_root = "https://www.gm4.co/";
$dev = "";
$nav = 'server';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#4AA0C7">
<meta property="og:site_name" content="Gamemode 4 Server"/>
<meta property="og:title" content="A multiplayer vanilla Minecraft world with a spicy Gamemode 4 twist."/>
<meta property="og:description" content="A collection of game plugins using datapacks that can be added to survival Minecraft in any combination to create a new, exciting feel without the use of mods or plugins. This website allows you to download the latest versions of Gamemode 4 modules and links to our Discord, Twitter, public Minecraft server and github."/>
<meta property="og:image" content="https://gm4.co/images/logo_256.png">
<meta property="og:url" content="https://gm4.co">
<meta property="og:image:width" content="256"/>
<meta property="og:image:height" content="256"/>

<link rel="icon" type="image/svg" href="https://www.gm4.co/images/logo/logo_clear.svg" sizes="any">
<link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet" type="text/css">
<link rel = "stylesheet" href="<?php echo($my_root.$dev);?>includes/header.css?nocache=<?php echo rand(0,1000000); ?>" />
<script src="https://www.gm4.co/includes/jquery-3.3.1.min.js"></script>
<link rel = "stylesheet" href="https://www.gm4.co/includes/server.css?nocache=<?php echo rand(0,1000000); ?>" />
<title>Gamemode 4 - Server</title>
<script async="" src="//www.google-analytics.com/analytics.js"></script><script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-63061711-1', 'auto');
  ga('send', 'pageview');
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
<body class="light">
	<?php include_once($dev."includes/header.php"); ?>

	<div id="infoContainer">
		<div id="slideshow">
			<div class='slide'>
			<h2>Gamemode 4 has a Public Server!</h2>
            <h1>IP: server.gm4.co</h1>
            <h3>Gamemode 4's public server is here! We have an active community of players of all ages playing survival together with that extra Gamemode 4 twist! To keep up to date with all the latest news, <a href='https://gm4.co/discord'>join our Discord Server!</a></h3>
				<iframe style="position:relative;display:inline-block;width:95vw;max-width:1075px;height:53vw;max-height:604px;border:0px;" src="https://www.youtube.com/embed/NoVf5PMTK-c" allowfullscreen></iframe>
			</div>
			<div class='slide'>

			</div>
		</div>
	</div>
  
  <?php include_once("includes/footer.php"); ?>
  
</body>
</html>
