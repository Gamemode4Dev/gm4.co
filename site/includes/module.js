/* global initTrack */
/* global MODULE_SOURCES */

const DOWNLOAD_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill="var(--main-text-color)"></path></svg>';
const WARNING_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--main-text-color)" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d ="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path></svg >';
const RIGHT_ARROW_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M102.4 51.8L154.1 0l255.5 256h0 0L154.1 512l-51.7-51.8L306.1 256z" fill="var(--main-text-color)" /></svg>';
const WIKI_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 878.79 878.79"><defs><clipPath id="A"><path d="M140.32 140.14h603.89v603.89H140.32z" fill="none"/></clipPath><clipPath id="B"><path d="M165.29 164.35h555.75V720.1H165.29z" fill="none"/></clipPath></defs><g clip-path="url(#A)"><g clip-path="url(#A)"><g opacity="0"><g clip-path="url(#B)"><rect x="165.29" y="164.35" width="555.75" height="555.75" rx="48.1" fill="var(--main-text-color)"/></g></g><g fill="var(--main-text-color)"><rect x="241" y="240.15" width="100.01" height="100.01" rx="13.74"/><rect x="392.16" y="240.15" width="100.01" height="100.01" rx="13.74"/><rect x="543.33" y="240.15" width="100.01" height="100.01" rx="13.74"/><rect x="241" y="391.54" width="100.01" height="100.01" rx="13.74"/><rect x="393.16" y="391.54" width="100.01" height="100.01" rx="13.74"/><rect x="543.33" y="391.54" width="100.01" height="100.01" rx="13.74"/><rect x="241" y="542.94" width="100.01" height="100.01" rx="13.74"/><rect x="392.16" y="542.94" width="100.01" height="100.01" rx="13.74"/><rect x="543.33" y="542.94" width="100.01" height="100.01" rx="13.74"/></g></g></g><path d="M223.71 188.4h105.51a10.3 10.3 0 0 0 10.31-10.31v-27.48a10.31 10.31 0 0 0-10.31-10.31H213.39a72.24 72.24 0 0 0-72.15 72.15v449.24a82.46 82.46 0 0 0 82.47 82.46h105.51a10.3 10.3 0 0 0 10.31-10.31v-27.48a10.31 10.31 0 0 0-10.31-10.31H223.71a34.36 34.36 0 0 1-34.37-34.36V222.77a34.37 34.37 0 0 1 34.37-34.37zm438.92-48.1h-109a10.32 10.32 0 0 0-10.31 10.31v27.48a10.31 10.31 0 0 0 10.31 10.31h109A34.36 34.36 0 0 1 697 222.77v438.92a34.36 34.36 0 0 1-34.36 34.36h-109a10.32 10.32 0 0 0-10.31 10.31v27.48a10.31 10.31 0 0 0 10.31 10.31h109a82.46 82.46 0 0 0 82.46-82.46V222.77a82.46 82.46 0 0 0-82.47-82.47z" fill="var(--main-text-color)"/></svg>';
const YOUTUBE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.412 50" width="24" height="24"><mask id="mask"><rect id="bg" x="0" y="0" width="100%" height="100%" fill="white"/><path d="M47.176 25L28.588 14.294v21.412z" fill="black"/></mask><path d="M69.941 7.824a8.95 8.95 0 0 0-6.294-6.294C58.059 0 35.706 0 35.706 0S13.353 0 7.765 1.471c-3 .824-5.471 3.294-6.294 6.353C0 13.412 0 25 0 25s0 11.647 1.471 17.176a8.95 8.95 0 0 0 6.294 6.294C13.412 50 35.706 50 35.706 50s22.353 0 27.941-1.471a8.95 8.95 0 0 0 6.294-6.294c1.471-5.588 1.471-17.176 1.471-17.176s.059-11.647-1.471-17.235z" fill="var(--main-text-color)" mask="url(#mask)"/></svg>';

const modules = new Map();
// eslint-disable-next-line prefer-const
let selectedVersion = '1.19.4';

/**
 * Fetch modules from the datapacks and resourcepacks repos.
 * @returns a promise to an object containing the pack, promo and metadata
 */
// eslint-disable-next-line no-unused-vars
function fetchModulesAndResources() {
	const flatModuleSources = MODULE_SOURCES.flatMap(({ type, repo, versions }) =>
		versions.map(version => ({ type, version, repo })));
	return Promise.all(flatModuleSources.map(async ({ type, repo, version }) => {
		let meta;
		try {
			meta = await fetch(`https://raw.githubusercontent.com/${repo}/release/${version.id}/meta.json`).then(r => r.json());
		} catch (e) {
			meta = await fetch(`https://cdn.jsdelivr.net/gh/${repo}@release/${version.id}/meta.json`).then(r => r.json());
		}
		return { type, version, ...meta };
	})).then((sources) => {
		for (const source of sources) {
			source.modules.filter(m => !m.hidden).forEach(mod => {
				if (modules.has(mod.id)) {
					const newer = modules.get(mod.id);
					modules.set(mod.id, {
						...newer,
						versions: [...newer.versions, source.version.id],
					});
				} else {
					modules.set(mod.id, {
						type: source.type,
						...mod,
						recommends: mod.recommends,
						versions: [source.version.id],
						credits: Object.fromEntries(Object.entries(mod.credits).map(
							([title, names]) => [title, names.map(name =>
								({ name, ...source.contributors?.[name] }),
							)],
						)),
					});
				}
			});
		}
		modules.get('gm4_resource_pack').recommends.push(...[...modules.values()]
			.filter(m => m.recommends.includes('gm4_resource_pack'))
			.sort((a, b) => a.name.localeCompare(b.name))
			.map(m => m.id));
		return modules;
	});
}

/**
 * Gets links from a modules pack.mcmeta and displays them next to the module name
 * @param {string} moduleId the module to do this for.
 */
// eslint-disable-next-line no-unused-vars
function createPromoLinkContainer(moduleId) {
	const promoLinkContainer = document.createElement('div');
	promoLinkContainer.id = 'moduleLinkContainer';
	promoLinkContainer.classList.add('horizontalSplitDisplay');
	const mod = modules.get(moduleId);
	if (mod.important_note) {
		const el = createSquircle(WARNING_ICON, 'Note', true);
		el.classList.add('promoLink');
		el.id = 'importantNoteLink';
		el.addEventListener('click', (evt) => {
			if (el.querySelector('.popup')) {
				el.querySelector('.popup').remove();
				return;
			}
			evt.stopPropagation();
			document.body.addEventListener('click', () => {
				el.querySelectorAll('.popup').forEach(e => e.remove());
			}, { once: true });

			const popup = document.createElement('div');
			popup.classList.add('popup');
			popup.textContent = mod.important_note;
			el.append(popup);
		});
		promoLinkContainer.append(el);
	}
	if (mod.wiki_link) {
		const el = createSquircle(WIKI_ICON, 'Wiki', mod.wiki_link);
		el.classList.add('promoLink');
		el.id = 'wikiPromoLink';
		promoLinkContainer.append(el);
	}
	if (mod.video_link) {
		const el = createSquircle(YOUTUBE_ICON, 'Video', mod.video_link);
		el.classList.add('promoLink');
		el.id = 'youtubePromoLink';
		promoLinkContainer.append(el);
	}

	return promoLinkContainer;
}

/**
 * Creates a squircle link from the supplied image and with a link to the supplied link.
 * @param {string} image An img to display on the button as an html tag
 * @param {string} text The text to display on the button
 * @param {string | true} href The site to link to
 * @param {string | undefined} target the target, defaults to _blank if href starts with `https://`
 */
function createSquircle(image, text, href, target) {
	const el = document.createElement('a');
	el.classList.add('noselect', 'squircleLink');

	if (href) {
		if (typeof href === 'string') {
			el.href = href;
			if (href.startsWith('https://')) {
				el.target = target || '_blank';
				el.rel = 'noreferrer';
			} else if (target) {
				el.target = target;
			}
		}
	} else {
		el.classList.add('noHover');
	}
	el.insertAdjacentHTML('afterbegin', image);
	el.insertAdjacentText('beforeend', text);

	return el;
}

/**
 * Create a button to download a version of a module.
 * @param {string} version the version
 * @param {string} moduleId the module ID
 * @param {string | undefined} text optional text used instead of the version
 * @returns an HTMLElement
 */
function createVersionButton(version, moduleId, text) {
	const url = getModuleDownload(version, moduleId);
	const el = createSquircle(DOWNLOAD_ICON, text || version, url, 'download_frame');
	if (version === selectedVersion) {
		el.classList.add('selectedVersion');
	}
	// Detect Safari, because it doesn't support http-equiv=refresh
	// see https://stackoverflow.com/a/23522755
	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		el.removeAttribute('href');
		el.addEventListener('click', () => {
			fetch(url).then(r => r.text()).then(text => {
				const realUrl = text.match(/https:\/\/.+\.zip/);
				console.log(realUrl);
				if (realUrl) {
					location.href = realUrl[0];
				}
			});
		});
	}
	return el;
}

/**
 * Loads a list of module categories
 * @param {HTMLElement} element the element to append the categories to
 * @param {object[]} categories the module categories
 */
// eslint-disable-next-line no-unused-vars
function loadModuleCategories(element, categories) {
	Promise.all(categories.map(category => {
		if (category.populate_from) {
			return cachedFetch(category.populate_from, 24 * 60 * 60).then(r => r.json())
				.then(e => e.slice(0, category.limit));
		}
		if (category.order === 'shuffled' || category.order?.mode === 'shuffled') {
			category.modules = shuffleArray(category.modules, category.order.from);
		}
		return new Promise(res => res(category.modules));
	})).then(populatedCategories => {
		populatedCategories.forEach((category, i) => {
			const div = document.createElement('div');
			const title = categories[i].title;
			div.insertAdjacentHTML('afterbegin', `<h2 class="categoryTitle">${title} <span class="categoryLengthText">(${category.length})</span></h2>`);
			const track = createModuleTrack(selectedVersion, category.map(id => `gm4_${id}`));
			track.querySelector('.trackContainer').insertAdjacentHTML('beforeend', '<div class="trackItem moduleCard trackEndItem noselect"><img width="100%" height="100%" src="/images/enderpuff_by_qbert.png" title="End of results. Artwork by Qbert" alt="End of data pack results"/><span class="cardName">You\'ve reached the end</span></div>');
			div.append(track);
			element.append(div);
			initTrack($(track));
		});
	});
}

/**
 * Create a track containing module cards. Needs to be initialized after mounting.
 * @param {version} version the version
 * @param {string} moduleIds the module ID
 * @param {() => void} onDownloadAll callback when all modules have been downloaded at least once
 * @returns a HTMLElement representing the (uninitialized) track
 */
// eslint-disable-next-line no-unused-vars
function createModuleTrack(version, moduleIds, onDownloadAll) {
	const downloadProgress = new Set();
	const onDownload = (id) => {
		downloadProgress.add(id);
		if (onDownloadAll && downloadProgress.size === moduleIds.length) {
			onDownloadAll();
		}
	};

	const track = document.createElement('div');
	track.classList.add('categoryBar', 'track', 'resizable');
	const trackContainer = document.createElement('div');
	trackContainer.classList.add('trackContainer');
	moduleIds.forEach(moduleId => {
		if (!modules.has(moduleId)) {
			console.warn(`Module ${moduleId} does not exits!`);
			return;
		}
		const item = createModuleCard(moduleId);
		item.addEventListener('click', () => {
			if (!item.classList.contains('selected')) {
				createPreview(moduleId, () => onDownload(moduleId)).then(preview => {
					const oldPreview = track.parentElement.querySelector('.preview');
					if (oldPreview) {
						oldPreview.replaceWith(preview);
					} else {
						hidePreview();
						track.parentElement.after(preview);
					}
					item.classList.add('selected');
				});
			} else {
				hidePreview();
			}
		});
		trackContainer.append(item);
	});
	track.append(trackContainer);
	const trackButtonLeft = document.createElement('div');
	trackButtonLeft.classList.add('trackButton', 'trackButtonLeft');
	track.append(trackButtonLeft);
	const trackButtonRight = document.createElement('div');
	trackButtonRight.classList.add('trackButton', 'trackButtonRight');
	track.append(trackButtonRight);
	return track;
}

/**
 * Create a module card with the module icon and name.
 * @param {string} moduleId the module ID
 * @returns a HTMLElement representing a module card
 */
function createModuleCard(moduleId) {
	const card = document.createElement('div');
	card.classList.add('trackItem', 'moduleCard', 'noselect');
	const img = createModuleIcon(moduleId);
	img.setAttribute('width', '128');
	img.setAttribute('height', '128');
	card.append(img);
	const cardName = document.createElement('span');
	cardName.classList.add('cardName');
	cardName.textContent = modules.get(moduleId).name;
	card.append(cardName);
	return card;
}

/**
 * Remove the preview if one exists.
 */
function hidePreview() {
	document.querySelectorAll('.preview').forEach(e => e.remove());
	document.querySelectorAll('.selected').forEach(e => e.classList.remove('selected'));
}

/**
 * Loads the module's metadata and then creates a preview.
 * @param {string} moduleId the module ID
 * @param {Function} onDownload callback when the download button is clicked
 * @returns a Promise to an HTMLElement containing the preview
 */
async function createPreview(moduleId, onDownload) {
	const mod = modules.get(moduleId);
	const preview = document.createElement('div');
	preview.classList.add('preview');

	const previewMedia = await createModulePromo(moduleId);
	previewMedia.classList.add('previewMedia');
	preview.append(previewMedia);

	const previewInfo = document.createElement('div');
	previewInfo.insertAdjacentHTML('beforeend', `<h3>${mod.name}</h3>`);
	previewInfo.insertAdjacentHTML('beforeend', `<p>${mod.description}</p>`);
	previewInfo.classList.add('previewInfo');
	const downloadButton = createVersionButton(selectedVersion, moduleId, `Download for Java ${selectedVersion}`);
	downloadButton.classList.add('datapackLink');
	if (onDownload) downloadButton.addEventListener('click', onDownload);
	previewInfo.append(downloadButton);
	const moreButton = createSquircle(RIGHT_ARROW_ICON, 'More Downloads & Info', `/modules/${moduleId.replace(/gm4_/, '').replaceAll('_', '-')}`);
	moreButton.classList.add('moreLink');
	previewInfo.append(moreButton);
	if (mod.wiki_link) {
		const wikiButton = createSquircle(WIKI_ICON, 'Read about this on the Wiki', mod.wiki_link);
		wikiButton.classList.add('wikiLink');
		previewInfo.append(wikiButton);
	}
	if (mod.video_link) {
		const videoButton = createSquircle(YOUTUBE_ICON, 'Watch a video about this', mod.video_link);
		videoButton.classList.add('videoLink');
		previewInfo.append(videoButton);
	}
	preview.append(previewInfo);

	return preview;
}

/**
 * Loads the pack.mcmeta and promo metadata for a pack.
 * @param {string} moduleId the name of the pack
 * @returns a promise to an object containing module metadata
 */
function fetchModulePromo(moduleId) {
	const mod = modules.get(moduleId);
	if (mod.promo) {
		return new Promise(res => res(mod.promo));
	}
	return fetch(`/modules/media/${moduleId.replace(/gm4_/, '')}/site_meta.json`)
		.then(r => r.json())
		.catch(() => ({ promo_images: [] }))
		.then((meta) => {
			mod.promo = meta.promo_images;
			return mod.promo;
		});
}

/**
 * Create an element with the promo image(s)
 * @param {string} moduleId the module ID
 * @returns a promise to a HTMLElement with the loaded promo
 */
function createModulePromo(moduleId) {
	return fetchModulePromo(moduleId).then(promo => {
		const promoImages = promo.filter(p => p.type === 'image');
		if (promoImages.length === 0) {
			const img = createModuleIcon(moduleId);
			return img;
		}
		if (promoImages.length < 4) {
			return createModulePromoImage(moduleId, promoImages[0]);
		}
		const grid = document.createElement('div');
		grid.classList.add('modulePromoGrid');
		for (const image of promoImages.slice(0, 4)) {
			grid.append(createModulePromoImage(moduleId, image));
		}
		return grid;
	});
}

/**
 * Create a promo image with its alt and credit
 * @param {string} moduleId the module ID
 * @param {object} image the promo image metadata
 * @returns an img tag
 */
function createModulePromoImage(moduleId, image) {
	const img = document.createElement('img');
	img.src = `/modules/media/${moduleId.replace(/^gm4_/, '')}/${image.image}`;
	const title = image.credit ? `${image.alt} (credit: ${image.credit})` : image.alt;
	img.alt = title;
	img.title = title;
	return img;
}

/**
 * Create an image of the module icon
 * @param {string} moduleId the module ID
 * @returns an Image Element
 */
function createModuleIcon(moduleId) {
	const img = document.createElement('img');
	const iconCredit = (modules.get(moduleId).credits['Icon Design'] ?? [])
		.map(c => c.name).join(', ');
	let title = `${modules.get(moduleId).name}'s Logo`;
	if (iconCredit) {
		title += ` (credit: ${iconCredit})`;
	}
	img.src = getModuleIconUrl(moduleId);
	img.alt = title;
	img.title = title;
	img.addEventListener('error', () => {
		img.src = '/modules/media/placeholder.png';
	});
	return img;
}

/**
 * Get the URL to the module icon SVG.
 * @param {string} moduleId the module ID
 * @returns a URL to the module icon
 */
function getModuleIconUrl(moduleId) {
	const mod = modules.get(moduleId);
	const repo = MODULE_SOURCES.find(s => s.type === mod.type).repo;
	const branch = getBranchName(mod.versions[0], mod.type);
	const extension = mod.type === 'resourcepack' ? 'png' : 'svg';
	return `https://raw.githubusercontent.com/${repo}/${branch}/${moduleId}/pack.${extension}`;
}

/**
 * Get the URL to the module data pack.
 * @param {string} version the version
 * @param {string} moduleId the module ID
 * @returns a URL to the module zip
 */
function getModuleDownload(version, moduleId) {
	const id = moduleId.replace(/^gm4_/, '').replace(/_/g, '-');
	return `/modules/download/${version}/${id}`;
}

/**
 * Get the branch name for a version.
 * @param {string} version the version
 * @param {string} type the module source type
 * @returns the branch name
 */
function getBranchName(version, type) {
	const versions = MODULE_SOURCES.find(s => s.type === type).versions;
	return versions.find(v => v.id === version).branch;
}

/**
 * Shuffles an array
 * @param {unknown[]} arr the array to shuffle
 * @param {number} shuffleFrom optional start index
 * @returns A shuffled array
 */
function shuffleArray(arr, shuffleFrom = 0) {
	return arr.slice(0, shuffleFrom).concat((arr.slice(shuffleFrom)).sort(() => Math.random() - 0.5));
}

const CACHE_NAME = 'gm4-v1';

/**
 * @param {string} url the url to fetch
 * @param {number} ttl time to live in seconds
 */
async function cachedFetch(url, ttl) {
	const now = new Date().getTime();
	const cache = await caches.open(CACHE_NAME);
	const cacheResponse = await cache.match(url);
	if (cacheResponse && cacheResponse.ok) {
		const expires = new Date(cacheResponse.headers.get('Expires')).getTime();
		if (now < expires) {
			return cacheResponse;
		}
	}

	const fetchResponse = await fetch(url);
	const storedResponse = new Response(fetchResponse.clone().body, { headers: {
		Expires: new Date(now + ttl * 1000).toUTCString(),
	} });
	await cache.put(url, storedResponse);
	return fetchResponse;
}
