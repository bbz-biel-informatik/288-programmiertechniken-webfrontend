const input = document.querySelector("#input");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

// ---- Helper Methoden. Diese kannst du für den Moment ignorieren. ----

button.addEventListener("click", buttonClicked);
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buttonClicked();
  }
});
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
