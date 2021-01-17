<?php
$module_id = $_GET["module_id"];
$exp = "/[^a-z_]/";
$module_id = preg_replace($exp,"",$module_id);
//work out the source by getting the latest version.
$versions = json_decode(file_get_contents("../modules/SOURCES.json"),true);
$mcmetafound = false;
$path = "";
foreach($versions as $version){
  $path = "../modules/template/templates/" . $version["local"] . "/GM4_Datapacks-". str_replace("/","-",$version["branch"]) . "/gm4_" . $module_id . "/pack.mcmeta";
  if(file_exists($path)){
    $mcmeta = file_get_contents($path);
    $json = json_decode($mcmeta,true);
    if($json["hidden"] == true){
    }
    else{
      $mcmetafound = true;
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