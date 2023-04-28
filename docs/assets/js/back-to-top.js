function backToTop() {
	let offset = 400;
	let toTop = document.querySelector(".topbutton");
	let btnVisibility = () => {
		if (window.scrollY < offset) {
			toTop.style.visibility = "hidden";
		} else {
			toTop.style.visibility = "visible";
		}
	};
	document.addEventListener("scroll", () => {
		btnVisibility();
	});
	toTop.addEventListener('click', function (e) {
		e.preventDefault();
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	});
}

window.addEventListener('load', backToTop );
