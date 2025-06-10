function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
button.addEventListener("click", changeColor);

function changeColor(event) {
  body.style = `background-color: ${getRandomHexColor()}`;
  colorValue.textContent = getRandomHexColor();
}
