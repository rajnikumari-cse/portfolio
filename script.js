
/* ==========================
   1. SELECT HTML ELEMENTS
========================== */

const typingText = document.getElementById("typing-text");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navigationLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll("main section[id]");
const revealElements = document.querySelectorAll(".reveal");
const backToTop = document.getElementById("back-to-top");
const currentYear = document.getElementById("current-year");

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


/* ==========================
   2. TYPING ANIMATION
========================== */

const roles = [
    "Aspiring Data Analyst",
    "Frontend Developer",
    "B.Tech IT Student"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typingTimer;

function typeRole() {
    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentRole.substring(
        0,
        characterIndex
    );

    let delay = isDeleting ? 40 : 85;

    if (!isDeleting && characterIndex === currentRole.length) {
        isDeleting = true;
        delay = 1400;
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
    }

    typingTimer = setTimeout(typeRole, delay);
}

if (typingText) {
    if (reduceMotion) {
        typingText.textContent = roles[0];
    } else {
        typeRole();
    }
}


/* ==========================
   3. MOBILE MENU
========================== */

function closeMenu() {
    if (!menuToggle || !navLinks) return;

    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 760) {
            closeMenu();
        }
    });
}


/* ==========================
   4. SCROLL REVEAL ANIMATION
========================== */

if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
} else {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
}


/* ==========================
   5. ACTIVE NAVIGATION
========================== */

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;

                const currentId = entry.target.id;

                navigationLinks.forEach(function (link) {
                    const isActive =
                        link.getAttribute("href") === "#" + currentId;

                    link.classList.toggle("active", isActive);
                });
            });
        },
        {
            rootMargin: "-25% 0px -60% 0px"
        }
    );

    pageSections.forEach(function (section) {
        sectionObserver.observe(section);
    });
}


/* ==========================
   6. SCROLL PROGRESS BAR
========================== */

let progressBar = document.getElementById("scroll-progress");

if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.id = "scroll-progress";

    Object.assign(progressBar.style, {
        position: "fixed",
        top: "0",
        left: "0",
        height: "3px",
        width: "0%",
        zIndex: "2000",
        background: "linear-gradient(90deg, #9b7bff, #ed8bff)",
        boxShadow: "0 0 10px rgba(155, 123, 255, 0.6)",
        pointerEvents: "none"
    });

    document.body.appendChild(progressBar);
}

function updateScrollProgress() {
    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, {
    passive: true
});

updateScrollProgress();


/* ==========================
   7. BACK TO TOP BUTTON
========================== */

function updateBackToTop() {
    if (!backToTop) return;

    backToTop.classList.toggle(
        "visible",
        window.scrollY > 400
    );
}

window.addEventListener("scroll", updateBackToTop, {
    passive: true
});

updateBackToTop();

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? "auto" : "smooth"
        });
    });
}


/* ==========================
   8. PROJECT CARD EFFECT
========================== */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.addEventListener("pointerenter", function () {
        card.classList.add("project-hover");
    });

    card.addEventListener("pointerleave", function () {
        card.classList.remove("project-hover");
    });
});


/* ==========================
   9. AUTOMATIC FOOTER YEAR
========================== */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ==========================
   10. CLEANUP ON PAGE HIDE
========================== */

window.addEventListener("pagehide", function () {
    if (typingTimer) {
        clearTimeout(typingTimer);
    }
});
