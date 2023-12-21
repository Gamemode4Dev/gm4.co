/* global fetchModulesAndResources loadModuleCategories */

$(document).ready(() => {
	resizeVideo();
	Promise.all([
		fetchModulesAndResources(),
		fetch('module_categories.json').then(r => r.json()),
	]).then(([, categories]) => {
		loadModuleCategories(document.getElementById('browse'), categories.module_categories);
	});
});

function resizeVideo() {
	$('iframe').each(function() {
		$(this).css('height', ((parseInt($(this).css('width')) * 9) / 16) + 'px');
	});
}
