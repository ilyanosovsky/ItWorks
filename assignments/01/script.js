function isValidHexColor(color) {
  const regex = /^#([0-9A-F]{3}){1,2}$/i;
  return regex.test(color);
}

// Event listener for form submission
document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  const colorInput = document.querySelector(".color-input").value.trim();

  if (isValidHexColor(colorInput)) {
    document.body.style.backgroundColor = colorInput;
  } else {
    alert(
      "Invalid input! Please enter a valid hex color code (e.g., #FFFFFF)."
    );
  }
});
