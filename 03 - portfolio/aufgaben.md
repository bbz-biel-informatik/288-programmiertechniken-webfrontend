# 📸 Projekt: Interaktives Portfolio

## Projekt

Lade das Portfolio Projekt heruter:
[Download](https://github.com/ed6968e9-7c1c-4d1c-a6c0-c2b09722861e)

## 🛠️ Cheat Sheet
Diese Tools helfen dir, dein Task zu erfüllen.

### 1. Elemente aus dem HTML holen
Bevor du etwas manipulieren kannst, musst du es in eine Variable speichern.
```javascript
// Sucht im HTML nach id="mein-button"
const meinElement = document.getElementById("mein-button");
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

1.  **Sichtbar machen:** Finde den Welcome banner im CSS und ändere dessen property 'display: none' auf 'display: flex', damit du den Banner siehst.
2.  **Funktion:** Der User soll die Nachricht wegklicken können.
    * Wähle den Button im Banner aus (`#close-btn`).
    * Füge einen „Click“-Listener hinzu.
    * Wenn geklickt: Entferne den gesamten Banner.

### 🎫 Task 2: Der Dark Mode
Nachtmodus ist Pflicht. Der Schalter existiert (`<button id="theme-toggle">`), ist aber unsichtbar.

1.  **Sichtbar machen:** Suche den Theme toggle Button im CSS und setze `style.display` auf `"block"`.
2.  **Funktion:** Wenn der User klickt, muss die Seite dunkel werden.
    * Ändere `document.body.style.backgroundColor` zu `"#1a1a1a"`.
    * Ändere die Textfarbe (`document.body.style.color`) zu `"#ffffff"`.
    * Hinweis: damit du weisst, ob die Website dunkel ist oder nicht, brauchst du eine Zusätzliche Variable, die du dann umschalten kannst.
3. **Profi-Challenge (An/Aus):**
    * Erstelle eine Variable `let darkMode = false;` (außerhalb des Klicks!).
    * Prüfe beim Klick: Wenn `darkMode` falsch (`false`) ist → Dark mode machen & Variable auf `true` setzen.
    * Sonst (`else`) → Dark mode resetten & Variable auf `false` setzen. Zum Resetten, setzte die Farben zurück auf `backgroundColor -> #ffffff` und `textfarbe -> #1a1a1a`

### 🎫 Task 3: Die Bild-Filter
Wir wollen die Galerie (`<section id="work">`) per Tastatur steuern. Ein Key soll den Filter der ganzen Section entsprechend umstellen. Das wirkt sich dann auf alle Fotos aus. Du wirst es sehen ;)

*  **Event:** Höre auf das ganze `document` mit `"keydown"`.
* Finde die Gallerie mit dem document selector.
*  **Logik:** Prüfe mit `if`, welche Taste (`event.key`) gedrückt wurde:
    * Taste **'s'** → Sepia (`gallery.style.filter = "sepia(100%)"`)
    * Taste **'b'** → Blur (`gallery.style.filter = "blur(5px)"`)
    * Taste **'g'** → Schwarz-Weiß (`gallery.style.filter = "grayscale(100%) contrast(120%)"`)
    * Taste **'r'** → Reset (`gallery.style.filter = "none"`)

* 🔗 **Hilfe:** [MDN Web Docs: CSS Filter](https://developer.mozilla.org/de/docs/Web/CSS/filter)

### 🎫 Task 4: Der „Avant-Garde“ Tilt
Das Design soll „edgy“ wirken. Der Button (`#tilt-btn`) ist versteckt.

1.  **Sichtbar machen:** Suche den Button im css und setze den style `display` auf `"block"`.
2.  **Funktion:** Bei Klick kippt die ganze Seite (`document.body`).
    * Befehl: `style.transform = "rotate(-1.5deg)"`.
3.  **Profi-Challenge (An/Aus):**
    * Erstelle eine Variable `let isTilted = false;` (außerhalb des Klicks!).
    * Prüfe beim Klick: Wenn `isTilted` falsch (`false`) ist → kippen & Variable auf `true` setzen.
    * Sonst (`else`) → gerade rücken (`"none"`) & Variable auf `false` setzen.

---
**Viel Erfolg beim Coden! 🚀**