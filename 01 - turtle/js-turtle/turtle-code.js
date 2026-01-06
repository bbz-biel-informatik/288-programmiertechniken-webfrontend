function start(turtle) {
  turtle.setSpeed(1);
}

let spieler = document.querySelector("#player");

function loop() {
  // Collision check
  let obstacles = document.querySelectorAll(".obstacle"); // Das sind die Hindernisse zum beispiel.
  if (anyCollision(spieler, obstacles)) {
    alert("Game over!");
    return;
  }
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
