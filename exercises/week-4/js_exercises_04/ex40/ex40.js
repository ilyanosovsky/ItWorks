// JavaScript – Font size changer
// The following exercise contains the following subjects:
// ● DOM
// Instructions
// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

const upBtn = document.querySelector(".upFont");
const downBtn = document.querySelector(".downFont");
const textPar = document.querySelector(".editFont");

let currentFontSize = parseInt(window.getComputedStyle(textPar).fontSize);
console.log(currentFontSize + " px");

upBtn.addEventListener("click", () => {
  if (currentFontSize < 100) {
    // Limiting font size to 100px
    currentFontSize += 2;
  }
  if (currentFontSize > 100) {
    currentFontSize = 100;
  }
  textPar.style.fontSize = currentFontSize + "px";
});

downBtn.addEventListener("click", () => {
  if (currentFontSize > 6) {
    // Limiting font size to 6px
    currentFontSize -= 2;
  }
  if (currentFontSize < 6) {
    currentFontSize = 6;
  }
  currentFontSize -= 2;
  textPar.style.fontSize = currentFontSize + "px";
});