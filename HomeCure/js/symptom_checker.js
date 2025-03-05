const diseases = {
    "cold": {
        "symptoms": ["sneezing", "runny nose", "sore throat", "mild fever"],
        "precautions": "Drink warm fluids, rest, and take vitamin C.",
        "remedies": "Steam inhalation, honey with ginger tea."
    },
    "flu": {
        "symptoms": ["fever", "cough", "fatigue", "muscle aches"],
        "precautions": "Stay hydrated, take rest, and use over-the-counter medications.",
        "remedies": "Gargle with warm salt water, drink herbal tea."
    },
    "covid-19": {
        "symptoms": ["fever", "cough", "shortness of breath", "loss of taste or smell"],
        "precautions": "Self-isolate, wear a mask, get tested.",
        "remedies": "Rest, hydration, and vitamin-rich foods."
    },
    "diabetes": {
        "symptoms": ["excessive thirst", "frequent urination", "weight loss", "fatigue"],
        "precautions": "Monitor blood sugar, maintain a balanced diet, exercise regularly.",
        "remedies": "Increase fiber intake, control carbohydrate consumption."
    },
    "heart disease": {
        "symptoms": ["chest pain", "shortness of breath", "fatigue", "irregular heartbeat"],
        "precautions": "Avoid junk food, manage stress, regular check-ups.",
        "remedies": "Healthy diet, daily walks, and controlled salt intake."
    }
};

function checkSymptoms() {
    const userInput = document.getElementById("symptoms").value.toLowerCase();
    const inputSymptoms = userInput.split(",").map(s => s.trim());
    
    let possibleConditions = [];
    let suggestedPrecautions = [];
    let suggestedRemedies = [];

    for (let disease in diseases) {
        let diseaseSymptoms = diseases[disease].symptoms;
        let matchCount = inputSymptoms.filter(symptom => diseaseSymptoms.includes(symptom)).length;
        
        if (matchCount > 0) {
            possibleConditions.push(disease);
            suggestedPrecautions.push(`${disease}: ${diseases[disease].precautions}`);
            suggestedRemedies.push(`${disease}: ${diseases[disease].remedies}`);
        }
    }

    document.getElementById("condition-result").innerHTML = possibleConditions.length > 0 ? 
        possibleConditions.join(", ") : "No conditions found. Consult a doctor if needed.";

    document.getElementById("remedies").innerHTML = suggestedPrecautions.length > 0 ? 
        suggestedPrecautions.join("<br>") + "<br><br>" + suggestedRemedies.join("<br>") : 
        "No specific precautions found.";
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
