# Pirates Projekt

## 1 - DOM verändern
1. Erstelle einen neuen Ordner und nenne ihn "pirates".
2. In dem Pirates Ordner, Erstelle eine neue HTML Seite mit einem HTML File und einem Javascript file. Verbinde das Javascript mit dem HTML. Prüfe, ob das File richtig eingebunden wurde, indem du "alert('Hello, world!')" im .js file ausführst.
3. Finde ein Bild eines Piratenschiffs online und platziere das Bild auf der Webseite. Gib dem Bild eine ID (myShip).
4. Mithilfe von Javascript,
- setze die Grösse auf 100x100 pixel
- setze die Position auf links: 100px / rechts: 100px
- Mache, dass das Bild position: absolute hat. (Damit können wir dessen Position verändern.)
5. Mithilfe von Javascript, setze die Hintergrundfarbe des <body> tags auf Blau.
6. Füge ein leeres <div></div> Element hinzu und gib ihm die ID "score"
7. Finde das leere Element mit Javascript und füge den Text "0 Punkte" ein. Mit folgendem Befehl kannst du einen Text einfügen:
```javascript
const myDiv = document.querySelector("#myDiv");
myDiv.innerText = "Some text";
```

## 2 - Events
1. Erstelle die Bewegung des Schiffs. Es soll mit den Pfeiltasten nach Links, Oben, Unten und Rechts bewegt werden. Nachfolgend ein Beispiel, wie Tastatur Clicks abgefangen werden können.

```javascript
document.addEventListener("keydown", function(event) {
  // Wenn die Pfeiltaste nach Oben gedrückt wird.
  if(event.key === "ArrowDown") { }
})
```

2. Finde ein Chanty online (Ein Lied), welches beim Klick auf das Schiff abgespielt werden soll. Lege das .mp3 File dafür in deinen Ordner nebem dem Javascript file ab. Folgendermassen kannst du dann mit Javascript ein Lied abspielen:

```javascript
// run chanty.mp3
const audio = new Audio("chanty.mp3");
audio.play();
```

## Zusatz
Öffne das turtle projekt, welches wir in der ersten Lektion hatten. Schaffst du es, den Turtle mit den Pfeiltasten zu bewegen?
