# Übungsaufgaben

## Setup & Start

1. Lade das zip file  [js-console.zip](https://github.com/bbz-biel-informatik/288-programmiertechniken-webfrontend/raw/refs/heads/master/02%20-%20console/js-console.zip) herunter und entpacke es.
2. Öffne den Ordner im VS Code
3. Lies dir das readme durch.
4. Löse die Aufgaben.

## Quellen
**String Methoden**
https://www.w3schools.com/jsref/jsref_obj_string.asp

## 1 - Variablen und Operationen
1. Schreibe ein Programm, das dich nach deinem Alter fragt, und dein Alter in 10 Jahren anzeigt​
2. Schreibe ein Programm, das dich nach deinem Jahrgang fragt und dann dein Alter anzeigt​
3. Schreibe ein Programm, welches nach dem Namen
fragt und dann schreibt:
```
Hallo, name
```
4. Schreibe ein Programm, welches nach dem Radius fragt und den Umfang eines Kreises ausgibt.
```
Tipp: Die Formel ist U = 2 * pi * r;
```
5. Schreibe ein Programm, welches nach einer Zahl fragt und dann so oft "Hello, world!" ausgibt
6. Schreibe ein Programm, welches nach einer
Zahl fragt und dann die entsprechende Reihe angibt. (bis 100)

```javascript
// 3er Reihe:
// 3
// 6
// 9
// 12
// 16
// ...
```



## 2 - Bedingungen

1. Schreibe ein Programm, das für eine eingegebene Schulnote (1–6) anzeigt, ob die Prüfung bestanden ist oder nicht.   
2. Schreibe ein Programm, das für eine eingegebene Zahl anzeigt, ob sie negativ, positiv oder Null ist.
3. Outfit-o-mat: Schreibe ein Programm, wo du die Temperatur eingeben kannst. Der Automat soll dir dann vorschlagen, welches Outfit sinn macht. Du kannst selber kreativ sein oder dem Vorschlg folgen:
```
Kleiner als 0 Grad -> Sicher Handschuhe! 🧤
Zwischen 0 und 10 Grad -> Ich würde eine warme Jacke anziehen.🧥
Zwischen 10 und 20 Grad -> Sicher noch lange Hosen. 👖
Zwischen 20 und 30 Grad -> Sonnenbrille und tshirt. 😎
Mehr als 30 Grad -> Tshirt, kurze Hose und ein aperol spritz! 🍹
```

4. Zauberwort
```
Input: ein Wunsch (z. B. kann ich gehen bitte).
Wenn das Wort "bitte" drin ist -> „Klar! 🫶“
Wenn nicht -> "Wie ist das Zauberwort?"

Tipp: https://www.w3schools.com/js/js_string_search.asp#mark_includes
```


## 3 - Schleifen und Bedingungen

1. Schreibe ein Programm, das von 10 aus rückwärts bis Null zählt und jeweils die Zahlen anzeigt.  
2. Schreibe ein Programm, das die Summe der ersten 20 Zahlen in einer Schleife berechnet (`1 + 2 + ... + 20`).  
   - **Zur Kontrolle:** Das Resultat sollte `210` sein. 
3. Rizz-O-Meter: Eingabe = Name → gib einen „Rizz-Score“ aus. Der Rizz score ergibt sich aus der Länge des Namens und einer Zufahlstahl mit der folgenden Formel:
Länge * Zufallszahl

Beispiel
Engabe: Nicolas
Ausgabe: "17 rizz"


```javascript
// Zufallstahl
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Länge des Strings:
https://www.w3schools.com/js/js_string_methods.asp#mark_length
```

4. Hashtag-Maker: Als Eingabe soll ein satz dienen. Die Ausgabe soll den Satz mit Hashtags ausschmücken.

Beispiel
Eingabe: Biel hat 100 Aura
Ausgabe: #Biel #hat #100 #Aura

Tipp: Mann kann das mit einer String methode machen.
https://www.w3schools.com/jsref/jsref_replace.asp

5. Schreibe ein kleines Rätsel, welches nach der Hauptstadt von Spanien fragt. Wenn die Eingabe richtig ist,
soll das Programm schreiben "Richtig! 🔥" Wenn nicht, soll es schreiben: "Barcelona ist leider nicht die Hauptstadt von Spanien 😯" Wobei "Barcelona" ersetzt werden soll mit der falschen Eingabe.

6. Döner Preis: Schreibe ein Programm, welches nach dem Preis des Dönsers fragt. Wenn er unter 10 Franken ist, schreibe: "Gönjamin". Ist er über 10 Franken, schreibe: "Inflation 😵"