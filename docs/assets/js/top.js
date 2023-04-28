
let offset = 100;
let speed = 250;
let duration = 500;
let toTop = document.querySelector(".topbutton");

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
