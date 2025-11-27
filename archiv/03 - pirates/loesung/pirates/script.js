let myShip = document.querySelector("#my-ship");

let enemy = document.querySelector("#enemy");
let time = document.querySelector("#time");
let sea = document.querySelector("body");

sea.style.backgroundColor = "rgba(15, 203, 221, 1)";

enemy.style.position = "absolute";
myShip.style.position = "absolute";

myShip.style.left = 10;
myShip.style.top = 10;
myShip.style.height = 100;
myShip.style.width = 100;

enemy.style.left = 400;
enemy.style.top = 400;

enemy.style.height = 100;
enemy.style.width = 100;

let seconds = 0;

setInterval(() => {
  // Das hier passiert nun alle Sekunden
  seconds++;
  time.innerHTML = seconds;
}, 1000);

document.addEventListener("keydown", function (event) {
  checkCollision();
  if (event.key == "ArrowRight") {
    const currentPosition = parseInt(myShip.style.left);
    const nextPosition = currentPosition + 10;
    myShip.style.left = nextPosition;
  }

  if (event.key == "ArrowLeft") {
    const currentPosition = parseInt(myShip.style.left);
    const nextPosition = currentPosition - 10;
    myShip.style.left = nextPosition;
  }
  if (event.key == "ArrowDown") {
    const currentPosition = parseInt(myShip.style.top);
    const nextPosition = currentPosition + 10;
    myShip.style.top = nextPosition;
  }
  if (event.key == "ArrowUp") {
    const currentPosition = parseInt(myShip.style.top);
    const nextPosition = currentPosition - 10;
    myShip.style.top = nextPosition;
  }
});

myShip.addEventListener("click", function () {
  const audio = new Audio("chanty.mp3");
  audio.play();
});

function checkCollision() {
  if (
    Math.abs(parseInt(myShip.style.top) - parseInt(enemy.style.top)) < 50 &&
    Math.abs(parseInt(myShip.style.left) - parseInt(enemy.style.left)) < 50
  ) {
    alert("You catched the ship in " + seconds + " seconds");
  }
}
