// turtle-code.js - Students put their turtle drawing code here

// This function is called by the environment when you click "Run Turtle"
// You get the `turtle` object to draw with.
//
//
function stern() {
  turtle.forward(100);
  turtle.right(144);
  turtle.forward(100);
  turtle.right(144);
  turtle.forward(100);
  turtle.right(144);
  turtle.forward(100);
  turtle.right(144);
  turtle.forward(100);
  turtle.right(144);
  turtle.forward(100);
  turtle.right(144);
}

function triangle() {
  turtle.forward(100);
  turtle.right(120);
  turtle.forward(100);
  turtle.right(120);
  turtle.forward(100);
  turtle.right(120);
}

function quadrat(size) {
  turtle.forward(size);
  turtle.right(90);
  turtle.forward(size);
  turtle.right(90);
  turtle.forward(size);
  turtle.right(90);
  turtle.forward(size);
  turtle.right(90);
}

function halbKreis() {
  for (let i = 0; i < 180; i++) {
    turtle.forward(1);
    turtle.right(1);
  }
}

function halbKreis() {
  for (let i = 0; i < 180; i++) {
    turtle.forward(2);
    turtle.right(1);
  }
}

function triangle(size) {
  turtle.forward(size);
  turtle.right(120);
  turtle.forward(size);
  turtle.right(120);
  turtle.forward(size);
  turtle.right(120);
}

function start(turtle) {
  turtle.setSpeed(1);
}
