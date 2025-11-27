const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
  const addition = parseInt(input1.value) + parseInt(input2.value);
  result.innerText = addition;
});
