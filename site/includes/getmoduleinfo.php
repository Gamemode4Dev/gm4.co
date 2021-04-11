<?php
/*
This file looks through the local git copies for $module_id to find the most recent
and visible pack.mcmeta. It then returns the module metadata from that file.
called by the new website homepage when a module is clicked.
*/

$module_id = $_GET["module_id"];
//sanetize inputs
$exp = "/[^a-z_]/";
$module_id = preg_replace($exp,"",$module_id);
//work out the source by getting the latest version.
$versions = json_decode(file_get_contents("../modules/SOURCES.json"),true);
$mcmetafound = false;
$path = "";
//loop through versions until valid meta is found
foreach($versions as $key=>$version){
  $path = "../modules/template/templates/" . $version["local"] . "/GM4_Datapacks-". str_replace("/","-",$version["branch"]) . "/gm4_" . $module_id . "/pack.mcmeta";
  if(file_exists($path)){
    //check this version of the module isn't hidden.
    $mcmeta = file_get_contents($path);
    $json = json_decode($mcmeta,true);
    if($json["hidden"] != true){
      $mcmetafound = true;
      $json["mcversion"] = $key;
      if(file_exists("../modules/media/" . $module_id . "/site_meta.json")){
        $promo = file_get_contents("../modules/media/" . $module_id . "/site_meta.json");
        $promo = json_decode($promo,true);
        $json["promo"] = $promo;
      }
      $mcmeta = json_encode($json);
      break;
    }

  }
}
if($mcmetafound){
  echo($mcmeta);
}
else{
  echo("Can't find module");
}

?>
