

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
   - [3. Outfit-o-mat](#3-outfit-o-mat)
   - [4. Zauberwort](#4-zauberwort)

3. [Schleifen und Bedingungen](#schleifen-und-bedingungen)
   - [1. Rückwärts von 10 bis 0](#1-rückwärts-von-10-bis-0)
   - [2. Summe der ersten 20 Zahlen](#2-summe-der-ersten-20-zahlen)
   - [3. Rizz-O-Meter](#3-rizz-o-meter)
   - [4. Hashtag-Maker](#4-hashtag-maker)
   - [5. Hauptstadt-Rätsel](#5-hauptstadt-rätsel)
   - [6. Döner Preis](#6-döner-preis)

---


## Variablen und Operationen

### 1. Alter in 10 Jahren
**Aufgabe:**  
Schreibe ein Programm, das dich nach deinem Alter fragt, und dein Alter in 10 Jahren anzeigt.

**Lösung:**  
```javascript
function buttonClicked() {
    const alter = parseInt(getInput());
    const alterIn10Jahren = alter + 10;
    
    print("Du bist jetzt " + alter + " Jahre alt.");
    print("In 10 Jahren wirst du " + alterIn10Jahren + " Jahre alt sein.");
}
```

---

### 2. Alter aus Jahrgang berechnen
**Aufgabe:**  
Schreibe ein Programm, das dich nach deinem Jahrgang fragt und dann dein Alter anzeigt.

**Lösung:**  
```javascript
function buttonClicked() {
    const jahrgang = parseInt(getInput());
    const aktuellesJahr = new Date().getFullYear(); // Oder einfach 2025
    const alter = aktuellesJahr - jahrgang;
    
    print("Du bist " + alter + " Jahre alt.");
}
```

---

### 3. Name begrüßen
**Aufgabe:**  
Schreibe ein Programm, welches nach dem Namen fragt und dann schreibt: "Hallo, name"

**Lösung:**  
```javascript
function buttonClicked() {
    const name = getInput();
    print("Hallo, " + name);
}
```

---

### 4. Kreisumfang berechnen
**Aufgabe:**  
Schreibe ein Programm, welches nach dem Radius fragt und den Umfang eines Kreises ausgibt.
Tipp: Die Formel ist U = 2 * pi * r;

**Lösung:**  
```javascript
function buttonClicked() {
    const radius = parseInt(getInput());
    const umfang = 2 * Math.PI * radius;
    
    print("Radius: " + radius);
    print("Umfang: " + umfang);
}
```

---

### 5. So oft mal Hello World ausgeben
**Aufgabe:**  
Schreibe ein Programm, welches nach einer Zahl fragt und dann so oft "Hello, world!" ausgibt

**Lösung:**  
```javascript
function buttonClicked() {
    const anzahl = parseInt(getInput());
    
    for(let i = 0; i < anzahl; i++) {
      print("Hello, world");
    }
}
```

---
### 6. Reihe
**Aufgabe:**  
Schreibe ein Programm, welches nach einer Zahl fragt und dann die entsprechende Reihe angibt.

**Lösung:**  
```javascript
function buttonClicked() {
    const zahl = parseInt(getInput());
    
    for(let i = 0; i < 10; i++) {
      print(i * zahl);
    }
}
```
---
### 7. Anzahl Zeichen
**Aufgabe:**  
Schreibe ein Programm, welches von der Eingabe die Anzahl Zeichen berechnet.

**Lösung:**  
```javascript
function buttonClicked() {
    const input = getInput();
    
    print("Der eingegeben Input hat " + input.length + " Zeichen");
}
```
---

## Bedingungen

### 1. Schulnote bestanden oder nicht

**Aufgabe:**  
Schreibe ein Programm, das für eine eingegebene Schulnote (1–6) anzeigt, ob die Prüfung bestanden ist oder nicht.

**Lösung:**

```javascript
function buttonClicked() {
  const note = parseInt(getInput());

  if (note <= 4) {
    print("Bestanden!");
  } else {
    print("Nicht bestanden!");
  }
}
```

---

### 2. Positiv, negativ oder Null

**Aufgabe:**  
Schreibe ein Programm, das für eine eingegebene Zahl anzeigt, ob sie negativ, positiv oder Null ist.

**Lösung:**

```javascript
function buttonClicked() {
  const zahl = parseInt(getInput());

  if (zahl > 0) {
    print("Die Zahl " + zahl + " ist positiv.");
  } else if (zahl < 0) {
    print("Die Zahl " + zahl + " ist negativ.");
  } else {
    print("Die Zahl ist Null.");
  }
}
```

---

### 3. Outfit-o-mat
**Aufgabe:**  
Schreibe ein Programm, wo du die Temperatur eingeben kannst. Der Automat soll dir dann vorschlagen, welches Outfit sinn macht.

**Lösung:**

```javascript
function buttonClicked() {
    const temperatur = parseInt(getInput());
    
    print("Temperatur: " + temperatur + "°C");
    
    if (temperatur < 0) {
        print("Sicher Handschuhe! 🧤");
    } else if (temperatur >= 0 && temperatur < 10) {
        print("Ich würde eine warme Jacke anziehen. 🧥");
    } else if (temperatur >= 10 && temperatur < 20) {
        print("Sicher noch lange Hosen. 👖");
    } else if (temperatur >= 20 && temperatur < 30) {
        print("Sonnenbrille und T-Shirt. 😎");
    } else {
        print("T-Shirt, kurze Hose und ein Aperol Spritz! 🍹");
    }
}
```

---

### 4. Zauberwort
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

## Schleifen und Bedingungen

### 1. Rückwärts von 10 bis 0

**Aufgabe:**  
Schreibe ein Programm, das von 10 aus rückwärts bis Null zählt und jeweils die Zahlen anzeigt.

**Lösung:**

```javascript
function buttonClicked() {
  print("Countdown von 10 bis 0:");
  for (let i = 10; i >= 0; i--) {
    print(i);
  }
}
```

---

### 2. Summe der ersten 20 Zahlen

**Aufgabe:**  
Schreibe ein Programm, das die Summe der ersten 20 Zahlen in einer Schleife berechnet (`1 + 2 + ... + 20`).  
Zur Kontrolle: Das Resultat sollte `210` sein.

**Lösung:**

```javascript
function buttonClicked() {
  let summe = 0;
  print("Berechne die Summe von 1 bis 20...");

  for (let i = 1; i <= 20; i++) {
    summe += i;
    print("+ " + i + " = " + summe);
  }

  print("Die Summe der ersten 20 Zahlen ist: " + summe);
}
```

---

### 3. Rizz-O-Meter
**Aufgabe:**  
Eingabe = Name → gib einen „Rizz-Score" aus.
Der Rizz score ergibt sich aus der Länge des Namens und einer Zufallszahl mit der folgenden Formel:
Länge * Zufallszahl % 100

**Lösung:**

```javascript
function buttonClicked() {
    const name = getInput();
    const laenge = name.length;
    const zufallszahl = Math.floor(Math.random() * 100);
    const rizzScore = (laenge * zufallszahl) % 100;
    
    print("Name: " + name);
    print("Länge: " + laenge);
    print("Zufallszahl: " + zufallszahl);
    print("Rizz-Score: " + rizzScore + " rizz");
}
```

---

### 4. Hashtag-Maker
**Aufgabe:**  
Als Eingabe soll ein Satz dienen. Die Ausgabe soll den Satz mit Hashtags ausschmücken.
Beispiel: "Biel hat 100 Aura" → "#Biel #hat #100 #Aura"

**Lösung:**

```javascript
function buttonClicked() {
    const satz = getInput();
    const hashtags = satz.replace(" ", " #");
    
    print("Mit Hashtags: " + hashtags);
}
```

---

### 5. Hauptstadt-Rätsel
**Aufgabe:**  
Schreibe ein kleines Rätsel, welches nach der Hauptstadt von Spanien fragt. 
Wenn die Eingabe richtig ist, soll das Programm schreiben "Richtig! 🔥"
Wenn nicht, soll es schreiben: "[Eingabe] ist leider nicht die Hauptstadt von Spanien 😯"

**Lösung:**

```javascript
function buttonClicked() {
    const antwort = getInput();
    
    if (antwort.toLowerCase() === "madrid") {
        print("Richtig! 🔥");
    } else {
        print(antwort + " ist leider nicht die Hauptstadt von Spanien 😯");
    }
}
```

---

### 6. Döner Preis
**Aufgabe:**  
Schreibe ein Programm, welches nach dem Preis des Döners fragt.
Wenn er unter 10 Franken ist, schreibe: "Gönjamin".
Ist er über 10 Franken, schreibe: "Inflation 😵"

**Lösung:**

```javascript
function buttonClicked() {
    const preis = parseFloat(getInput());
    
    print("Döner-Preis: " + preis + " CHF");
    
    if (preis < 10) {
        print("Gönjamin");
    } else {
        print("Inflation 😵");
    }
}
```

---

