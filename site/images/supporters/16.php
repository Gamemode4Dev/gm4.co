<?php
//DO NOT ADD WHITESPACE AT THE TOP OF THIS FILE OR THE IMAGE WILL BREAK

/* Created by Sparks 17 Jan 2024
   Updated by Misode 26 Dec 2024
Tries to contact crafatar to get a 16x16 skin. 
If it fails, it tries to load a cached image.
If there's no cached image it returns a default image. */

//replace any non-allowed characters in the request for security
$username = preg_replace("/[^a-z0-9_]/", '', strtolower($_GET["username"]));

$name_to_uuid = "https://api.mojang.com/users/profiles/minecraft/" . $username;
$uuid = null;
$response = @file_get_contents($name_to_uuid);
if ($response !== false) {
  $data = json_decode($response, true);
  if (isset($data["id"])) {
    $uuid = $data["id"];
  }
}

$image = "cache/failed_to_load.png"; //defaults to this image if everything after fails

if ($uuid) {
  $temp_file_path = "cache/temp.png";
  $remote_file = "https://mc-heads.net/avatar/" . $uuid . "/16";
  
  //try grab the image from crafatar
  if(@get_headers($remote_file)[0] != 'HTTP/1.1 404 Not Found'){
    copy($remote_file,$temp_file_path);
  
    if(@getimagesize($temp_file_path)){
      //the file is valid and was retrieved successfully
      //create a local cache of the user's head
      rename($temp_file_path,"cache/" . $username . ".png");
    }
  }
}

//load the cached image if it exists
if(file_exists("cache/" . $username . ".png")){
  $image = "cache/" . $username . ".png";
}

$fp = fopen($image, 'rb');

//display the result as an image
header("Content-Type: image/png");
header("Content-Length: " . filesize($image));
fpassthru($fp);
fclose($fp);

//clean up the temp file 
if(file_exists($temp_file_path) && is_writable($temp_file_path)){
  unlink($temp_file_path);
}
?>
