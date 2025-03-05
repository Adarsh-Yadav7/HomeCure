






// // Sample weekly challenges
// const challenges = [
//     { id: 1, text: "Drink 8 glasses of water daily", points: 10 },
//     { id: 2, text: "Walk 10,000 steps today", points: 15 },
//     { id: 3, text: "Eat at least 2 servings of vegetables", points: 10 },
//     { id: 4, text: "Sleep for 7-8 hours", points: 20 },
//     { id: 5, text: "Do 30 minutes of exercise", points: 15 }
// ];

// const challengesList = document.getElementById("challenges-list");
// const totalPointsDisplay = document.getElementById("total-points");
// const resetBtn = document.getElementById("reset-btn");
// const badgesContainer = document.getElementById("badges");
// const leaderboard = document.getElementById("leaderboard");
// const historyList = document.getElementById("history-list");
// const userNameDisplay = document.getElementById("user-name");
// const streakCount = document.getElementById("streak-count");

// // Load saved progress
// let completedChallenges = JSON.parse(localStorage.getItem("completedChallenges")) || {};
// let totalPoints = localStorage.getItem("totalPoints") ? parseInt(localStorage.getItem("totalPoints")) : 0;
// let streak = localStorage.getItem("streak") ? parseInt(localStorage.getItem("streak")) : 0;
// let history = JSON.parse(localStorage.getItem("challengeHistory")) || [];
// let userName = localStorage.getItem("userName") || "Guest";

// // Display saved data
// totalPointsDisplay.textContent = totalPoints;
// streakCount.textContent = streak;
// userNameDisplay.textContent = userName;

// // Render Challenges
// challenges.forEach(challenge => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//         ${challenge.text} 
//         <input type="checkbox" id="challenge-${challenge.id}" ${completedChallenges[challenge.id] ? "checked" : ""}>
//     `;
//     challengesList.appendChild(li);

//     const checkbox = li.querySelector("input");
//     checkbox.addEventListener("change", () => {
//         if (checkbox.checked) {
//             totalPoints += challenge.points;
//             completedChallenges[challenge.id] = true;
//             history.push(challenge.text);
//         } else {
//             totalPoints -= challenge.points;
//             delete completedChallenges[challenge.id];
//         }
//         totalPointsDisplay.textContent = totalPoints;
//         localStorage.setItem("totalPoints", totalPoints);
//         localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
//         localStorage.setItem("challengeHistory", JSON.stringify(history));

//         updateBadges();
//         updateLeaderboard();
//         updateStreak();
//     });
// });

// // Reset Weekly Progress
// resetBtn.addEventListener("click", () => {
//     localStorage.clear();
//     location.reload();
// });

// // 🎖️ Assign Badges
// function updateBadges() {
//     badgesContainer.innerHTML = "";
//     if (totalPoints >= 50) badgesContainer.innerHTML += `<div class="badge">🥇 Gold Achiever</div>`;
//     if (totalPoints >= 30) badgesContainer.innerHTML += `<div class="badge">🥈 Silver Achiever</div>`;
//     if (totalPoints >= 10) badgesContainer.innerHTML += `<div class="badge">🥉 Bronze Achiever</div>`;
// }

// // 🔥 Streak System
// function updateStreak() {
//     streak += 1;
//     streakCount.textContent = streak;
//     localStorage.setItem("streak", streak);
// }

// // 📣 Share Progress
// function shareProgress() {
//     const message = `I completed ${totalPoints} points in Health Challenges on Homecure! 🏆`;
//     window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
// }

// // 🏆 Fake Leaderboard Users
// let fakeUsers = [
//     { name: "Alice", score: Math.floor(Math.random() * 100) + 50 },
//     { name: "Bob", score: Math.floor(Math.random() * 100) + 50 },
//     { name: "Charlie", score: Math.floor(Math.random() * 100) + 50 },
//     { name: "David", score: Math.floor(Math.random() * 100) + 50 },
//     { name: "Eve", score: Math.floor(Math.random() * 100) + 50 }
// ];

// // Add real user to the leaderboard
// fakeUsers.push({ name: userName, score: totalPoints });

// // Sort leaderboard by score (highest first)
// fakeUsers.sort((a, b) => b.score - a.score);

// // Display Leaderboard
// function updateLeaderboard() {
//     leaderboard.innerHTML = "";
//     fakeUsers.forEach(user => {
//         const li = document.createElement("li");
//         li.textContent = `${user.name} - ${user.score} pts`;
//         leaderboard.appendChild(li);
//     });
// }

