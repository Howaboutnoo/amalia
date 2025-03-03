document.addEventListener("DOMContentLoaded", function() {
    showAlert();
    setupNavHoverEffects();
    setupTrailer();
    setupFormValidation();
    setupButtonAnimations();
});

function showAlert() {
    alert("Welcome to Howaboutno! Prepare for an epic adventure!");
}

function setupNavHoverEffects() {
    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "gold";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#c69b6d";
        });
    });
}

function setupTrailer() {
    const trailerFrame = document.createElement("iframe");
    trailerFrame.width = "560";
    trailerFrame.height = "315";
    trailerFrame.src = "https://www.youtube.com/embed/IBHL_-biMrQ";
    trailerFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    trailerFrame.allowFullscreen = true;
    document.getElementById("trailer").appendChild(trailerFrame);
}

function setupFormValidation() {
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let messageBox = document.getElementById("registerMessage");
        
        if (username && email && password) {
            messageBox.innerText = "Registration successful! Welcome, " + username + "!";
            messageBox.style.color = "#c69b6d";
        } else {
            messageBox.innerText = "Please fill out all fields.";
            messageBox.style.color = "red";
        }
    });
}

function setupButtonAnimations() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
}
