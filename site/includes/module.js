const MODULE_SOURCES = [
	{
		type: 'datapack',
		url: 'https://raw.githubusercontent.com/Gamemode4Dev/GM4_Datapacks',
		versions: [
			{ id: '1.18', branch: 'master' },
			{ id: '1.17', branch: 'ver/1.17' },
			{ id: '1.16', branch: 'ver/1.16' },
			{ id: '1.15', branch: 'ver/1.15' },
			{ id: '1.14', branch: 'ver/1.14' },
			{ id: '1.13', branch: 'ver/1.13' },
		],
	},
	{
		type: 'resourcepack',
		url: 'https://raw.githubusercontent.com/Gamemode4Dev/GM4_Resources',
		versions: [
			{ id: '1.18', branch: 'master' },
		],
	}
];
const LATEST_VERSION = MODULE_SOURCES[0].versions[0];

const OLD_MODULES = new Set(['bat_grenades', 'enderman_support_class', 'weighted_armour', 'undead_players', 'potion_swords', 'ink_spitting_squid', 'better_fire', 'desire_lines', 'vertical_rails', 'custom_crafters', 'record_crafting', 'standard_crafting', 'heart_canisters', 'master_crafting', 'sunken_treasure', 'better_armour_stands', 'liquid_tanks', 'lightning_rods', 'enchantment_extractors', 'trapped_signs', 'block_compressors', 'speed_paths', 'ender_hoppers', 'zauber_cauldrons', 'sweethearts', 'standard_liquids', 'potion_liquids', 'particles_pack', 'poses_pack', 'ender_hoppers', 'tnt_landmines', 'xp_storage', 'disassemblers', 'blast_furnaces', 'enchantment_extractors', 'boots_of_ostara', 'cooler_caves', 'dangerous_dungeons', 'tower_structures', 'spawner_minecarts', 'pig_tractors'])

