document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Sample validation: correct username is "admin" and password is "password123"
  if (username === "admin" && password === "password123") {
    // Redirect to Manual.html
    window.location.href = "Manual.html";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});


