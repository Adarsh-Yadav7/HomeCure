// document.getElementById("generate-pdf").addEventListener("click", function () {
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     let gender = document.getElementById("gender").value;
//     let height = document.getElementById("height").value;
//     let weight = document.getElementById("weight").value;
//     let bp = document.getElementById("bp").value;
//     let sugar = document.getElementById("sugar").value;
//     let symptoms = document.getElementById("symptoms").value;

//     if (!name || !age || !gender || !height || !weight || !bp || !sugar || !symptoms) {
//         alert("Please fill all fields!");
//         return;
//     }

//     // Calculate BMI
//     let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
//     let bmiStatus = getBMIStatus(bmi);
//     let healthSuggestions = getHealthSuggestions(bmi, bp, sugar);

//     let { jsPDF } = window.jspdf;
//     let doc = new jsPDF();

//     // Title
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text("🏥 Homecure Health Report", 50, 20);

//     doc.setFontSize(10);
//     doc.setFont("helvetica", "normal");
//     doc.text(`👤 Name: ${name}`, 20, 35);
//     doc.text(`🎂 Age: ${age}`, 20, 42);
//     doc.text(`⚥ Gender: ${gender}`, 20, 49);
//     doc.text(`📏 Height: ${height} cm`, 20, 56);
//     doc.text(`⚖ Weight: ${weight} kg`, 20, 63);
//     doc.text(`🩸 Blood Pressure: ${bp} mmHg`, 20, 70);
//     doc.text(`🍬 Blood Sugar: ${sugar} mg/dL`, 20, 77);
//     doc.text(`📊 BMI: ${bmi} (${bmiStatus})`, 20, 84);
//     doc.text(`📝 Symptoms: ${symptoms}`, 20, 91);

//     // Health Suggestions (Compact)
//     doc.setFont("helvetica", "bold");
//     doc.text("💡 Health Suggestions:", 20, 105);
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(8);
//     let yPos = 112;
//     healthSuggestions.forEach((suggestion) => {
//         if (yPos > 270) {
//             doc.addPage();
//             yPos = 20;
//         }
//         doc.text(`- ${suggestion}`, 20, yPos);
//         yPos += 7;
//     });

//     // If Health Suggestions exceed space, add a new page for graphs
//     if (yPos > 220) {
//         doc.addPage();
//         yPos = 20;
//     }

//     // Add Graphs with Proper Labels
//     addGraphsToPDF(doc, bmi, bp, sugar, yPos, () => {
//         doc.save(`Health_Report_${name}.pdf`);
//     });
// });

// function getBMIStatus(bmi) {
//     if (bmi < 18.5) return "Underweight";
//     if (bmi >= 18.5 && bmi < 24.9) return "Normal";
//     if (bmi >= 25 && bmi < 29.9) return "Overweight";
//     return "Obese";
// }

// function getHealthSuggestions(bmi, bp, sugar) {
//     let suggestions = [];

//     if (bmi < 18.5) {
//         suggestions.push("Increase calorie intake with protein-rich foods.");
//         suggestions.push("Include healthy fats like nuts and avocado.");
//     } else if (bmi >= 25) {
//         suggestions.push("Reduce high-calorie food intake and exercise daily.");
//         suggestions.push("Increase fiber intake with fruits and vegetables.");
//     }

//     let [sys, dia] = bp.split("/").map(Number);
//     if (sys > 140 || dia > 90) {
//         suggestions.push("Reduce salt intake and monitor stress levels.");
//         suggestions.push("Exercise regularly to maintain healthy BP.");
//     }

//     if (sugar > 140) {
//         suggestions.push("Limit sugar and carb intake to manage glucose levels.");
//         suggestions.push("Monitor blood sugar daily and stay hydrated.");
//     }

//     if (suggestions.length === 0) {
//         suggestions.push("You have a healthy status. Keep maintaining a balanced lifestyle! 🎉");
//     }

//     return suggestions;
// }

