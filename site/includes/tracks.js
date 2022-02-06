/**
 * Handles loading of modules, tracks and the slideshow
 */

$(document).ready(() => {
	updateScrollbar();
});

window.addEventListener('resize', () => {
	updateScrollbar();

	$('.track.resizable').each(function() {
		scrollTrack($(this), 0);
	});
});

/**
 * Calculates the width of the scrollbar, depending on the client width.
 */
function updateScrollbar() {
	const clientWidth = document.documentElement.clientWidth;
	const scrollbar = Math.abs(window.screen.width - clientWidth) <= 1 ? 0 : window.innerWidth - clientWidth;
	document.documentElement.style.setProperty('--scrollbar-width', scrollbar + 'px');
}

/**
 * Updates and animates the track offset and
 * @param el The track element
 * @param dir One of -1, 0, 1 determining the direction of the scroll
 * @param loop Whether to loop the scrolling
 * @param partial Optional
 */
function scrollTrack(el, dir, loop, partial) {
	const total = el.find('.trackItem').length;
	const style = getComputedStyle(el.get(0));
	const visible = parseInt(style.getPropertyValue('--visible-items'));
	const hasEndItem = el.find('.trackEndItem').length;
	let offset = parseInt(style.getPropertyValue('--offset'));

	let target;
	if (partial) {
		const width = el.find('.trackItem').get(0).clientWidth;
		target = offset + Math.round(partial / width);
	} else {
		target = offset + dir * Math.max(1, partial ? 1 : visible - 1);
	}

	if (loop) {
		offset = (target % total + total) % total;
	} else {
		const endItem = total - hasEndItem > visible;
		const maxOffset = total - visible - (endItem ? 0 : 1);
		offset = Math.max(0, Math.min(maxOffset, target));

		el.find('.trackButtonLeft').toggleClass('hidden', offset <= 0);
		el.find('.trackButtonRight').toggleClass('hidden', offset >= maxOffset);
		el.find('.trackEndItem').toggleClass('hidden', !endItem);
	}

	if (dir !== 0) el.addClass('transitioning');
	el.get(0).style.setProperty('--offset', `${offset}`);
	let trackTransition;
	if (dir !== 0) {
		clearTimeout(trackTransition);
		trackTransition = setTimeout(()=> {
			el.removeClass('transitioning');
		}, 1000);
	}
}

/**
 * Adds event listeners to the track
 * @param el The track element
 * @param loop Whether to loop the scrolling
 */
// eslint-disable-next-line no-unused-vars
function initTrack(el, loop) {
	let loopInterval;
	function startLoop() {
		if (!loop) return;
		if (loopInterval) clearInterval(loopInterval);
		loopInterval = setInterval(() => {
			scrollTrack(el, 1, loop);
		}, loop);
	}
	startLoop();

	scrollTrack(el, 0, loop);
	// init scroll buttons
	el.find('.trackButtonLeft').each(function() {
		this.addEventListener('click', () => {
			scrollTrack(el, -1, loop);
			if (loopInterval) clearInterval(loopInterval);
		}, { passive:true });
	});
	el.find('.trackButtonRight').each(function() {
		this.addEventListener('click', () => {
			scrollTrack(el, 1, loop);
			if (loopInterval) clearInterval(loopInterval);
		}, { passive:true });
	});

	function clientX(e) {
		return (e.changedTouches ? e.changedTouches[0] : e).clientX;
	}

	let x0 = null;
	function start(e) {
		x0 = clientX(e);
		el.removeClass('transitioning');
		if (loopInterval) clearInterval(loopInterval);
	}

	function move(e) {
		if (x0 !== null) {
			const partial = Math.round(x0 - clientX(e));
			el.get(0).style.setProperty('--partial-offset', `${partial}px`);
		}
	}

	function end(e) {
		if(x0 !== null) {
			const dx = x0 - clientX(e);
			scrollTrack(el, Math.sign(dx), loop, dx);
			x0 = null;
		}
		startLoop();
		el.get(0).style.removeProperty('--partial-offset');
	}

	el.get(0).addEventListener('touchstart', start, { capture:false, passive:true });
	el.get(0).addEventListener('touchmove', move, { capture:false, passive:true });
	el.get(0).addEventListener('touchend', end, { capture:false, passive:true });
	el.get(0).addEventListener('touchcancel', end, { capture:false, passive:true });
}
