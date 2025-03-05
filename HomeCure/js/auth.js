window.onload = function() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html"; // Redirect to login page if not logged in
    }
};
