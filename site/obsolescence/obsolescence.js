const LATEST_VERSION = "1.17";

function headerSaysWindowLoaded(){
  //initTrack($(".slideshow"), 8000);
  loadCategories();
  resizeVideo();
}

updateScrollbar();

window.onresize = resize;

window.onpopstate = reload;

function reload() {
  $(".moduleNavButton").removeClass("active");
  $(`.moduleNavButton[href="${location.hash}"]`).addClass("active");
  $(".moduleView").removeClass("active");
  $(location.hash).addClass("active");
}

function updateScrollbar() {
  const clientWidth = document.documentElement.clientWidth
  const scrollbar = Math.abs(window.screen.width - clientWidth) <= 1 ? 0 : window.innerWidth - clientWidth;
  document.documentElement.style.setProperty("--scrollbar-width", scrollbar + "px");
}

function resize(){
  updateScrollbar();
  resizeVideo();
  $(".track.resizable").each(function() {
    scrollTrack($(this), 0);
  });
}

function resizeVideo(){
  $("iframe").each(function(){
    $(this).css("height",((parseInt($(this).css("width"))*9)/16) + "px");
  });
}
function scrollTrack(el, dir, loop, partial) {
  const total = el.find(".trackItem").length;
  const style = getComputedStyle(el.get(0));
  const visible = parseInt(style.getPropertyValue("--visible-items"));
  let offset = parseInt(style.getPropertyValue("--offset"));

  let target;
  if (partial) {
    const width = el.find(".trackItem").get(0).clientWidth;
    target = offset + Math.round(partial / width);
  } else {
    target = offset + dir * Math.max(1, partial ? 1 : visible - 1);
  }

  if (loop) {
    offset = (target % total + total) % total;
  } else {
    const endItem = total - 1 > visible;
    const maxOffset = total - visible - (endItem ? 0 : 1);
    offset = Math.max(0, Math.min(maxOffset, target));

    el.find(".trackButtonLeft").toggleClass("hidden", offset <= 0);
    el.find(".trackButtonRight").toggleClass("hidden", offset >= maxOffset);
    el.find(".trackEndItem").toggleClass("hidden", !endItem);
  }

  if (dir !== 0) el.addClass("transitioning");
  el.get(0).style.setProperty("--offset", `${offset}`);
  let trackTransition;
  if (dir !== 0) {
    clearTimeout(trackTransition);
    trackTransition = setTimeout(function(){
      el.removeClass("transitioning");
    }, 1000);
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
  el.find(".trackButtonLeft").each(function(){
    this.addEventListener("click",function(){
      scrollTrack(el, -1, loop);
      startLoop();
    },{passive:true});
  });
  el.find(".trackButtonRight").each(function(){
    this.addEventListener("click",function(){
      scrollTrack(el, 1, loop);
      startLoop();
    },{passive:true});
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
    el.get(0).style.removeProperty("--partial-offset");
  }

  el.get(0).addEventListener("touchstart", start, {capture:false,passive:true});
  el.get(0).addEventListener("touchmove", move, {capture:false,passive:true});
  el.get(0).addEventListener("touchend", end, {capture:false,passive:true});
  el.get(0).addEventListener("touchcancel", end, {capture:false,passive:true});
}

function loadCategories(){
  $.ajax({url:"module_categories.json"}).done(function(data) {
    console.log("loaded categories");
    let pos = 0
    for (const category of data.module_categories || []) {
      $("#browse").append(`<h2 class="categoryTitle">${category.title} <span class="categoryLengthText">(0)</span></h2><div class="categoryBar track resizable"><div class="trackContainer"></div><div class="trackButton trackButtonLeft"></div><div class="trackButton trackButtonRight"></div></div>`);
      if (category.populate_from) {
        $.ajax({url: category.populate_from, pos, limit: category.limit }).done(function(data) {
          const modules = JSON.parse(data).slice(0, this.limit)
          populateCategory(this.pos, modules);
          initTrack($('#browse .categoryBar').eq(this.pos), 0)
        });
      } else {
        if(category.order === "shuffled"){
          category.modules = shuffleArray(category.modules);
        } else if (typeof category.order == "object" && category.order.mode === "shuffled") {
          category.modules = shuffleArray(category.modules, category.order.from);
        }
        populateCategory(pos, category.modules);
        initTrack($('#browse .categoryBar').eq(pos), 0)
      }
      pos += 1
    }
  });
}

function populateCategory(pos, modules){
  //populate the category once the cards are loaded.
  //in most cases this is instant but some may need to
  //load external source data first.
  
  const track = $("#browse .trackContainer").eq(pos);
  cards = "";
  for(j=0;j<modules.length;j++){
    cards += `<div class="trackItem moduleCard noselect" data-module_id="${modules[j]}"><img width="100%" height="100%" src="${get_module_icon(modules[j])}" onerror="image_error(this)" alt="${modules[j].replace(/_/g, " ")} icon"><span class="cardName">${modules[j].replace(/_/g, " ")}</span></div>`;
  }
  track.html(cards);
  track.append('<div class="trackItem moduleCard trackEndItem noselect"><img width="100%" height="100%" src="../images/enderpuff_by_qbert.png" title="End of results. Artwork by Qbert" alt="End of data pack results"/><span class="cardName">You\'ve reached the end</span></div>');
  $(".categoryLengthText").eq(pos).html(`(${modules.length})`);
  //add listeners
  track.find(".moduleCard").each(function(){
    this.addEventListener("click",function(){
      if($(this).attr("data-module_id")!=undefined){
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
          $('#browse .preview').remove();
        } else {
          $('.selected').removeClass('selected');
          $(this).addClass('selected');
          loadPreview($(this).parent().parent(), $(this).attr("data-module_id"));
        }
      }
    },{passive:true});
  });
}


function loadPreview(categoryBar, module_id){
  if(!$(this).hasClass("placeholderCard")){
    $.ajax({url:"https://gm4.co/includes/getmoduleinfo.php?module_id="+module_id}).done(function(data){
      data = JSON.parse(data);
      $("#browse .preview").remove();
      categoryBar.after('<div class="preview"><div class="previewMedia"></div><div class="previewInfo"></div></div>');
      const previewMedia = $("#browse .previewMedia");
      const previewInfo = $("#browse .previewInfo");
      previewInfo.append(`<h3>${data.module_name}</h3><p>${data.site_description}</p>`);
      if (data.mcversion === LATEST_VERSION) {
        previewInfo.append(`<a class="squircleLink datapackLink" target="download_frame" href="https://gm4.co/modules/download/${LATEST_VERSION}/${data.module_id.replaceAll("_", "-")}"><img src="/images/datapack.svg" alt="Datapack Icon">Download for Java ${LATEST_VERSION}</a>`)
      }
      previewInfo.append(`<a class="squircleLink moreLink" href="https://www.gm4.co/modules/${data.module_id.replaceAll("_", "-")}"><img src="/images/rightArrow.svg" alt="Info icon">More Downloads & Info</a>`);
      if (data.wiki_link){
        previewInfo.append(`<a class="squircleLink wikiLink" href="${data.wiki_link}" target="_blank"><img src="/images/wiki.svg" alt="Wiki icon">Read about this on the Wiki</a>`);
      }
      if (data.promo) {
        load_site_meta(previewMedia, module_id, data.promo);
      } else {
        previewMedia.append(`<img src="${get_module_icon(module_id)}">`)
      }
    });
  }
}

function image_error(caller){
  $(caller).prop("src","../modules/media/placeholder.png");
}

function load_site_meta(previewMedia, id, data){
  if(data.promo_images == undefined || data.promo_images.length==0){
    previewMedia.append(`<img src="${get_module_icon(id)}">`)
  }
  for (const promo of data.promo_images) {
    if(promo.type=="image"){
      previewMedia.append(`<img src="../modules/media/${id}/${promo.image}" alt="${promo.alt}" title="${promo.alt} (credit: ${promo.credit})">`)
    }
    if(promo.type=="video"){
      previewMedia.append(`<a class="promoVideo" href="${promo.link}"><img src="${get_module_icon(id)}" title="${promo.alt}"/></a>`);
    }
  }
}

function get_module_icon(id, version=LATEST_VERSION) {
  const folderSuffix = version === '1.13' ? 'download' : version
  const branch = version === LATEST_VERSION ? 'master' : `ver-${version}`
  return `https://gm4.co/modules/template/templates/master-${folderSuffix}/GM4_Datapacks-${branch}/gm4_${id}/pack.svg`
}

function shuffleArray(arr, shuffleFrom = 0) {
  return arr.slice(0,shuffleFrom).concat((arr.slice(shuffleFrom)).sort(() => Math.random() - 0.5));
}
