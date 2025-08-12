// app.js - Turtle canvas with pixel rulers

var canvas;
var turtle;
var rulerTop;
var rulerLeft;
var showRulers = true;

function updateRulersVisibility() {
  const top = document.getElementById("ruler-top");
  const left = document.getElementById("ruler-left");
  const corner = document.getElementById("ruler-corner");
  const display = showRulers ? "" : "none";
  if (top) top.style.display = display;
  if (left) left.style.display = display;
  if (corner) corner.style.display = display;

  if (showRulers) {
    drawRulers();
  }
}

function drawRulers() {
  if (!canvas) return;
  rulerTop = document.getElementById("ruler-top");
  rulerLeft = document.getElementById("ruler-left");

  // Match rulers to main canvas size
  rulerTop.width = canvas.width;
  rulerTop.height = 24;
  rulerLeft.width = 24;
  rulerLeft.height = canvas.height;

  const ctxTop = rulerTop.getContext("2d");
  const ctxLeft = rulerLeft.getContext("2d");

  // Clear and background
  ctxTop.clearRect(0, 0, rulerTop.width, rulerTop.height);
  ctxLeft.clearRect(0, 0, rulerLeft.width, rulerLeft.height);
  ctxTop.fillStyle = "#f8fafc"; // slate-50
  ctxLeft.fillStyle = "#f8fafc";
  ctxTop.fillRect(0, 0, rulerTop.width, rulerTop.height);
  ctxLeft.fillRect(0, 0, rulerLeft.width, rulerLeft.height);

  // Baselines
  ctxTop.strokeStyle = "#cbd5e1"; // slate-300
  ctxTop.beginPath();
  ctxTop.moveTo(0, rulerTop.height - 0.5);
  ctxTop.lineTo(rulerTop.width, rulerTop.height - 0.5);
  ctxTop.stroke();

  ctxLeft.strokeStyle = "#cbd5e1";
  ctxLeft.beginPath();
  ctxLeft.moveTo(rulerLeft.width - 0.5, 0);
  ctxLeft.lineTo(rulerLeft.width - 0.5, rulerLeft.height);
  ctxLeft.stroke();

  // Ticks and labels
  const small = 10;
  const big = 50;

  // Top (horizontal) ruler
  ctxTop.strokeStyle = "#94a3b8"; // slate-400
  ctxTop.fillStyle = "#475569"; // slate-600
  ctxTop.lineWidth = 1;
  ctxTop.font =
    "10px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial";
  ctxTop.textAlign = "center";
  ctxTop.textBaseline = "top";
  for (let x = 0; x <= rulerTop.width; x += small) {
    const isBig = x % big === 0;
    const h = isBig ? 12 : 6;
    ctxTop.beginPath();
    ctxTop.moveTo(x + 0.5, rulerTop.height - h);
    ctxTop.lineTo(x + 0.5, rulerTop.height - 1);
    ctxTop.stroke();
    if (isBig) {
      ctxTop.fillText(String(x), x, 2);
    }
  }

  // Left (vertical) ruler
  ctxLeft.strokeStyle = "#94a3b8";
  ctxLeft.fillStyle = "#475569";
  ctxLeft.lineWidth = 1;
  ctxLeft.font =
    "10px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial";
  for (let y = 0; y <= rulerLeft.height; y += small) {
    const isBig = y % big === 0;
    const w = isBig ? 12 : 6;
    ctxLeft.beginPath();
    ctxLeft.moveTo(rulerLeft.width - w, y + 0.5);
    ctxLeft.lineTo(rulerLeft.width - 1, y + 0.5);
    ctxLeft.stroke();
    if (isBig) {
      ctxLeft.save();
      ctxLeft.translate(2, y);
      ctxLeft.rotate(-Math.PI / 2);
      ctxLeft.textAlign = "right";
      ctxLeft.textBaseline = "top";
      ctxLeft.fillText(String(y), 0, 0);
      ctxLeft.restore();
    }
  }
}

function init() {
  canvas = document.getElementById("real-turtle");
  turtle = new RealTurtle.default(canvas, { autoStart: true });

  // Hook up toggle
  const toggle = document.getElementById("toggle-rulers");
  if (toggle) {
    showRulers = toggle.checked;
    toggle.addEventListener("change", (e) => {
      showRulers = e.target.checked;
      updateRulersVisibility();
    });
  }

  updateRulersVisibility();
}

function clear() {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  turtle = new RealTurtle.default(canvas, { autoStart: true });
}

function runTurtle() {
  clear();
  // Delegate to student code in turtle-code.js
  if (typeof start === "function") {
    start(turtle);
  }
}

// Initialize after page (and CDN scripts) are loaded
window.addEventListener("load", init);
