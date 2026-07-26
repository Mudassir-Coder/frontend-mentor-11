const inputEl = document.querySelector(".input");
const buttonEl = document.querySelector(".submit-button");
const container = document.getElementById("main-container");
const subscribedButtonEl = document.querySelector(".subscribed-button");
const successMessage = document.querySelector(".success-message-container");
const emailDisplayContainer = document.querySelector(".email-address");
buttonEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputEl.validity.valid && inputEl.value !== "") {
    container.setAttribute("data-label", "hidden");
    successMessage.setAttribute("data-label", "visible");
    emailDisplayContainer.innerHTML = inputEl.value;
  }
});

subscribedButtonEl.addEventListener("click", () => {
  container.setAttribute("data-label", "show");
  successMessage.setAttribute("data-label", "hidden");
});
