// =====================================
// GALAXYX SPACE TOURISM WEBSITE
// =====================================

// NAVBAR SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5,8,22,.98)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,229,255,.15)";

    } else {

        header.style.background =
            "rgba(5,8,22,.85)";

        header.style.boxShadow =
            "none";

    }

});

// =====================================
// HERO BUTTON
// =====================================

const heroBtn =
    document.querySelector(".hero-btn");

heroBtn.addEventListener("click", () => {

    document.querySelector(".planets")
        .scrollIntoView({

            behavior: "smooth"

        });

});

// =====================================
// BOOK FLIGHT BUTTON
// =====================================

const bookBtn =
    document.querySelector(".book-btn");

bookBtn.addEventListener("click", () => {

    alert(
        "🚀 Flight reservation system opening soon!"
    );

});

// =====================================
// PLANET CARDS
// =====================================

const planetCards =
    document.querySelectorAll(".planet-card");

planetCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

// =====================================
// HOTEL CARDS
// =====================================

const hotelCards =
    document.querySelectorAll(".hotel-card");

hotelCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 0 30px #00e5ff55";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "none";

    });

});

// =====================================
// FLEET CARDS
// =====================================

const fleetCards =
    document.querySelectorAll(".fleet-card");

fleetCards.forEach(card => {

    card.addEventListener("click", () => {

        const rocketName =
            card.querySelector("h3").innerText;

        alert(
            `🚀 ${rocketName} selected for your mission!`
        );

    });

});

// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const sections =
    document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform =
        "translateY(60px)";
    section.style.transition =
        "all .8s ease";

});

function revealSections() {

    sections.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (top < screenHeight - 100) {

            section.style.opacity =
                "1";

            section.style.transform =
                "translateY(0)";

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

// =====================================
// PARALLAX STARS EFFECT
// =====================================

const stars =
    document.querySelector(".stars");

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    stars.style.transform =
        `translate(${x}px, ${y}px)`;

});

// =====================================
// COUNTDOWN TIMER
// =====================================

// HTML ichiga keyinchalik
// <div id="countdown"></div>
// qo'shsangiz ishlaydi

const countdown =
    document.getElementById("countdown");

if (countdown) {

    const launchDate =
        new Date("January 1, 2030 00:00:00")
            .getTime();

    setInterval(() => {

        const now =
            new Date().getTime();

        const distance =
            launchDate - now;

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24))
                /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60))
                /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60))
                / 1000
            );

        countdown.innerHTML =

            `
            <h2>
                🚀 Next Launch
            </h2>

            <h3>
                ${days}d
                ${hours}h
                ${minutes}m
                ${seconds}s
            </h3>
            `;

    }, 1000);

}

// =====================================
// LOGO TO TOP
// =====================================

const logo =
    document.querySelector(".logo");

logo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =====================================
// TYPING EFFECT
// =====================================

const heroTitle =
    document.querySelector(".hero h1");

const originalText =
    heroTitle.innerText;

heroTitle.innerText = "";

let index = 0;

function typeEffect() {

    if (index < originalText.length) {

        heroTitle.innerText +=
            originalText.charAt(index);

        index++;

        setTimeout(
            typeEffect,
            80
        );

    }

}

typeEffect();

// =====================================
// PAGE LOADED
// =====================================

console.log(
    "🚀 GalaxyX Space Tourism Loaded Successfully"
);