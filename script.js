var cssColorToDisplay = document.querySelector("h3");
var colorChoising1 = document.querySelector(".color1");
var colorChoising2 = document.querySelector(".color2");
var	body = document.getElementById("gradient");



// function setGradient () {
// 	body.style.background = 
// 	"linear-gradient(to right, "
// 	+ colorChoising1.value
// 	+ ", "
// 	+ colorChoising2.value
// 	+ ")";
// }

let set = () => {
	body.style.background = 
	"linear-gradient(to right, "
	+ colorChoising1.value
	+ ", "
	+ colorChoising2.value
	+ ")";
}

colorChoising1.addEventListener ("input",set)
colorChoising2.addEventListener("input",set)