const passwordInput = document.getElementById("pwd");
const confirmPasswordInput = document.getElementById("confirmpwd");

function checkPasswordMatch() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
  } else {
    passwordInput.classList.remove("error");
    confirmPasswordInput.classList.remove("error");
  }
}

passwordInput.addEventListener("input", checkPasswordMatch);
confirmPasswordInput.addEventListener("input", checkPasswordMatch);