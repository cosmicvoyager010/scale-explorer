/* ==========================================
   Scale Explorer v0.2
   app.js
   ========================================== */

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // Generate Starfield
    // -----------------------------
    const stars = document.getElementById("stars");

    for (let i = 0; i < 250; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        const randomSize = Math.random();

        if (randomSize > 0.92) {
            star.classList.add("large");
        } else if (randomSize > 0.65) {
            star.classList.add("medium");
        }

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            (Math.random() * 8).toFixed(2) + "s";

        stars.appendChild(star);
    }

    // -----------------------------
    // Begin Journey Button
    // -----------------------------
    const button = document.getElementById("beginButton");
    const welcome = document.getElementById("welcome");
    const universe = document.getElementById("universe");

    if (button && welcome && universe) {

        button.addEventListener("click", () => {

            welcome.style.opacity = "0";

            setTimeout(() => {

                welcome.style.display = "none";

                universe.style.display = "flex";

            }, 1000);

        });

    }

});
