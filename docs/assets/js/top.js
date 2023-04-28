
let offset = 100;
let speed = 250;
let duration = 500;
let toTop = document.querySelector("a.topbutton");
let btnVisibility = () => {
	if (window.scrollY > 400) {
		toTop.style.visibility = "visible";
	} else {
		toTop.style.visibility = "hidden";
	}
};
document.addEventListener("scroll", () => {
	btnVisibility();
});
toTop.addEventListener('click', function (e) {
	e.preventDefault();
	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
