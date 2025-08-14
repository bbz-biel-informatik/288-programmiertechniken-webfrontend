// turtle-code.js - Students put their turtle drawing code here

// This function is called by the environment when you click "Run Turtle"
// You get the `turtle` object to draw with.
function start(turtle) {
  // --> Turtle code here <--

  turtle.setSpeed(10); // Set the speed of the turtle
  function circle(size) {
    for (let i = 0; i < 360; i++) {
      turtle.forward(size);
      turtle.right(1);
    }
  }

  for (let i = 0; i < 36; i++) {
    circle(1);
    turtle.forward(3);
    turtle.left(10);
  }

  // --> End of Turtle Code <--
  // Alle Commands: https://github.com/leonceaklin/real-turtle?tab=readme-ov-file#commands
}
