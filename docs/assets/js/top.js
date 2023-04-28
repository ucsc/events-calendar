
let offset = 100;
let speed = 250;
let duration = 500;
let toTop = document.querySelector(".topbutton");
window.addEventListener('load', function (){
	alert("it's loaded!")
});
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

console.log("Hello World");
