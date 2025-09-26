# Modern Banner Images Implementation

## Overview
This project now includes modern, responsive banner images created using base64-encoded SVG graphics. These banners provide a professional, tech-focused aesthetic for your key pages.

## Available Banners

### 1. About Us Banner
- **Theme**: Blue gradient with geometric tech patterns
- **Colors**: Deep blue to bright blue (#1e3a8a → #3668ff)
- **Pattern**: Dots and abstract geometric shapes
- **Usage**: About page header

### 2. Services Banner  
- **Theme**: Purple gradient with tech grid pattern
- **Colors**: Deep purple to light purple (#4c1d95 → #8052d3)
- **Pattern**: Technical grid lines with floating icons
- **Usage**: Services page header

### 3. Contact Banner
- **Theme**: Teal gradient with wave patterns
- **Colors**: Deep teal to light teal (#1a7373 → #30a9a9)
- **Pattern**: Flowing waves with dotted texture
- **Usage**: Contact page header

### 4. General Banner
- **Theme**: Orange gradient with minimal grid
- **Colors**: Orange to light orange (#ea580c → #fdbA74)
- **Pattern**: Clean minimal grid lines
- **Usage**: Other pages as needed

## Implementation

### Import the banners:
```javascript
import { bannerImages } from '@/config/bannerImages';
```

### Use with PageHeader component:
```jsx
<PageHeader 
  title="Your Title" 
  paragraph="Your description" 
  bannerImage={bannerImages.services}
  overlayOpacity={0.5}
/>
```

### Use with Header4 component (About page):
```jsx
<Header4 
  bannerImage={bannerImages.aboutUs} 
  overlayOpacity={0.5}
/>
```

### Use with ContactHeader component:
```jsx
<ContactHeader 
  bannerImage={bannerImages.contact} 
  overlayOpacity={0.5}
/>
```

## Features

### Responsive Design
- Automatically adapts to different screen sizes
- Mobile-optimized with adjusted heights
- Maintains aspect ratio across devices

### Customizable Overlay
- Adjustable opacity for better text readability
- Dark overlay with backdrop blur effect
- Preserves text contrast

### Performance Optimized
- Base64 encoding eliminates HTTP requests
- SVG format ensures crisp quality at any size
- Lightweight file sizes

### Modern Styling
- CSS-in-JS with styled-jsx
- Professional gradients and patterns
- Contemporary design elements

## Technical Details

### Component Requirements
- Components using styled-jsx must include `'use client'` directive
- Banner images are loaded instantly (base64 embedded)
- Overlay opacity can be customized (default: 0.6-0.7)

### Browser Support
- All modern browsers support SVG and base64
- Graceful fallback to solid colors if needed
- CSS Grid and Flexbox for layouts

## Customization

### To modify banner colors:
1. Edit the SVG gradients in `/src/config/bannerImages.js`
2. Update the `linearGradient` stop colors
3. Adjust pattern colors as needed

### To add new banners:
1. Create new SVG with desired design
2. Convert to base64 format
3. Add to the bannerImages object
4. Import and use in components

## Usage Examples

### Current Implementation:
- **About Page**: Blue tech pattern banner
- **Services Page**: Purple grid banner  
- **Contact Page**: Teal wave banner

### Best Practices:
- Use appropriate overlay opacity (0.4-0.7)
- Ensure text contrast meets accessibility standards
- Test on mobile devices for proper scaling
- Consider page theme when selecting banners

## File Structure
```
src/
├── config/
│   └── bannerImages.js          # Banner definitions
├── components/
│   └── Headers/
│       ├── PageHeader.jsx       # Enhanced with banner support
│       ├── Header4.jsx          # About page header
│       └── ContactHeader.jsx    # Contact page header
└── app/
    └── (dark)/
        ├── about/page.js        # Uses aboutUs banner
        ├── services/page.js     # Uses services banner
        └── contact/page.js      # Uses contact banner
```

This implementation provides a modern, professional appearance while maintaining excellent performance and accessibility standards.