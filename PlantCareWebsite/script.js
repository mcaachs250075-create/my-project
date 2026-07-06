// =========================
// Welcome Message
// =========================

console.log("Plant Care Website Loaded Successfully!");

// =========================
// Explore Button
// =========================

const exploreBtn = document.querySelector(".hero button");

exploreBtn.addEventListener("click", function () {
    document.getElementById("plants").scrollIntoView({
        behavior: "smooth"
    });
});

// =========================
// Plant Search
// =========================

const search = document.getElementById("searchPlant");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        let plant = card.innerText.toLowerCase();

        if (plant.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// =========================
// Contact Form
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent successfully.");

    form.reset();

});

// =========================
// Back to Top Button
// =========================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Button Style

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 18px";
topBtn.style.fontSize = "20px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2E8B57";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

// Show Button

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

// Scroll to Top

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// Newsletter Subscribe

const subscribeBtn = document.querySelector(".newsletter button");

subscribeBtn.addEventListener("click", function(){

    const email = document.querySelector(".newsletter input");

    if(email.value === ""){

        alert("Please enter your email.");

    }else{

        alert("Thank you for subscribing!");

        email.value = "";

    }

});
// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        darkBtn.innerHTML="☀ Light Mode";

    }

    else{

        darkBtn.innerHTML="🌙 Dark Mode";

    }

});
// Water Reminder

const reminderBtn = document.getElementById("reminderBtn");

reminderBtn.addEventListener("click", function(){

    const plant = document.getElementById("plantName").value;
    const days = document.getElementById("days").value;
    const result = document.getElementById("result");

    if(plant === "" || days === ""){

        result.innerHTML = "⚠ Please enter all details.";

    }else{

        result.innerHTML =
        "✅ Remember to water <b>" +
        plant +
        "</b> every <b>" +
        days +
        "</b> day(s).";

    }

});