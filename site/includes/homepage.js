/*
================
contributors:
  Sparks
================
JS for the module browse page
*/

var module_categories = {};

window.onload = function(){
  console.log("loaded");
  if (window.matchMedia != "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $("body").removeClass("light");
    $("body").addClass("dark");
  }
  loadCategories();
}

function loadCategories(){
  $.ajax({url:"modules/module_categories.json"}).done(function(data){
    module_categories = data.module_categories;
    if(module_categories != undefined){
      console.log("loading " + module_categories.length + " categories");
      for(i=0;i<module_categories.length;i++){
        cards = "";
        cardarray = module_categories[i].modules;
        for(j=0;j<cardarray.length;j++){
          cards += '<div class="moduleCard noselect" data-module_id="'+cardarray[j]+'"><img src="modules/media/' + cardarray[j] + '.png" onerror="image_error(this)"><p class="cardName">' + cardarray[j].replace(/_/g, " ") + '</p></div>';
        }
        $("#categoriesContainer").append('<h2>' + module_categories[i].title + '</h2><div class="categoryBar">' + cards + '</div>');
      }
      //add listeners
    $(".moduleCard").on("click",function(){
      console.log($(this).parent());
      $("#preview").remove();
      $(this).parent().after('<div id="preview"><p>'+$(this).attr("data-module_id")+'</p></div>');
      loadPreview($(this).attr("data-module_id"));
    });
    }
    else{
      alert("Something went wrong and modules couldn't be loaded");
    }
  });
}

function theme(mode){
  if(mode=="light"){
    $("body").removeClass("dark");
    $("body").addClass("light");
  }
  if(mode=="dark"){
    $("body").removeClass("light");
    $("body").addClass("dark");
  }
}

function loadPreview(module_id){
  $.ajax({url:"includes/getmoduleinfo.php?module_id="+module_id}).done(function(data){
    data = JSON.parse(data);
    console.log(data);
  });
}

function image_error(caller){
  $(caller).prop("src","../modules/media/placeholder.png");
}
