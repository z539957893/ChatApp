document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    // Here you can perform the login logic, such as checking the username and password against a database or predefined values
    // For simplicity, let's just redirect to the main chat page if the username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
        window.location.href = "index.html"; // Redirect to the main chat page
    } else {
        alert("Please enter both username and password.");
    }
});