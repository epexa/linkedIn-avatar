let options;

const chechStartSearchUsers = () => {
	chrome.extension.sendMessage({method: 'getOptions'}, request => {
		options = request;
		if (options.enabled) {
			document.querySelectorAll(`.EntityPhoto-circle-2,
									   .EntityPhoto-circle-3,
									   .EntityPhoto-circle-4,
									   .EntityPhoto-circle-5,
									   .EntityPhoto-circle-7,
									   .EntityPhoto-circle-9,
									   .msg-facepile-grid__img,
									   .profile-photo-edit__preview,
									   .mn-discovery-person-card__image--with-coverphoto`).forEach(item => {
				// instead of condition can use: className:not([src="${options.avatar}"])
				if (item.src && item.src != options.avatar) item.src = options.avatar;
				else if (item.style.backgroundImage != options.avatar) item.style.backgroundImage = `url("${options.avatar}")`;
			});
		}
		else setTimeout(chechStartSearchUsers, 1000);
	});
}

document.body.addEventListener('DOMSubtreeModified', chechStartSearchUsers);