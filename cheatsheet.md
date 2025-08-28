# Cheatsheet Javascript

## Turtle
```javascript
// Einfache Turtle Bewegungen
turtle.forward(100);
turtle.right(100);

// Turtle Drehungen
turtle.left(90);
turtle.right(90);
```

## Funktionen
```Javascript

// Funktion definieren ohne Parameters
function triangle() {
    turtle.forward(100);
    turtle.right(120);
    turtle.forward(100);
    turtle.right(120);
    turtle.forward(100);
    turtle.right(120);
}

// Funktion definieren mit Parameter
function addition(number1, number2) {
    return number1 + number2;
}

function multiplikation(n1, n2) {
    return n1 * n2;
}

// Funktionen aufrufen
triangle();
addition(10, 5); // 15
multiplikation(10, 5); // 50
```

## Schleifen
```javascript
// Einfache Schleife, die 10x Code ausführt
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// Turtle Kreis
for(let i = 0; i < 360; i++) {
    turtle.forward(1);
    turtle.right(1);
}

// Schleife, die die 5er Reihe auf der Konsole ausgibt
for(let i = 1; i <= 10; i++) {
    // Zähler i geht von 1 bis 10 und kann hier verwendet werden.
    console.log(i * 5);
}
```

## Variablen
Variablen sind Platzhalter für werte und können verändert werden.
Variablen können folgende Typen haben:
- <em>Zahlen</em>
- <em>Texte</em>
- <em>Objekte</em> (Zum Beispiel DOM Objekte)
- <em>Listen</em>
- <em>undefined / null<em>

```javascript
let x = 1; // Variable definieren
const pi = 3.141; // Konstante definieren

// HTML Objekt direkt in einer Variable speichern.
let myShip = document.querySelector("#myShip")

// Variable verändern
x = 2;

// Variable berechnen
x = x + 1;
```

## Bedingungen
```javascript
let year = 10;

// Führt den Block aus, wenn das Jahr grösser oder gleich 2000 ist.
if(year >= 2000) {
    console.log("welcome to the 2000s")
}

// Wenn das Jahr grösser als 2000 ist
if(year >= 2000) {
    console.log("welcome to the 2000s");
// Sonst, wenn das Jahr aber grösser als 1990 ist.
} else if(year >= 1990) {
    console.log("welcome to the 90s!")
// Sonst, wenn das Jahr grösser als 1980 ist.
} else if(year >= 1980) {
    console.log("welcome to the 80s!")
// Sonst, wenn nichts von allem zutrifft
} else {
    console.log("Welcome to the 70s or before!")
}
```
### Vergleiche
```javascript
if(age > 20) // Grösser als 20
if(age >= 20) // Grösser oder gleich wie 20
if(age < 30) // Kleiner als 30
if(age <= 30) // Kleiner oder gleich wie 30
if(city == "stockholm") // city ist genau 'stockholm'
if(city === "stockholm") // dasselbe: city ist genau 'stockholm'
if(city != "stockholm") // city ist NICHT stockholm
```
## DOM (HTML) Manipulation
```javascript
// Gib mir das Objekt mit der id "image"
const myImage = document.querySelector("#myImage");

// Setzte den Hintergrund des Bildes auf rot
myImage.style.backgroundColor = "red";

// Bewege das Bild 200px nach Unten.
myImage.style.top = "200px";

// Wenn auf das Bild geklickt wird
myImage.addEventListener("click", function(event) {
  // Setze einen schwarzen Ramen.
  bild.style.borderColor = "black";
})

// Wenn eine Taste gedrückt wird
document.addEventListener("keydown", function(event) {
  // Wenn auf "s" gedrückt wird
  if(event.key == "s") {
    console.log("you pressed s");
  }
})

// Element löschen
const myImage = document.querySelector("#myImage");
myImage.remove();

// Text verändern
const someElement = document.querySelector("#element");
someElement.innerText = "Some text";
```


