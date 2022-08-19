const taylorAvi = document.getElementById("taylorAvi");
const sophiaAvi = document.getElementById("sophiaAvi");
const joshuaAvi = document.getElementById("joshuaAvi");
const maceAvi = document.getElementById("maceoAvi");
const mainBtn = document.getElementById("mmBtn");
const mainText = document.getElementById("mainMenu");

taylorAvi.onmouseover = function (event) {
    event.preventDefault();
    taylorAvi.src="./assets/img/deathknight.png";
};

taylorAvi.onmouseout = function (event) {
    event.preventDefault();
    taylorAvi.src="./assets/img/taylor.jpg";
};

maceAvi.onmouseover = function (event) {
    event.preventDefault();
    maceoAvi.src="./assets/img/shogo.jpg";
};

maceAvi.onmouseout = function (event) {
    event.preventDefault();
    maceoAvi.src="./assets/img/maceo.jpg";
};

sophiaAvi.onmouseover = function (event) {
    event.preventDefault();
    sophiaAvi.src="./assets/img/darkknight.png"
};

sophiaAvi.onmouseout = function (event) {
    event.preventDefault();
    sophiaAvi.src="./assets/img/sophia.jpeg"
};

joshuaAvi.onmouseover = function (event) {
    event.preventDefault();
    joshuaAvi.src="./assets/img/businessbaboon.jpg"
};

joshuaAvi.onmouseout = function (event) {
    event.preventDefault();
    joshuaAvi.src="./assets/img/josh.jpg"
};

mainBtn.onclick = function () {
    location.href = "menu.html"
};

mainText.onclick = function() {
    location.href = "menu.html"
}


