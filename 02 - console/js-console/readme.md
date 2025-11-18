# console

## So startest du

- Öffne die Datei `index.html` im Browser (Doppelklick im explorer).
- Aktualisiere die Seite bei Bedarf mit Cmd+R (macOS) bzw. F5.

## So findest du dich zurecht

Im Script.js wirst du den code schreiben. Hier gibt es besonders
3 Funktionen, die wichtig sind:

```javascript
// Einen Text auf der Konsole ausgeben
print("Hallo Welt!");
// Den User nach einem Text fragen (String)
const myText = await getInput("Geben Sie ein Text ein");
// Den User nach einer Zahl fragen (Number)
const myNumber = await getTextInput("Geben Sie eine Zahl ein");
```

**await** bedeutet, dass die Funktion asynchron ist. Das heißt, das Programm wartet auf die Eingabe des Users, bevor es weitergeht.

## Funktionen

**print(text)**
Gibt einen Text in der Konsole aus. Der Text wird oben in der grünen Ausgabe angezeigt.

```javascript
print("Hallo Welt!");
print("Das Resultat ist: " + resultat);
```

**getInput()**
Holt den Text aus dem Eingabefeld. Diese Funktion gibt den eingegebenen Text als String zurück.

```javascript
const userInput = await getInput();
print("Du hast eingegeben: " + userInput);
```

**getNumberInput()**
Wandelt einen Text in eine Zahl um. Nützlich wenn du mit Zahlen rechnen möchtest.

```javascript
const zahl = await getNumberInput();
print("Die Zahl mal 2 ist: " + zahl * 2);
```

**Math.random()**
Generiert eine Zufallszahl zwischen 0 und 1.

```javascript
const zufallszahl = Math.round(Math.random() * 100); // Zahl zwischen 0 und 100
```

## Programmierkonzepte

### Variablen

```javascript
let name = "Max";
let alter = 25;
let istStudent = true;
```

### Bedingungen (if/else)

```javascript
const alter = getNumberInput();
if (alter >= 18) {
  print("Du bist volljährig");
} else {
  print("Du bist minderjährig");
}
```

### Schleifen (for)

```javascript
// Zählt von 1 bis 10
for (let i = 1; i <= 10; i++) {
  print("Zahl: " + i);
}
```

## Tipps für den Einstieg

1. **Beginne einfach:** Probiere zuerst `print("Hallo!")`

2. **Nutze die Eingabe:** Verwende `getInput()`, um auf Benutzereingaben zu reagieren.

3. **Debugge mit print():** Nutze `print()` um zu sehen, was dein Code macht:

   ```javascript
   const zahl = getNumberInput();
   print("Eingegebene Zahl: " + zahl); // Zum Debuggen
   ```

4. **Teste schrittweise:** Baue dein Programm Schritt für Schritt auf und teste nach jeder Änderung.

## Beispielprogramm

```javascript
const zahl = getNumberInput("Geben Sie eine Zahl ein:");

if (zahl > 10) {
  print("Die Zahl ist größer als 10");
} else if (zahl < 10) {
  print("Die Zahl ist kleiner als 10");
} else {
  print("Die Zahl ist genau 10");
}
```
