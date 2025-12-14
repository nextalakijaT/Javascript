function registrationForm() {

    let fullName;
    let email;
    let password;
    let confirmPassword;
    let age;

    // Full Name
    while (true) {
        fullName = prompt("Enter your full name:");

        if (fullName !== null && fullName.trim().split(" ").length >= 2) {
            break;
        }

        alert("Full Name must contain at least two words");
    }

    // Email
    while (true) {
        email = prompt("Enter your email address:");

        if (email !== null && email.includes("@") && email.indexOf(".") !== -1) {
            break;
        }

        alert("Must follow a valid email format (e.g. example@domain.com)");
    }

    // Password
    while (true) {
        password = prompt("Enter your password:");

        if (password !== null && password.length >= 8) {
            break;
        }

        alert("Password must be at least 8 characters long");
    }

    // Confirm Password
    while (true) {
        confirmPassword = prompt("Confirm your password:");

        if (confirmPassword !== null && confirmPassword === password) {
            break;
        }

        alert("Passwords do not match");
    }

    // Age
    while (true) {
        age = prompt("Enter your age:");

        if (age !== null && Number(age) >= 18) {
            break;
        }

        alert("You must be 18 years or older");
    }

    alert("Registration successful! Welcome " + fullName);
}

registrationForm();
