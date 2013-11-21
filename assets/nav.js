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
			contentSection = get('nav__content-section')[0],
			body = document.getElementsByTagName('body')[0],
			nav = get('nav')[0],
			navClosing = false,
			navOpen = false;
		
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			if (navOpen) {
				if (navClosing) {
					// navigation is closing, do nothing until the animation has finished
					// this stops the panel opening empty
					return false;
				} else {
					navClosing = true;
					// wait for css animation to end
					afterClose = setTimeout(function () {
						navClosing = false;
						removeClass(nav, 'nav-open');
						navOpen = false;
					}, 500);
				}
				removeClass(body, 'nav-active');
				navOpen = false;
			} else {
				addClass(body, 'nav-active');
				addClass(nav, 'nav-open');
				navOpen = true;
			}
		}, false);
	};
	return toggle();
})();

if (Barclays.mode['gte-md']) { // ideally we'd get this as dot notation, eg Barclays.mode.gte.md
			$nav.toggleClass('nav-open');
		} else {
			if (navOpen) {
				if (navClosing) {
					// navigation is closing, do nothing until the animation has finished
					// this stops the panel opening empty
					return false;
				} else {
					navClosing = true;
					// wait for css animation to end
					afterClose = setTimeout(function () {
						navClosing = false;
						$nav.removeClass('nav-open');
						navOpen = false;
					}, 500);
				}
			} else {
				$nav.addClass('nav-open');
				navOpen = true;
			}
		}