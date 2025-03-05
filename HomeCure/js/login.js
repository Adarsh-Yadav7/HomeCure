document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Retrieve stored user
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert("Invalid email or password!");
        return;
    }

    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true"); // Store login state
    window.location.href = "index.html"; // Redirect to home page
});
