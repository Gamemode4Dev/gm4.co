let pageLoaded = false;
$(document).ready(() => {
	pageLoaded = true;

	if($('#latest_change_box').length > 0) {
		//this is the NEW module page that has git changelogs
		const module_name = $('#module_name').html().replace(/\s/g, '_').toLowerCase();
		$.ajax({ url:'https://api.github.com/repos/Gamemode4Dev/GM4_Datapacks/commits?per_page=1&sha=master&path=gm4_' + module_name + '/data' }).done((data) => {
			const timestamp = new Date(data[0].commit.committer.date);
			const prettydate = timestamp.toLocaleString('default', { day:'2-digit', month:'short', year:'numeric' });
			$('#latest_change_box').html('<h2 style=\'margin-top:20px;\'>Last updated ' + prettydate + '</h2><p>' + data[0].commit.message.split('\n')[0] + '</p>');
			$('#more_changelogs_link').html('View Older Changes');
		});
	}
});

const loadWait = setInterval(()=> { //triggered by document.onload in header
	if(pageLoaded) {
		$('.versionLink').last().addClass('selectedVersion');
		$('.installsBox').last().show();

		$('.versionLink').click(function() {
			$('.installsBox').hide();
			$('#installs_' + String($(this).prop('id')).substring(5)).show();
			$('.versionLink').removeClass('selectedVersion');
			$(this).addClass('selectedVersion');
		});
		$('.languageSelect').each(function() {
			//console.log($(this).attr("data-languageSource"));
			const langObj = JSON.parse($(this).attr('data-languageSource').replace(/<QUOT>/g, '\''));
			$(this).html('');
			$(this).change(function() {updateLang(this);});
			for(let i = 0;i < langObj.languages.length;i++) {
				$(this).append('<option value=\'' + i + '\'>' + langObj.languages[i].language + '</option>');
			}
		});
		clearInterval(loadWait);
	}
}, 100);

function updateLang(caller) {
	const langSource = $(caller).closest('.hiddenLangSource').value;
	console.log(langSource);
}
