// script.js
const correctPassword = "Developerasadpass2025@#";  
const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const websiteContent = document.getElementById("website-content");
const loginContainer = document.getElementById("login-container");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Show website content and hide login form
        websiteContent.style.display = "block";
        loginContainer.style.display = "none";
    } else {
        // Show error message
        errorMessage.style.display = "block";
        passwordInput.value = "";  // Clear the password field
    }
});
