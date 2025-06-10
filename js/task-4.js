const loginForm = document.querySelector(".login-form");
const inputField = document.querySelectorAll("input");
const formLabel = document.querySelectorAll("label");

for (const field of inputField) {
  field.setAttribute("class", "form-input");
}

for (const label of formLabel) {
  label.setAttribute("class", "form-label");
}

console.log(inputField);
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const userData = {};

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    userData.email = email.trim();
    userData.password = password.trim();
    console.log(userData);
    form.reset();
  }
}
