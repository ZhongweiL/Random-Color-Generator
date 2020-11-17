const btn = document.querySelector(".toggle");
const resetBtn = document.querySelector(".reset");

btn.onclick = function () {
	color = randomColor();
	document.querySelector("body").style.backgroundColor = color;
	document.querySelector(".RGB").innerHTML = color;
};

resetBtn.onclick = function () {
	document.querySelector("body").style.backgroundColor = "RGB(255, 255, 255)";
	document.querySelector(".RGB").innerHTML = "RGB(255, 255, 255)";
};

function randomColor() {
	blue = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	red = Math.floor(Math.random() * 256);
	return `RGB(${blue}, ${green}, ${red})`;
}
