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
const loadingDuration = 3000; // 3 seconds
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