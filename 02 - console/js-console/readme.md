# console

## So startest du
- Öffne die Datei `index.html` im Browser (Doppelklick im explorer).
- Aktualisiere die Seite bei Bedarf mit Cmd+R (macOS) bzw. F5.

## So findest du dich zurecht
Im Script.js wirst du den code schreiben. Hier gibt es besonders
2 Funktionen, die wichtig sind:

**buttonClicked()**
Hier schreibst du, was beim Klicken des Knopfes passieren soll.

**init()**
Dieser Code wird zu Beginn des Programms ausgeführt.

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
const userInput = getInput();
print("Du hast eingegeben: " + userInput);
```

**parseInt(text)**
Wandelt einen Text in eine Zahl um. Nützlich wenn du mit Zahlen rechnen möchtest.
```javascript
const userInput = getInput();
const zahl = parseInt(userInput);
print("Die Zahl mal 2 ist: " + (zahl * 2));
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
const alter = parseInt(getInput());
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

### Schleifen (while)
```javascript
let counter = 0;
while (counter < 5) {
    print("Counter: " + counter);
    counter++;
}
```

## Tipps für den Einstieg

1. **Beginne einfach:** Probiere zuerst `print("Hallo!")` in der `init()` Funktion aus.

2. **Nutze die Eingabe:** Verwende `getInput()` in der `buttonClicked()` Funktion, um auf Benutzereingaben zu reagieren.

3. **Debugge mit print():** Nutze `print()` um zu sehen, was dein Code macht:
   ```javascript
   const zahl = parseInt(getInput());
   print("Eingegebene Zahl: " + zahl); // Zum Debuggen
   ```

4. **Teste schrittweise:** Baue dein Programm Schritt für Schritt auf und teste nach jeder Änderung.

## Häufige Fehler

- **Vergessene Anführungszeichen:** `print(Hallo)` → `print("Hallo")`
- **Zahlen als Text:** `"5" + "3" = "53"` → `parseInt("5") + parseInt("3") = 8`
- **Vergessene Klammern:** `if alter > 18` → `if (alter > 18)`

## Beispielprogramm

```javascript
function buttonClicked() {
    const eingabe = getInput();
    const zahl = parseInt(eingabe);
    
    if (zahl > 10) {
        print("Die Zahl ist größer als 10");
    } else if (zahl < 10) {
        print("Die Zahl ist kleiner als 10");
    } else {
        print("Die Zahl ist genau 10");
    }
}
```