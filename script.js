
/* Automatically update footer year */
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerText =
        `© ${new Date().getFullYear()} Rajni Kumari | Portfolio`;
}

/* Smooth navigation */
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
