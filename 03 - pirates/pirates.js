const ship = document.querySelector("#my-ship");
const sea = document.querySelector("#sea");

ship.style.width = "100px";
ship.style.height = "100px";
sea.style.backgroundColor = "#87CEEB"; // Himmelblau

ship.addEventListener("click", function () {
  showShipPopup();
});

function distanceToTreasure(treasure) {
  const shipTop = parseInt(ship.style.top) || 0;
  const shipLeft = parseInt(ship.style.left) || 0;
  const treasureTop = parseInt(treasure.style.top) || 0;
  const treasureLeft = parseInt(treasure.style.left) || 0;

  return Math.sqrt(
    Math.pow(shipTop - treasureTop, 2) + Math.pow(shipLeft - treasureLeft, 2)
  );
}

function showShipPopup() {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.position = "absolute";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "white";
  popup.style.padding = "20px";
  popup.style.border = "1px solid black";
  popup.innerText =
    "Der Schatz ist so weit entfernt: " +
    distanceToTreasure(document.querySelector(".treasure")).toFixed(2) +
    " Pixel.";

  popup.addEventListener("click", function () {
    popup.remove();
  });
  document.body.appendChild(popup);
}

function placeEnemy() {
  const enemy = document.createElement("div");
  enemy.className = "enemy";
  enemy.style.width = "50px";
  enemy.style.height = "50px";
  enemy.style.backgroundColor = "black";
  enemy.style.position = "absolute";
  enemy.style.top = Math.random() * 1000 + "px";
  enemy.style.left = Math.random() * 1000 + "px";
  sea.appendChild(enemy);
}

function placeTreasure() {
  const treasure = document.createElement("div");
  treasure.className = "treasure";
  treasure.style.width = "30px";
  treasure.style.height = "30px";
  treasure.style.backgroundColor = "gold";
  treasure.style.position = "absolute";
  treasure.style.top = Math.random() * 1000 + "px";
  treasure.style.left = Math.random() * 1000 + "px";
  treasure.style.display = "none"; // Initially hidden
  sea.appendChild(treasure);
}

function sing() {
  // run chanty.mp3
  const audio = new Audio("chanty.mp3");
  audio.play();
}

function moveShip(key) {
  if (key === "ArrowUp") {
    ship.style.top = (parseInt(ship.style.top) || 0) - 10 + "px";
  } else if (key === "ArrowDown") {
    ship.style.top = (parseInt(ship.style.top) || 0) + 10 + "px";
  } else if (key === "ArrowLeft") {
    ship.style.left = (parseInt(ship.style.left) || 0) - 10 + "px";
  } else if (key === "ArrowRight") {
    ship.style.left = (parseInt(ship.style.left) || 0) + 10 + "px";
  } else if (key === " ") {
    sing();
  }
}

document.addEventListener("keydown", function (event) {
  moveShip(event.key);
  checkTreasure();
  moveEnemies();
});

function moveEnemies() {
  const enemies = document.querySelectorAll(".enemy");
  enemies.forEach((enemy) => {
    const top = parseInt(enemy.style.top) || 0;
    const left = parseInt(enemy.style.left) || 0;
    enemy.style.top = top + (Math.random() - 0.5) * 20 + "px";
    enemy.style.left = left + (Math.random() - 0.5) * 20 + "px";
  });
}

function checkTreasure() {
  const treasure = document.querySelector(".treasure");
  if (treasure.top === ship.style.top && treasure.left === ship.style.left) {
    treasure.style.display = "block"; // Show the treasure
    alert("Du hast den Schatz gefunden!");
  }
}

for (let i = 0; i < 5; i++) {
  placeEnemy();
}
placeTreasure();
