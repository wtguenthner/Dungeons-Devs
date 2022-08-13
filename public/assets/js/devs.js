var maceAvi = document.getElementById("maceoAvi")
var sophiaAvi = document.getElementById("sophiaAvi")

maceAvi.addEventListener('mouseover', function (event) {
    event.preventDefault();
    maceoAvi.src="./assets/img/shogo.jpg";
})

maceAvi.addEventListener('mouseout', function (event) {
    event.preventDefault();
    maceoAvi.src="./assets/img/maceo.jpg";
})

sophiaAvi.addEventListener('mouseover', function (event) {
    event.preventDefault();
    sophiaAvi.src="./assets/img/darkknight.png"
})

sophiaAvi.addEventListener('mouseout', function (event) {
    event.preventDefault();
    sophiaAvi.src="./assets/img/sophia.jpeg"
})