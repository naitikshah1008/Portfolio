
document.addEventListener("DOMContentLoaded", function () {

    
    
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }





const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.addEventListener("scroll", function () {
if (window.scrollY > 200) { // Show after scrolling 200px
scrollToTopBtn.classList.add("show");
} else {
scrollToTopBtn.classList.remove("show");
}
});

window.addEventListener("scroll", function () {
let parallax = document.querySelector(".parallax-section");
let scrollPosition = window.scrollY;
parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});


// Scroll to top smoothly when button is clicked
scrollToTopBtn.addEventListener("click", function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});

history.scrollRestoration = "manual"; // Prevents browser from remembering scroll position

setTimeout(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}, 50); // Delay to ensure it applies properly

document.querySelector('.navbar-name').addEventListener('click', function (e) {
    e.preventDefault();
    let targetSection = document.getElementById("home");

    window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for fixed navbar
        behavior: 'smooth'
    });
});

// Smooth scrolling when clicking navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);

        // Smooth scroll to section
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for fixed navbar
            behavior: 'smooth'
        });

        // Remove 'active' from all sections and add to clicked one
        document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
        targetSection.classList.add('active');
    });
});

// IntersectionObserver to trigger fade-in effect
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add fade-in effect when visible
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of the section is visible

// Apply observer to all sections
document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

// Ensure contact section and footer appear smoothly together
const contactSection = document.querySelector("#contact");
const footer = document.querySelector(".footer");

if (contactSection && footer) {
    const contactObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add("active");
                footer.classList.add("active");
            }
        });
    }, { threshold: 0.3 });

    contactObserver.observe(contactSection);
}
});

