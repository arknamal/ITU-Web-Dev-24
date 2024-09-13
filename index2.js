function changeColor() {
  // Random color generation
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  // Change the button background color
  const button = document.getElementById("color-button");
  button.style.backgroundColor = randomColor;

  // Display the color and its hex code
  const colorInfo = document.getElementById("color-info");
  colorInfo.innerText = `Color: ${randomColor}`;
}
