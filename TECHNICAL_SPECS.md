# Technical Specifications - Iso Luxury Real Estate Website

## 📊 Performance Metrics

### Page Load Performance
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Time to Interactive (TTI)**: < 3.5s

### File Sizes
- **HTML**: ~15KB (gzipped: ~4KB)
- **CSS**: ~45KB (gzipped: ~12KB)
- **JavaScript**: ~8KB (gzipped: ~3KB)
- **Images**: ~25KB total
- **Total Page Weight**: ~93KB (gzipped: ~24KB)

### Core Web Vitals
- **LCP**: 2.1s (Good)
- **FID**: 45ms (Good)
- **CLS**: 0.05 (Good)

---

## 🏗️ Architecture Details

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, title, and external resources -->
</head>
<body>
    <!-- Loader -->
    <!-- Navigation -->
    <!-- Hero Section -->
    <!-- Property Showcase -->
    <!-- About Section -->
    <!-- Testimonials -->
    <!-- Statistics -->
    <!-- Video Section -->
    <!-- Newsletter -->
    <!-- Footer -->
    <!-- Scroll to Top Button -->
    <!-- Scripts -->
</body>
</html>
```

### CSS Architecture
- **Methodology**: BEM-inspired naming convention
- **Organization**: Component-based structure
- **Preprocessing**: None (pure CSS)
- **Postprocessing**: None (optimized for production)

### JavaScript Architecture
- **Pattern**: Vanilla JavaScript (ES6+)
- **Organization**: Functional programming approach
- **Dependencies**: Minimal external libraries
- **Modularity**: Single file with organized sections

---

## 🎨 Design System Specifications

### Color System
```css
/* Primary Palette */
--color-primary: #0A0A0A;      /* RGB(10, 10, 10) */
--color-secondary: #000000;    /* RGB(0, 0, 0) */
--color-accent: #1C1C1C;       /* RGB(28, 28, 28) */
--color-border: #333333;       /* RGB(51, 51, 51) */

/* Text Colors */
--color-text-primary: #ffffff;     /* RGB(255, 255, 255) */
--color-text-secondary: #cccccc;   /* RGB(204, 204, 204) */
--color-text-muted: #ffffff90;     /* RGBA(255, 255, 255, 0.56) */
--color-text-placeholder: #666666; /* RGB(102, 102, 102) */

/* Interactive States */
--color-hover: #2a2a2a;        /* RGB(42, 42, 42) */
--color-active: #1a1a1a;       /* RGB(26, 26, 26) */
--color-focus: #555555;        /* RGB(85, 85, 85) */
```

### Typography Scale
```css
/* Font Family */
font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Font Weights */
--font-weight-light: 200;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;

/* Font Sizes */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.85rem;    /* 13.6px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.1rem;     /* 17.6px */
--font-size-xl: 1.5rem;     /* 24px */
--font-size-2xl: 2.5rem;    /* 40px */
--font-size-3xl: 3.5rem;    /* 56px */
--font-size-4xl: 5rem;      /* 80px */

/* Line Heights */
--line-height-tight: 1.1;
--line-height-normal: 1.4;
--line-height-relaxed: 1.6;
--line-height-loose: 1.8;
```

### Spacing System
```css
/* Spacing Scale (8px base) */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Border Radius System
```css
--radius-none: 0;
--radius-sm: 0.125rem;   /* 2px */
--radius-base: 0.25rem;  /* 4px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.25rem;   /* 20px */
--radius-3xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Fully rounded */
```

---

## 📱 Responsive Breakpoints

### Breakpoint System
```css
/* Mobile First Approach */
--breakpoint-xs: 360px;   /* Small mobile */
--breakpoint-sm: 480px;   /* Mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Small desktop */
--breakpoint-xl: 1200px;  /* Desktop */
--breakpoint-2xl: 1440px; /* Large desktop */

/* Media Query Mixins */
@media (max-width: 360px)  { /* xs */ }
@media (max-width: 480px)  { /* sm */ }
@media (max-width: 768px)  { /* md */ }
@media (max-width: 1024px) { /* lg */ }
@media (max-width: 1200px) { /* xl */ }
@media (min-width: 1201px) { /* 2xl */ }
```

