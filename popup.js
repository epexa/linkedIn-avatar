let options;

const $avatarInput = document.getElementById('avatar'),
	  $enabledCheckbox = document.getElementById('enabled'),
	  $testBtn = document.getElementById('test');

chrome.runtime.sendMessage({ method: 'getOptions' }, response => {
	options = response;
	$avatarInput.value = options.avatar;
	$enabledCheckbox.checked = options.enabled;
});

$avatarInput.addEventListener('change', () => {
	options.avatar = $avatarInput.value;
	chrome.runtime.sendMessage({ method: 'setOptions', options: options });
});

$enabledCheckbox.addEventListener('change', () => {
	options.enabled = $enabledCheckbox.checked;
	chrome.runtime.sendMessage({ method: 'setOptions', options: options });
});

$testBtn.addEventListener('click', e => {
	e.preventDefault();
	if ($enabledCheckbox.checked) chrome.tabs.create({ url: 'https://www.linkedin.com/search/results/people/' });
	else alert('Need enable!');
});