document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validate email format
    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid email address!");
        return;
    }

    // Validate password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    // Check if user already exists
    let existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
        alert("User with this email already exists! Please login.");
        return;
    }

    // Save user data in Local Storage
    let user = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please login.");
    window.location.href = "login.html"; // Redirect to login page
});
