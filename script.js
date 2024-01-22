const inputEmail = document.querySelector("#input-mail");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/;
const button = document.querySelector("#input-button");
const dismissButton = document.querySelector("#dismiss-button");
const inputPage = document.querySelector(".input-page");
const succesPage = document.querySelector(".succes-page");
button.addEventListener("click", function (event) {
  event.preventDefault();
  let isValid = true;
  if (!inputEmail || !emailPattern.test(inputEmail.value)) {
    inputEmail.classList.add("error");
    isValid = false;
  } else {
    inputEmail.classList.remove("error");
    isValid = true;
  }
  if (isValid) {
    const userEmail = (document.getElementById("user-email").textContent =
      inputEmail.value);
    inputPage.style.display = "none";
    succesPage.style.display = "block";
  }
});
dismissButton.addEventListener("click", function () {
  inputPage.style.display = "flex";
  succesPage.style.display = "none";
});
