// =========================
// Scale Explorer v0.2
// app.js
// =========================

// Create starfield
const stars = document.getElementById("stars");

function createStars() {

    for (let i = 0; i < 250; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";

        star.style.top = Math.random() * 100 + "vh";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.width =
            Math.random() * 2 + 1 + "px";

        star.style.height =
            star.style.width;

        stars.appendChild(star);

    }

}

// Begin Journey
function startJourney() {

    const welcome =
        document.getElementById("welcome");

    const scene =
        document.getElementById("scene");

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        scene.style.display = "block";

    }, 700);

}

// Events
document
.getElementById("beginButton")
.addEventListener(
    "click",
    startJourney
);

// Initialize
createStars();

console.log("Scale Explorer v0.2 loaded");
