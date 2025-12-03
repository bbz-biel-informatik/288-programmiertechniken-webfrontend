# Portfolio Übungen – Lösungen

## Inhalt

1. [Dark mode text](#1-dark-mode-text)
2. [Die Begrüßung](#2-die-begrüßung)
3. [Bilderrahmen](#3-bilderrahmen)
4. [Der Dark Mode](#4-der-dark-mode)
5. [Bild vergrössern](#5-bild-vergrössern)
6. [Bild-Filter (Zusatz)](#6-bild-filter-zusatz)

---

### 1. Dark mode text
**Aufgabe:**  
Beim Klick auf den Titel soll der Hintergrund schwarz und der Text weiss werden.

**Lösung (in `script.js`):**
```javascript
let title = document.querySelector("#title");

title.addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});
```

---

### 2. Die Begrüßung
**Aufgabe:**  
Welcome-Banner sichtbar machen und per Button entfernen.

**Lösung – JS (in `script.js`):**
```javascript
let closeBtn = document.querySelector("#close-btn");
let banner = document.querySelector("#welcome-banner");

closeBtn.addEventListener("click", function() {
  banner.remove();
});
```

---

### 3. Bilderrahmen
**Aufgabe:**  
Erstem Bild eine ID geben, dann beim Klick einen Rahmen setzen.

**Lösung – HTML (in `index.html`):**
```html
<div class="photo-item vertical">
  <img id="first-photo" src="..." alt="Fashion Shot" />
  <div class="overlay">
    <span>Editorial</span>
  </div>
</div>
```

**Lösung – JS (in `script.js`):**
```javascript
let firstPhoto = document.querySelector("#first-photo");

firstPhoto.addEventListener("click", function() {
  firstPhoto.style.border = "6px solid #1a1a1a";
});
```

---

### 4. Der Dark Mode
**Aufgabe:**  
Theme-Button sichtbar machen und Body färben.

**Lösung – JS (in `script.js`):**
```javascript
let toggle = document.querySelector("#theme-toggle");

toggle.addEventListener("click", function() {
  document.body.style.backgroundColor = "#1a1a1a";
  document.body.style.color = "#ffffff";
});
```

---

### 5. Bild vergrössern
**Aufgabe:**  
Bild per Klick grösser machen (toggle).

**Lösung (Nur ein Foto) (in `script.js`):**
```javascript
let firstPhoto = document.querySelector("#first-photo");

firstPhoto.addEventListener("click", function() {
  firstPhoto.style.transform = "scale(1.15)";
});
```

**Lösung (Alle Fotos) (in `script.js`):**
```javascript
let photos = document.querySelectorAll(".photo-item img");

photos.forEach(function(photo) {
  photo.addEventListener("click", function() {
    photo.style.transform = "scale(1.15)";
  });
});
```

---

### 6. Bild-Filter (Zusatz)
**Aufgabe:**  
Galerie per Tastatur filtern.

**Lösung (in `script.js`):**
```javascript
let gallery = document.querySelector("#work");

document.addEventListener("keydown", function(event) {
  if (event.key === "s") {
    gallery.style.filter = "sepia(100%)";
  } else if (event.key === "b") {
    gallery.style.filter = "blur(5px)";
  } else if (event.key === "g") {
    gallery.style.filter = "grayscale(100%) contrast(120%)";
  } else if (event.key === "r") {
    gallery.style.filter = "none";
  }
});
```

---
