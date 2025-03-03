// async function predictGender() {
//     const data = {
//         Cravings: document.getElementById("cravings").value,
//         Morning_Sickness: document.getElementById("morning_sickness").value,
//         Mood_Swings: document.getElementById("mood_swings").value,
//         Weight: parseFloat(document.getElementById("weight").value),
//         Height: parseFloat(document.getElementById("height").value),
//         Age: parseInt(document.getElementById("age").value)
//     };

//     try {
//         const response = await fetch("http://127.0.0.1:5003/predict_gender", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });

//         const result = await response.json();
//         if (result.Predicted_Gender) {
//             document.getElementById("result").innerText = "Predicted Gender: " + result.Predicted_Gender;
//         } else {
//             document.getElementById("result").innerText = "Error: " + result.error;
//         }
//     } catch (error) {
//         document.getElementById("result").innerText = "Error: Could not connect to the server.";
//     }
// }

async function predictGender() {
    const data = {
        Cravings: document.getElementById("cravings").value,
        Morning_Sickness: document.getElementById("morning_sickness").value,
        Mood_Swings: document.getElementById("mood_swings").value,
        Weight: parseFloat(document.getElementById("weight").value),
        Height: parseFloat(document.getElementById("height").value),
        Age: parseInt(document.getElementById("age").value)
    };

    try {
        const response = await fetch("http://127.0.0.1:5003/predict_gender", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        const resultDiv = document.getElementById("result");

        if (result.Predicted_Gender) {
            let resultClass = "unknown";
            if (result.Predicted_Gender.toLowerCase() === "boy") {
                resultClass = "boy";
            } else if (result.Predicted_Gender.toLowerCase() === "girl") {
                resultClass = "girl";
            }

            resultDiv.innerHTML = `
                <div class="result-box ${resultClass}">
                    <h3>Baby Gender Prediction</h3>
                    <p>${result.Predicted_Gender}</p>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="result-box unknown">
                    <h3>Error</h3>
                    <p>Could not determine gender. Try again.</p>
                </div>
            `;
        }
    } catch (error) {
        document.getElementById("result").innerHTML = `
            <div class="result-box unknown">
                <h3>Error</h3>
                <p>Could not connect to the server.</p>
            </div>
        `;
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
