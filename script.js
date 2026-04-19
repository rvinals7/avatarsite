const facts = [
  "Avatar is the highest-grossing film of all time.",
  "The Na'vi language was fully created for the film.",
  "James Cameron spent over a decade developing Avatar.",
  "Pandora’s glowing plants are inspired by bioluminescence.",
  "The movie pioneered advanced motion-capture technology.",
  "Multiple sequels expand the Avatar universe."
];

let index = 0;

function nextFact() {
  document.getElementById("factText").textContent = facts[index];
  index = (index + 1) % facts.length;
}
function updatePandora() {
  const value = document.getElementById("pandoraSelect").value;
  const text = document.getElementById("pandoraText");

  if (value === "peaceful") {
    text.textContent = "🌿 Pandora’s forests are calm, filled with glowing plants and gentle wildlife.";
  }

  else if (value === "bioluminescent") {
    text.textContent = "✨ At night, Pandora lights up with glowing flora and floating spores.";
  }

  else if (value === "battle") {
    text.textContent = "⚔️ Conflict erupts as humans and Na’vi clash over the land’s resources.";
  }

  else {
    text.textContent = "Select a mode to explore Pandora...";
  }
}