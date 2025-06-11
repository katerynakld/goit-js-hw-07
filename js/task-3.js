const nameInputField = document.querySelector("input");
const headingName = document.querySelector("#name-output");

nameInputField.addEventListener("input", updateName);

function updateName(event) {
  if (event.currentTarget.value.trim() === "") {
    headingName.textContent = "Anonymous";
  } else {
    headingName.textContent = event.currentTarget.value.trim();
  }
}