const DOWNLOAD_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg>';
const WARNING_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--main-text-color)" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d ="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path></svg >';
const WIKI_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 878.79 878.79"><defs><clipPath id="A"><path d="M140.32 140.14h603.89v603.89H140.32z" fill="none"/></clipPath><clipPath id="B"><path d="M165.29 164.35h555.75V720.1H165.29z" fill="none"/></clipPath></defs><g clip-path="url(#A)"><g clip-path="url(#A)"><g opacity="0"><g clip-path="url(#B)"><rect x="165.29" y="164.35" width="555.75" height="555.75" rx="48.1" fill="var(--main-text-color)"/></g></g><g fill="var(--main-text-color)"><rect x="241" y="240.15" width="100.01" height="100.01" rx="13.74"/><rect x="392.16" y="240.15" width="100.01" height="100.01" rx="13.74"/><rect x="543.33" y="240.15" width="100.01" height="100.01" rx="13.74"/><rect x="241" y="391.54" width="100.01" height="100.01" rx="13.74"/><rect x="393.16" y="391.54" width="100.01" height="100.01" rx="13.74"/><rect x="543.33" y="391.54" width="100.01" height="100.01" rx="13.74"/><rect x="241" y="542.94" width="100.01" height="100.01" rx="13.74"/><rect x="392.16" y="542.94" width="100.01" height="100.01" rx="13.74"/><rect x="543.33" y="542.94" width="100.01" height="100.01" rx="13.74"/></g></g></g><path d="M223.71 188.4h105.51a10.3 10.3 0 0 0 10.31-10.31v-27.48a10.31 10.31 0 0 0-10.31-10.31H213.39a72.24 72.24 0 0 0-72.15 72.15v449.24a82.46 82.46 0 0 0 82.47 82.46h105.51a10.3 10.3 0 0 0 10.31-10.31v-27.48a10.31 10.31 0 0 0-10.31-10.31H223.71a34.36 34.36 0 0 1-34.37-34.36V222.77a34.37 34.37 0 0 1 34.37-34.37zm438.92-48.1h-109a10.32 10.32 0 0 0-10.31 10.31v27.48a10.31 10.31 0 0 0 10.31 10.31h109A34.36 34.36 0 0 1 697 222.77v438.92a34.36 34.36 0 0 1-34.36 34.36h-109a10.32 10.32 0 0 0-10.31 10.31v27.48a10.31 10.31 0 0 0 10.31 10.31h109a82.46 82.46 0 0 0 82.46-82.46V222.77a82.46 82.46 0 0 0-82.47-82.47z" fill="var(--main-text-color)"/></svg>';
const YOUTUBE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.412 50" width="24" height="24"><mask id="mask"><rect id="bg" x="0" y="0" width="100%" height="100%" fill="white"/><path d="M47.176 25L28.588 14.294v21.412z" fill="black"/></mask><path d="M69.941 7.824a8.95 8.95 0 0 0-6.294-6.294C58.059 0 35.706 0 35.706 0S13.353 0 7.765 1.471c-3 .824-5.471 3.294-6.294 6.353C0 13.412 0 25 0 25s0 11.647 1.471 17.176a8.95 8.95 0 0 0 6.294 6.294C13.412 50 35.706 50 35.706 50s22.353 0 27.941-1.471a8.95 8.95 0 0 0 6.294-6.294c1.471-5.588 1.471-17.176 1.471-17.176s.059-11.647-1.471-17.235z" fill="var(--main-text-color)" mask="url(#mask)"/></svg>';

let modules = new Map();

/**
 * Fetch modules from the datapacks and resourcepacks repos.
 * @returns a promise to an object containing the pack, promo and metadata
 */
function fetchModulesAndResources() {
	const flatModuleSources = MODULE_SOURCES.flatMap(({ type, url, versions }) =>
		versions.map(version => ({ type, version, url })))
	return Promise.all(flatModuleSources.map(async ({ type, url, version }) => {
		const meta = await fetch(`${url}/release/${version.id}/meta.json`).then(r => r.json())
		return { type, version, ...meta };
	})).then((sources) => {
		for (const source of sources) {
			source.modules.filter(m => !m.hidden).forEach(mod => {
				if (modules.has(mod.id)) {
					const newer = modules.get(mod.id);
					modules.set(mod.id, {
						...newer,
						versions: [...newer.versions, source.version.id]
					});
				} else {
					modules.set(mod.id, {
						type: source.type,
						...mod,
						recommends: [...mod.recommends, 'gm4_resources'],
						versions: [source.version.id],
						credits: Object.fromEntries(Object.entries(mod.credits).map(
							([title, names]) => [title, names.map(name =>
								({ name, ...source.contributors?.[name] })
							)]
						))
					});
				}
			});
		}
		return modules
	})
}

/**
 * Gets links from a modules pack.mcmeta and displays them next to the module name
 * @param {string} moduleId the module to do this for.
 */
function createPromoLinkContainer(moduleId) {
	const promoLinkContainer = document.createElement('div');
	promoLinkContainer.id = 'moduleLinkContainer';
	promoLinkContainer.classList.add('horizontalSplitDisplay');
	const mod = modules.get(moduleId);
	if (mod.important_note) {
		const el = createSquircle(WARNING_ICON, 'Note', '#');
		el.classList.add('promoLink');
		el.id = 'importantNoteLink';
		el.addEventListener('click', (evt) => {
			el.querySelectorAll('.popup').forEach(e => e.remove());
			evt.stopPropagation();
			document.body.addEventListener('click', () => {
				el.querySelectorAll('.popup').forEach(e => e.remove());
			}, { once: true });

			const popup = document.createElement('div');
			popup.classList.add('popup');
			popup.textContent = mod.important_note;
			el.append(popup);
		});
		promoLinkContainer.append(el)
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
 * @param {string} target The site to link to
 */
function createSquircle(image, text, target) {
	const el = document.createElement('a');
	el.classList.add('noselect', 'squircleLink');

	if (target) {
		el.href = target;
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
	const el = createSquircle(DOWNLOAD_ICON, text || version, getModuleDownload(version, moduleId));
	if (version === selectedVersion) {
		el.classList.add('selectedVersion');
	}
	return el;
}

/**
 * Creates a new step section for the module page. A section has a header (usually populated with an instruction) and a container for a list.
 * @param {string} id Id of this step sectio
 * @param {string} stepName data-step of this step section
 * @param {Element} header An html element to be used as the header
 * @param listClassName class to add to the list container
 */
function createStepSection(id, stepName, header, listClassName) {
	const sec = document.createElement('section');
	sec.classList.add('trackSection');
	sec.id = id;
	sec.setAttribute('data-step', stepName);

	sec.append(header);

	const list = document.createElement('div');
	list.classList.add(listClassName);
	sec.append(list);

	return sec;
}

/**
 * Create a track containing module cards. Needs to be initialized after mounting.
 * @param {version} version the version
 * @param {string} moduleIds the module ID
 * @param {() => void} onDownloadAll callback when all modules have been downloaded at least once
 * @returns a HTMLElement representing the (uninitialized) track
 */
function createModuleTrack(version, moduleIds, onDownloadAll) {
	const downloadProgress = new Set()
	const onDownload = (id) => {
		downloadProgress.add(id)
		if (onDownloadAll && downloadProgress.size === moduleIds.length) {
			onDownloadAll()
		}
	}

	const track = document.createElement('div');
	track.classList.add('categoryBar', 'track', 'resizable');
	const trackContainer = document.createElement('div');
	trackContainer.classList.add('trackContainer');
	moduleIds.forEach(moduleId => {
		const item = createModuleCard(moduleId);
		item.addEventListener('click', () => {
			if (!item.classList.contains('selected')) {
				createPreview(moduleId, () => onDownload(moduleId)).then(preview => {
					const oldPreview = track.parentElement.querySelector('.preview');
					if (oldPreview) {
						oldPreview.replaceWith(preview)
					} else {
						hidePreview();
						track.parentElement.after(preview);
					}
					item.classList.add('selected');
				});
			} else {
				hidePreview()
			}
		})
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
	card.classList.add('trackItem', 'moduleCard');
	const img = document.createElement('img');
	img.src = getModuleIconUrl(moduleId);
	img.alt = `${modules.get(moduleId).name}'s Logo`
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
	const mod = modules.get(moduleId)
	const preview = document.createElement('div')
	preview.classList.add('preview')

	const previewMedia = await createModulePromo(moduleId)
	previewMedia.classList.add('previewMedia')
	preview.append(previewMedia)

	const previewInfo = document.createElement('div')
	previewInfo.insertAdjacentHTML('beforeend', `<h3>${mod.name}</h3>`)
	previewInfo.insertAdjacentHTML('beforeend', `<p>${mod.description}</p>`)
	previewInfo.classList.add('previewInfo')
	const downloadButton = createVersionButton(selectedVersion, moduleId, `Download for Java ${selectedVersion}`)
	if (onDownload) downloadButton.addEventListener('click', onDownload)
	previewInfo.append(downloadButton)
	previewInfo.insertAdjacentHTML('beforeend', `<a class="squircleLink moreLink" href="https://www.gm4.co/modules/${moduleId.replace(/gm4_/, '').replaceAll("_", "-")}"><img src="https://gm4.co/images/rightArrow.svg" alt="Info icon">More Downloads & Info</a>`)
	if (mod.wiki_link) {
		previewInfo.insertAdjacentHTML('beforeend', `<a class="squircleLink wikiLink" href="${mod.wiki_link}" target="_blank"><img src="https://gm4.co/images/wiki.svg" alt="Wiki icon">Read about this on the Wiki</a>`)
	}
	preview.append(previewInfo)

	return preview
}

/**
 * Loads the pack.mcmeta and promo metadata for a pack.
 * @param {string} moduleId the name of the pack
 * @returns a promise to an object containing module metadata
 */
function fetchModulePromo(moduleId) {
	const mod = modules.get(moduleId);
	console.log(moduleId, mod)
	if (mod.promo) {
		return new Promise(res => res(mod.promo))
	}
	return fetch(`/modules/media/${moduleId.replace(/gm4_/, '')}/site_meta.json`)
		.then(r => r.json())
		.catch(() => ({ promo_images: [] }))
		.then((meta) => {
			mod.promo = meta.promo_images;
			return mod.promo;
		})
}

/**
 * Create an element with the promo image(s)
 * @param {string} moduleId the module ID
 * @returns a promise to a HTMLElement with the loaded promo
 */
function createModulePromo(moduleId) {
	return fetchModulePromo(moduleId).then(promo => {
		const promoImages = promo.filter(p => p.type === 'image')
		if (promoImages.length === 0) {
			const img = document.createElement('img')
			img.src = getModuleIconUrl(moduleId)
			img.alt = `${modules.get(moduleId).name}'s Logo`
			return img
		}
		if (promoImages.length < 4) {
			return createModulePromoImage(moduleId, promoImages[0])
		}
		const grid = document.createElement('div')
		grid.classList.add('modulePromoGrid')
		for (const image of promoImages.slice(0, 4)) {
			grid.append(createModulePromoImage(moduleId, image))
		}
		return grid
	})
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
 * Get the URL to the module icon SVG.
 * @param {string} moduleId the module ID
 * @returns a URL to the module icon
 */
function getModuleIconUrl(moduleId) {
	const mod = modules.get(moduleId);
	const repo = MODULE_SOURCES.find(s => s.type === mod.type).url;
	const branch = getBranchName(mod.versions[0], mod.type);
	const extension = mod.type === 'resourcepack' ? 'png' : 'svg';
	return `${repo}/${branch}/${moduleId}/pack.${extension}`;
}

/**
 * Get the URL to the module data pack.
 * @param {string} version the version
 * @param {string} moduleId the module ID
 * @returns a URL to the module zip
 */
function getModuleDownload(version, moduleId) {
	const mod = modules.get(moduleId);
	const repo = MODULE_SOURCES.find(s => s.type === mod.type).url;
	return `${repo}/release/${version}/${moduleId}_${version.replace('.', '_')}.zip`;
}

/**
 * Get the branch name for a version.
 * @param {string} version the version
 * @param {string} type the module source type
 * @returns the branch name
 */
function getBranchName(version, type) {
	const versions = MODULE_SOURCES.find(s => s.type === type).versions
	return versions.find(v => v.id === version).branch
}
