(function () {
	// open and close the mobile menu
	if (!document.getElementsByClassName) {
		return; // leave old IE alone
	}

	var addClass = function (el, classname) {
		el.className += ' ' + classname;
	};
	var removeClass = function (el, classname) {
		el.className = el.className.replace(' ' + classname, '');
	};
	var get = function (el) {
		return document.getElementsByClassName(el);
	};

	var toggle = function () {
		var btn = get('nav-toggle')[0],
			main = get('main')[0],
			nav = get('nav')[0],
			open = false;
		
		btn.addEventListener('click', function () {
			if (open) {
				removeClass(nav, 'nav-shown');
				removeClass(btn, 'nav-active');
				removeClass(main, 'nav-open');
				open = false;
			} else {
				addClass(nav, 'nav-shown');
				addClass(btn, 'nav-active');
				addClass(main, 'nav-open');
				open = true;
			}
		}, false);
	};
	return toggle();
})();