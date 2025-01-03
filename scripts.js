// scripts.js

// Select all the anchor links inside the navigation
const navLinks = document.querySelectorAll('header ul li a');

// Add event listeners to each link for smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the target section
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
