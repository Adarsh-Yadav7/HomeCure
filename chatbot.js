async function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    let chatBox = document.getElementById("chat-box");

    // Display user message
    let userMessage = `<p class="user-message">${userInput}</p>`;
    chatBox.innerHTML += userMessage;
    document.getElementById("user-input").value = "";

    // Send request to Flask backend
    try {
        let response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput }),
        });

        let data = await response.json();

        // Display bot response
        let botMessage = `<p class="bot-message">${data.response}</p>`;
        chatBox.innerHTML += botMessage;
        chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to latest message
    } catch (error) {
        console.error("Error:", error);
    }
}







function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
    }
}

// Close sidebar if clicked outside (on main content)
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");

    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});