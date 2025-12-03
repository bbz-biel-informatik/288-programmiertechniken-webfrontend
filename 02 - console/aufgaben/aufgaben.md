# Übungsaufgaben

## Setup & Start

1. Lade das zip file [js-console.zip](https://github.com/bbz-biel-informatik/288-programmiertechniken-webfrontend/raw/refs/heads/master/02%20-%20console/js-console.zip) herunter und entpacke es.
2. Öffne den Ordner im VS Code
3. Lies dir das readme durch.
4. Löse die Aufgaben.

## Quellen

**String Methoden**
https://www.w3schools.com/jsref/jsref_obj_string.asp

## 1 - Variablen und Operationen

1. Schreibe ein Programm, das dich nach deinem Alter fragt, und dein Alter in 10 Jahren anzeigt​
2. Schreibe ein Programm, das dich nach deinem Jahrgang fragt und dann dein Alter anzeigt​
3. Schreibe ein Programm, welches nach dem Namen fragt und dann schreibt:<br>
   Hallo, name
4. Schreibe ein Programm, welches nach dem Radius fragt und den Umfang eines Kreises ausgibt.<br>
   Tipp: Die Formel ist U = 2 _ pi _ r;
5. Schreibe ein Programm, welches nach einer Zahl fragt und dann so oft "Hello, world!" ausgibt
6. Schreibe ein Programm, welches nach einer
   Zahl fragt und dann die entsprechende Reihe angibt.

```javascript
// 3er Reihe:
// 3
// 6
// 9
// 12
// 16
// ...
```

7. Schreibe ein Programm, welches von der Eingabe die Anzahl Zeichen berechnet.<br>
   Tipp: https://www.w3schools.com/js/js_string_methods.asp#mark_length

## 2 - Bedingungen

1. Schreibe ein Programm, das für eine eingegebene Schulnote (1–6) anzeigt, ob die Prüfung bestanden ist oder nicht.
2. Schreibe ein Programm, das für eine eingegebene Zahl anzeigt, ob sie negativ, positiv oder Null ist.
3. Schreibe Programm, welches für ein eingegebenes Land die Hauptstadt ausgibt. Zum Beispiel:

```
Eingabe: Deutschland -> Ausgabe: Die Hauptstadt von Deutschland ist Berlin
Eingabe: Schweden -> Ausgabe: Die Hauptstadt von Schweden ist Stockholm
Eingabe: USA -> Ausgabe: Die Hauptstadt von USA ist Washington
...
```

4. Schreibe ein Quiz nach dem folgenden Schema. Wenn der Benutzer die Antwort richtig hat, schreibe jeweils: "Das ist Richtig!" sonst, schreibe: "Das ist falsch".
```
1. Frage: In welchem Land liegt Levi?
Richtige Antwort: Finnland

2. Frage: Wo wird die Winter Olympia 2026 ausgetragen?
Richtige Antwort: Milano oder Cortina d'ampezzo
```

4.1 Zusatzaufgabe: Implementiere ein Punktesystem für dieses Quiz. Tipp: Mache zu Beginn eine Variable Score. Gib am Ende die Punktzahl aus.

5. Outfit-o-mat<br>
   Schreibe ein Programm, wo du die Temperatur eingeben kannst. Der Automat soll dir dann vorschlagen, welches Outfit sinn macht. Du kannst selber kreativ sein oder dem Vorschlg folgen:

```
Kleiner als 0 Grad -> Sicher Handschuhe! 🧤
Zwischen 0 und 10 Grad -> Ich würde eine warme Jacke anziehen.🧥
Zwischen 10 und 20 Grad -> Sicher noch lange Hosen. 👖
Zwischen 20 und 30 Grad -> Sonnenbrille und tshirt. 😎
Mehr als 30 Grad -> Tshirt, kurze Hose und ein aperol spritz! 🍹
```

6. Zauberwort<br>
   Input: ein Wunsch (z. B. kann ich gehen bitte).<br>
   Wenn das Wort "bitte" drin ist -> „Klar! 🫶“<br>
   Wenn nicht -> "Wie ist das Zauberwort?"<br>

Tipp: https://www.w3schools.com/js/js_string_search.asp#mark_includes

## 3 - Schleifen und Bedingungen (Zusatz)

1. Schreibe ein Programm, das die Summe der ersten 20 Zahlen in einer Schleife berechnet (`1 + 2 + ... + 20`).
   - **Zur Kontrolle:** Das Resultat sollte `210` sein.
2. Rizz-O-Meter<br>
   Eingabe = Name → gib einen „Rizz-Score“ aus.<br>
   Der Rizz score ergibt sich aus der Länge des Namens und einer Zufahlstahl mit der folgenden Formel:<br>

```
Länge * Zufallszahl % 100
```

Beispiel<br>
Engabe: Nicolas<br>
Ausgabe: "17 rizz"<br>

```javascript
// Zufallszahl
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
```

Tipp: https://www.w3schools.com/js/js_string_methods.asp#mark_length

3. Hashtag-Maker: Als Eingabe soll ein satz dienen. Die Ausgabe soll den Satz mit Hashtags ausschmücken.<br>
   Beispiel<br>
   Eingabe: Biel hat 100 Aura<br>
   Ausgabe: #Biel #hat #100 #Aura<br>
   Tipp: Mann kann das mit einer String methode machen.
   https://www.w3schools.com/jsref/jsref_replace.asp

4. Döner Preis: Schreibe ein Programm, welches nach dem Preis des Dönsers fragt.<br>
   Wenn er unter 10 Franken ist, schreibe: <br>
   "Gönjamin".<br>
   Ist er über 10 Franken, schreibe:<br>
   "Inflation 😵"
