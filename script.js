// List of images + optional placeholder text for each line
const options = [
  { 
    src: "option1.jpg", 
    placeholders: ["Line 1 for image 1", "Line 2 for image 1", "Line 3 for image 1"] 
  },
  { 
    src: "option2.jpg", 
    placeholders: ["Line 1 for image 2", "Line 2 for image 2", "Line 3 for image 2"] 
  },
  { 
    src: "option3.jpg", 
    placeholders: ["Line 1 for image 3", "Line 2 for image 3", "Line 3 for image 3"] 
  }
];

// Pick a random option
const randomChoice = options[Math.floor(Math.random() * options.length)];

// Display the image
document.getElementById("randomImage").src = randomChoice.src;

// Update placeholder text in the input boxes
document.getElementById("line1").placeholder = randomChoice.placeholders[0];
document.getElementById("line2").placeholder = randomChoice.placeholders[1];
document.getElementById("line3").placeholder = randomChoice.placeholders[2];
