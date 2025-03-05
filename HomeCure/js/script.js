

document.addEventListener("DOMContentLoaded", function () {
    const obesityForm = document.getElementById("obesityForm");
    if (obesityForm) {
        obesityForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const ageInput = document.getElementById("age");
            const genderInput = document.getElementById("gender");
            const heightInput = document.getElementById("height");
            const weightInput = document.getElementById("weight");
            const bmiInput = document.getElementById("bmi");
            const activityInput = document.getElementById("activity");
            const resultDiv = document.getElementById("obesityResult");

            if (!ageInput || !genderInput || !heightInput || !weightInput || !bmiInput || !activityInput || !resultDiv) {
                console.error("One or more input fields are missing!");
                return;
            }

            const data = {
                Age: ageInput.value,
                Gender: genderInput.value,
                Height: heightInput.value,
                Weight: weightInput.value,
                BMI: bmiInput.value,
                PhysicalActivityLevel: activityInput.value
            };

            try {
                const response = await fetch("http://127.0.0.1:5001/predict", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                const prediction = result["Obesity Prediction"];

                // Determine class based on prediction
                let resultClass = "normal"; // Default
                if (prediction.includes("Overweight")) {
                    resultClass = "overweight";
                } else if (prediction.includes("Obese")) {
                    resultClass = "obese";
                }

                // Display the result with styling
                resultDiv.innerHTML = `
                    <div class="result-box ${resultClass}">
                        <h3>Obesity Prediction Result</h3>
                        <p>${prediction}</p>
                    </div>
                `;
            } catch (error) {
                console.error("Error fetching prediction:", error);
                resultDiv.innerHTML = `
                    <div class="result-box error">
                        <h3>Error</h3>
                        <p>Failed to fetch prediction. Please try again.</p>
                    </div>
                `;
            }
        });
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