const facts = [
  "Avatar is the highest-grossing film of all time.",
  "The Na'vi language was fully created for the film.",
  "James Cameron worked over a decade on Avatar.",
  "Pandora’s plants are inspired by real bioluminescent life.",
  "The film pioneered advanced 3D motion capture technology."
];

let index = 0;

function nextFact() {
  document.getElementById("factText").textContent = facts[index];
  index = (index + 1) % facts.length;
}