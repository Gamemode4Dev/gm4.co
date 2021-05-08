/*
JS for the module browse page
*/

const LATEST_VERSION = "1.16";

var module_categories = {};
var cardWidth = 237;
var barHeight = 250;
var windowWidth = 0;
var visibleCards = 0;
var allModules = "unloaded";

//preferences
var siteTheme = "light";
var dataprompted = false;
var userdata = JSON.parse(window.localStorage.getItem("user"));
if(userdata != null){
  dataprompted = true;
}

window.onload = function(){
  if (window.matchMedia != "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $("body").removeClass("light");
    $("body").addClass("dark");
    siteTheme = "dark";
  }
  $.ajax({url:"images/slideshow/slides.json"}).done(function(data){
    slides = data.slides;
    for(i=0;i<slides.length;i++){
      slide = '<div class="slideshowSlide" style="background-image:url(images/slideshow/'+ slides[i]["background-image"] +');background-repeat:no-repeat;background-position:center;background-size:cover"><div class="slideshowText" style="';
      if(slides[i].text.position == "top-left") slide += "top:0px;left:25px;text-align:left;";
      if(slides[i].text.position == "bottom-left") slide += "bottom:0px;left:25px;text-align:left;";
      if(slides[i].text.position == "bottom-right") slide += "bottom:0px;right:25px;text-align:right;";
      if(slides[i].text.position == "top-right") slide += "top:0px;right:25px;text-align:right;";
      
      slide +='"><h2>' + slides[i].text.header + '</h2><p>' + slides[i].text.paragraph + '</p>';
      slide += '</div></div>';
      $("#slideshowSubContainer").append(slide);
    }
    if(slides.length > 1){
      setInterval(function(){
        slideshow("right");
      },8000);
    }
  });
  
  if(userdata != null && userdata.theme != undefined && userdata.theme == "dark" && siteTheme == "light") theme("dark");
  if(userdata != null && userdata.theme != undefined && userdata.theme == "light" && siteTheme == "dark") theme("light");
  $("#discordIFrame").attr("src","https://discord.com/widget?id=151141188961828864&theme=" + siteTheme);
  loadCategories();
  $.ajax({url:"../modules/moduleListAToZ.php"}).done(function(data){
    allModules = JSON.parse(data);
    allModuleNamesAlphabetized = [];
    for(element in allModules){
      allModuleNamesAlphabetized.push(element);
    }
    allModuleNamesAlphabetized.sort();
    versions = [];
    for(i=0;i<allModuleNamesAlphabetized.length;i++){
      versionclass = "";
      moduleName = allModuleNamesAlphabetized[i];
      for(j=0;j<allModules[moduleName].versions.length;j++){
        if(versions.indexOf(allModules[moduleName].versions[j])==-1){
          versions.push(allModules[moduleName].versions[j]);
        }
        versionclass += "version_" + allModules[moduleName].versions[j].replace(".","_") + " ";
      }
      $("#allModulesContainer").append('<a href="https://www.gm4.co/modules/'+allModules[moduleName].id.replace("_","-")+'"><div class="a-zCard noselect '+versionclass+'"><img src="modules/media/'+allModules[moduleName].id+'/'+allModules[moduleName].id+'.svg" onerror="image_error(this)"/><p class="cardName">'+moduleName+'</p></div></a>');
    }
    versions.sort(function(a,b){return b-a});
    $("#versionSelect").empty();
    for(i=0;i<versions.length;i++){
      $("#versionSelect").append("<option value='" + versions[i] + "'>Minecraft Java " + versions[i] + "</option>");
    }
    $("#versionSelect").append("<option value='older'>Earlier Versions...</option>");
    versionView();
  });
}

$(window).resize(function(){
  snug_fit_cards();
});