// // Initial leaderboard update
// updateLeaderboard();


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


// Sample weekly challenges
const challenges = [
    { id: 1, text: "Drink 8 glasses of water daily", points: 10 },
    { id: 2, text: "Walk 10,000 steps today", points: 15 },
    { id: 3, text: "Eat at least 2 servings of vegetables", points: 10 },
    { id: 4, text: "Sleep for 7-8 hours", points: 20 },
    { id: 5, text: "Do 30 minutes of exercise", points: 15 }
];

const challengesList = document.getElementById("challenges-list");
const totalPointsDisplay = document.getElementById("total-points");
const resetBtn = document.getElementById("reset-btn");
const badgesContainer = document.getElementById("badges");
const leaderboard = document.getElementById("leaderboard");
const historyList = document.getElementById("history-list");
const userNameDisplay = document.getElementById("user-name");
const streakCount = document.getElementById("streak-count");

// Load saved progress
let completedChallenges = JSON.parse(localStorage.getItem("completedChallenges")) || {};
let totalPoints = localStorage.getItem("totalPoints") ? parseInt(localStorage.getItem("totalPoints")) : 0;
let streak = localStorage.getItem("streak") ? parseInt(localStorage.getItem("streak")) : 0;
let history = JSON.parse(localStorage.getItem("challengeHistory")) || [];
let userName = localStorage.getItem("userName") || "Guest";

// Display saved data
totalPointsDisplay.textContent = totalPoints;
streakCount.textContent = streak;
userNameDisplay.textContent = userName;

// ✅ Function to Update Progress in Backend
function updateProgress() {
    fetch("http://127.0.0.1:5000/update_progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: userName,
            points: totalPoints,
            streak: streak
        })
    })
    .then(response => response.json())
    .then(data => console.log("Progress Updated:", data))
    .catch(error => console.error("Error:", error));
}

// Render Challenges
challenges.forEach(challenge => {
    const li = document.createElement("li");
    li.innerHTML = `
        ${challenge.text} 
        <input type="checkbox" id="challenge-${challenge.id}" ${completedChallenges[challenge.id] ? "checked" : ""}>
    `;
    challengesList.appendChild(li);

    const checkbox = li.querySelector("input");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            totalPoints += challenge.points;
            completedChallenges[challenge.id] = true;
            history.push(challenge.text);
        } else {
            totalPoints -= challenge.points;
            delete completedChallenges[challenge.id];
        }
        totalPointsDisplay.textContent = totalPoints;
        localStorage.setItem("totalPoints", totalPoints);
        localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
        localStorage.setItem("challengeHistory", JSON.stringify(history));

        updateBadges();
        updateLeaderboard();
        updateStreak();
        updateProgress();  // 🔥 Send updated progress to backend
    });
});

// Reset Weekly Progress
resetBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

// 🎖️ Assign Badges
function updateBadges() {
    badgesContainer.innerHTML = "";
    if (totalPoints >= 50) badgesContainer.innerHTML += `<div class="badge">🥇 Gold Achiever</div>`;
    if (totalPoints >= 30) badgesContainer.innerHTML += `<div class="badge">🥈 Silver Achiever</div>`;
    if (totalPoints >= 10) badgesContainer.innerHTML += `<div class="badge">🥉 Bronze Achiever</div>`;
}

// 🔥 Streak System
function updateStreak() {
    streak += 1;
    streakCount.textContent = streak;
    localStorage.setItem("streak", streak);
}

// 📣 Share Progress
function shareProgress() {
    const message = `I completed ${totalPoints} points in Health Challenges on Homecure! 🏆`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
}

// 🏆 Fake Leaderboard Users
let fakeUsers = [
    { name: "Alice", score: Math.floor(Math.random() * 100) + 50 },
    { name: "Bob", score: Math.floor(Math.random() * 100) + 50 },
    { name: "Charlie", score: Math.floor(Math.random() * 100) + 50 },
    { name: "David", score: Math.floor(Math.random() * 100) + 50 },
    { name: "Eve", score: Math.floor(Math.random() * 100) + 50 }
];

// Add real user to the leaderboard
fakeUsers.push({ name: userName, score: totalPoints });

// Sort leaderboard by score (highest first)
fakeUsers.sort((a, b) => b.score - a.score);

// Display Leaderboard
function updateLeaderboard() {
    leaderboard.innerHTML = "";
    fakeUsers.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.score} pts`;
        leaderboard.appendChild(li);
    });
}

// Initial leaderboard update
updateLeaderboard();

// 📌 Sidebar Functions
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
