const maceAvi = document.getElementById("maceoAvi");
const sophiaAvi = document.getElementById("sophiaAvi");
const mainBtn = document.getElementById("mmBtn");
const mainText = document.getElementById("mainMenu")

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

mainBtn.onclick = function () {
    location.href = "menu.html"
};

mainText.onclick = function() {
    location.href = "menu.html"
}