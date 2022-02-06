/* global initTrack */
/* global fetchModulesAndResources fetchModulePromo createModulePromo modules createPromoLinkContainer createModuleTrack createSquircle createVersionButton hidePreview selectedVersion:writable */

const OLD_MODULES = new Set(['bat_grenades', 'enderman_support_class', 'weighted_armour', 'undead_players', 'potion_swords', 'ink_spitting_squid', 'better_fire', 'desire_lines', 'vertical_rails', 'custom_crafters', 'record_crafting', 'standard_crafting', 'heart_canisters', 'master_crafting', 'sunken_treasure', 'better_armour_stands', 'liquid_tanks', 'lightning_rods', 'enchantment_extractors', 'trapped_signs', 'block_compressors', 'speed_paths', 'ender_hoppers', 'zauber_cauldrons', 'sweethearts', 'standard_liquids', 'potion_liquids', 'particles_pack', 'poses_pack', 'ender_hoppers', 'tnt_landmines', 'xp_storage', 'disassemblers', 'blast_furnaces', 'enchantment_extractors', 'boots_of_ostara', 'cooler_caves', 'dangerous_dungeons', 'tower_structures', 'spawner_minecarts', 'pig_tractors']);

// let loadedModuleId = window.location.pathname.replace(/\/modules\//, '')
let loadedModuleId = '/modules/apple-trees'; // Test module name
loadedModuleId = loadedModuleId.replace(/-/g, '_');
loadedModuleId = loadedModuleId.replace(/\/modules\/(\w+)/, 'gm4_$1');

window.addEventListener('DOMContentLoaded', () => {
	fetchModulesAndResources()
		.then(modules => {
			if (!modules.has(loadedModuleId)) {
				throw new Error('Unknown module');
			}
			selectedVersion = modules.get(loadedModuleId).versions[0];
			return fetchModulePromo(loadedModuleId);
		})
		.then(() => createModulePromo(loadedModuleId))
		.then((promo) => {
			const mod = modules.get(loadedModuleId);
			document.title = `${mod.name} - Gamemode 4`;
			document.getElementById('moduleIcon').append(promo);
			document.getElementById('moduleDescription').textContent = mod.description;
			for (const item of document.getElementsByClassName('moduleName')) {
				item.textContent = mod.name;
			}

			const moduleLinkContainer = createPromoLinkContainer(loadedModuleId);
			document.getElementById('moduleTitle').append(moduleLinkContainer);

			const versionList = createVersionList(mod.id, mod.versions);
			document.querySelector('#versionDownloads')?.remove();
			document.getElementById('downloadSection').append(versionList);

			if (mod.requires.length > 0) {
				document.querySelector('main').append(createRequiredModuleSection());
				const requiredTrack = createModuleTrack(selectedVersion, mod.requires, () => changeStep('recommended'));
				document.getElementById('requiredModules').append(requiredTrack);
				initTrack($(requiredTrack), false);
			}

			const requiresRecommended = mod.requires.flatMap(r => modules.get(r).recommends)
				.filter(id => id !== loadedModuleId);
			const allRecommended = [...new Set([...mod.recommends, ...requiresRecommended])];
			if (allRecommended.length > 0) {
				document.querySelector('main').append(createRecommendedModuleSection());
				const recommendedTrack = createModuleTrack(selectedVersion, allRecommended);
				document.getElementById('recommendedModules').append(recommendedTrack);
				initTrack($(recommendedTrack), false);
			}

			const creditsSection = document.createElement('section');
			creditsSection.id = 'creditsSection';
			const creditsFrame = createCreditsFrame(loadedModuleId);
			creditsSection.append(creditsFrame);
			document.querySelector('main').append(creditsSection);
		})
		.catch(e => {
			console.error(e);
			const div = document.createElement('div');
			div.classList.add('moduleError');
			const error = document.createElement('h2');
			error.textContent = 'Something unexpected happened...';
			div.append(error);
			if (!modules.has(loadedModuleId)) {
				error.textContent = 'Sorry, this module doesn\'t exits!';
				const browseButton = createSquircle('', 'Browse our modules instead', 'https://gm4.co/#browse');
				browseButton.classList.add('browseButton');
				div.append(browseButton);
			}
			document.querySelector('main').innerHTML = '';
			document.querySelector('main').append(div);
		});
});

