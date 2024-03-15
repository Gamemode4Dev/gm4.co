const DOWNLOAD_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill="var(--main-text-color)"></path></svg>';

$(document).ready(() => {
	initTrack($('.downloadsSlides'), 8000);

  fetch('downloads.json')
    .then(r => r.json())
	  .then(data => {
      for (const group of data.groups) {
        const section = document.createElement('section');
        document.getElementById('downloads').append(section);

        const title = document.createElement('h3');
        section.append(title);
        title.textContent = group.name;

        if (group.description) {
          const description = document.createElement('p');
          section.append(description);
          description.textContent = group.description;
        }

        const ul = document.createElement('ul');
        section.append(ul);
        for (const download of group.downloads) {
          const li = document.createElement('li');
          ul.append(li);
          if (download.options?.main) {
            const mainBtn = createDownloadButton('Download', download.options.main);
            li.append(mainBtn);
            mainBtn.classList.add('mainLink');
          }
          if (download.options?.mirror) {
            const mirrorBtn = createDownloadButton('Mirror', download.options.mirror);
            li.append(mirrorBtn);
          }
          const span = document.createElement('span');
          li.append(span)
          span.textContent = `${download.name} (${download.size}, Minecraft ${download.version})`;
        }
      }
    });
});

/**
 * Creates a squircle link from the supplied image and with a link to the supplied link.
 * @param {string} text The text to display on the button
 * @param {string | true} href The site to link to
 */
function createDownloadButton(text, href) {
	const el = document.createElement('a');
	el.classList.add('noselect', 'squircleLink');
  el.href = href;
  el.target = '_blank';
  el.insertAdjacentHTML('afterbegin', DOWNLOAD_ICON);
	el.insertAdjacentText('beforeend', text);
	return el;
}
