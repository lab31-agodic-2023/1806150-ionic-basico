function showLoginMessage() {
  var loginPopup = document.getElementById("popup-login");
  var loginMessage = document.getElementById("login-popup-message");
  var username = document.getElementById("username").value;
  loginMessage.textContent = "¡Bienvenido, " + username + "! Login correcto.";
  loginPopup.style.display = "block";
}

function showRegistrationMessage() {
  var registrationPopup = document.getElementById("popup-registration");
  var registrationMessage = document.getElementById("registration-popup-message");
  var username = document.getElementById("username").value;
  registrationMessage.textContent = "¡Bienvenido, " + username + "! Registro con éxito.";
  registrationPopup.style.display = "block";
}

  