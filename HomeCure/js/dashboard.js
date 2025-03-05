// document.addEventListener("DOMContentLoaded", function () {
//     let lineChart, pieChart, gaugeChart;

//     const ctxLine = document.getElementById('lineChart').getContext('2d');
//     const ctxPie = document.getElementById('pieChart').getContext('2d');
//     const ctxGauge = document.getElementById('gaugeChart').getContext('2d');

//     // Sample Data
//     let bmiData = [22, 23, 24, 23.5, 24.2];
//     let sugarData = [90, 110, 120, 105, 115];
//     let bpData = [120, 130, 125, 140, 135];
//     let labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];

//     // ✅ Line Chart - Tracks BMI & Sugar Level Trends
//     lineChart = new Chart(ctxLine, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [
//                 {
//                     label: 'BMI',
//                     data: bmiData,
//                     borderColor: 'blue',
//                     backgroundColor: 'rgba(0, 0, 255, 0.2)',
//                     fill: true
//                 },
//                 {
//                     label: 'Sugar Level',
//                     data: sugarData,
//                     borderColor: 'red',
//                     backgroundColor: 'rgba(255, 0, 0, 0.2)',
//                     fill: true
//                 }
//             ]
//         },
//         options: { responsive: true }
//     });

//     // ✅ Pie Chart - Displays Health Risk Proportions
//     pieChart = new Chart(ctxPie, {
//         type: 'pie',
//         data: {
//             labels: ["Healthy", "Borderline", "High Risk"],
//             datasets: [{
//                 data: [50, 30, 20],
//                 backgroundColor: ["green", "yellow", "red"]
//             }]
//         }
//     });

//     // ✅ Gauge Chart - Shows Current BMI
//     gaugeChart = new Chart(ctxGauge, {
//         type: 'doughnut',
//         data: {
//             labels: ["Underweight", "Healthy", "Overweight", "Obese"],
//             datasets: [{
//                 data: [10, 50, 25, 15],
//                 backgroundColor: ["blue", "green", "orange", "red"]
//             }]
//         },
//         options: {
//             circumference: 180,
//             rotation: 270,
//             cutout: '50%'
//         }
//     });

//     // ✅ Update Charts with User Input
//     window.updateCharts = function () {
//         let newBMI = parseFloat(document.getElementById("bmi").value);
//         let newSugar = parseFloat(document.getElementById("sugar").value);
//         let newBP = parseFloat(document.getElementById("bp").value);

//         if (!isNaN(newBMI)) bmiData.push(newBMI);
//         if (!isNaN(newSugar)) sugarData.push(newSugar);
//         if (!isNaN(newBP)) bpData.push(newBP);

//         labels.push(`Week ${labels.length + 1}`);

//         // Update Line Chart
//         lineChart.data.labels = labels;
//         lineChart.data.datasets[0].data = bmiData;
//         lineChart.data.datasets[1].data = sugarData;
//         lineChart.update();

//         // Update Pie Chart
//         pieChart.data.datasets[0].data = [Math.random() * 50, Math.random() * 30, Math.random() * 20];
//         pieChart.update();

//         // Update Gauge Chart
//         gaugeChart.data.datasets[0].data = [Math.random() * 20, Math.random() * 40, Math.random() * 30, Math.random() * 10];
//         gaugeChart.update();
//     };
// });

// Initialize chart instances
//let lineChart, pieChart, gaugeChart, barChart;

// // Function to create charts
// function createCharts() {
//     const ctx1 = document.getElementById("lineChart").getContext("2d");
//     const ctx2 = document.getElementById("pieChart").getContext("2d");
//     const ctx3 = document.getElementById("gaugeChart").getContext("2d");
//     const ctx4 = document.getElementById("barChart").getContext("2d");

//     // Line Chart (BMI Trend)
//     lineChart = new Chart(ctx1, {
//         type: "line",
//         data: {
//             labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//             datasets: [{
//                 label: "BMI Trend",
//                 data: [22, 23, 24, 25],
//                 borderColor: "blue",
//                 backgroundColor: "rgba(0, 0, 255, 0.2)",
//                 fill: true
//             }]
//         }
//     });

