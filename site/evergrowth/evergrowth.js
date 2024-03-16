/* global cachedFetch */

$(document).ready(() => {
	resizeVideo();
	fetchLastRelease().then((version) => {
		console.log(version);
		document.querySelector('.worldDownloadLink span').textContent += ` (v${version})`
	});
});

function resizeVideo() {
	$('iframe').each(function() {
		$(this).css('height', ((parseInt($(this).css('width')) * 9) / 16) + 'px');
	});
}

async function fetchLastRelease() {
	const response = await cachedFetch("https://api.github.com/repos/Gamemode4Dev/evergrowth/releases");
	const data = await response.json();
	return data[0].tag_name
}
