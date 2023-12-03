
/*==============================
	Header
	==============================*/
if (document.querySelector('.header')) {
	const headerBtn = document.querySelector('.header__btn');
	const headerNav = document.querySelector('.sidebar');

	function toggleHeaderMenu() {
		headerBtn.classList.toggle('header__btn--active');
		headerNav.classList.toggle('sidebar--active');
	}

	headerBtn.addEventListener('click', toggleHeaderMenu);
}
/*==============================
Upload
==============================*/
if (document.getElementById('sign__gallery-upload')) {
	var galleryUpload = document.getElementById('sign__gallery-upload');

	galleryUpload.addEventListener('change', function (event) {
		var length = event.target.files.length;
		var galleryLabel = galleryUpload.getAttribute('data-name');
		var label = document.querySelector(galleryLabel);

		if (length > 1) {
			label.textContent = length + " files selected";
		} else {
			label.textContent = event.target.files[0].name;
		}
	});
}

if (document.querySelector('.sign__video-upload')) {
	document.querySelectorAll('.sign__video-upload').forEach(function (element) {
		element.addEventListener('change', function () {
			var videoLabel = element.getAttribute('data-name');
			var vlabel = document.querySelector(videoLabel);

			if (element.value !== '') {
				vlabel.textContent = element.files[0].name;
			} else {
				vlabel.textContent = "Upload video";
			}
		});
	});
}

/*==============================
Section bg
==============================*/
if (document.querySelector('.section--bg')) {
	var mainBg = document.querySelector('.section--bg');

	if (mainBg.getAttribute('data-bg')) {
		mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`;
		mainBg.style.backgroundPosition = 'center center';
		mainBg.style.backgroundRepeat = 'no-repeat';
		mainBg.style.backgroundSize = 'cover';
	}
}