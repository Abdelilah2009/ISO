# Image Requirements Guide - Iso Luxury Real Estate Website

## 📁 Required Image Structure

Create the following directory structure in your `assets/imgs/` folder:

```
assets/imgs/
├── logo.png (existing)
├── hero/
│   └── luxury-real-estate-hero.jpg
├── properties/
│   ├── horizon-villa.jpg
│   ├── aria-residence.jpg
│   └── solana-estate.jpg
├── about/
│   └── design-consultation.jpg
├── testimonials/
│   ├── daniel-hubner.jpg
│   ├── leonard-kai.jpg
│   ├── sarah-luser.jpg
│   └── emily-ryan.jpg
├── statistics/
│   └── modern-architecture.jpg
└── video/
    └── luxury-property-showcase.jpg
```

---

## 🖼️ Image Specifications

### 1. Hero Background Image
**File**: `assets/imgs/hero/luxury-real-estate-hero.jpg`
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG (optimized for web)
- **File Size**: < 500KB
- **Content**: Luxury property exterior, modern architecture, or elegant real estate scene
- **Style**: High-end, sophisticated, with good contrast for white text overlay

### 2. Property Images

#### Horizon Villa
**File**: `assets/imgs/properties/horizon-villa.jpg`
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Format**: JPG
- **File Size**: < 200KB
- **Content**: Beachfront luxury villa in Uluwatu, Bali
- **Style**: Modern minimalist architecture, ocean views

#### Aria Residence
**File**: `assets/imgs/properties/aria-residence.jpg`
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Format**: JPG
- **File Size**: < 200KB
- **Content**: Modern city residence in Jakarta
- **Style**: Sleek urban architecture, floor-to-ceiling windows

#### Solana Estate
**File**: `assets/imgs/properties/solana-estate.jpg`
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Format**: JPG
- **File Size**: < 200KB
- **Content**: Tropical retreat in Canggu, Bali
- **Style**: Modern tropical design, rice fields, ocean breeze

### 3. About Section Image
**File**: `assets/imgs/about/design-consultation.jpg`
- **Dimensions**: 600x400px (3:2 aspect ratio)
- **Format**: JPG
- **File Size**: < 150KB
- **Content**: Interior design consultation, modern architecture, or luxury home interior
- **Style**: Professional, sophisticated, design-focused

### 4. Testimonial Images

#### Daniel Hubner
**File**: `assets/imgs/testimonials/daniel-hubner.jpg`
- **Dimensions**: 300x400px (3:4 aspect ratio)
- **Format**: JPG
- **File Size**: < 100KB
- **Content**: Professional headshot of a middle-aged man
- **Style**: Business professional, friendly, trustworthy

#### Leonard Kai
**File**: `assets/imgs/testimonials/leonard-kai.jpg`
- **Dimensions**: 300x400px (3:4 aspect ratio)
- **Format**: JPG
- **File Size**: < 100KB
- **Content**: Professional headshot of an Asian businessman
- **Style**: Professional, confident, sophisticated

#### Sarah Luser
**File**: `assets/imgs/testimonials/sarah-luser.jpg`
- **Dimensions**: 300x400px (3:4 aspect ratio)
- **Format**: JPG
- **File Size**: < 100KB
- **Content**: Professional headshot of a woman
- **Style**: Professional, elegant, approachable

#### Emily Ryan
**File**: `assets/imgs/testimonials/emily-ryan.jpg`
- **Dimensions**: 300x400px (3:4 aspect ratio)
- **Format**: JPG
- **File Size**: < 100KB
- **Content**: Professional headshot of a woman
- **Style**: Professional, sophisticated, warm

### 5. Statistics Image
**File**: `assets/imgs/statistics/modern-architecture.jpg`
- **Dimensions**: 600x400px (3:2 aspect ratio)
- **Format**: JPG
- **File Size**: < 150KB
- **Content**: Modern luxury architecture, contemporary design elements
- **Style**: Clean, modern, architectural focus

