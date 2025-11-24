let age = await getNumberInput("Geben Sie ihr Alter an");

let alterIn10Jahren = age + 10;
print("In 10 Jahren bist du " + alterIn10Jahren);

// Input als Text
let text = await getInput("Text input");

// Input als Zahl
let number = await getNumberInput("Zahl");

// Wird ausgegeben
print("text");

let city = "Berlin"; // Variable definieren
print(city); // Variable benutzen
city = "Biel"; // Variable verändern
print(city); // Variable benutzen

let score = 0; // Variable definieren
score = score + 10; // Variable verändern (berechnen)
print(score); // Variable verwenden
score = 0; // Variable verändern (direkt)
