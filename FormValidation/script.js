document.getElementById("validationForm").addEventListener("submit", function (event) {
    // Prevents form submission if validation fails
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let errorMessages = [];

    if (fullName.length < 5) {
        errorMessages.push("Name must be at least 5 characters.");
    }

    if (!email.includes("@")) {
        errorMessages.push("Enter a valid email address.");
    }

    if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
        errorMessages.push("Enter a valid 10-digit phone number.");
    }

    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        errorMessages.push("Password must be at least 8 characters and not 'password' or the user's name.");
    }

    if (password !== confirmPassword) {
        errorMessages.push("Passwords do not match.");
    }
    // this will throw an error if the data is incorrect
    displayErrors(errorMessages);
}

function displayErrors(errors) {
    const errorDiv = document.getElementById("errorMessages");
    errorDiv.innerHTML = "";

    if (errors.length > 0) {
        errors.forEach(function (error) {
            const errorPara = document.createElement("p");
            errorPara.textContent = error;
            errorDiv.appendChild(errorPara);
        });
    }
}
