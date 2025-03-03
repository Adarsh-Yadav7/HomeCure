
document.getElementById("diabetes-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Collect form data
    let formData = {
        "Age": parseInt(document.getElementById("age").value),
        "Height": parseFloat(document.getElementById("height").value),
        "Weight": parseFloat(document.getElementById("weight").value),
        "Exercise_Level": document.getElementById("exercise").value,
        "Family_History": document.getElementById("family-history").value,
        "Diet_Type": document.getElementById("diet").value,
        "Thirst": document.getElementById("thirst").value,
        "Frequent_Urination": document.getElementById("urination").value
    };

    try {
        // Send request to Flask API
        let response = await fetch("http://127.0.0.1:5004/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        let data = await response.json();

        // Display result
        document.getElementById("result").innerText = 
            data.diabetes_prediction === 1
            ? "Prediction: You may have diabetes. Please consult a doctor." 
            : "Prediction: You are unlikely to have diabetes.";
        
    } catch (error) {
        document.getElementById("result").innerText = "Error: Unable to get prediction.";
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
