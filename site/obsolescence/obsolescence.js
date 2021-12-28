$(document).ready(function onload() {
  loadCategories("module_categories.json");
  resizeVideo();
})

function resizeVideo(){
  $("iframe").each(function(){
    $(this).css("height",((parseInt($(this).css("width"))*9)/16) + "px");
  });
}
