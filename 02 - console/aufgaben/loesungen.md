

# Console Übungen

## Inhalt

1. [Variablen und Operationen](#variablen-und-operationen)
   - [1. Alter in 10 Jahren](#1-alter-in-10-jahren)
   - [2. Alter aus Jahrgang berechnen](#2-alter-aus-jahrgang-berechnen)
   - [3. Name begrüßen](#3-name-begrüßen)
   - [4. Kreisumfang berechnen](#4-kreisumfang-berechnen)
   - [5. So oft mal Hello World ausgeben](#5-so-oft-mal-hello-world-ausgeben)
   - [6. Reihe](#6-reihe)
   - [7. Anzahl Zeichen](#7-anzahl-zeichen)

2. [Bedingungen](#bedingungen)
   - [1. Schulnote bestanden oder nicht](#1-schulnote-bestanden-oder-nicht)
   - [2. Positiv, negativ oder Null](#2-positiv-negativ-oder-null)
   - [3. Haputstadt](#3-Hauptstadt)
   - [4. Quiz](#4-quiz)
   - [5. Outfit-o-mat](#5-outfit-o-mat)
   - [6. Zauberwort](#6-zauberwort)

3. [Schleifen und Bedingungen (Zusatz)](#zusatz---schleifen-und-bedingungen)
  - [1. Summe der ersten 20 Zahlen](#1-summe-der-ersten-20-zahlen)
  - [2. Rizz-O-Meter](#2-rizz-o-meter)
  - [3. Hashtag-Maker](#3-hashtag-maker)
  - [4. Döner Preis](#4-döner-preis)

---


## Variablen und Operationen

### 1. Alter in 10 Jahren
**Aufgabe:**  
Schreibe ein Programm, das dich nach deinem Alter fragt, und dein Alter in 10 Jahren anzeigt.

**Lösung:**  
```javascript
let age = await getNumberInput("Wie alt bist du?");

let ageIn10Yrs = age + 10;

print("In 10 Jahren bist du: " + ageIn10Yrs);

```

---

### 2. Alter aus Jahrgang berechnen
**Aufgabe:**  
Schreibe ein Programm, das dich nach deinem Jahrgang fragt und dann dein Alter anzeigt.

**Lösung:**  
```javascript
let year = await getNumberInput("Wie ist den jahrgang?");

let age = 2025 - year;

print("Du bist " + age + " Jahre alt");
```

---

### 3. Name begrüßen
**Aufgabe:**  
Schreibe ein Programm, welches nach dem Namen fragt und dann schreibt: "Hallo, name"

**Lösung:**  
```javascript
// Hier brauchen wir getInput() und nicht getNumberInput()
let name = await getInput("Wie heisst du?");

print("Hallo, " + name);
```

---

### 4. Kreisumfang berechnen
**Aufgabe:**  
Schreibe ein Programm, welches nach dem Radius fragt und den Umfang eines Kreises ausgibt.
Tipp: Die Formel ist U = 2 * pi * r;

**Lösung:**  
```javascript
let radius = await getNumberInput("Geben Sie den Radius des Kreises ein:");
let pi = 3.14159;
let umfang = 2 * pi * radius;
print("Der Umfang des Kreises beträgt: " + umfang);
```

---

### 5. So oft mal Hello World ausgeben
**Aufgabe:**  
Schreibe ein Programm, welches nach einer Zahl fragt und dann so oft "Hello, world!" ausgibt

**Lösung:**  
```javascript
let anzahl = await getNumberInput("Geben Sie eine Zahl ein:");
for (let i = 0; i < anzahl; i++) {
  print("Hello, world!");
}
```

---
### 6. Reihe
**Aufgabe:**  
Schreibe ein Programm, welches nach einer Zahl fragt und dann die entsprechende Reihe angibt.

**Lösung:**  
```javascript
let reihe = await getNumberInput("Von welcher Zahl möchtest du die Reihe sehen?");

for (let i = 1; i <= 10; i++) {
  let ergebnis = reihe * i;
  print(ergebnis);
}

```
---
### 7. Anzahl Zeichen
**Aufgabe:**  
Schreibe ein Programm, welches von der Eingabe die Anzahl Zeichen berechnet.

**Lösung:**  
```javascript
let someText = await getInput("Geben Sie einen Text ein:");
print("Der Text hat " + someText.length + " Zeichen.");
```
---

## Bedingungen

### 1. Schulnote bestanden oder nicht

**Aufgabe:**  
Schreibe ein Programm, das für eine eingegebene Schulnote (1–6) anzeigt, ob die Prüfung bestanden ist oder nicht.

**Lösung:**

```javascript
let note = await getNumberInput("Geben Sie Ihre Note ein (1-6):");

if (note >= 4) {
  print("Bestanden");
} else {
  print("Nicht bestanden");
}
```

---

### 2. Positiv, negativ oder Null

**Aufgabe:**  
Schreibe ein Programm, das für eine eingegebene Zahl anzeigt, ob sie negativ, positiv oder Null ist.

**Lösung:**

```javascript
  const zahl = await getNumberInput("Gib eine zahl ein")

  if (zahl > 0) {
    print("Die Zahl " + zahl + " ist positiv.");
  } else if (zahl < 0) {
    print("Die Zahl " + zahl + " ist negativ.");
  } else {
    print("Die Zahl ist Null.");
  }

```

---

### 3. Hauptstadt

**Aufgabe:**
Schreibe Programm, welches für ein eingegebenes Land die Hauptstadt ausgibt. Zum Beispiel:

**Lösung:**

```javascript
let country = await getInput("Geben Sie ein Land ein:");

if (country === "Deutschland") {
  print("Die Hauptstadt von Deutschland ist Berlin");
} else if (country === "Schweden") {
  print("Die Hauptstadt von Schweden ist Stockholm");
} else if (country === "USA") {
  print("Die Hauptstadt von USA ist Washington");
} else {
  print("Ich kenne die Hauptstadt nicht");
}
```

---

### 4. Quiz

**Aufgabe:**
Schreibe ein Quiz nach dem folgenden Schema. Wenn der Benutzer die Antwort richtig hat, schreibe jeweils: "Das ist Richtig!" sonst, schreibe: "Das ist falsch". (Inklusive Zusatz: Punktestand speichern)

**Lösung:**
```javascript
let score = 0;
let antwort1 = await getInput("In welchem Land liegt Levi?");
if (antwort1 == "Finnland") {
  score++;
  print("Richtig! Levi liegt in Finnland.");
} else {
  print("Falsch! Die richtige Antwort ist Finnland.");
}

let antwort2 = await getInput("Wo wird die Winter Olympia 2026 ausgetragen?");
if (antwort2 == "Milano" || antwort2 == "Cortina d'ampezzo") {
  score++;
  print(
    "Richtig! Die Winter Olympia 2026 wird in Milano oder Cortina d'ampezzo ausgetragen."
  );
} else {
  print("Falsch! Die richtige Antwort ist Milano oder Cortina d'ampezzo.");
}

print("Dein Gesamtscore ist: " + score + " von 2.");
```

---
### 5. Outfit-o-mat
**Aufgabe:**  
 Schreibe ein Programm, wo du die Temperatur eingeben kannst. Der Automat soll dir dann vorschlagen, welches Outfit sinn macht.

**Lösung:**

```javascript
let temp = await getNumberInput("Gib die aktuelle Temperatur in °C ein:");
if (temp < 0) {
  print("Sicher Handschuhe! 🧤");
} else if (temp >= 0 && temp < 10) {
  print("Ich würde eine warme Jacke anziehen.🧥");
} else if (temp >= 10 && temp < 20) {
  print("Sicher noch lange Hosen. 👖");
} else if (temp >= 20 && temp < 30) {
  print("Sonnenbrille und tshirt. 😎");
} else {
  print("Tshirt, kurze Hose und ein aperol spritz! 🍹");
}
```

---


### 6. Zauberwort
**Aufgabe:**  
Input: ein Wunsch (z. B. kann ich gehen bitte).
Wenn das Wort "bitte" drin ist → „Klar! 🫶"
Wenn nicht → "Wie ist das Zauberwort?"

**Lösung:**

```javascript
function buttonClicked() {
    const wunsch = getInput();
    
    if (wunsch.includes("bitte")) {
        print("Klar! 🫶");
    } else {
        print("Wie ist das Zauberwort?");
    }
}
```

---

## Zusatz - Schleifen und Bedingungen


### 1. Summe der ersten 20 Zahlen

**Aufgabe:**  
Schreibe ein Programm, das die Summe der ersten 20 Zahlen in einer Schleife berechnet (`1 + 2 + ... + 20`).  
Zur Kontrolle: Das Resultat sollte `210` sein.

**Lösung:**

```javascript
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
print("Die Summe der ersten 20 Zahlen ist: " + sum);
```

---

### 2. Rizz-O-Meter
**Aufgabe:**  
Eingabe = Name → gib einen „Rizz-Score" aus.
Der Rizz score ergibt sich aus der Länge des Namens und einer Zufallszahl mit der folgenden Formel:
Länge * Zufallszahl % 100

**Lösung:**

```javascript
let name = await getInput("Geben Sie Ihren Namen ein:");
let laenge = name.length;
let zufallszahl = Math.random() * 100;
let rizzScore = (laenge * zufallszahl) % 100;
print("Der Name hat: " + rizzScore + " rizz");
```

---

### 3. Hashtag-Maker
**Aufgabe:**  
Als Eingabe soll ein Satz dienen. Die Ausgabe soll den Satz mit Hashtags ausschmücken.
Beispiel: "Biel hat 100 Aura" → "#Biel #hat #100 #Aura"

**Lösung:**

```javascript
let satz = await getInput("Geben Sie einen Satz ein:");
let hashtags = satz.replace(" ", " #");
print("Mit Hashtags: " + hashtags);
```

---

### 4. Döner Preis
**Aufgabe:**  
Schreibe ein Programm, welches nach dem Preis des Döners fragt.
Wenn er unter 10 Franken ist, schreibe: "Gönjamin".
Ist er über 10 Franken, schreibe: "Inflation 😵"

**Lösung:**

```javascript
let preis = await getNumberInput("Geben Sie den Preis des Döners ein:");
if (preis < 10) {
  print("Gönjamin");
} else {
  print("Inflation 😵") ;
}
```

---

