// List of images + instructions
const options = [
  { src: "option1.jpg", text: "BLUE CHALLENGE - Border Checkpoint" },
  { src: "option2.jpg", text: "YELLOW CHALLENGE - River Crossing" },
  { src: "option3.jpg", text: "RED CHALLENGE - Bribe Smugglers" }
];

// Pick a random option
const randomChoice = options[Math.floor(Math.random() * options.length)];

// Display it
document.getElementById("randomImage").src = randomChoice.src;
document.getElementById("instruction").textContent = randomChoice.text;

