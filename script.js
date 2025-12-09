// List of images (no need for different placeholders)
const options = [
  { src: "option1.jpg" },
  { src: "option2.jpg" },
  { src: "option3.jpg" }
];

// Pick a random option
const randomChoice = options[Math.floor(Math.random() * options.length)];

// Display the image
document.getElementById("randomImage").src = randomChoice.src;

// Set the same placeholder text for all three inputs
document.getElementById("line1").placeholder = "Type item here...";
document.getElementById("line2").placeholder = "Type item here...";
document.getElementById("line3").placeholder = "Type item here...";


