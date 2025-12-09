// List of images + instructions
.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  max-width: 80%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.6);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;   /* same size as image */
  height: 100%;
}

/* Approximate positions for bottom half */
#line1 {
  position: absolute;
  bottom: 90px;   /* distance from bottom */
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
}

#line2 {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
}

#line3 {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
}

.overlay input {
  padding: 8px;
  font-size: 1em;
  border-radius: 6px;
  border: none;
  background: rgba(255,255,255,0.8);
}
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


