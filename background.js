let options = {
	avatar: 'https://politiplatform.com/img/politicians/donald_trump/avatar.jpg',
	enabled: false
};

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
	switch (request.method) {
		case 'setOptions': {
			options = request.options;
			break;
		}
		case 'getOptions': {
			sendResponse(options);
			break;
		}
	}
});