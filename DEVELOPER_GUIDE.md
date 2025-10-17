# Developer Guide - Iso Luxury Real Estate Website

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, Atom)
- Basic knowledge of HTML, CSS, and JavaScript

### Getting Started
1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Start editing** the files with your preferred editor
4. **Refresh** the browser to see changes

### Development Workflow
```bash
# 1. Open project in editor
code .

# 2. Start local server (optional)
python -m http.server 8000
# or
npx serve .

# 3. Open in browser
open http://localhost:8000
```

---

## 🏗️ Project Structure Deep Dive

### File Organization
```
ISO/
├── assets/                    # Static assets
│   ├── icons/                # SVG icon files
│   │   ├── bed.svg          # Bedroom icon (24x24px)
│   │   ├── cta.svg          # Call-to-action icon (24x24px)
│   │   ├── location.svg     # Location pin icon (24x24px)
│   │   ├── mail.svg         # Email icon (24x24px)
│   │   ├── map.svg          # Map icon (24x24px)
│   │   ├── phone.svg        # Phone icon (24x24px)
│   │   └── testimonial.svg  # Quote icon (24x24px)
│   └── imgs/
│       └── logo.png         # Company logo (optimized PNG)
├── index.html               # Main HTML file (513 lines)
├── style.css               # Main stylesheet (2,976 lines)
├── script.js               # JavaScript functionality (266 lines)
├── README.md               # Basic project information
├── DOCUMENTATION.md        # Comprehensive documentation
├── TECHNICAL_SPECS.md      # Technical specifications
└── DEVELOPER_GUIDE.md      # This developer guide
```

### Code Organization

#### HTML Structure
```html
<!-- Semantic HTML5 structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and external resources -->
</head>
<body>
    <!-- Content sections in logical order -->
    <div id="loader">...</div>
    <nav class="navbar">...</nav>
    <section id="home" class="hero">...</section>
    <section class="lodging">...</section>
    <section class="about">...</section>
    <section class="testimonials">...</section>
    <section class="statistics">...</section>
    <section class="video-section">...</section>
    <section class="subscription-section">...</section>
    <footer class="footer-section">...</footer>
    <button id="scrollToTop">...</button>
    <script src="script.js"></script>
</body>
</html>
```

#### CSS Organization
```css
/* 1. Reset and Base Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* 2. Typography */
body { font-family: "Plus Jakarta Sans", sans-serif; }

/* 3. Layout Components */
.container { max-width: 1200px; margin: 0 auto; }

/* 4. Component Styles */
.navbar { /* Navigation styles */ }
.hero { /* Hero section styles */ }
.lodging { /* Property showcase styles */ }

/* 5. Responsive Design */
@media (max-width: 768px) { /* Mobile styles */ }

/* 6. Animations */
@keyframes fadeInUp { /* Animation definitions */ }
```

#### JavaScript Organization
```javascript
// 1. Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(/* ... */);

// 2. Navbar scroll effects
window.addEventListener("scroll", /* ... */);

// 3. Mobile menu functionality
const mobileMenu = document.getElementById("mobile-menu");

// 4. Scroll to top functionality
const scrollToTopButton = document.getElementById("scrollToTop");

// 5. Loading animation
const loader = document.getElementById("loader");

// 6. ScrollReveal animations
const sr = ScrollReveal(/* ... */);
```

---

## 🎨 Styling Guidelines

### CSS Methodology
- **BEM-inspired**: Block__Element--Modifier naming
- **Component-based**: Each section has its own styles
- **Mobile-first**: Responsive design approach
- **Semantic naming**: Clear, descriptive class names

### Naming Conventions
```css
/* Block */
.navbar { }

/* Element */
.navbar__logo { }
.navbar__menu { }
.navbar__item { }

/* Modifier */
.navbar--scrolled { }
.navbar__item--active { }

/* State */
.navbar__menu.is-active { }
```

