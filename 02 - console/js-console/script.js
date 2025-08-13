const input = document.querySelector("#input");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

/**
 * Wird nach dem Laden der Seite aufgerufen.
 * Hier kannst du z.b zu Beginn etwas ausgeben.
 */
function init() {
  print("Welcome to the console!");
  // do something here
}

/**
 * Wird aufgerufen, wenn der Button geklickt wird.
 */
function buttonClicked() {
  const text = getInput();

  // do something here

  print("You entered: " + text);
}

// ---- Helper Methoden. Diese kannst du für den Moment ignorieren. ----

button.addEventListener("click", buttonClicked);
init();

/**
 * Diese Funktion gibt den Text aus dem Eingabefeld zurück.
 * @returns
 */
function getInput() {
  return input.value;
}

/**
 * Diese Funktion gibt den Text in der Konsole aus.
 */
function print(text) {
  const newLine = document.createElement("li");
  newLine.textContent = text;
  output.prepend(newLine);
}
