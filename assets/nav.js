(function () {
	var breakpoint = 480; // breakpoint where nav changes from mobile view
	// open and close the mobile menu
	if (!document.getElementsByClassName) {
		return; // leave old IE alone
	}

	function addClass (el, classname) {
		el.className += ' ' + classname;
	}
	function removeClass (el, classname) {
		el.className = el.className.replace(' ' + classname, '');
	}
	function get (el) {
		return document.getElementsByClassName(el);
	}

	var init = function () {
		var btn = get('nav-toggle')[0],
			contentSection = get('nav__content-section')[0],
			body = document.getElementsByTagName('body')[0],
			nav = get('nav')[0],
			links = get('nav-list__link'),
			navClosing = false,
			navOpen = false;
		
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			if (navClosing) {
				// navigation is closing, do nothing until the animation has finished
				// this stops the panel opening empty
				return false;
			}
			if (navOpen) {
					navClosing = true;
					// wait for css animation to end
					afterClose = setTimeout(function () {
						navClosing = false;
						removeClass(nav, 'nav-open');
						navOpen = false;
					}, 500);
				// }
				removeClass(body, 'nav-active');
				navOpen = false;
			} else {
				addClass(body, 'nav-active');
				addClass(nav, 'nav-open');
				navOpen = true;
			}
		}, false);

		links[links.length - 1].addEventListener('keydown', function (e) {
			// loop back to toggle when mobile navigation open
			// prevents tabbing into content when pushed out
			if (e.keyCode === 9 && window.innerWidth < breakpoint) {
				e.preventDefault();
				btn.focus();
			}
		});

		// disable CSS animation when resizing window/changing orientation
		var resizing = false,
			resizeEnd;
		window.addEventListener('resize', function () {
			clearTimeout(resizeEnd);
			if (!resizing) {
				resizing = true;
				addClass(body, 'window-resize');
			}
			resizeEnd = setTimeout(function () {
				removeClass(body, 'window-resize');
				resizing = false;
			}, 500);
		});
	};
	return init();
})();