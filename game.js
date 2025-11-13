var spieler = document.querySelector(".player");
var spielfeld = document.querySelector(".playground");

spieler.style.left = "0px";
spieler.style.top = "0px";

function loop() {
  if (keyboard(39)) {
    spieler.style.left = parseInt(spieler.style.left) + 5 + "px";
  }
  if (keyboard(37)) {
    spieler.style.left = parseInt(spieler.style.left) - 5 + "px";
  }
  if (keyboard(38)) {
    spieler.style.top = parseInt(spieler.style.top) - 5 + "px";
  }
  if (keyboard(40)) {
    spieler.style.top = parseInt(spieler.style.top) + 5 + "px";
  }

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
