// Function
function cancelCheck(input) {
    if (input === null) {
        alert("Registration cancelled");
        return true;
    }
}

function registrationForm() {

    // Get user inputs using window prompt
    let fullName = prompt("Enter your full name:");
    let email = prompt("Enter your email address:");
    let password = prompt("Enter your password:");
    let confirmPassword = prompt("Confirm your password:");
    let age = prompt("Enter your age:");

    // Full Name Validation (at least two words)
    fullName = prompt("Enter your full name:");
    if (cancelCheck(fullName)) return;
    
    while (fullName.trim().split(" ").length < 2) {
        fullName = prompt("Full Name must contain at least two words");
        break;
    }

    // Email Validation (basic format)
    email = prompt("Enter your email address:");
    if (cancelCheck(email)) return;
    
    while (!email.includes("@") || email.indexOf(".")) {
        email = prompt("Must follow a valid email format (e.g. example@domain.com)");
        break;
    }

    // Password Validation (minimum length)
    password = prompt ("Enter your password:");
    if (cancelCheck(password)) return;
    
    while (!/[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]/.test(password)) {
        password = prompt("Password must be at least 8 characters long");
        break;
    }

    // Confirm Password Validation
    confirmPassword = prompt("Confirm your password:");
    if (cancelCheck(confirmPassword)) return;   

    while (password !== confirmPassword)  {
    confirmPassword = prompt("Passwords do not match. Try again");
    break;
    }

    // Age Validation
    age = prompt("Enter your age:");
    if (cancelCheck(age)) return;   

    while (!age || Number(age) < 18) {
        alert("You must be 18 years or older");
        break;
    }

    // Success message (only runs if all checks pass)
    alert("Registration successful! Welcome " + fullName);
}

// Call the function
registrationForm();