/*
This JavaScript file isn't used to implement CSS3-Exercise_03 tasks, but to implement an aesthetic addition that I added.
It involves switching the hamburger icon between a glowing animation effect and a pulsing animation effect based on
 whether the mouse is hovering over the hamburger icon, the navigation menu, or outside the navbar.

By default, the hamburger icon glows. However, if the hamburger icon is hovered over
 or the navigation menu is interacted with after its elements appear, the hamburger icon will switch to the pulsing animation effect.
*/

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener('mouseenter', function () {
        this.classList.remove('hamburger-glowing');
        this.classList.add('hamburger-pulsing');
    });

    hamburger.addEventListener('mouseleave', function () {
        if (!document.querySelector("nav:hover")) {
            this.classList.remove('hamburger-pulsing');
            this.classList.add('hamburger-glowing');
        }
    });
    navbar.addEventListener('mouseleave', function () {
        hamburger.classList.remove('hamburger-pulsing');
        hamburger.classList.add('hamburger-glowing');
    });
});

