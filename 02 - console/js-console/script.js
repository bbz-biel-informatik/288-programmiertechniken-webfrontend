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
  const number = parseInt(text);

  let letzteNummer = 1;
  let vorletzteNummer = 1;
  for (let i = 0; i < number; i++) {
    print(letzteNummer + vorletzteNummer);
  }

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
  const value = input.value;
  input.value = ""; // Clear the input field after getting the value
  return value;
}

/**
 * Diese Funktion gibt den Text in der Konsole aus.
 */
function print(text) {
  const newLine = document.createElement("li");
  newLine.textContent = text;
  output.prepend(newLine);
}
