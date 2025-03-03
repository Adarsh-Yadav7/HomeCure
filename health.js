// document.addEventListener("DOMContentLoaded", () => {
//     fetch("http://127.0.0.1:5000/api/health", {
//         method: "POST",  // ✅ Change from GET to POST
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         const resourceList = document.getElementById("resource-list");
//         resourceList.innerHTML = "";  // Clear previous content

//         data.forEach(resource => {
//             let item = document.createElement("div");
//             item.classList.add("resource-item");

//             let title = document.createElement("h3");
//             title.textContent = resource.title;

//             let content;
//             if (resource.type === "video") {
//                 content = document.createElement("a");
//                 content.href = resource.content;
//                 content.textContent = "Watch Video";
//                 content.target = "_blank";
//             } else if (resource.type === "image") {
//                 content = document.createElement("img");
//                 content.src = resource.content;
//                 content.alt = resource.title;
//                 content.style.width = "100%";
//             } else {
//                 content = document.createElement("a");
//                 content.href = resource.content;
//                 content.textContent = "Read Article";
//                 content.target = "_blank";
//             }

//             item.appendChild(title);
//             item.appendChild(content);
//             resourceList.appendChild(item);
//         });
//     })
//     .catch(error => console.error("Error fetching resources:", error));
// });

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://127.0.0.1:5005/api/health", {  // ✅ Fixed API URL & changed method to GET
        method: "GET",  // ✅ Changed from POST to GET
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const resourceList = document.getElementById("resource-list");
        resourceList.innerHTML = "";  // Clear previous content

        data.forEach(resource => {
            let item = document.createElement("div");
            item.classList.add("resource-item");

            let title = document.createElement("h3");
            title.textContent = resource.title;

            let content;
            if (resource.type === "video") {
                content = document.createElement("a");
                content.href = resource.content;
                content.textContent = "Watch Video";
                content.target = "_blank";
            } else {
                content = document.createElement("a");
                content.href = resource.content;
                content.textContent = "Read Article";
                content.target = "_blank";
            }

            item.appendChild(title);
            item.appendChild(content);
            resourceList.appendChild(item);
        });
    })
    .catch(error => console.error("Error fetching resources:", error));
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