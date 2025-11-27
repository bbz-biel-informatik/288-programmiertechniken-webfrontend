const tiltBtn = document.getElementById("tilt-btn");
let isTilted = false; // A variable to remember the state

tiltBtn.addEventListener("click", function () {
  if (isTilted === false) {
    // Apply the tilt
    document.body.style.transform = "rotate(-1.5deg)";
    document.body.style.transition = "transform 0.5s ease"; // Make it smooth

    isTilted = true; // Update the state
  } else {
    // Reset to normal
    document.body.style.transform = "none";
    document.body.style.overflow = "auto";

    isTilted = false; // Update the state
  }
});
