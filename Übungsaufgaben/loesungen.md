# Übungsaufgaben - Lösungen

## 1 Turtle code
**Aufgabe:** Schreibe den Turtle code zu dieser Figur.

**Lösung:**
```javascript
function triangle(){
    turtle.forward(50);
    turtle.right(120);
    turtle.forward(50);
    turtle.right(120);
    turtle.forward(50);
    turtle.right(120);
}
for(let i = 0; i < 8; i++) {
    triangle();
    turtle.forward(20);
    turtle.right(45);
}
```

## 2 Funktionen
**Aufgabe:** Schreiben Sie eine Funktion, welche ein Quadrat zeichnet. Nennen Sie die Funktion "square" und nehmen Sie einen Parameter "size" entgegen. Rufen Sie die Funktion dann mit einem beliebigen Wert auf.

**Lösung:**
```javascript
function square(size) {
    turtle.forward(size);
    turtle.right(90);
    turtle.forward(size);
    turtle.right(90);
    turtle.forward(size);
    turtle.right(90);
    turtle.forward(size);
    turtle.right(90);
}

// Funktion mit Größe 100 aufrufen
square(100);
```

## 3 Funktionen
**Aufgabe:** Was macht die folgende Funktion, und was bewirken die Parameter?

```javascript
function myFunction(param) {
    for(let i = 0; i < 180; i++) {
        turtle.forward(param);
        turtle.right(1);
    }
}
```

**Lösung:**
Die Funktion `myFunction` zeichnet einen Halbkreis (180°). Der Parameter `param` bestimmt die Größe des Halbkreises - je größer der Wert, desto größer der Halbkreis.

**Beispielaufruf:**
```javascript
myFunction(2); // Zeichnet einen kleinen Halbkreis
myFunction(5); // Zeichnet einen größeren Halbkreis
```

## 4 If / Else
**Aufgabe:** Schreiben Sie ein Javascript programm, welches nach dem Alter fragt und entsprechend den Preis für das Kinoticket ausgibt.

**Lösung:**
```javascript
let age = parseInt(getInput());

if (age < 12) {
    console.log("10 Franken");
} else if (age >= 12 && age <= 15) {
    console.log("12 Franken");
} else {
    console.log("15 Franken");
}
```

## 5 If / Else
**Aufgabe:** Wie oft wird die folgende Schleife ausgeführt?

```javascript
for(let i = 0; i < 7; i++) {
    console.log(i);
}
```

**Lösung:**
Die Schleife wird **7 mal** ausgeführt. Sie gibt die Zahlen 0, 1, 2, 3, 4, 5, 6 aus.

## 6 If / Else
**Aufgabe:** Ein Passwort soll mindestens 12 Zeichen haben. Wenn nicht, soll eine Errormeldung erscheinen.

**Lösung:**
```javascript
let password = "my-super-strong-password";

if (password.length < 12) {
    alert("Das Passwort muss mindestens 12 Zeichen haben!");
} else {
    alert("Passwort ist stark genug!");
}
```

## 7 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher beim Klick auf das Element mit der ID "bild" das Element löscht.

**Lösung:**
```javascript
let bild = document.getElementById("bild");
bild.addEventListener("click", function() {
    bild.remove();
});
```

## 8 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher das Element mit der Klasse "ocean" auswählt und den Hintergrund blau macht.

**Lösung:**
```javascript
let ocean = document.querySelector(".ocean");
ocean.style.backgroundColor = "blue";
```

## 9 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher beim Klick auf die Taste "t" das Element mit der ID "enemy" löscht.

**Lösung:**
```javascript
let enemy = document.getElementById("enemy");
document.addEventListener("keydown", function(event) {
    if (event.key === "t") {
        enemy.remove();
    }
});
```

## 10 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher beim Hover auf das Bild die Grösse verändert auf "230px X 230px".

**Lösung:**
```javascript
let image = document.getElementById("my-image");

image.addEventListener("hover", function() {
    this.style.width = "230px";
    this.style.height = "230px";
});
```

## 11 Variablen
**Aufgabe:** Nennen Sie drei verschiedene Datentypen, die eine Variable haben kann.

**Lösung:**
1. **String** - Textdaten (z.B. `"Hello World"`)
2. **Number** - Zahlen (z.B. `42`, `3.14`)
3. **Boolean** - Wahrheitswerte (z.B. `true`, `false`)

## 12 Variablen
**Aufgabe:** Was ist der Unterschied zwischen den folgenden 2 Variablen?

```javascript
let variable1 = 12;
let variable2 = 12;
```

**Lösung:**
- `let` erstellt eine Variable, deren Wert später geändert werden kann
- Eine `const`-Deklaration wäre unveränderlich, wird hier aber nicht verwendet

## 13 Variablen
**Aufgabe:** Was gibt die Konsole bei folgendem Code aus?

```javascript
let x = 7;
x = x * 2;
x = x + 10;
console.log(x);
```

**Lösung:**
Die Konsole gibt **24** aus.

**Berechnung:**
- `x = 7`
- `x = 7 * 2 = 14`
- `x = 14 + 10 = 24`

## 14 Variablen
**Aufgabe:** Was gibt die Konsole bei folgendem Code aus?

```javascript
let x = 20;
let y = 10;
x = x / 2;
x = x + y;
console.log(x);
```

**Lösung:**
Die Konsole gibt **20** aus.

**Berechnung:**
- `x = 20`, `y = 10`
- `x = 20 / 2 = 10`
- `x = 10 + 10 = 20`
