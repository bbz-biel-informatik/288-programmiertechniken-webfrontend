function init() {
  print("Geben Sie einen Wunsch ein");
}

function buttonClicked() {
  /*
  let temperatur = parseInt(getInput());
  let outfit = "";
  if (temperatur < 0) {
    outfit = "Sicher handschuhe!";
  } else if (temperatur <= 10) {
    outfit = "Sicher warme jacke anziehen!";
  } else if (temperatur <= 20) {
    outfit = "Sicher lange hose anziehen";
  } else if (temperatur < 31) {
    outfit = "Sonnenbrille und tshirt. 😎";
  } else {
    outfit = "Tshirt, kurze Hose und ein aperol spritz! 🍹";
  }
  print(outfit);
  */

  let text = getInput();
  text = text.replace("a", "anafa");
  text = text.replace("e", "enefe");
  text = text.replace("i", "inifi");
  text = text.replace("o", "onofo");
  text = text.replace("u", "unufu");
  print(text);
}
