// Function to display first-aid instructions based on selected emergency
function showFirstAidInfo() {
    let infoBox = document.getElementById("firstAidInfo");
    let selectedIssue = document.getElementById("firstAidSelector").value;

    // First aid instructions data
    let firstAidData = {
        "burns": "🔥 <b>First Aid for Burns:</b><br>1. Cool the burn with running water for 10-20 minutes.<br>2. Cover the burn with a sterile gauze bandage.<br>3. Do not pop blisters.<br>4. Seek medical help if the burn is severe.",
        "cuts": "🩸 <b>First Aid for Cuts & Wounds:</b><br>1. Apply direct pressure to stop bleeding.<br>2. Clean the wound with water.<br>3. Apply antiseptic and cover with a bandage.<br>4. If deep, seek medical attention.",
        "choking": "😮 <b>First Aid for Choking:</b><br>1. Encourage coughing if the person can still breathe.<br>2. Perform the Heimlich maneuver: Apply abdominal thrusts.<br>3. If unconscious, perform CPR and call emergency services.",
        "heart_attack": "❤️ <b>First Aid for Heart Attack:</b><br>1. Call 102 immediately.<br>2. Keep the person calm and seated.<br>3. Loosen tight clothing.<br>4. If available, give aspirin (unless allergic).<br>5. Perform CPR if needed.",
        "fracture": "🦴 <b>First Aid for Bone Fracture:</b><br>1. Immobilize the injured area.<br>2. Apply ice packs to reduce swelling.<br>3. Avoid moving the injured limb.<br>4. Seek medical help immediately.",
        "poisoning": "☠️ <b>First Aid for Poisoning:</b><br>1. Call poison control (1800-11-6117) immediately.<br>2. Do not induce vomiting unless advised.<br>3. Try to identify the substance.<br>4. Seek immediate medical help.",
        "electric_shock": "⚡ <b>First Aid for Electric Shock:</b><br>1. Turn off the power source.<br>2. Do not touch the person directly.<br>3. Check for breathing and pulse.<br>4. Call emergency services.",
        "nose_bleed": "👃 <b>First Aid for Nose Bleed:</b><br>1. Sit up straight and tilt head forward.<br>2. Pinch the nostrils for 5-10 minutes.<br>3. Apply a cold compress to the nose.<br>4. If bleeding continues, seek medical help.",
        "snake_bite": "🐍 <b>First Aid for Snake Bite:</b><br>1. Keep the person calm and still.<br>2. Remove tight clothing or jewelry.<br>3. Do not suck out the venom.<br>4. Seek medical help immediately.",
        "unconscious": "😵 <b>First Aid for Unconscious Person:</b><br>1. Check if the person is breathing.<br>2. If not breathing, start CPR.<br>3. Call emergency services immediately.<br>4. If breathing, place in recovery position.",
        "heat_stroke": "☀️ <b>First Aid for Heat Stroke:</b><br>1. Move the person to a cool place.<br>2. Remove excess clothing.<br>3. Apply cool compresses or cold water.<br>4. Seek medical help immediately.",
        "hypothermia": "❄️ <b>First Aid for Hypothermia:</b><br>1. Move the person to a warm place.<br>2. Remove wet clothing and cover with blankets.<br>3. Give warm drinks (not alcohol).<br>4. Seek medical help immediately."
    };

    // Update the info box with selected first-aid instructions
    infoBox.innerHTML = firstAidData[selectedIssue] || "<p>Select an emergency from the dropdown to see first-aid steps.</p>";
}

// Function to send an SOS message with location
document.getElementById("sosButton").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            let message = `🚨 Emergency! Need help. My location: https://www.google.com/maps?q=${lat},${lon}`;
            let whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
            
            alert("Sending SOS alert...");
            window.open(whatsappLink, "_blank");
        }, function(error) {
            alert("Could not access location. Please check your settings.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
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
