// async function sendMessage() {
//     let userInput = document.getElementById("user-input").value.trim();
//     if (!userInput) return;

//     let chatBox = document.getElementById("chat-box");

//     // Display user message
//     let userMessage = `<p class="user-message">${userInput}</p>`;
//     chatBox.innerHTML += userMessage;
//     document.getElementById("user-input").value = "";

//     // Send request to Flask backend
//     try {
//         let response = await fetch("http://127.0.0.1:5000/chat", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ message: userInput }),
//         });

//         let data = await response.json();

//         // Display bot response
//         let botMessage = `<p class="bot-message">${data.response}</p>`;
//         chatBox.innerHTML += botMessage;
//         chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to latest message
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }







// function toggleSidebar() {
//     const sidebar = document.getElementById("sidebar");
//     sidebar.classList.toggle("active");
// }

// function closeSidebar() {
//     const sidebar = document.getElementById("sidebar");
//     if (window.innerWidth <= 768) {
//         sidebar.classList.remove("active");
//     }
// }

// // Close sidebar if clicked outside (on main content)
// document.addEventListener("click", function(event) {
//     const sidebar = document.getElementById("sidebar");
//     const menuIcon = document.querySelector(".menu-icon");

//     if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
//         sidebar.classList.remove("active");
//     }
// });

// Check if the browser supports Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false; // Stop listening after the user stops speaking
recognition.interimResults = false; // Only final results
recognition.lang = "en-US"; // Set language

// Function to start voice recognition
function startListening() {
    recognition.start();
}

// When speech is recognized
recognition.onresult = function (event) {
    let transcript = event.results[0][0].transcript; // Get the spoken words
    document.getElementById("user-input").value = transcript; // Insert into input field

    // Auto-send message after speech input
    sendMessage();
};

// Error handling for speech recognition
recognition.onerror = function (event) {
    console.error("Speech recognition error:", event.error);
};

// Function to send a message to the chatbot API
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
        chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the latest message
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Function to close the sidebar
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
