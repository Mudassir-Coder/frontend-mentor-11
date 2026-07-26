const inputEl = document.querySelector(".input");
const buttonEl = document.querySelector(".submit-button");
const container = document.getElementById("main-container");
const subscribedButtonEl = document.querySelector(".subscribed-button");
const successMessage = document.querySelector(".success-message-container");
const emailDisplayContainer = document.querySelector(".email-address");
const errorMessageEl = document.getElementById("email-error");

// Clear error message when user starts typing
inputEl.addEventListener("input", () => {
  errorMessageEl.textContent = "";
  inputEl.removeAttribute("aria-invalid");
});

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputEl.validity.valid && inputEl.value !== "") {
    container.setAttribute("data-label", "hidden");
    successMessage.setAttribute("data-label", "visible");
    emailDisplayContainer.innerHTML = inputEl.value;
    errorMessageEl.textContent = "";
    inputEl.removeAttribute("aria-invalid");
    // Focus the success message for screen readers
    successMessage.focus();
  } else {
    // Show error message for accessibility
    if (!inputEl.validity.valid || inputEl.value === "") {
      errorMessageEl.textContent = "Valid email required";
      inputEl.setAttribute("aria-invalid", "true");
    }
  }
});

subscribedButtonEl.addEventListener("click", () => {
  container.setAttribute("data-label", "show");
  successMessage.setAttribute("data-label", "hidden");
  // Focus the email input to help users continue interaction
  inputEl.focus();
  inputEl.value = "";
  errorMessageEl.textContent = "";
  inputEl.removeAttribute("aria-invalid");
});