### CSS Architecture
```css
/* 1. Variables and Custom Properties */
:root {
  --primary-color: #0A0A0A;
  --secondary-color: #ffffff;
}

/* 2. Base Styles */
html, body { }
h1, h2, h3 { }
p, a, button { }

/* 3. Layout */
.container { }
.grid { }
.flex { }

/* 4. Components */
.btn { }
.card { }
.navbar { }

/* 5. Utilities */
.text-center { }
.hidden { }
.sr-only { }
```

### Responsive Design Patterns
```css
/* Mobile First Approach */
.component {
  /* Mobile styles (default) */
}

@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}
```

---

## ⚡ JavaScript Development

### Code Style
- **ES6+ Features**: Arrow functions, const/let, template literals
- **Functional Programming**: Pure functions, immutability
- **Event Delegation**: Efficient event handling
- **Error Handling**: Try-catch blocks for critical operations

### Best Practices
```javascript
// 1. Use const/let instead of var
const navbar = document.querySelector('.navbar');
let isScrolled = false;

// 2. Arrow functions for callbacks
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', handleClick);
});

// 3. Template literals for strings
const message = `Welcome to ${siteName}!`;

// 4. Destructuring for objects
const { x, y } = getPosition();

// 5. Default parameters
function animate(element, duration = 300) {
  // Animation logic
}
```

### Event Handling
```javascript
// 1. Event delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    handleButtonClick(e.target);
  }
});

// 2. Debounced scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(handleScroll, 100);
});

// 3. Throttled resize events
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResize, 250);
});
```

### Performance Optimization
```javascript
// 1. Cache DOM queries
const elements = {
  navbar: document.querySelector('.navbar'),
  menu: document.querySelector('.nav-menu'),
  toggle: document.getElementById('mobile-menu')
};

// 2. Use requestAnimationFrame for animations
function animate() {
  // Animation logic
  requestAnimationFrame(animate);
}

// 3. Lazy load non-critical functionality
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(handleIntersection);
  observer.observe(targetElement);
}
```

---

## 🔧 Development Tools

### Recommended VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "ritwickdey.liveserver",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "files.associations": {
    "*.css": "css"
  }
}
```

### Browser DevTools
- **Elements Panel**: Inspect and modify HTML/CSS
- **Console**: Debug JavaScript and view errors
- **Network Panel**: Monitor resource loading
- **Performance Panel**: Analyze performance metrics
- **Lighthouse**: Audit performance and accessibility

### Debugging Techniques
```javascript
// 1. Console logging
console.log('Debug info:', data);
console.table(arrayData);
console.group('Section');
console.log('Item 1');
console.log('Item 2');
console.groupEnd();

// 2. Breakpoints
debugger; // Pause execution

// 3. Error handling
try {
  riskyOperation();
} catch (error) {
  console.error('Operation failed:', error);
}

// 4. Performance timing
console.time('operation');
// ... code ...
console.timeEnd('operation');
```

---

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] **Cross-browser compatibility**
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)
- [ ] **Responsive design**
  - [ ] Mobile (320px - 767px)
  - [ ] Tablet (768px - 1023px)
  - [ ] Desktop (1024px+)
- [ ] **Functionality**
  - [ ] Navigation works
  - [ ] Animations play
  - [ ] Forms submit
  - [ ] Links work
- [ ] **Performance**
  - [ ] Page loads quickly
  - [ ] Images load properly
  - [ ] No console errors
  - [ ] Smooth animations

### Accessibility Testing
- [ ] **Keyboard navigation**
  - [ ] Tab through all interactive elements
  - [ ] Enter/Space activate buttons
  - [ ] Escape close modals
- [ ] **Screen reader**
  - [ ] All content is readable
  - [ ] Images have alt text
  - [ ] Headings are properly structured
- [ ] **Color contrast**
  - [ ] Text is readable
  - [ ] Links are distinguishable
  - [ ] Focus states are visible

### Performance Testing
```javascript
// 1. Measure page load time
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`Page loaded in ${loadTime}ms`);
});

