jQuery(document).ready(function ($) {
	var offset = 100;
	var speed = 250;
	var duration = 500;
	$(window).scroll(function () {
		if ($(this).scrollTop() < offset) {
			$('.topbutton').fadeOut(duration);
		} else {
			$('.topbutton').fadeIn(duration);
		}
	});

	$('.topbutton').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, speed);
		return false;
	});
});

// pastebin
window.scroll(function () {
	if (this.scrollTop() < offset) {
		toTop.fadeOut(duration);
	} else {
		toTop.fadeIn(duration);
	}
});

toTop.addEventListener('click', (e) => {
	$('html, body').animate({ scrollTop: 0 }, speed);
	return false;
});