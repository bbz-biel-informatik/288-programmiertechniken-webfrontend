# Pirates Projekt

## 1 - DOM verändern
**1** - Erstelle einen neuen Ordner und nenne ihn "pirates".<br>
**2** - In dem Pirates Ordner, Erstelle eine neue HTML Seite mit einem HTML File und einem Javascript file. Verbinde das Javascript mit dem HTML. Prüfe, ob das File richtig eingebunden wurde, indem du "alert('Hello, world!')" im .js file ausführst.<br>
**3** - Finde ein Bild eines Piratenschiffs online und platziere das Bild auf der Webseite. Gib dem Bild eine ID (myShip).<br>
**4** - Mithilfe von Javascript,
- setze die Grösse auf 100x100 pixel
- setze die Position auf links: 100px / top: 100px
- Mache, dass das Bild position: absolute hat. (Damit können wir dessen Position verändern.)

**5** - Mithilfe von Javascript, setze die Hintergrundfarbe des <body> tags auf Blau.<br>
**6** - Füge ein leeres
`<div></div>`
Element hinzu und gib ihm die ID "time"<br>
**7** - Finde das leere Element mit Javascript und füge den Text "0" ein. Mit folgendem Befehl kannst du einen Text einfügen:
```javascript
const myDiv = document.querySelector("#myDiv");
myDiv.innerText = "Some text";
```

## 2 - Events
**1** - Erstelle die Bewegung des Schiffs. Es soll mit den Pfeiltasten nach Links, Oben, Unten und Rechts bewegt werden. Nachfolgend ein Beispiel, wie Tastatur Clicks abgefangen werden können.

```javascript
document.addEventListener("keydown", function(event) {
  // Wenn die Pfeiltaste nach Oben gedrückt wird.
  if(event.key === "ArrowDown") { }
})
```

**2** - Finde ein Chanty online (Ein Lied), welches beim Klick auf das Schiff abgespielt werden soll. Lege das .mp3 File dafür in deinen Ordner nebem dem Javascript file ab. Folgendermassen kannst du dann mit Javascript ein Lied abspielen:

```javascript
// run chanty.mp3
const audio = new Audio("chanty.mp3");
audio.play();
```
**3** - Erstelle einen Zähler, welcher das Element mit der ID "time" alle 1 Sekunde nach oben zählt.
```javascript
let seconds = 0;

setInterval(() => {
  // Das hier passiert nun alle Sekunden
  seconds++;
}, 1000)
```

**4** - Schaffst du folgendes: Wenn dieselbe Taste 3x hintereinander geklickt wird, wird das Schiff zerstört! Zum Beispiel 3x (Pfeil nach Oben) oder 3x (Pfeil nach Unten).

**5** - Schaffst du folgendes: Wenn das Schiff zerstört wird, soll zusätzlich ein Knall abgespielt werden.

**6** - Suche online nach einem weiteren Schiff (Das anders aussieht), setze es ins Dokument ein und positioniere es ca. unten rechts. Du kannst das gleich machen wie bereits beim ersten Schiff. Beachte, dass die Position "absolute" sein muss.

**7** - Challenge: Schaffst du es, eine alert() Meldung mit der Anzahl Sekunden anzugeben, sobald dein steuerbares Schiff beim zweiten Schiff angekommen ist?

```javascript
// Tipp

const myShip = document.querySelector("#myShip");
const enemy = document.querySelector("#enemy");

function checkCollision(){
  if( parseInt(myShip.style.top) - parseInt(enemy.style.top) < 50 &&
      parseInt(myShip.style.left) - parseInt(enemy.style.left) < 50)
    {
      console.log("collide");
    }
}
```

## Zusatz
Öffne das turtle projekt, welches wir in der ersten Lektion hatten. Schaffst du es, den Turtle mit den Pfeiltasten zu bewegen?
