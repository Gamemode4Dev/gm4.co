<?php
//created 3 nov 16
$my_root = "https://www.gm4.co/";
$dev = "";
$nav = "";
?>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/png" href="../images/favicon.ico">
<meta content="text/html; charset=UTF-8" http-equiv="content-type">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/png" href="images/favicon.ico">
<link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet" type="text/css">
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
<link rel = "stylesheet" href="style.css" />
<link rel = "stylesheet" href="../includes/header.css" />
<script src="../includes/header.js"></script>
</head>
<body>
<?php include_once("../includes/header.php"); ?>
<div id="mainContainer">
	<p id="flip-colors" class="blue" style="color:black;font-size:12px;float:right;margin:0;cursor:pointer;">Help, I can't read blue text on white! Click me.</p>
	<script>
		$("#flip-colors").on("click", function() {
			if($(this).hasClass("blue")) {
				$("body").css("background", "#262626");
				$("body").css("color", "white");
				$("#flip-colors").css("color", "white");
				$(this).removeClass("blue");
			} else {
				$("body").css("background", "white");
				$("body").css("color", "#4AA0C7");
				$("#flip-colors").css("color", "black");
				$(this).addClass("blue");
			}
		});
	</script>
    <h1 class="c9 subtitle" id="h.biid7960aod2"><span>Official Rules</span></h1>
    <h2 class="c4" id="h.68b3pkeegmqb"><span class="c12 c8">Overview</span></h2>
    <p class="c5"><span>These are the rules that apply to all Gamemode 4 Platforms. You are expected to know and follow them at all times. Failure to do so will result in punishment. </span></p>
    <h2 class="c4" id="h.hjchbum2dn1y"><span class="c12 c8">Server Rules</span></h2>
    <p class="c5"><span class="c10">Our rules are based upon two characteristics : Be </span><span class="c10 c11">Respectful</span><span class="c10">, and Be </span><span class="c10 c11">Responsible</span><span class="c3">.</span></p>
    <p class="c5"><span class="c3">For each of the following rules, please see the sections below for more details.</span></p>
    <ul class="c19 lst-kix_x6wxw4h7qtke-0 start">
        <li class="c2"><span class="c3">No Cheating</span></li>
        <li class="c2"><span class="c3">No Stealing</span></li>
        <li class="c2"><span class="c3">No Griefing</span></li>
        <li class="c2"><span class="c3">Respect Others&rsquo; Builds</span></li>
        <li class="c2"><span class="c3">No Spam</span></li>
        <li class="c2"><span class="c3">No Impersonating Moderators</span></li>
        <li class="c2"><span class="c3">Be Responsible for your Account</span></li>
        <li class="c2"><span class="c3">No Hate Speech</span></li>
        <li class="c2"><span class="c3">No Excessive Lag</span></li>
        <li class="c2"><span class="c3">Respect Personal Privacy</span></li>
    </ul>
    <h2 class="c4" id="h.5h0mnu4sttrg"><span class="c6">Cheating</span></h2>
    <p class="c5"><span class="c1">Cheating is anything that gives you an unfair advantage over other players. This includes, but is not limited to:</span></p>
    <ul class="c19 lst-kix_u1abktk5qgg-0 start">
        <li class="c2"><span class="c7">Hacked Clients</span></li>
        <li class="c2"><span class="c7">Item or Inventory Manipulation Tools</span></li>
        <li class="c2"><span class="c7">Mouse or Keyboard Macros</span></li>
        <li class="c2"><span class="c7">X-Ray Mods or X-Ray Resource Packs</span></li>
        <li class="c2"><span class="c7">Schematica Printer Function</span></li>
        <li class="c2"><span class="c7">Second Accounts</span></li>
        <li class="c2"><span class="c7">Exploitation of Bugs or Glitches including item duplication (including rails &amp; carpets)</span></li>
        <li class="c2"><span class="c7">Item Duplication</span></li>
        <li class="c2"><span class="c7">Minimaps or Waypoints</span></li>
        <li class="c2"><span class="c7">Client Side Modifications (See Below)</span></li>
    </ul>
    <p class="c5"><span>Performance improving mods, such as Optifine, purely aesthetic mods, such as shaders, and the Replay mod are allowed.</span></p>
    <p class="c5"><span>Vanilla carpet and rail duplication are NOT allowed. If a game-breaking bug or glitch is discovered in game, please DM a staff member the information and avoid telling other players about it.</span></p>
    <p class="c5"><span>Use of disallowed modifications, second accounts, and macros are strictly moderated and monitored.</span></p>
    <h2 class="c4" id="h.i4wiepvggm8j"><span class="c6">Stealing</span></h2>
    <p class="c5"><span>Stealing in any shape or form is not allowed on the server. This includes exchanging items in another player&rsquo;s chests without the express permission of the items&rsquo; owner. If you have been stolen from, contact a staff member in-game, or in the discord server&rsquo;s #moderation-help channel. The staff team has tools to identify and punish the thief, and to return your stolen property. Stolen property may not be able to be restored two months past the date of the incident.</span></p>
    <h2 class="c4" id="h.wtyc7zs5bco9"><span class="c6">Griefing</span></h2>
    <p class="c5"><span>Griefing in any shape or form is not allowed on the server. Griefing is the intentional destruction of another&rsquo;s builds, property, or land. Report incidents to a staff member in-game, or in the discord server&rsquo;s #moderation-help channel. The staff team has tools to identify the culprit, and restore your property to an pre-griefed condition. As with thievery, property may not be able to be restored two months past the date of the incident. Non-Consensual PvP is also considered griefing and will be treated as such.</span></p>
    <h2 class="c4" id="h.78kzve1gwmmw"><span class="c6">Respect Others&rsquo; Builds</span></h2>
    <p class="c5"><span class="c1">Be respectful when building near other players. Do not build such that you are crowding another&rsquo;s build, covering it, or taking away from the build&rsquo;s general appearance. Typically, buildings in high player-density regions, such as towns, are expected to smaller, and buildings far away from others are allowed to be larger. This rule is much more subjective, and final ruling on individual cases will be decided by staff members. </span></p>
    <p class="c5"><span>In addition, land on the server can be claimed by labeling it clearly with signs, borders, or other markers. If two players claim the same piece of land, the first claim will be upheld as the valid one. Building in other&rsquo;s land may result in you being asked to remove your build, and if you do not, the other player or staff may forcibly remove it for you. Land claims may expire if the player has not logged onto the server, or used the land for 3 months, and another player wishes to claim it.</span></p>
    <h2 class="c4" id="h.nbrka85sq57o"><span class="c6">Spam</span></h2>
    <p class="c5"><span class="c18">These and all chat rules apply to the Gamemode 4 Server, the Official Discord, and the wiki. </span><span>Spam of any kind is not permitted. Consecutively sending repeated or similar messages, and using all CAPITAL letters may be classified as spam by staff and punished accordingly.</span></p>
    <h2 class="c4" id="h.pksmivfotegs"><span class="c6">Impersonation</span></h2>
    <p class="c5"><span class="c3">Impersonating staff is forbidden. Helping other players is allowed and encouraged, but you may not claim to be a staff member, nor threaten punishments to other players. </span></p>
    <h2 class="c4" id="h.ehvr90dqkelj"><span class="c6">Account Responsibility</span></h2>
    <p class="c5"><span>You are responsible for your account, and all actions taken by that account. Security breaches made by family members, friends, or strangers are not valid excuses for any rules broken during the breach. Rule breaking will result in the responsible account being disciplined.</span></p>
    <h2 class="c4" id="h.a6qqvg9pbui8"><span class="c6">Hate Speech</span></h2>
    <p class="c5"><span class="c18">These and all chat rules apply to the Gamemode 4 Server, the Official Discord, and the wiki. </span><span>Hate Speech, and Disrespect are not tolerated. Any sexist, racist, and offensive messages or comments will be removed, and result in punishments.</span></p>
    <h2 class="c4" id="h.tyirrxtasz8"><span class="c6">Excessive Lag</span></h2>
    <p class="c5"><span class="c1">Builds or contraptions that cause excessive amounts of lag, both intentionally or unintentionally, may be removed or modified by staff to cause less lag. Large collections of mobs or laggy redstone circuits are common examples of this. If a build is unintentionally causing extreme lag and needs to be removed, the staff team will contact the owners and work out a solution on a case-by-case basis.</span></p>
    <h2 class="c4" id="h.gmjwdn7065vr"><span class="c6">Personal Privacy</span></h2>
    <p class="c5"><span class="c18">These and all chat rules apply to the Gamemode 4 Server, the Official Discord, and the wiki.</span></p>
    <p class="c5"><span>Personal privacy is very important on the internet, so please try your best keep your real-life identity protected. In the event that you learn personal information about another player, such as full name or address, please keep it to yourself, and if necessary, bring the source of the information to the attention of the person it belongs to. Sharing other player&rsquo;s personal information is a punishable offence.</span></p>
    <h2 class="c4" id="h.h57zrshfu0yo"><span class="c12 c8">Punishments</span></h2>
    <p class="c5"><span class="c1">Punishments are primarily given out on a warning system. Your first warning is a verbal warning. Your second warning, is a 1 day temporary ban. Your third warning is a 7 day temporary ban. Your fourth and final warning is a permanent ban from the server. Major incidents or infractions of the rules may be exempt from this warning system and will be dealt with individually. All moderation decisions are final, and arguing with any punishment may result in an additional punishment.</span></p>
    <h2 class="c4" id="h.ky5tcpwslotu"><span class="c8 c12">Staff Members</span></h2>
    <p class="c5"><span>The staff team consists of players hand-picked by the Admins of the server. There is no way to &ldquo;apply&rdquo; for staff. Decisions made by staff are final. Staff members can be recognized in the server by Prefixes before their names, and in discord by their roles.</span></p>
    <p class="c5"><span class="c20 c10 c11">Non-Staff</span></p>
    <p class="c5"><span class="c10">- </span><span class="c3">Players will have a gray name</span></p>
    <p class="c5"><span class="c3">- Patrons will have an golden name</span></p>
    <p class="c5"><span class="c10 c11 c20">Staff</span></p>
    <p class="c5"><span class="c3">- Moderators will have a red M prefix before their name</span></p>
    <p class="c5"><span class="c3">- Admins will have a red A prefix before their aqua colored name</span></p>
    <p class="c5"><span class="c3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>
    <h2 class="c4" id="h.vc450ufhwa0n"><span class="c8">Discord Server</span></h2>
    <p class="c5"><span class="c18 c22"><a class="c16" href="https://gm4.co/discord">https://gm4.co/discord</a></span></p>
    <p class="c5"><span class="c3">The Gamemode 4 Community has an official Discord server. All chat rules on the server apply to the Discord server. Other Discords related to Gamemode 4 are allowed, but not moderated, nor supported by the staff team. Please use the text channels for their intended purposes. #moderation-help is strictly for contacting staff. If an issue needs to be brought to the attention of the staff team, you may use the ping-able roles @staff, @mod, @sysadmin, or @admin to alert the corresponding groups. Be reasonable in your use of these tags. An @admin does not need to know when you have been stolen from, and if the server is down a @mod cannot help you.</span></p>
    <p class="c5"><span class="c3">Try and avoid posting download links in the discord, in case the link is malicious. Instead, DM the interested people.</span></p>
    <p class="c5"><span class="c3">Please do not post NSFW content on our Discord or Minecraft servers.</span></p>
</div>
<br><br><br><br>
</body>
</html>
