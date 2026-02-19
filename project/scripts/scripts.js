const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

//Hamburger Menu//
const button = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");

button.addEventListener("click", function() {

    menu.classList.toggle("open");

});

console.log("menu loaded");
//tableActivities saveActivites and more

const form = document.querySelector("form");

if (form) {
    
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const activity = {
            name: document.querySelector("#aname").value,
            description: document.querySelector("#description").value,
            location: document.querySelector("#location").value,
            date: document.querySelector("#date").value,
            organization: document.querySelector("#organization").value,
            contact: document.querySelector("#fname").value,
            phone: document.querySelector("#phone").value,
            email: document.querySelector("#email").value,
        };
        
        let activities = JSON.parse(localStorage.getItem("activities"))

        activities.push(activity);

        localStorage.setItem("activities", JSON.stringify(activities));

        form.reset();

        alert("Activity added to the calendar succesfully!");
    });
}

const table = document.querySelector("#activitiesTable");

if (table) {
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    activities.forEach((activity) => {
       
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${activity.name}</td>
            <td>${activity.organization}</td>
            <td>${activity.location}</td>
            <td>${activity.date}</td>
        `;

        table.appendChild(row);
    });
}