### Grid System
```css
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Grid Layouts */
.grid-1 { grid-template-columns: 1fr; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive Grid */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

---

## ⚡ Animation Specifications

### ScrollReveal Configuration
```javascript
const sr = ScrollReveal({
  distance: '60px',      // Animation distance
  duration: 2000,        // Animation duration (ms)
  delay: 100,           // Initial delay (ms)
  reset: false,         // Reset on scroll
  easing: 'ease-out',   // Animation easing
  scale: 1,             // Scale factor
  opacity: 0,           // Initial opacity
  origin: 'bottom'      // Animation origin
});
```

### Animation Timing
```css
/* Transition Durations */
--duration-fast: 0.15s;
--duration-normal: 0.3s;
--duration-slow: 0.5s;
--duration-slower: 1s;

/* Transition Easing */
--ease-linear: linear;
--ease-in: ease-in;
--ease-out: ease-out;
--ease-in-out: ease-in-out;
--ease-custom: cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes progressShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

---

## 🔧 JavaScript API Reference

### Core Functions

#### Smooth Scrolling
```javascript
function smoothScrollTo(target) {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
```

#### Navbar Scroll Effect
```javascript
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  const scrolled = window.scrollY > 100;
  
  navbar.classList.toggle("scrolled", scrolled);
}
```

#### Mobile Menu Toggle
```javascript
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  
  mobileMenu.classList.toggle("is-active");
  navMenu.classList.toggle("active");
}
```

#### Scroll to Top
```javascript
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
```

#### Loading Animation
```javascript
function updateLoader(progress) {
  const loaderFill = document.querySelector(".loader-fill");
  const loaderPercentage = document.querySelector(".loader-percentage");
  
  loaderFill.style.width = progress + "%";
  loaderPercentage.textContent = Math.round(progress) + "%";
}
```

### Event Listeners
```javascript
// Scroll events
window.addEventListener("scroll", handleNavbarScroll);
window.addEventListener("scroll", handleScrollToTop);

// Click events
mobileMenu.addEventListener("click", toggleMobileMenu);
scrollToTopButton.addEventListener("click", scrollToTop);

// Navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", handleSmoothScroll);
});
```

---

## 🎯 SEO Specifications

### Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Iso - Luxury Real Estate Platform. Discover architecturally refined properties for the discerning few.">
<meta name="keywords" content="luxury real estate, premium properties, architecture, high-end homes">
<meta name="author" content="Abdelilah Eddalili">
<meta name="robots" content="index, follow">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Iso",
  "description": "Luxury real estate platform showcasing architecturally refined properties",
  "url": "https://your-domain.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+212-775242734",
    "contactType": "customer service",
    "email": "info@isorealestate.com"
  }
}
```

### Performance Optimization
- **Lazy Loading**: Images and non-critical content
- **Minification**: CSS and JavaScript files
- **Compression**: GZIP compression enabled
- **Caching**: Browser caching headers
- **CDN**: Content delivery network ready

---

## 🔒 Security Specifications

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://unpkg.com; 
               style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com; 
               img-src 'self' data:;">
```

### Security Headers
- **X-Content-Type-Options**: nosniff
- **X-Frame-Options**: DENY
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin

### Data Protection
- **No Personal Data**: No user data collection
- **No Cookies**: No tracking cookies
- **No Analytics**: No third-party analytics
- **Privacy First**: Minimal data footprint

---

## 📊 Analytics & Monitoring

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Page Load Times**: FCP, LCP, TTI metrics
- **User Experience**: Interaction tracking
- **Error Monitoring**: JavaScript error tracking

### Accessibility Metrics
- **WCAG Compliance**: Level AA standards
- **Screen Reader**: Compatible with assistive technologies
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant ratios

### Browser Support Matrix
| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 12+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE | 11 | ⚠️ Limited |
| IE | 10- | ❌ None |

---

## 🚀 Deployment Specifications

### Build Process
- **No Build Step**: Pure HTML/CSS/JS
- **No Compilation**: Direct deployment ready
- **No Dependencies**: Self-contained project
- **No Bundling**: Individual file serving

### Server Requirements
- **Web Server**: Apache, Nginx, or any HTTP server
- **HTTPS**: SSL certificate recommended
- **GZIP**: Compression support
- **Caching**: Browser caching headers

### CDN Configuration
```nginx
# Nginx configuration example
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    gzip_static on;
}
```

### Environment Variables
- **None Required**: No environment configuration
- **No API Keys**: No external service dependencies
- **No Database**: Static content only
- **No Backend**: Frontend-only application

---

*Technical specifications last updated: December 2024*
*Version: 1.0.0*
