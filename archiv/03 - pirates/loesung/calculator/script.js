const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const result = document.querySelector("#result");

const button = document.querySelector("#my-button");

button.addEventListener("click", function () {
  // Do sth here.
  button.style.backgroundColor = "red";
});

function handleClick() {
  button.style.backgroundColor = "red";
}
