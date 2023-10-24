var main = document.querySelector("#main");
var aero = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
    aero.style.left = dets.x + "px";
    aero.style.top = dets.y + "px";
})