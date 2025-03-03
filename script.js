document.addEventListener("DOMContentLoaded", () => {
    console.log("Howaboutno - Dark Fantasy WoW Server Loaded");

    // Animated entrance for sections
    const banners = document.querySelectorAll(".banner");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });

    banners.forEach(banner => observer.observe(banner));

    // Register form validation and feedback
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", event => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const message = document.getElementById("registerMessage");

            if (!username || !email || !password) {
                message.textContent = "All fields are required!";
                message.style.color = "red";
                return;
            }

            if (password.length < 6) {
                message.textContent = "Password must be at least 6 characters long.";
                message.style.color = "red";
                return;
            }

            message.textContent = "Registration successful! Welcome to the darkness...";
            message.style.color = "green";
            registerForm.reset();
        });
    }

    // Interactive Join Now button
    const joinButton = document.getElementById("joinButton");
    if (joinButton) {
        joinButton.addEventListener("click", () => {
            alert("Welcome to Howaboutno! The Dark Fantasy Awaits...");
        });
    }
});
