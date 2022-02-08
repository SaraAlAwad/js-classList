let element = document.getElementById("element");


function classSmall() {
    element.classList.remove("mid");
    element.classList.remove("big");
    element.classList.add("small");
}
function classMiddel() {
    element.classList.remove("small");
    element.classList.remove("big");
    element.classList.add("middel");

}
function classBig() {
    element.classList.remove("small");
    element.classList.remove("mid");
    element.classList.add("big");

}