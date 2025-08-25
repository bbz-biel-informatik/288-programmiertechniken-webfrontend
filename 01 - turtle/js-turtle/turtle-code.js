function triangle(size) {
  turtle.forward(size);
  turtle.right(120);
  turtle.forward(size);
  turtle.right(120);
  turtle.forward(size);
  turtle.right(120);
}

function circle() {
  for (let i = 1; i <= 360; i++) {
    turtle.right(1);
    turtle.forward(1);
  }
}

function start(turtle) {
  turtle.setSpeed(1);

  // 36x
  for (let i = 1; i <= 10; i++) {
    // 1
    // 2
    // 3
    circle();
    turtle.forward(3);
    turtle.left(10);
  }
}
