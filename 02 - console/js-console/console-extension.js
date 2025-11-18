const input = document.querySelector("#input");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

// ---- Helper ----
let waitingResolve = null;

button.addEventListener("click", () => {
    if (waitingResolve) finishInput();
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && waitingResolve) finishInput();
});

function finishInput() {
    const value = input.value;
    input.value = "";
    waitingResolve(value); // resolve the promise
    waitingResolve = null;
}

/**
 * Diese Funktion gibt den Text aus dem Eingabefeld zurück.
 */
function getInput(text) {
    print(text);

    return new Promise((resolve) => {
        waitingResolve = resolve; // store the resolver until user clicks
    });
}

function getNumberInput(text) {
    print(text);

    return new Promise((resolve) => {
        waitingResolve = (value) => {
            const number = parseFloat(value);
            if (isNaN(number)) {
                print("Bitte eine gültige Zahl eingeben.");
            } else {
                resolve(number);
            }
        };
    });
}

/**
 * Diese Funktion gibt den Text in der Konsole aus.
 */
function print(text) {
    const newLine = document.createElement("li");
    newLine.textContent = text;
    output.prepend(newLine);
}