// 2. Monitor Core Web Vitals
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('LCP:', entry.startTime);
  }
}).observe({ entryTypes: ['largest-contentful-paint'] });

// 3. Check for layout shifts
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('CLS:', entry.value);
  }
}).observe({ entryTypes: ['layout-shift'] });
```

---

## 🚀 Deployment Guide

### Local Development
```bash
# 1. Start local server
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000

# 2. Open in browser
open http://localhost:8000
```

### Production Deployment

#### Option 1: Static Hosting (Netlify)
```bash
# 1. Build (no build step needed)
# 2. Deploy
netlify deploy --prod --dir .
```

#### Option 2: GitHub Pages
```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy to production"
git push origin main

# 2. Enable GitHub Pages in repository settings
```

#### Option 3: Traditional Web Server
```bash
# 1. Upload files to server
scp -r . user@server:/var/www/html/

# 2. Configure web server (Apache/Nginx)
# 3. Enable HTTPS
# 4. Set up caching headers
```

### Environment Configuration
```bash
# No environment variables needed
# No build process required
# No dependencies to install
```

---

## 🔄 Version Control

### Git Workflow
```bash
# 1. Initialize repository
git init

# 2. Add files
git add .

# 3. Initial commit
git commit -m "Initial commit: Iso luxury real estate website"

# 4. Add remote
git remote add origin https://github.com/username/iso-website.git

# 5. Push to remote
git push -u origin main
```

### Commit Message Convention
```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks

Examples:
feat(nav): add mobile menu toggle
fix(hero): resolve responsive layout issue
docs(readme): update installation instructions
```

### Branch Strategy
```bash
# Main branch
main

# Feature branches
feature/mobile-optimization
feature/new-animations
feature/accessibility-improvements

# Bug fix branches
fix/navigation-issue
fix/responsive-bug
```

---

## 🐛 Common Issues & Solutions

### Issue 1: Animations Not Working
**Problem**: ScrollReveal animations not appearing
**Solutions**:
```javascript
// Check if ScrollReveal is loaded
if (typeof ScrollReveal === 'undefined') {
  console.error('ScrollReveal library not loaded');
}

// Verify element exists
const element = document.querySelector('.hero-title');
if (!element) {
  console.error('Element not found');
}

// Check animation configuration
const sr = ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 100,
  reset: false
});
```

### Issue 2: Mobile Menu Not Working
**Problem**: Hamburger menu not responding
**Solutions**:
```javascript
// Check if elements exist
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (!mobileMenu || !navMenu) {
  console.error('Mobile menu elements not found');
}

// Verify event listener
mobileMenu.addEventListener('click', () => {
  console.log('Mobile menu clicked'); // Debug log
  mobileMenu.classList.toggle('is-active');
  navMenu.classList.toggle('active');
});
```

### Issue 3: Responsive Layout Issues
**Problem**: Layout not responsive on mobile
**Solutions**:
```css
/* Check viewport meta tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Verify media queries */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem; /* Ensure proper spacing */
  }
  
  .hero-title {
    font-size: 2.5rem; /* Check font sizes */
  }
}
```

### Issue 4: Performance Issues
**Problem**: Slow loading or janky animations
**Solutions**:
```javascript
// Optimize scroll events
let ticking = false;

function updateScroll() {
  // Scroll handling code
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateScroll);
    ticking = true;
  }
});

// Optimize animations
.element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force hardware acceleration */
}
```

---

## 📚 Learning Resources

### HTML/CSS
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [ES6 Features](https://es6-features.org/)
- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

### Performance
- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

## 🤝 Contributing

### Development Process
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] No console errors
- [ ] Responsive design maintained
- [ ] Performance not degraded
- [ ] Accessibility standards met
- [ ] Cross-browser compatibility

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on multiple browsers
- [ ] Tested responsive design
- [ ] No console errors
- [ ] Performance impact assessed

## Screenshots
Add screenshots if applicable

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

---

*Developer guide last updated: December 2024*
*Version: 1.0.0*
