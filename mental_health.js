// 🧘 Load Meditation Videos (YouTube API)
const meditationVideos = [
    "https://www.youtube.com/embed/inpok4MKVLM", // 5-Minute Meditation
    "https://www.youtube.com/embed/ZToicYcHIOU", // 10-Minute Meditation
    // "https://youtu.be/9yj8mBfHlMk"  // Stress Relief Meditation
];

const videoContainer = document.getElementById("meditation-videos");

meditationVideos.forEach(video => {
    const iframe = document.createElement("iframe");
    iframe.src = video;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
});

// 📌 Stress Level Quiz Logic
const submitButton = document.getElementById("submit-quiz");
const stressResult = document.getElementById("stress-result");

submitButton.addEventListener("click", function() {
    // Get user answers
    let q1 = parseInt(document.getElementById("q1").value);
    let q2 = parseInt(document.getElementById("q2").value);
    let q3 = parseInt(document.getElementById("q3").value);

    // Calculate stress score
    let stressScore = q1 + q2 + q3;

    // Determine stress level
    let resultText = "";
    if (stressScore <= 4) {
        resultText = "✅ Low Stress - Keep up the good habits!";
    } else if (stressScore <= 7) {
        resultText = "⚠️ Moderate Stress - Try meditation & relaxation exercises.";
    } else {
        resultText = "❌ High Stress - Consider consulting a mental health professional.";
    }

    // Display result
    stressResult.textContent = resultText;

    // Save in localStorage
    localStorage.setItem("stressScore", stressScore);
});

// Load last stress score from localStorage
document.addEventListener("DOMContentLoaded", function() {
    let lastStressScore = localStorage.getItem("stressScore");
    if (lastStressScore) {
        let lastResult = lastStressScore <= 4 ? "✅ Low Stress" : lastStressScore <= 7 ? "⚠️ Moderate Stress" : "❌ High Stress";
        stressResult.textContent = lastResult;
    }
});



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