function snug_fit_cards(){
  windowWidth = $(window).width();
  visibleCards = Math.floor(windowWidth / cardWidth)-1;
  difference = windowWidth - (visibleCards * cardWidth);
  $(".moduleCard").width(cardWidth+(difference/visibleCards)-8);
  $(".placeholderCard").width(cardWidth+(difference/visibleCards)-8);
  $(".categoryBar").height(barHeight + (difference/visibleCards)-8);
  $(".moduleCard img").width(150 + (difference/visibleCards)-8);
  $(".moduleCard img").height(150 + (difference/visibleCards)-8);
  $(".moduleCard img").css("top","calc(50% - " + (((150 + (difference/visibleCards)-8)/2) + 20) + "px");
  $(".categoryBar").each(function(index){
    cardCount = $(this).find(".moduleCard").length;
    if(cardCount <= visibleCards){
      $(this).find(".browseButton").hide();
      $(this).find(".placeholderCard").remove();
    }
    else{
      $(this).find(".browseButton").show();
    }
  });
  
  //a-z list cards
  $("#allModulesContainer").css("padding-left",(windowWidth%243)/2 + "px");
}

$(window).resize(function(){
  snug_fit_cards();
});

function snug_fit_cards(){
  windowWidth = $(window).width();
  visibleCards = Math.floor(windowWidth / cardWidth)-1;
  difference = windowWidth - (visibleCards * cardWidth);
  $(".moduleCard").width(cardWidth+(difference/visibleCards)-8);
  $(".placeholderCard").width(cardWidth+(difference/visibleCards)-8);
  $(".categoryBar").height(barHeight + (difference/visibleCards)-8);
  $(".moduleCard img").width(150 + (difference/visibleCards)-8);
  $(".moduleCard img").height(150 + (difference/visibleCards)-8);
  $(".moduleCard img").css("top","calc(50% - " + (((150 + (difference/visibleCards)-8)/2) + 20) + "px");
  $(".categoryBar").each(function(index){
    cardCount = $(this).find(".moduleCard").length;
    if(cardCount <= visibleCards){
      $(this).find(".browseButton").hide();
      $(this).find(".placeholderCard").remove();
    }
    else{
      $(this).find(".browseButton").show();
    }
  });
}

function loadCategories(){
  $.ajax({url:"modules/module_categories.json"}).done(function(data){
    module_categories = data.module_categories;
    if(module_categories != undefined){
      console.log("loading " + module_categories.length + " categories");
      for(i=0;i<module_categories.length;i++){
        cards = "";
        cardarray = module_categories[i].modules;
        if(module_categories[i].order != undefined && module_categories[i].order == "shuffled"){
          shuffleArray(cardarray);
        }
        for(j=0;j<cardarray.length;j++){
          cards += '<div class="moduleCard noselect" data-module_id="'+cardarray[j]+'"><img src="modules/media/' + cardarray[j] + '/' + cardarray[j] + '.svg" onerror="image_error(this)"><p class="cardName">' + cardarray[j].replace(/_/g, " ") + '</p></div>';
        }
        $("#categoriesContainer").append('<h2>' + module_categories[i].title + ' <span style="opacity:0.5">(' + cardarray.length + ')</span></h2><div class="categoryBar"><div class="cardContainer">' + cards + '</div></div>');
      }
      //add listeners
      $(".moduleCard").on("click",function(){
        if($(this).attr("data-module_id")!=undefined){
          $("#preview").remove();
          $(this).parent().parent().after('<div id="preview"></div>');
          loadPreview($(this).attr("data-module_id"));
        }      
      });
      
      $(".categoryBar").append('<div class="browseButton browseButtonLeft"></div><div class="browseButton browseButtonRight"></div>');
      snug_fit_cards();

      $(".browseButtonRight").on("click",function(){
        if($(this).parent().find(".cardContainer").find(".placeholderCard").length == 0){
          $(this).parent().find(".cardContainer").append('<div class="placeholderCard noselect moduleCard"><img src="images/enderpuff_by_qbert.png"  title="End of results. Artwork by Qbert" alt="End of results"/><p class="cardName">You\'ve reached the end</p></div>');
          snug_fit_cards();
        }
        $(this).parent().find(".cardContainer").animate({"right":((cardWidth+(difference/visibleCards))*(visibleCards-1))+"px"},400,"swing",function(){
          for(i=0;i<Math.max(visibleCards-1,1);i++){
            $(this).append($(this).find(".moduleCard:first"));
          }
          $(this).css("right","0px");
        });
        
      });
      $(".browseButtonLeft").on("click",function(){
        if($(this).parent().find(".cardContainer").find(".placeholderCard").length == 0){
          $(this).parent().find(".cardContainer").append('<div class="placeholderCard noselect moduleCard"><img src="images/enderpuff_by_qbert.png" title="End of results. Artwork by Qbert" alt="End of results"/><p class="cardName">You\'ve reached the end</p></div>');
          snug_fit_cards();
        }
        $(this).parent().find(".cardContainer").css("right",((cardWidth+(difference/visibleCards))*(visibleCards-1))+"px");
        for(i=0;i<Math.max(visibleCards-1,1);i++){
          $(this).parent().find(".cardContainer").prepend($(this).parent().find(".cardContainer").find(".moduleCard:last"));
        }
        $(this).parent().find(".cardContainer").animate({"right":"0px"},400,"swing",function(){
          
        });
        
      });
    }
    else{
      alert("Something went wrong and modules couldn't be loaded");
    }
  });
}

