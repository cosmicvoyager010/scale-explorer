/* ==========================================
   Scale Explorer v0.2
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------------------
    // Generate Stars
    // ---------------------------------------

    const stars = document.getElementById("stars");

    for (let i = 0; i < 250; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        const size = Math.random();

        if (size > 0.92) {
            star.classList.add("large");
        } else if (size > 0.65) {
            star.classList.add("medium");
        }

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            (Math.random() * 6).toFixed(2) + "s";

        stars.appendChild(star);

    }

    // ---------------------------------------
    // Welcome Screen
    // ---------------------------------------

    const beginButton = document.getElementById("beginButton");
    const welcome = document.getElementById("welcome");
    const universe = document.getElementById("universe");

    if (beginButton && welcome && universe) {

        beginButton.addEventListener("click", () => {

            welcome.style.opacity = "0";

            setTimeout(() => {

                welcome.style.display = "none";

                universe.style.display = "flex";

            }, 1000);

        });

    }

    // ---------------------------------------
    // Earth Animation
    // ---------------------------------------

    const earth = document.getElementById("earth");

    if (earth) {

        let angle = 0;

        setInterval(() => {

            angle += 0.2;

            earth.style.transform =
                `rotate(${angle}deg)`;

        }, 40);

    }

});
