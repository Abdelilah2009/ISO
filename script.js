// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle functionality
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-active");
    navMenu.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
    mobileMenu.classList.remove("is-active");
    navMenu.classList.remove("active");
  }
});

// Scroll to Top Button functionality
const scrollToTopButton = document.getElementById("scrollToTop");

// Show/hide scroll to top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// Smooth scroll to top when button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Creative Loader Functionality
const loader = document.getElementById("loader");
const loaderFill = document.querySelector(".loader-fill");
const loaderPercentage = document.querySelector(".loader-percentage");

let progress = 0;
const loadingDuration = 0; // 0 second for test it
const updateInterval = 50; // Update every 50ms

function updateLoader() {
  progress += (100 / (loadingDuration / updateInterval));
  
  if (progress >= 100) {
    progress = 100;
    loaderFill.style.width = "100%";
    loaderPercentage.textContent = "100%";
    
    // Hide loader after completion
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 500);
  } else {
    loaderFill.style.width = progress + "%";
    loaderPercentage.textContent = Math.round(progress) + "%";
  }
}

// Start loading animation when page loads
window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";
  
  // Start the progress animation
  const loadingTimer = setInterval(() => {
    updateLoader();
    
    if (progress >= 100) {
      clearInterval(loadingTimer);
    }
  }, updateInterval);
});

// Fallback: Hide loader after maximum time
setTimeout(() => {
  if (!loader.classList.contains("hidden")) {
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}, loadingDuration + 2000);

// ScrollReveal Animations
const sr = ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 100,
  reset: false
});

// Hero Section Animations
sr.reveal('.hero-tagline', {
  delay: 200,
  origin: 'top',
  distance: '30px'
});

sr.reveal('.hero-title', {
  delay: 400,
  origin: 'top',
  distance: '50px'
});

sr.reveal('.hero-description', {
  delay: 600,
  origin: 'left',
  distance: '40px'
});

sr.reveal('.hero-actions', {
  delay: 800,
  origin: 'bottom',
  distance: '40px'
});

// Lodging Cards Animation
sr.reveal('.lodging-card', {
  delay: 200,
  origin: 'bottom',
  interval: 200
});

// About Section Animations
sr.reveal('.about-header-title', {
  delay: 200,
  origin: 'left'
});

sr.reveal('.about-header-description', {
  delay: 400,
  origin: 'right'
});

sr.reveal('.about-section', {
  delay: 200,
  origin: 'left'
});

sr.reveal('.about-categories', {
  delay: 400,
  origin: 'bottom'
});

sr.reveal('.about-image-placeholder', {
  delay: 600,
  origin: 'right'
});

// Testimonials Animation
sr.reveal('.testimonials-title', {
  delay: 200,
  origin: 'top'
});

sr.reveal('.testimonial-card', {
  delay: 200,
  origin: 'bottom',
  interval: 150
});

// Statistics Section Animation
sr.reveal('.statistics-title', {
  delay: 200,
  origin: 'left'
});

sr.reveal('.statistics-content-details', {
  delay: 400,
  origin: 'left'
});

sr.reveal('.statistics-card', {
  delay: 600,
  origin: 'right'
});

// Video Section Animation
sr.reveal('.video-title', {
  delay: 200,
  origin: 'left'
});

sr.reveal('.video-description', {
  delay: 400,
  origin: 'right'
});

sr.reveal('.video-placeholder', {
  delay: 600,
  origin: 'bottom'
});

sr.reveal('.video-stats', {
  delay: 800,
  origin: 'right'
});

// Subscription Section Animation
sr.reveal('.subscription-title', {
  delay: 200,
  origin: 'left'
});

sr.reveal('.subscription-description', {
  delay: 400,
  origin: 'right'
});

sr.reveal('.subscription-form', {
  delay: 600,
  origin: 'bottom'
});

// Footer Animation
sr.reveal('.footer-brand', {
  delay: 200,
  origin: 'left'
});

sr.reveal('.nav-column', {
  delay: 200,
  origin: 'bottom',
  interval: 100
});

sr.reveal('.footer-contact', {
  delay: 400,
  origin: 'right'
});