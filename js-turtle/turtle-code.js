// turtle-code.js - Students put their turtle drawing code here

// This function is called by the environment when you click "Run Turtle"
// You get the `turtle` object to draw with.
function start(turtle) {
  // Spiral starting from canvas center (400x400 -> center at 200,200)
  turtle.setSpeed(1);

  function drawZickZack() {
    for (let i = 0; i < 30; i++) {
      turtle.forward(10);
      turtle.right(90);
      turtle.forward(10);
      turtle.left(90);
    }
  }

  turtle.right(45);
  for (let i = 0; i < 20; i++) {
    turtle.setPosition(0, i * 20);
    drawZickZack();
  }

  // --> End of Turtle Code <--
  // Alle Commands: https://github.com/leonceaklin/real-turtle?tab=readme-ov-file#commands
}
