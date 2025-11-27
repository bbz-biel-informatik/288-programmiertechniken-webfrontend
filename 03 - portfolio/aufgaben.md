# 📸 Projekt: Interaktives Portfolio

## Projekt

Lade das Portfolio Projekt heruter:
[Download](https://github.com/bbz-biel-informatik/288-programmiertechniken-webfrontend/raw/refs/heads/master/03%20-%20portfolio/portfolio.zip)

## 🛠️ Cheat Sheet
Diese Tools helfen dir, dein Task zu erfüllen.

### 1. Elemente aus dem HTML holen
Bevor du etwas manipulieren kannst, musst du es in eine Variable speichern.
```javascript
// Sucht im HTML nach id="mein-button"
let meinElement = document.getElementById("mein-button");

// Sucht nach einem CSS Query
let meinElement = document.querySelector(".button")

```

### 2. Styles ändern (CSS via JS)
Achtung: CSS-Eigenschaften mit Bindestrich (z.B. `background-color`) werden in JavaScript zu **CamelCase** (`backgroundColor`).

```javascript
// Sichtbar machen (wenn vorher display: none war)
meinElement.style.display = "block"; // oder "flex"

// Farbe ändern
meinElement.style.backgroundColor = "#ff0000";

// CSS Filter anwenden
meinElement.style.filter = "blur(5px)";

// Transformationen (Drehen, Skalieren)
meinElement.style.transform = "rotate(10deg)";
```

### 3. Auf Klicks reagieren
Damit etwas passiert, wenn der User die Maus benutzt.

```javascript
meinElement.addEventListener("click", function() {
    // Alles was hier steht, passiert nach dem Klick
    alert("Button wurde geklickt!");
});
```

### 4. Auf die Tastatur reagieren
Das Event wird auf das ganze `document` gelegt.

```javascript
document.addEventListener("keydown", function(event) {
    // 'event.key' sagt dir, welche Taste gedrückt wurde
    if (event.key === "a") {
        console.log("Die Taste A wurde gedrückt");
    }
});
```

### 5. Elemente löschen

```javascript
meinElement.remove(); // Löscht das Element komplett aus dem HTML
```

---

## Tasks

### 🎫 Task 1: Die Begrüßung

Wir haben eine „Welcome-Message“ (`<div id="welcome-banner">`), aber sie ist versteckt.

1.  **Sichtbar machen:** Finde den Welcome banner im CSS und ändere dessen property `display: none` auf `display: flex`, damit du den Banner siehst.
2.  **Funktion:** Der User soll die Nachricht wegklicken können.
    * Wähle den Button im Banner [per Selektor](#1-elemente-aus-dem-html-holen) aus aus (`#close-btn`).
    * Füge einen [„Click“-Listener](#3-auf-klicks-reagieren) hinzu.
    * Wenn geklickt: [Entferne](#5-elemente-löschen) den gesamten Banner.


### 🎫 Task 2: Bilderrahmen
Das Ziel ist es, beim Click auf das erste Bild, dem Bild einen rahmen zu geben. Gehe dabei wie folgt vor:
1. **ID Vergeben** Damit wir das Bild im Javascript "verlinken" können, müssen wir ihm eine eindeutige ID im HTML file vergeben.
2. **Funktion** [Selektiere](#1-elemente-aus-dem-html-holen) das Bild mit der gegebenen ID in javascript und füge einen [click listener](#3-auf-klicks-reagieren) hinzu. Im Body der Funktion [veränderst](#2-styles-ändern-css-via-js) du dann den Style entsprechend.


### 🎫 Task 3: Der Dark Mode
Nachtmodus ist Pflicht. Der Schalter existiert (`<button id="theme-toggle">`), ist aber unsichtbar.

1.  **Sichtbar machen:** Suche den Theme toggle Button im CSS und setze `display: none` auf `display: block`.
2.  **Funktion:** Wenn der User klickt, muss die Seite dunkel werden.
    * Ändere `document.body.style.backgroundColor` zu `"#1a1a1a"`.
    * Ändere die Textfarbe (`document.body.style.color`) zu `"#ffffff"`.

### 🎫 Task 4 (Zusatz): Die Bild-Filter
Wir wollen die Galerie (`<section id="work">`) per Tastatur steuern. Ein Key soll den Filter der ganzen Section entsprechend umstellen. Das wirkt sich dann auf alle Fotos aus. Du wirst es sehen ;)

*  **Event:** Höre auf das ganze `document` mit `"keydown"`.
* Finde die Gallerie mit dem document selector.
*  **Logik:** Prüfe mit `if`, welche Taste (`event.key`) gedrückt wurde:
    * Taste **'s'** → Sepia (`gallery.style.filter = "sepia(100%)"`)
    * Taste **'b'** → Blur (`gallery.style.filter = "blur(5px)"`)
    * Taste **'g'** → Schwarz-Weiß (`gallery.style.filter = "grayscale(100%) contrast(120%)"`)
    * Taste **'r'** → Reset (`gallery.style.filter = "none"`)

* 🔗 **Hilfe:** [MDN Web Docs: CSS Filter](https://developer.mozilla.org/de/docs/Web/CSS/filter)
---
**Viel Erfolg beim Coden! 🚀**