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
