const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", function () {
    siteHeader.classList.toggle("menu-open");
    const isOpen = siteHeader.classList.contains("menu-open");
    menuButton.setAttribute("aria-expanded", isOpen);
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#contact-name").value.trim();
        formStatus.textContent = "Thank you, " + name + "! Your message has been submitted.";
        contactForm.reset();
    });
}
