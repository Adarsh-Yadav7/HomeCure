// document.getElementById("diabetes-form").addEventListener("submit", async function(event) {
//     event.preventDefault();

//     const age = document.getElementById("age").value;
//     const height = document.getElementById("height").value;
//     const weight = document.getElementById("weight").value;
//     const exercise = document.getElementById("exercise").value;
//     const familyHistory = document.getElementById("family-history").value;
//     const diet = document.getElementById("diet").value;
//     const thirst = document.getElementById("thirst").value;
//     const urination = document.getElementById("urination").value;

//     const inputData = {
//         Age: parseInt(age),
//         Height: parseInt(height),
//         Weight: parseInt(weight),
//         "Exercise Level": exercise,
//         "Family History": familyHistory,
//         "Diet Type": diet,
//         Thirst: thirst,
//         "Frequent Urination": urination
//     };

//     try {
//         const response = await fetch("http://127.0.0.1:5004/predict", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(inputData)
//         });

//         const result = await response.json();
//         document.getElementById("result").innerText = result.prediction;
//     } catch (error) {
//         console.error("Error:", error);
//         document.getElementById("result").innerText = "Error making prediction.";
//     }
// });

document.getElementById("diabetes-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const exercise = document.getElementById("exercise").value;
    const familyHistory = document.getElementById("family-history").value;
    const diet = document.getElementById("diet").value;
    const thirst = document.getElementById("thirst").value;
    const urination = document.getElementById("urination").value;

    const inputData = {
        Age: parseInt(age),
        Height: parseInt(height),
        Weight: parseInt(weight),
        "Exercise Level": exercise,
        "Family History": familyHistory,
        "Diet Type": diet,
        Thirst: thirst,
        "Frequent Urination": urination,
    };

    try {
        const response = await fetch("http://127.0.0.1:5004/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData),
        });

        const result = await response.json();
        console.log("API Response:", result); // Debugging

        const resultDiv = document.getElementById("result");

        // Ensure the response contains the 'prediction' key
        if (!result.prediction) {
            resultDiv.innerHTML = `<div class="result-box error">Error: Invalid response from server</div>`;
            return;
        }

        let predictionText = result.prediction;
        let resultClass = "low-risk"; // Default class (Avoid empty class error)

        // Assign a CSS class based on prediction value
        if (predictionText.includes("High Risk")) {
            resultClass = "high-risk";
        } else if (predictionText.includes("Medium Risk")) {
            resultClass = "medium-risk";
        } else if (predictionText.includes("Low Risk")) {
            resultClass = "low-risk";
        }

        // Remove previous result box if exists
        resultDiv.innerHTML = "";

        // Create a new result box and append it dynamically
        const resultBox = document.createElement("div");
        resultBox.classList.add("result-box", resultClass); // ✅ No empty class now
        resultBox.innerHTML = `<h3></h3><p>${predictionText}</p>`;

        // Append the new result box
        resultDiv.appendChild(resultBox);

        // Trigger reflow for animation to apply
        void resultBox.offsetWidth; // Forces a reflow so animations apply properly
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = `
            <div class="result-box error">
                <h3>Error</h3>
                <p>Failed to fetch prediction. Please check console for details.</p>
            </div>
        `;
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