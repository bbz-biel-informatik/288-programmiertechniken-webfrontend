// Variablen

var stepDistance = 10; // Definieren

turtle.forward(stepDistance); // Verwenden
stepDistance = 12; // Verändern
turtle.forward(stepDistance); // Wiederverwenden
stepDistance = stepDistance + 1; // Verändern

function triangle() {
  turtle.forward(100);
  turtle.right(120);
  turtle.forward(100);
  turtle.right(120);
  turtle.forward(100);
  turtle.right(120);
}
