function showAlert() {
    alert("Welcome to Howaboutno! Get ready for an epic adventure!");
}

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (username && email && password) {
        document.getElementById("registerMessage").innerText = "Registration successful! Welcome, " + username + "!";
        document.getElementById("registerMessage").style.color = "#c69b6d";
    } else {
        document.getElementById("registerMessage").innerText = "Please fill out all fields.";
        document.getElementById("registerMessage").style.color = "red";
    }
});
