// JavaScript source code

/* Menu Bar */
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menu.classList.add("show");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menu.classList.remove("show");
        menuOpen = false;
    }
});


/* Parallax Effect */
// Get the parallax container and background elements
const parallaxContainer = document.querySelector(".parallax-container");
const parallaxBackground = document.querySelector(".parallax-background");

// Add an event listener to the scroll event
window.addEventListener("scroll", () => {
    // Get the scroll position
    const scrollPos = window.pageYOffset;

    // Calculate the position of the background element
    const backgroundPos = -(scrollPos * 0.5) + "px";

    // Update the position of the background element
    parallaxBackground.style.transform = `translateY(${backgroundPos})`;
});
