let currentValue = "0";
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".button button");
const themeToggle = document.getElementById("theme-toggle");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "AC") {
            currentValue = "0";
        } else if (value === "C") {
            currentValue = currentValue.slice(0, -1) || "0";
        } else if (value === "=") {
            try {
                currentValue = eval(currentValue).toString();
            } catch (error) {
                currentValue = "Error";
            }
        } else {
            if (currentValue === "0" && value !== ".") {
                currentValue = value;
            } else {
                currentValue += value;
            }
        }
        result.value = currentValue;
    });
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
});
