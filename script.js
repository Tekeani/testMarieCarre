const carre = document.querySelector("#carre");

let x = 0;
let y = 0;

document.addEventListener("keydown", function(deplacement) {

    if (deplacement.key === "ArrowRight") {
        x = x + 10;
    }

    if (deplacement.key === "ArrowLeft") {
        x = x - 10;
    }

    if (deplacement.key === "ArrowDown") {
        y = y + 10;
    }

    if (deplacement.key === "ArrowUp") {
        y = y - 10;
    }

    carre.style.left = x + "px";
    carre.style.top = y + "px";
});