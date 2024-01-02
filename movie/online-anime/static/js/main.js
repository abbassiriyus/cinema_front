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
	// window.onload = function () {
	// 	document.onkeydown = function () {
	// 		var e = window.event || arguments[0];
	// 		// Щит F12
	// 		if (e.keyCode == 123) {

	// 			return false;
	// 			// Щит Ctrl + Shift + I
	// 		} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {

	// 			return false;
	// 			// Щит Ctrl + Shift + U
	// 		} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 67)) {

	// 			return false;
	// 			// Щит Ctrl + U
	// 		} else if ((e.ctrlKey) && (e.keyCode == 85)) {

	// 			return false;
	// 			// Щит Shift + F10
	// 		} else if ((e.shiftKey) && (e.keyCode == 121)) {

	// 			return false;
	// 		}
	// 	};
	// 	// Щиток правой кнопкой мыши
	// 	document.oncontextmenu = function () {

	// 		return false;
	// 	}
	// }

})(window, document);
