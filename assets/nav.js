(function () {
	// open and close the mobile menu
	var toggle = function () {
		var $btn = $('.nav-toggle'),
			$main = $('.main'),
			$nav = $('.nav');
		
		$btn.on('click', function (e) {
			e.preventDefault();
			$nav.toggleClass('nav-shown');
			$btn.toggleClass('nav-active');
			$main.toggleClass('nav-open');
		});
	};
	return toggle();
})();