/*
JS for the module browse page
*/

$(document).ready(function onload() {
  $.ajax({url:"images/slideshow/slides.json"}).done(function(data) {
    for (const slide of data.slides) {
      $(".slideshow > .trackContainer").append(`<${slide.link ? `a href=${slide.link}` : `div`} data-bg="images/slideshow/${slide.background_image}" class="lazyload trackItem ${slide.text.position || "bottom-left"} ${slide.darken ? "darken" : ""}" style="background-image:url(images/slideshow/${slide.low_resolution_background_image});">${slide.text ? `<h2>${slide.text.header}</h2><p>${slide.text.paragraph}</p>` : ''}${slide.link ? `</a>` : `</div>`}`)
    }
    initTrack($(".slideshow"), 8000);
    //scale up lazyloaded low res background images (such as the slideshow)
    document.addEventListener('lazybeforeunveil', function(e){
      var bg = e.target.getAttribute('data-bg');
      if(bg){
          e.target.style.backgroundImage = 'url(' + bg + ')';
      }
    });
  });
  loadCategories("modules/module_categories.json");
  $.ajax({url:"https://gm4.co/modules/moduleListAToZ.php"}).done(function(data) {
    const allModules = JSON.parse(data);
    const allModuleNamesAlphabetized = Object.keys(allModules)
      .map(name => ({ name, ...allModules[name] }))
      .sort((a, b) => a.name.localeCompare(b.name))
    const versions = new Set();
    for (const module of allModuleNamesAlphabetized) {
      versionclass = "";
      for (const version of module.versions) {
        versions.add(version);
        versionclass += "version_" + version.replaceAll(".","_") + " ";
      }
      const latestVersion = module.versions.sort((a, b) => b - a)[0]
      $("#modules").append(`<a href="https://gm4.co/modules/${module.id.replaceAll("_","-")}"><div class="moduleCard noselect ${versionclass}"><img data-src="${get_module_icon(module.id, latestVersion)}" onerror="image_error(this)" alt="Data pack icon" class="lazyload"/><span class="cardName">${module.name}</span></div></a>`);
    }
    $("#versionSelect").empty();
    for (const version of [...versions].sort((a, b) => b - a)) {
      $("#versionSelect").append(`<option value="${version}">Minecraft Java ${version}</option>`);
    }
    $("#versionSelect").append("<option value='older'>Earlier Versions...</option>");
    versionView();
  });


  console.log("GM4/Github sync. Reading git repo...")
  $.ajax({
    url:"modules/createLocalGitCopy.php",
    success: function(data){
      console.log("Response: " + data);
    },
    error: function(){
      console.log("Failed to talk to Gamemode 4...");
    }
  });
})

window.addEventListener('popstate', function reload() {
  $(".moduleNavButton").removeClass("active");
  $(`.moduleNavButton[href="${location.hash}"]`).addClass("active");
  $(".moduleView").removeClass("active");
  $(location.hash).addClass("active");
})


function versionView(){
  if($("#versionSelect").val() == "older"){
    window.location="https://gm4.co/old-modules/";
  }
  else{
    version = "version_" + $("#versionSelect").val().replaceAll(".","_");
    $("#modules").find(".moduleCard").hide();
    $("#modules").find("." + version).show();
  }
}

function textSearch(){
  searchString = $("#textSearch").val().toLowerCase();
  versionView();
  $("#modules").find(".cardName").each(function(){
    if($(this).html().toLowerCase().indexOf(searchString) == -1){
      $(this).parent().hide();
    }
  });
}
