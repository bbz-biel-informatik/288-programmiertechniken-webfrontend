function start(turtle) {
  turtle.setSpeed(1);

  function leaf() {
    for (let i = 1; i <= 90; i++) {
      turtle.forward(1);
      turtle.right(1);
    }
    turtle.right(90);
    for (let i = 1; i <= 90; i++) {
      turtle.forward(1);
      turtle.right(1);
    }
    turtle.right(90);
  }
}
