$(document).ready(() => {
	document.querySelector('.serverIp .copyButton').addEventListener('click', () => {
		navigator.clipboard.writeText('server.gm4.co');
	});
});
