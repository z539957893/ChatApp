// Function to get URL parameter by name
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get username from URL parameter
var username = getParameterByName('username');

// Set username as default value for name input field
document.getElementById("nameInput").value = username;

// Function to send a message
function sendMessage() {
    var name = document.getElementById("nameInput").value;
    var message = document.getElementById("messageInput").value;

    if (name.trim() === '' || message.trim() === '') {
        alert("Please enter both your name and a message.");
        return;
    }

    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = "<strong>" + name + ":</strong> " + message;

    document.getElementById("messagesContainer").appendChild(messageElement);

    // Clear input fields after sending message
    //document.getElementById("nameInput").value = "";
	document.getElementById("nameInput").value = username;
    document.getElementById("messageInput").value = "";
}