### 6. Video Background Image
**File**: `assets/imgs/video/luxury-property-showcase.jpg`
- **Dimensions**: 1200x675px (16:9 aspect ratio)
- **Format**: JPG
- **File Size**: < 300KB
- **Content**: Luxury property showcase, multiple properties, or architectural portfolio
- **Style**: High-end, portfolio-style, professional

---

## 🎨 Image Style Guidelines

### Color Palette
- **Primary**: Neutral tones (grays, whites, beiges)
- **Accent**: Warm earth tones
- **Avoid**: Bright, saturated colors that clash with the design

### Photography Style
- **Lighting**: Natural, well-lit, professional
- **Composition**: Clean, minimalist, architectural focus
- **Mood**: Sophisticated, luxurious, aspirational
- **Quality**: High-resolution, sharp, professional

### Content Themes
- **Architecture**: Modern, minimalist, luxury
- **Interiors**: Clean, sophisticated, high-end
- **Lifestyle**: Aspirational, elegant, refined
- **People**: Professional, trustworthy, diverse

---

## 📐 Technical Requirements

### File Formats
- **Primary**: JPG (for photographs)
- **Alternative**: WebP (for better compression)
- **Avoid**: PNG (unless transparency needed)

### Optimization
- **Compression**: 80-90% quality for JPG
- **Progressive**: Enable progressive loading
- **Metadata**: Remove EXIF data to reduce file size

### Responsive Considerations
- **High DPI**: Provide 2x versions for retina displays
- **Loading**: Implement lazy loading for performance
- **Fallbacks**: Provide fallback images for slow connections

---

## 🛠️ Implementation Notes

### CSS Classes Updated
The following CSS classes have been updated to support images:

```css
/* New image classes */
.hero-background img
.card-image img
.about-image img
.testimonial-image img
.statistics-image img
.video-background img
```

### Hover Effects
All images include subtle hover effects:
- **Scale**: 1.05x zoom on hover
- **Transition**: 0.3s ease animation
- **Performance**: Hardware-accelerated transforms

### Responsive Behavior
- **Object-fit**: cover (maintains aspect ratio)
- **Object-position**: center (centers image content)
- **Overflow**: hidden (prevents image overflow)

---

## 📋 Image Checklist

### Before Adding Images
- [ ] Create proper directory structure
- [ ] Optimize images for web (compress, resize)
- [ ] Ensure consistent aspect ratios
- [ ] Test on different screen sizes
- [ ] Verify file sizes are reasonable

### After Adding Images
- [ ] Test all image loading
- [ ] Check responsive behavior
- [ ] Verify hover effects work
- [ ] Test on slow connections
- [ ] Validate accessibility (alt text)

### Performance Testing
- [ ] Check page load speed
- [ ] Test on mobile devices
- [ ] Verify Core Web Vitals
- [ ] Test with slow 3G connection
- [ ] Check image loading performance

---

## 🎯 Image Sources & Recommendations

### Stock Photo Sources
- **Unsplash**: High-quality, free luxury real estate photos
- **Pexels**: Professional real estate and architecture images
- **Shutterstock**: Premium real estate photography
- **Getty Images**: High-end luxury property photos

### Search Keywords
- "luxury real estate"
- "modern architecture"
- "minimalist home design"
- "beachfront villa"
- "urban luxury residence"
- "tropical modern home"
- "professional headshot"
- "interior design consultation"

### Style References
- **Architectural Digest**: High-end architectural photography
- **Dwell Magazine**: Modern minimalist design
- **Luxury Real Estate**: Premium property photography
- **Interior Design**: Sophisticated interior styling

---

## 🚀 Quick Start

1. **Create directories** in `assets/imgs/`
2. **Download/source images** according to specifications
3. **Optimize images** for web (compress, resize)
4. **Place images** in correct directories
5. **Test website** to ensure all images load properly
6. **Verify responsive** behavior on different devices

---

*Image requirements guide last updated: December 2024*
*Version: 1.0.0*
