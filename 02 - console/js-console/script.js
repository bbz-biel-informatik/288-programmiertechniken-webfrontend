let note = await getNumberInput("Gib deine Note ein");
if (note < 4) {
  print("Das ist ungenügend");
} else if (note < 5) {
  print("Das ist genügend");
} else {
  print("Die note ist gut");
}

// Helfer Funktionen
