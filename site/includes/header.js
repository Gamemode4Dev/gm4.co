//preferences
let siteTheme = 'light';
let dataprompted = false;
let userdata = JSON.parse(window.localStorage.getItem('user'));
if(userdata != null) {
	dataprompted = true;
}

$(document).ready(() => {
	if (window.matchMedia != 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme('dark');
	}
	if(userdata != null && userdata.theme != undefined && userdata.theme == 'dark' && siteTheme == 'light') theme('dark');
	if(userdata != null && userdata.theme != undefined && userdata.theme == 'light' && siteTheme == 'dark') theme('light');
	$('#discordIFrame').attr('src', 'https://discord.com/widget?id=151141188961828864&theme=' + siteTheme);
});

// eslint-disable-next-line no-unused-vars
function toggleTheme() {
	if(siteTheme == 'light') {
		theme('dark');
	} else{
		theme('light');
	}
	if(!dataprompted) {
		$('#dataRequestBox').show();
	}
	if(userdata != null) {
		userdata.theme = siteTheme;
		savePreferences();
	}
}
function theme(mode) {
	if(mode == 'light') {
		$('body').removeClass('dark');
		$('body').addClass('light');
		siteTheme = 'light';
	}
	if(mode == 'dark') {
		$('body').removeClass('light');
		$('body').addClass('dark');
		siteTheme = 'dark';
	}
}

// eslint-disable-next-line no-unused-vars
function storeUserPreferences() {
	//create a localstorage profile for the user if they accept it and it doesn't exist yet.
	if(userdata == null) {
		console.log('creating new preferences profile in localstorage (cookie)');
		userdata = {
			theme:siteTheme,
		};
		window.localStorage.setItem('user', JSON.stringify(userdata));
	}
	$('#dataRequestBox').css('background-color', '#4bc759').fadeOut();
}

function savePreferences() {
	if(userdata != null) {
		//only save if the user has userdata and has therefore given permission
		window.localStorage.setItem('user', JSON.stringify(userdata));
	}
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