/**
 * Create the version list.
 * @param {string} moduleId the module ID
 * @param {string[]} versions the list of versions to create
 * @returns a HTMLElement containing a list of version download buttons
 */
function createVersionList(moduleId, versions) {
	const versionList = document.createElement('div');
	versionList.id = 'versionDownloads';

	versions.forEach(version => {
		const el = createVersionButton(version, moduleId);
		el.addEventListener('click', () => {
			selectedVersion = version;
			versionList.querySelectorAll('.selectedVersion').forEach(e => e.classList.remove('selectedVersion'));
			el.classList.add('selectedVersion');
			changeStep('required');
		});
		versionList.append(el);
	});

	if (OLD_MODULES.has(moduleId.replace(/gm4_/, ''))) {
		const el = document.createElement('a');
		el.href = `https://www.gm4.co/old-modules/${moduleId.replace(/gm4_/, '').replace(/_/g, '-')}`;
		el.classList.add('noselect', 'squircleLink');
		el.textContent = 'Older...';
		versionList.append(el);
	}

	return versionList;
}

/**
 * Creates the required modules section.
 * @returns The required modules section
 */
function createRequiredModuleSection() {
	const mod = modules.get(loadedModuleId);
	const header = document.createElement('h2');
	header.insertAdjacentText('beforeend', `${mod.name} requires these modules to work!`);
	return createStepSection('requiredModules', 'required', header, 'requiredList');
}

/**
 * Creates the recommended modules section.
 * @returns The recommended modules section
 */
function createRecommendedModuleSection() {
	const header = document.createElement('h2');
	header.insertAdjacentText('beforeend', 'Recommended modules');

	return createStepSection('recommendedModules', 'recommended', header, 'recommendedList');
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

let changingStepTimeout;
/**
 * Finds an element with the `data-step` attribute set to this step, and scrolls to it.
 * @param {string} step the step to change to
 */
function changeStep(step) {
	const mod = modules.get(loadedModuleId);
	if (step === 'required' && mod.requires.length === 0) {
		step = 'recommended';
	}
	if (step === 'recommended' && mod.recommends.length === 0) {
		step = 'done';
	}

	hidePreview();

	document.querySelectorAll('[data-step]').forEach(e => e.classList.add('changingStep'));

	document.querySelectorAll('.currentStep').forEach(e => e.classList.remove('currentStep'));
	const currentSection = document.querySelector(`[data-step=${step}]`);
	currentSection?.classList.add('currentStep');
	currentSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });

	changingStepTimeout = setTimeout(() => {
		if (changingStepTimeout) clearTimeout(changingStepTimeout);
		document.querySelectorAll('[data-step]').forEach(e => e.classList.remove('changingStep'));
	}, 500);
}

/**
 * Generates credits for a module
 * @param {string} moduleId
 * @returns a div containing credits
 */
function createCreditsFrame(moduleId) {
	const creditsFrame = document.createElement('div');
	creditsFrame.id = 'creditsFrame';
	creditsFrame.classList.add('horizontalSplitDisplay');
	const credits = modules.get(moduleId).credits;

	Object.entries(credits).map(([title, persons]) => {
		if (Array.isArray(persons)) {
			creditsFrame.append(createCreditsContainer(title, persons));
		}
	});

	return creditsFrame;
}

/**
 * Generates a div with the credit title and a list of persons
 * @param {string} title
 * @param {[string, string][]} persons a list of name-link pairs
 * @returns a div containing credits
 */
function createCreditsContainer(title, persons) {
	const creditsContainer = document.createElement('div');
	creditsContainer.classList.add('creditsContainer');
	const header = document.createElement('h3');
	header.insertAdjacentText('afterbegin', title);
	const content = document.createElement('div');
	content.classList.add('creditsPersonList');

	for (const { name, links } of persons) {
		const button = createSquircle('', name, links?.[0]);
		button.classList.add('creditsButton');
		content.append(button);
	}

	// assemble
	creditsContainer.append(header);
	creditsContainer.append(content);
	return creditsContainer;
}