// // Function to Draw 3 Graphs with Proper Labels
// function addGraphsToPDF(doc, bmi, bp, sugar, startY, callback) {
//     let graphs = [
//         { 
//             type: "line", 
//             data: [18, 20, 22, 24, 26, bmi], 
//             label: "BMI Trend", 
//             xLabels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Current"]
//         },
//         { 
//             type: "bar", 
//             data: [120, 130, 140, bp], 
//             label: "Blood Pressure (mmHg)", 
//             xLabels: ["Low", "Normal", "High", "Your BP"]
//         },
//         { 
//             type: "pie", 
//             data: [sugar, 200 - sugar], 
//             label: "Blood Sugar Level", 
//             xLabels: ["Your Level", "Safe Limit"]
//         }
//     ];

//     let canvasArray = [];
//     let count = 0;
//     let yOffset = startY + 20;

//     graphs.forEach((graph, index) => {
//         if (yOffset > 230) {
//             doc.addPage();
//             yOffset = 20;
//         }

//         let canvas = document.createElement("canvas");
//         canvas.width = 250;
//         canvas.height = 120;
//         document.body.appendChild(canvas);
//         canvasArray.push(canvas);

//         let ctx = canvas.getContext("2d");

//         new Chart(ctx, {
//             type: graph.type,
//             data: {
//                 labels: graph.xLabels,
//                 datasets: [{
//                     label: graph.label,
//                     data: graph.data,
//                     backgroundColor: ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71"]
//                 }]
//             },
//             options: {
//                 responsive: false,
//                 scales: graph.type !== "pie" ? {
//                     x: { title: { display: true, text: graph.label } },
//                     y: { title: { display: true, text: "Values" } }
//                 } : {}
//             }
//         });

//         setTimeout(() => {
//             let imgData = canvas.toDataURL("image/png");
//             doc.addImage(imgData, "PNG", 30, yOffset, 80, 40);
//             yOffset += 50;
//             count++;

//             if (count === graphs.length) {
//                 canvasArray.forEach((c) => document.body.removeChild(c));
//                 callback();
//             }
//         }, 500);
//     });
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

document.getElementById("generate-pdf").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bp = document.getElementById("bp").value;
    let sugar = document.getElementById("sugar").value;
    let symptoms = document.getElementById("symptoms").value;

    if (!name || !age || !gender || !height || !weight || !bp || !sugar || !symptoms) {
        alert("Please fill all fields!");
        return;
    }

    // Calculate BMI
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let bmiStatus = getBMIStatus(bmi);
    let healthSuggestions = getHealthSuggestions(bmi, bp, sugar);
    let dietSuggestions = getDietRecommendations(bmi, bp, sugar);
    let exerciseSuggestions = getExerciseRecommendations(bmi, bp, sugar);

    let { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("🏥 Homecure Health Report", 50, 20);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`👤 Name: ${name}`, 20, 35);
    doc.text(`🎂 Age: ${age}`, 20, 42);
    doc.text(`⚥ Gender: ${gender}`, 20, 49);
    doc.text(`📏 Height: ${height} cm`, 20, 56);
    doc.text(`⚖ Weight: ${weight} kg`, 20, 63);
    doc.text(`🩸 Blood Pressure: ${bp} mmHg`, 20, 70);
    doc.text(`🍬 Blood Sugar: ${sugar} mg/dL`, 20, 77);
    doc.text(`📊 BMI: ${bmi} (${bmiStatus})`, 20, 84);
    doc.text(`📝 Symptoms: ${symptoms}`, 20, 91);

    // Health Suggestions
    doc.setFont("helvetica", "bold");
    doc.text("💡 Health Suggestions:", 20, 105);
    doc.setFont("helvetica", "normal");
    let yPos = 112;
    healthSuggestions.forEach((suggestion) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }
        doc.text(`- ${suggestion}`, 20, yPos);
        yPos += 7;
    });

    // Diet Recommendations
    if (yPos > 220) {
        doc.addPage();
        yPos = 20;
    }
    doc.setFont("helvetica", "bold");
    doc.text("🥗 Diet Recommendations:", 20, yPos);
    yPos += 7;
    doc.setFont("helvetica", "normal");
    dietSuggestions.forEach((diet) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }
        doc.text(`- ${diet}`, 20, yPos);
        yPos += 7;
    });

    // Exercise Recommendations
    if (yPos > 220) {
        doc.addPage();
        yPos = 20;
    }
    doc.setFont("helvetica", "bold");
    doc.text("🏋️ Exercise Recommendations:", 20, yPos);
    yPos += 7;
    doc.setFont("helvetica", "normal");
    exerciseSuggestions.forEach((exercise) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }
        doc.text(`- ${exercise}`, 20, yPos);
        yPos += 7;
    });

    // Add Graphs with Proper Spacing
    doc.addPage();
    addGraphsToPDF(doc, bmi, bp, sugar, 20, () => {
        doc.save(`Health_Report_${name}.pdf`);
    });
});

function getBMIStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
}

function getHealthSuggestions(bmi, bp, sugar) {
    let suggestions = [];

    if (bmi < 18.5) {
        suggestions.push("Increase calorie intake with protein-rich foods.");
    } else if (bmi >= 25) {
        suggestions.push("Reduce high-calorie food intake and exercise daily.");
    }

    let [sys, dia] = bp.split("/").map(Number);
    if (sys > 140 || dia > 90) {
        suggestions.push("Reduce salt intake and monitor stress levels.");
    }

    if (sugar > 140) {
        suggestions.push("Limit sugar and carb intake to manage glucose levels.");
    }

    if (suggestions.length === 0) {
        suggestions.push("You have a healthy status! 🎉");
    }

    return suggestions;
}

function getDietRecommendations(bmi, bp, sugar) {
    let diet = [];

    if (bmi < 18.5) {
        diet.push("Eat more lean proteins, nuts, and healthy fats.");
    } else if (bmi >= 25) {
        diet.push("Reduce processed foods and sugar intake.");
    }

    if (sugar > 140) {
        diet.push("Include more fiber-rich foods and avoid sugary drinks.");
    }

    if (diet.length === 0) {
        diet.push("Maintain a balanced diet rich in nutrients.");
    }

    return diet;
}

function getExerciseRecommendations(bmi, bp, sugar) {
    let exercise = [];

    if (bmi < 18.5) {
        exercise.push("Try strength training to build muscle mass.");
    } else if (bmi >= 25) {
        exercise.push("Include 30 minutes of cardio daily.");
    }

    if (sugar > 140) {
        exercise.push("Do at least 20 minutes of brisk walking daily.");
    }

    if (exercise.length === 0) {
        exercise.push("Maintain a regular workout routine.");
    }

    return exercise;
}

// Function to Draw Graphs with Proper Spacing
function addGraphsToPDF(doc, bmi, bp, sugar, startY, callback) {
    let graphs = [
        { type: "line", data: [18, 20, 22, 24, 26, bmi], label: "BMI Trend", xLabels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Current"] },
        { type: "bar", data: [120, 130, 140, bp], label: "Blood Pressure (mmHg)", xLabels: ["Low", "Normal", "High", "Your BP"] },
        { type: "pie", data: [sugar, 200 - sugar], label: "Blood Sugar Level", xLabels: ["Your Level", "Safe Limit"] },
        { type: "bar", data: [50, 60, 70, 80, 90, bmi * 2], label: "Exercise Progress", xLabels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Now"] }
    ];

    let canvasArray = [];
    let count = 0;
    let yPos = startY;

    graphs.forEach((graph, index) => {
        if (index % 2 === 0) {
            // doc.addPage(); // Ensure each graph has enough space
            yPos = 20;
        }

        let canvas = document.createElement("canvas");
        canvas.width = 250;
        canvas.height = 120;
        document.body.appendChild(canvas);
        canvasArray.push(canvas);

        let ctx = canvas.getContext("2d");

        new Chart(ctx, {
            type: graph.type,
            data: {
                labels: graph.xLabels,
                datasets: [{
                    label: graph.label,
                    data: graph.data,
                    backgroundColor: ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71"]
                }]
            },
            options: {
                responsive: false,
                scales: graph.type !== "pie" ? {
                    x: { title: { display: true, text: graph.label } },
                    y: { title: { display: true, text: "Values" } }
                } : {}
            }
        });

        setTimeout(() => {
            let imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, "PNG", 30, yPos, 120, 60);
            yPos += 70;
            count++;

            if (count === graphs.length) {
                canvasArray.forEach((c) => document.body.removeChild(c));
                callback();
            }
        }, 500);
    });
}