function slideshow(dir = "right"){
  
  if(dir == "right"){
    $("#slideshowSubContainer").find(".slideshowSlide").animate({"right":windowWidth+"px"},800,"swing",function(){
      $("#slideshowSubContainer").find(".slideshowSlide").css("right","0px");
    } );
    setTimeout(function(){$("#slideshowSubContainer").append($("#slideshowSubContainer").find(".slideshowSlide:first"));},810);    
  }
  if(dir == "left"){
    console.log("sliding left");
    $("#slideshowSubContainer").find(".slideshowSlide").css("right",windowWidth+"px");
    $("#slideshowSubContainer").prepend($("#slideshowSubContainer").find(".slideshowSlide:last"));
    $(".slideshowSlide").animate({"right":"0px"},800,"swing",function(){
      
    });
  }
  
}

function toggleTheme(){
  if(siteTheme=="light"){
    theme("dark");
  }
  else{
    theme("light");
  }
  if(!dataprompted){
    $("#dataRequestBox").show();
  }
  if(userdata!=null){
    userdata.theme = siteTheme;
    savePreferences();
  }
  $("#discordIFrame").attr("src","https://discord.com/widget?id=151141188961828864&theme=" + siteTheme);
}
function theme(mode){
  if(mode=="light"){
    $("body").removeClass("dark");
    $("body").addClass("light");
    siteTheme = "light";
  }
  if(mode=="dark"){
    $("body").removeClass("light");
    $("body").addClass("dark");
    siteTheme = "dark";
  }
}

function loadPreview(module_id){
  if(!$(this).hasClass("placeholderCard")){
    $.ajax({url:"includes/getmoduleinfo.php?module_id="+module_id}).done(function(data){
      data = JSON.parse(data);
      console.log(data);
      $("#preview").append("<div id='previewLeft'></div>");
      $("#preview").append("<div id='previewRight'><h3>" + data.module_name + "</h3></div>");
      $("#previewRight").append("<p>" + data.site_description + "</p><br>");
      if(data.mcversion == LATEST_VERSION){
        $("#previewRight").append("<a target='download_frame' href='modules/download/"+LATEST_VERSION+"/"+data.module_id.replace("_","-") +"' class='buttonLink'><span class='datapack_icon'></span> Download " + data.module_name + " for Java " + LATEST_VERSION + "</a>");
      }
      $("#previewRight").append("<br><br><a class='buttonLink' href='https://www.gm4.co/modules/" + data.module_id.replace("_","-") + "'><span class='more_icon'></span> More Downloads &amp; Info</a><br><h3 class='dividingHeader'>Info Links</h3>");
      if(data.wiki_link != undefined && data.wiki_link != ""){
        $("#previewRight").append("<p><a href='" + data.wiki_link + "' target='_BLANK'>Read about this on the Gamemode 4 Wiki</a></p>");
      }
      //load images from site meta
      if(data.promo != undefined && data.promo != null && data.promo != "null" && data.promo != ""){
        load_site_meta(data);
      }
      else{
        $("#previewLeft").append("<img width='500px' height='500px' src='modules/media/" + module_id + "/" + module_id + ".svg' />");
      }
    });
  }
}

