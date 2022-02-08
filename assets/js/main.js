let element = document.getElementById("element");


function classSmall() {
    console.log("small")
    element.classList.remove("mid");
    element.classList.remove("big");
    element.classList.add("small");
}
function classMiddel() {
    console.log("mid");
    element.classList.remove("small");
    element.classList.remove("big");
    element.classList.add("middel");

}
function classBig() {
    console.log("big");
    element.classList.remove("small");
    element.classList.remove("mid");
    element.classList.add("big");

}