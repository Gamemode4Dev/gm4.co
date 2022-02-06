/*
JS for the module browse page
*/

window.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    fetchModulesAndResources(),
    fetch('/images/slideshow/slides.json').then(r => r.json()),
    fetch('/modules/module_categories.json').then(r => r.json()),
  ])
  .then(async ([modules, slideshow, categories]) => {

    // Header slideshow
    for (const slide of slideshow.slides) {
      $(".slideshow > .trackContainer").append(`<${slide.link ? `a href=${slide.link}` : `div`} data-bg="images/slideshow/${slide.background_image}" class="lazyload trackItem ${slide.text.position || "bottom-left"} ${slide.darken ? "darken" : ""}" style="background-image:url(images/slideshow/${slide.low_resolution_background_image});">${slide.text ? `<h2>${slide.text.header}</h2><p>${slide.text.paragraph}</p>` : ''}${slide.link ? `</a>` : `</div>`}`);
    }
    initTrack($(".slideshow"), 8000);
    //scale up lazyloaded low res background images (such as the slideshow)
    document.addEventListener('lazybeforeunveil', function(e){
      var bg = e.target.getAttribute('data-bg');
      if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
      }
    });

    // Browse tab
    Promise.all(categories.module_categories.map(category => {
      if (category.populate_from) {
        return fetch(category.populate_from).then(r => r.json())
          .then(e => e.slice(0, category.limit));
      }
      if (category.order === 'shuffled' || category.order?.mode === 'shuffled') {
        category.modules = shuffleArray(category.modules, category.order.from);
      }
      return new Promise(res => res(category.modules))
    })).then(populatedCategories => {
      populatedCategories.forEach((category, i) => {
        const div = document.createElement('div');
        const title = categories.module_categories[i].title;
        div.insertAdjacentHTML('afterbegin', `<h2 class="categoryTitle">${title} <span class="categoryLengthText">(${category.length})</span></h2>`);
        const track = createModuleTrack(LATEST_VERSION, category.map(id => `gm4_${id}`));
        track.querySelector('.trackContainer').insertAdjacentHTML('beforeend', '<div class="trackItem moduleCard trackEndItem noselect"><img width="100%" height="100%" src="/images/enderpuff_by_qbert.png" title="End of results. Artwork by Qbert" alt="End of data pack results"/><span class="cardName">You\'ve reached the end</span></div>');
        div.append(track);
        $("#browse").append(div);
        initTrack($(track));
      });
    });

    // All Modules tab
    const moduleFilter = createModuleFilter();
    document.getElementById('modules').append(moduleFilter);

    [...modules.values()]
      .filter(mod => mod.type === 'datapack')
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(mod => {
        const moduleLink = document.createElement('a');
        if (!mod.versions.includes(LATEST_VERSION)) {
          moduleLink.classList.add('wrongVersion');
        }
        moduleLink.setAttribute('data-module', mod.id)
        moduleLink.href = `/modules/${mod.id.replace(/^gm4_/, '').replace(/_/g, '-')}`;
        const moduleCard = createModuleCard(mod.id);
        moduleLink.append(moduleCard);
        document.getElementById('modules').append(moduleLink);
      });
  })
})

window.addEventListener('popstate', function reload() {
  $(".moduleNavButton").removeClass("active");
  $(`.moduleNavButton[href="${location.hash}"]`).addClass("active");
  $(".moduleView").removeClass("active");
  $(location.hash).addClass("active");
})

function createModuleFilter() {
  const moduleFilter = document.createElement('div');
  moduleFilter.classList.add('moduleFilter');

  const filterModules = (name, predicate) => {
    document.querySelectorAll('[data-module]').forEach(e => {
      const mod = modules.get(e.getAttribute('data-module'));
      e.classList.toggle(name, !predicate(mod));
    });
  }

  const versionSelect = document.createElement('select');
  [...MODULE_SOURCES[0].versions, { id: 'older', name: 'Earlier Versions...' }].forEach(version => {
    const option = document.createElement('option')
    option.value = version.id;
    option.textContent = version.name;
    versionSelect.append(option);
  });
  versionSelect.addEventListener('change', () => {
    if (versionSelect.value === 'older') {
      window.location = '/old-modules';
    } else {
      filterModules('wrongVersion', mod => mod.versions.includes(versionSelect.value))
    }
  });
  moduleFilter.append(versionSelect);

  const textSearch = document.createElement('input');
  textSearch.placeholder = 'Search...';
  textSearch.addEventListener('keyup', () => {
    const filter = textSearch.value.toLowerCase();
    filterModules('wrongFilter', mod => mod.name.toLowerCase().includes(filter));
  });
  moduleFilter.append(textSearch);

  return moduleFilter;
}

function shuffleArray(arr, shuffleFrom = 0) {
  return arr.slice(0,shuffleFrom).concat((arr.slice(shuffleFrom)).sort(() => Math.random() - 0.5));
}