function versionView(){
  if($("#versionSelect").val() == "older"){
    window.location="https://gm4.co/old-modules/";
  }
  else{
    version = "version_" + $("#versionSelect").val().replace(".","_");
    $("#allModulesContainer").find(".a-zCard").hide();
    $("#allModulesContainer").find("." + version).show();
  }
}

function textSearch(){
  searchString = $("#textSearch").val().toLowerCase();
  versionView();
  $("#allModulesContainer").find(".cardName").each(function(){
    if($(this).html().toLowerCase().indexOf(searchString) == -1){
      $(this).parent().hide();
    }
  });
}

function image_error(caller){
  $(caller).prop("src","../modules/media/placeholder.png");
}

function load_site_meta(moduleInfo){
  console.log("loading site meta for " + moduleInfo.module_id); 
  data = moduleInfo.promo;
  if(data.promo_images == undefined || data.promo_images.length==0){
    $("#previewLeft").append("<img width='500px' height='500px' src='modules/media/" + module_id + "/" + module_id + ".svg' />");
  }
  if(data.promo_images != undefined && data.promo_images.length==1){
    if(data.promo_images[0].type=="image"){
      $("#previewLeft").css("background-image","url(modules/media/" + moduleInfo.module_id + "/" + data.promo_images[0].image + ")");
      $("#previewLeft").prop("title",data.promo_images[0].alt + " (image credit: " + data.promo_images[0].credit + ")");
    }
    if(data.promo_images[0].type=="video"){
      $("#previewLeft").append("<a href='" + data.promo_images[i].image + "'><div class='promo_thumbnail' style='background-image:url(modules/media/" + module_id + "/" + module_id + ".svg)' title='" + data.promo_images[i].alt + "'><img style='width:125px;position:absolute;left:62px;top:62px;' src='images/play.svg' title='" + data.promo_images[i].alt + "'/></div></a>");
    }
  }
  if(data.promo_images.length == 2){
    $("#previewLeft").css("width","250px");
  }
  if(data.promo_images.length > 1){
    tileTotal = data.promo_images.length;
    
    if(tileTotal > 4) tileTotal = 4;
    for(i=0;i<tileTotal;i++){
      if(data.promo_images[i].type=="image"){
        $("#previewLeft").append("<div class='promo_thumbnail' title='" + data.promo_images[i].alt + " (image credit: " + data.promo_images[i].credit + ")' style='background-image:url(modules/media/" + moduleInfo.module_id + "/" + data.promo_images[i].image + ")'></div>");
      }
      if(data.promo_images[i].type=="video"){
        $("#previewLeft").append("<a href='" + data.promo_images[i].link + "'><div class='promo_thumbnail' style='background-image:url(modules/media/" + moduleInfo.module_id + "/" + data.promo_images[i].image + ")' title='" + data.promo_images[i].alt + "'><img style='width:125px;position:absolute;left:62px;top:62px;' src='images/play.svg' title='" + data.promo_images[i].alt + "'/></div></a>");
      }
    }
  }
}

function switchView(view, caller, scroll = false){
  $(".moduleNavButton").removeClass("moduleNavButtonSelected");
  $(caller).addClass("moduleNavButtonSelected");
  if(view == "Browse"){
    $("#allModulesContainer").hide();
    $("#categoriesContainer").show();
  }
  if(view == "All Modules"){
    $("#allModulesContainer").show();
    $("#categoriesContainer").hide();
  }
  if(scroll) caller.scrollIntoView();
}

function storeUserPreferences(){
  //create a localstorage profile for the user if they accept it and it doesn't exist yet.
  if(userdata == null){
    console.log("creating new preferences profile in localstorage (cookie)");
    userdata = {
      theme:siteTheme
    };
    window.localStorage.setItem("user",JSON.stringify(userdata));
  }
  $("#dataRequestBox").css("background-color","#4bc759").fadeOut();
}

function savePreferences(){
  if(userdata != null){
    //only save if the user has userdata and has therefore given permission
    window.localStorage.setItem("user",JSON.stringify(userdata));
  }
}

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}
