# Übungsaufgaben - Lösungen

## 1 Turtle code
**Aufgabe:** Schreibe den Turtle code zu dieser Figur.

**Lösung:**
```javascript
function triangle() {
    turtle.forward(50);
    turtle.right(120);
    turtle.forward(50);
    turtle.right(120);
    turtle.forward(50);
    turtle.right(120);
}
for (let i = 0; i < 8; i++) {
    triangle();
    turtle.forward(20);
    turtle.right(45);
}
```

## 2 Funktionen
**Aufgabe:** Schreiben Sie eine Funktion, welche ein grosses "T" zeichnet. Nennen Sie die Funktion "drawT" und nehmen Sie einen Parameter "size" entgegen.

**Lösung:**
```javascript
function drawT(size) {

    // Nach oben zeichnen
    turtle.forward(size);

    // zur Mitte zurück und Stamm zeichnen
    turtle.left(90);
    turtle.forward(size / 2);
    turtle.right(180);
    turtle.forward(size);
}

drawT(100);
```

## 3 Funktionen
**Aufgabe:** Was macht die folgende Funktion, und was bewirken die Parameter?

```javascript
function myFunction(param) {
    for (let i = 0; i < 180; i++) {
        turtle.forward(param);
        turtle.right(1);
    }
}
```

**Lösung:**
Die Funktion `myFunction` zeichnet einen Halbkreis (180°). Der Parameter `param` bestimmt die Größe des Halbkreises – je größer der Wert, desto größer der Halbkreis.

**Beispielaufruf:**
```javascript
myFunction(2); // Zeichnet einen kleinen Halbkreis
myFunction(5); // Zeichnet einen größeren Halbkreis
```

## 4 If / Else
**Aufgabe:** Schreiben Sie ein Javascript programm, welches nach dem Alter fragt und entsprechend den Preis für das Kinoticket ausgibt.

**Lösung:**
```javascript
let age = await getNumberInput("Wie alt bist du?");

if (age < 12) {
    print("10 Franken");
} else if (age >= 12 && age <= 15) {
    print("12 Franken");
} else {
    print("15 Franken");
}
```

## 5 If / Else
**Aufgabe:** Wie oft wird die folgende Schleife ausgeführt?

```javascript
for (let i = 0; i < 7; i++) {
    print(i);
}
```

**Lösung:**
Die Schleife wird **7 mal** ausgeführt. Sie gibt die Zahlen 0, 1, 2, 3, 4, 5, 6 aus.

## 6 If / Else
Wie oft wird die folgende Schleife ausgeführt?
```javascript
for (let i = 1; i <= 10; i++) {
    print(i);
}
```

**Lösung:**
Die Schleife wird **10 mal** ausgeführt. Sie gibt die Zahlen 1 bis 10 aus.

## 7 If / Else
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

## 8 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher beim Klick auf das Element mit der ID "bild" das Element löscht.

**Lösung:**
```javascript
let bild = document.querySelector("#bild");
bild.addEventListener("click", function () {
    bild.remove();
});
```

## 9 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher das Element mit der Klasse "ocean" auswählt und den Hintergrund blau macht.

**Lösung:**
```javascript
let ocean = document.querySelector(".ocean");
ocean.style.backgroundColor = "blue";
```

## 10 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher beim Klick auf die Taste "t" das Element mit der ID "enemy" löscht.

**Lösung:**
```javascript
let enemy = document.querySelector("#enemy");
document.addEventListener("keydown", function (event) {
    if (event.key === "t") {
        enemy.remove();
    }
});
```

## 11 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher beim Hover auf das Bild die Grösse verändert auf "230px X 230px".

**Lösung:**
```javascript
let image = document.querySelector("#my-image");

image.addEventListener("mouseover", function () {
    this.style.width = "230px";
    this.style.height = "230px";
});
```

## 12 DOM Manipulation
**Aufgabe:** Schreiben Sie Javascript Code, welcher ohne einen Klick-Listener den Inhalt des Elements mit der ID "status" auf "Bereit" ändert.

**Lösung:**
```javascript
let status = document.querySelector("#status");
status.textContent = "Bereit";
```

## 13 Variablen
**Aufgabe:** Nennen Sie drei verschiedene Datentypen, die eine Variable haben kann.

**Lösung:**
1. **String** – Textdaten (z.B. `"Hello World"`)
2. **Number** – Zahlen (z.B. `42`, `3.14`)
3. **Boolean** – Wahrheitswerte (z.B. `true`, `false`)

## 14 Variablen
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

## 15 Variablen
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

## 16 Variablen
**Aufgabe:** Was gibt die Konsole bei folgendem Code aus?

```javascript
let a = "Guten";
let b = " ";
let c = "Morgen";
console.log(a + b + c);
```

**Lösung:**
Die Konsole gibt den String **"Guten Morgen"** aus.