//     // Pie Chart (Health Risks)
//     pieChart = new Chart(ctx2, {
//         type: "pie",
//         data: {
//             labels: ["Normal", "Overweight", "Obese"],
//             datasets: [{
//                 data: [50, 30, 20],
//                 backgroundColor: ["green", "orange", "red"]
//             }]
//         }
//     });

//     // Gauge Chart (Current BMI)
//     gaugeChart = new Chart(ctx3, {
//         type: "doughnut",
//         data: {
//             labels: ["Healthy", "Overweight", "Obese"],
//             datasets: [{
//                 data: [60, 30, 10],
//                 backgroundColor: ["green", "yellow", "red"]
//             }]
//         },
//         options: {
//             circumference: 180,
//             rotation: 270,
//             cutout: "80%"
//         }
//     });

//     // Bar Chart (Blood Pressure Levels)
//     barChart = new Chart(ctx4, {
//         type: "bar",
//         data: {
//             labels: ["Systolic", "Diastolic"],
//             datasets: [{
//                 label: "BP (mmHg)",
//                 data: [120, 80],
//                 backgroundColor: ["blue", "red"]
//             }]
//         }
//     });
// }

// // Function to update charts with user input
// function updateCharts() {
//     const bmiValue = document.getElementById("bmi").value || 22;
//     const sugarValue = document.getElementById("sugar").value || 100;
//     const bpValue = document.getElementById("bp").value || 120;

//     // Update Line Chart
//     lineChart.data.datasets[0].data.push(bmiValue);
//     lineChart.data.labels.push(`Week ${lineChart.data.labels.length + 1}`);
//     lineChart.update();

//     // Update Pie Chart (Health Risk)
//     pieChart.data.datasets[0].data = [
//         100 - sugarValue / 2,
//         sugarValue / 2,
//         sugarValue / 4
//     ];
//     pieChart.update();

//     // Update Gauge Chart (BMI)
//     gaugeChart.data.datasets[0].data = [bmiValue, 100 - bmiValue, 10];
//     gaugeChart.update();

//     // Update Bar Chart (BP)
//     barChart.data.datasets[0].data = [bpValue, bpValue - 40];
//     barChart.update();
// }

// // Initialize charts on page load
// window.onload = createCharts;







let lineChart, pieChart, gaugeChart, barChart;

function createCharts() {
    const ctx1 = document.getElementById("lineChart").getContext("2d");
    const ctx2 = document.getElementById("pieChart").getContext("2d");
    const ctx3 = document.getElementById("gaugeChart").getContext("2d");
    const ctx4 = document.getElementById("barChart").getContext("2d");

    // Line Chart (BMI Trend)
    lineChart = new Chart(ctx1, {
        type: "line",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [{
                label: "BMI Trend",
                data: [22, 23, 24, 25],
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                fill: true
            }]
        }
    });

    // Pie Chart (Health Risks)
    pieChart = new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Normal", "Overweight", "Obese"],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: ["green", "orange", "red"]
            }]
        }
    });

    // Gauge Chart (Current BMI)
    gaugeChart = new Chart(ctx3, {
        type: "doughnut",
        data: {
            labels: ["Healthy", "Overweight", "Obese"],
            datasets: [{
                data: [60, 30, 10],
                backgroundColor: ["green", "yellow", "red"]
            }]
        },
        options: {
            circumference: 180,
            rotation: 270,
            cutout: "80%"
        }
    });

    // Bar Chart (Blood Pressure Levels)
    barChart = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Systolic", "Diastolic"],
            datasets: [{
                label: "BP (mmHg)",
                data: [120, 80],
                backgroundColor: ["blue", "red"]
            }]
        }
    });
}

// Function to update charts with user input
function updateCharts() {
    const bmiValue = document.getElementById("bmi").value || 22;
    const sugarValue = document.getElementById("sugar").value || 100;
    const bpValue = document.getElementById("bp").value || 120;

    lineChart.data.datasets[0].data.push(bmiValue);
    lineChart.data.labels.push(`Week ${lineChart.data.labels.length + 1}`);
    lineChart.update();

    pieChart.data.datasets[0].data = [100 - sugarValue / 2, sugarValue / 2, sugarValue / 4];
    pieChart.update();

    gaugeChart.data.datasets[0].data = [bmiValue, 100 - bmiValue, 10];
    gaugeChart.update();

    barChart.data.datasets[0].data = [bpValue, bpValue - 40];
    barChart.update();
}

window.onload = createCharts;

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

