// Selecting elements from the DOM
const colorInput = document.getElementById("color-input");
const bgBtn = document.getElementById("bg-btn");
const textInput = document.getElementById("text-input");
const textBtn = document.getElementById("text-btn");
const targetDiv = document.getElementById("target-div");

// Function to check if a color is valid
function isColorValid(color) {
  const s = new Option().style;
  s.color = color;
  // If the browser accepts the color, s.color will not be an empty string
  return s.color !== "";
}

// 1. Logic for "Change Background" Button
bgBtn.addEventListener("click", function() {
  const colorValue = colorInput.value.trim();

  // Check if input is empty or invalid color
  if (colorValue === "" || !isColorValid(colorValue)) {
    alert("Invalid color name!");
  } else {
    targetDiv.style.backgroundColor = colorValue;
  }
});

// 2. Logic for "Update Text" Button
textBtn.addEventListener("click", function() {
  const textValue = textInput.value.trim();

  // Check if input is empty
  if (textValue === "") {
    alert("Please enter some text!");
  } else {
    targetDiv.textContent = textValue;
  }
});