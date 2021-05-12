/*
JS for the module browse page
*/

const LATEST_VERSION = "1.16";

let module_categories = {};
let allModules = "unloaded";
let slides = [];
let slideshowInterval = 0;
let trackTransition = 0;

//preferences
let siteTheme = "light";
let dataprompted = false;
let userdata = JSON.parse(window.localStorage.getItem("user"));
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
      slide = `<div class="trackItem ${slides[i].text.position || "bottom-left"}" style="background-image:url(images/slideshow/${slides[i].background_image});">`;
      if (slides[i].text) {
        slide += `<h2>${slides[i].text.header}</h2><p>${slides[i].text.paragraph}</p>`;
      }
      slide += '</div>';
      $(".slideshow > .trackContainer").append(slide);
    }
    initTrack($(".slideshow"), 8000)
  });
  
  if(userdata != null && userdata.theme != undefined && userdata.theme == "dark" && siteTheme == "light") theme("dark");
  if(userdata != null && userdata.theme != undefined && userdata.theme == "light" && siteTheme == "dark") theme("light");
  $("#discordIFrame").attr("src","https://discord.com/widget?id=151141188961828864&theme=" + siteTheme);
  loadCategories();
  $.ajax({url:"/modules/moduleListAToZ.php"}).done(function(data){
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
        versionclass += "version_" + allModules[moduleName].versions[j].replaceAll(".","_") + " ";
      }
      $("#allModulesContainer").append('<a href="https://www.gm4.co/modules/'+allModules[moduleName].id.replaceAll("_","-")+'"><div class="a-zCard noselect '+versionclass+'"><img src="modules/media/'+allModules[moduleName].id+'/'+allModules[moduleName].id+'.svg" onerror="image_error(this)"/><span class="cardName">'+moduleName+'</span></div></a>');
    }
    versions.sort(function(a,b){return b-a});
    $("#versionSelect").empty();
    for(i=0;i<versions.length;i++){
      $("#versionSelect").append("<option value='" + versions[i] + "'>Minecraft Java " + versions[i] + "</option>");
    }
    $("#versionSelect").append("<option value='older'>Earlier Versions...</option>");
    versionView();
  });

  updateScrollbar()
}

window.onresize = resize;

function updateScrollbar() {
  const clientWidth = document.documentElement.clientWidth
  const scrollbar = Math.abs(window.screen.width - clientWidth) <= 1 ? 0 : window.innerWidth - clientWidth;
  document.documentElement.style.setProperty("--scrollbar-width", scrollbar + "px");
}

function resize(){
  updateScrollbar();

  $('.track').each(function() {
    let interval = parseInt(this.style.getPropertyValue("--track-interval"))
    if (isNaN(interval)) scrollTrack($(this), 0)
  })
}

function scrollTrack(el, dir, loop, dist) {
  const total = el.find(".trackItem").length;
  const style = getComputedStyle(el.get(0));
  const width = parseInt(style.getPropertyValue("--item-width"));
  const visible = parseInt(style.getPropertyValue("--visible-items"));
  let offset = parseInt(style.getPropertyValue("--offset"));
  if (isNaN(offset)) offset = 0;
  
  const endItem = total - 1 > visible;
  const target = offset + dir * Math.max(1, visible - 1);
  const maxOffset = total - visible - (endItem ? 0 : 1);
  if (loop) {
    offset = (target % total + total) % total;
  } else {
    offset = Math.max(0, Math.min(maxOffset, target));
  }

  if (dir !== 0) el.addClass("transitioning");
  el.get(0).style.setProperty("--offset", `${offset}`);
  if (dir !== 0) {
    clearTimeout(trackTransition);
    trackTransition = setTimeout(function(){
      $(".track").removeClass("transitioning");
    }, 1000);
  }

  if (!loop) {
    el.find(".trackButtonLeft").toggleClass("hidden", offset <= 0);
    el.find(".trackButtonRight").toggleClass("hidden", offset >= maxOffset);
    el.find(".trackEndItem").toggleClass("hidden", !endItem);
  }
}


