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
	window.onload = function () {
		document.onkeydown = function () {
			var e = window.event || arguments[0];
			// Щит F12
			if (e.keyCode == 123) {

				return false;
				// Щит Ctrl + Shift + I
			} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {

				return false;
				// Щит Ctrl + Shift + U
			} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 67)) {

				return false;
				// Щит Ctrl + U
			} else if ((e.ctrlKey) && (e.keyCode == 85)) {

				return false;
				// Щит Shift + F10
			} else if ((e.shiftKey) && (e.keyCode == 121)) {

				return false;
			}
		};
		// Щиток правой кнопкой мыши
		document.oncontextmenu = function () {
			return false;
		}
	}
	// Add an event listener to the document for the contextmenu event
	document.addEventListener('contextmenu', function (e) {
		// Allow the right-click by preventing the default behavior
		e.preventDefault();
	});
	// Disable right-click
	document.addEventListener('contextmenu', (e) => e.preventDefault());

	function ctrlShiftKey(e, keyCode) {
		return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
	}

	document.onkeydown = (e) => {
		// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
		if (
			event.keyCode === 123 ||
			ctrlShiftKey(e, 'I') ||
			ctrlShiftKey(e, 'J') ||
			ctrlShiftKey(e, 'C') ||
			(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
		)
			return false;
	};
})(window, document);
