const inputField = document.querySelector("input");
const headingName = document.querySelector("#name-output");

inputField.addEventListener("input", updateName);

function updateName(event) {
  headingName.textContent = event.currentTarget.value;
}
