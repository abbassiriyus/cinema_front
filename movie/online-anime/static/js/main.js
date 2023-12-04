

(function (window, document, undefined) {
	'use strict';

	/*==============================
	Header
	==============================*/
	if (document.querySelector('.header')) {
		const headerBtn = document.querySelector('.header__btn');
		const headerNav = document.querySelector('.menu');

		function toggleHeaderMenu() {
			headerBtn.classList.toggle('header__btn--active');
			headerNav.classList.toggle('menu--active');
		}

		headerBtn.addEventListener('click', toggleHeaderMenu);
	}
	/*==============================

	/*==============================
	Player
	==============================*/
	if (document.querySelector('#player')) {
		const player = new Plyr(document.querySelector('#player'));
	}
})(window, document);