function initTrack(el, loop) {
  let loopInterval;
  function startLoop() {
    if (!loop) return;
    if (loopInterval) clearInterval(loopInterval);
    loopInterval = setInterval(function() {
      scrollTrack(el, 1, loop);
    }, loop);
  }
  startLoop();

  scrollTrack(el, 0, loop);
  el.find(".trackButtonLeft").on("click",function(){
    scrollTrack(el, -1, loop);
    startLoop();
  });
  el.find(".trackButtonRight").on("click",function(){
    scrollTrack(el, 1, loop);
    startLoop();
  });

  function clientX(e) {
    return (e.changedTouches ? e.changedTouches[0] : e).clientX;
  }

  let x0 = null;
  function start(e) {
    x0 = clientX(e);
    el.removeClass("transitioning");
    if (loopInterval) clearInterval(loopInterval);
  }

  function move(e) {
    if (x0 !== null) {
      const partial = Math.round(x0 - clientX(e));
      el.get(0).style.setProperty("--partial-offset", `${partial}px`);
    }
  }

  function end(e) {
    if(x0 !== null) {
      let dx = x0 - clientX(e);
      scrollTrack(el, Math.sign(dx), loop, dx);
      x0 = null;
    }
    startLoop();
    el.get(0).style.setProperty('--partial-offset', '0px');
  }

  el.get(0).addEventListener("touchstart", start, false);
  el.get(0).addEventListener("touchmove", move, false);
  el.get(0).addEventListener("touchend", end, false);
}

function loadCategories(){
  $.ajax({url:"modules/module_categories.json"}).done(function(data){
    module_categories = data.module_categories;
    if(module_categories != undefined){
      for(i=0;i<module_categories.length;i++){
        $("#categoriesContainer").append('<h2 class="categoryTitle">' + module_categories[i].title + ' <span class="categoryLengthText">(0)</span></h2><div class="categoryBar track"><div class="trackContainer"></div><div class="trackButton trackButtonLeft hidden"></div><div class="trackButton trackButtonRight"></div></div>');
        cardarray = module_categories[i].modules;
        if(cardarray != undefined && cardarray.length>0){
          populateCategory(i,module_categories[i]);
          initTrack($('#categoriesContainer .categoryBar').eq(i), 0)
        }
        else{
          if(module_categories[i].populate_from != undefined){
            $.ajax({url:module_categories[i].populate_from,pos:i,limit:module_categories[i].limit}).done(function(data){
              category = {};
              category.modules = JSON.parse(data);
              if(this.limit!=undefined && this.limit >0){
                category.modules.length=this.limit;
              }
              populateCategory(this.pos, category);
              initTrack($('#categoriesContainer .categoryBar').eq(this.pos), 0)
            });
          }
        }
      }
    }
    else{
      alert("Something went wrong and modules couldn't be loaded");
    }
  });
}

function populateCategory(pos,category){
  //populate the category once the cards are loaded.
  //in most cases this is instant but some may need to
  //load external source data first.
  const track = $("#categoriesContainer .trackContainer").eq(pos);
  cardarray = category.modules;
  if(category.order != undefined && category.order == "shuffled"){
    shuffleArray(cardarray);
  }
  cards = "";
  for(j=0;j<cardarray.length;j++){
    cards += '<div class="trackItem moduleCard noselect" data-module_id="'+cardarray[j]+'"><img src="modules/media/' + cardarray[j] + '/' + cardarray[j] + '.svg" onerror="image_error(this)"><span class="cardName">' + cardarray[j].replace(/_/g, " ") + '</span></div>';
  }
  track.html(cards);
  track.append('<div class="trackItem moduleCard trackEndItem noselect"><img src="images/enderpuff_by_qbert.png" title="End of results. Artwork by Qbert" alt="End of results"/><span class="cardName">You\'ve reached the end</span></div>');
  $(".categoryLengthText").eq(pos).html("(" + cardarray.length + ")");
  //add listeners
  track.find(".moduleCard").on("click",function(){
    if($(this).attr("data-module_id")!=undefined){
      if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $('#preview').remove();
      } else {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        loadPreview($(this).parent().parent(), $(this).attr("data-module_id"));
      }
    }      
  });
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

function loadPreview(categoryBar, module_id){
  if(!$(this).hasClass("placeholderCard")){
    $.ajax({url:"includes/getmoduleinfo.php?module_id="+module_id}).done(function(data){
      data = JSON.parse(data);
      console.log(data);
      $("#preview").remove();
      categoryBar.after('<div id="preview"></div>')
      $("#preview").append("<div id='previewLeft'></div>");
      $("#preview").append("<div id='previewRight'><h3>" + data.module_name + "</h3></div>");
      $("#previewRight").append("<p>" + data.site_description + "</p><br>");
      if(data.module_id){
        if(data.mcversion == LATEST_VERSION){
          $("#previewRight").append("<a target='download_frame' href='modules/download/"+LATEST_VERSION+"/"+data.module_id.replaceAll("_","-") +"' class='buttonLink'><span class='datapack_icon'></span> Download " + data.module_name + " for Java " + LATEST_VERSION + "</a>");
        }
        $("#previewRight").append("<br><br><a class='buttonLink' href='https://www.gm4.co/modules/" + data.module_id.replaceAll("_","-") + "'><span class='more_icon'></span> More Downloads &amp; Info</a><br><h3 class='dividingHeader'>Info Links</h3>");
      }
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
    version = "version_" + $("#versionSelect").val().replaceAll(".","_");
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
