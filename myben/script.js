// Toggle Mobile Menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Dark/Light Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Form Validation
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "⚠️ Please fill in all fields!";
        formStatus.style.color = "red";
    } else if (!email.includes("@")) {
        formStatus.textContent = "⚠️ Please enter a valid email!";
        formStatus.style.color = "red";
    } else {
        formStatus.textContent = "✅ Message sent successfully!";
        formStatus.style.color = "green";
        form.reset();
    }
});