# 📋 Project Documentation

## Project Overview

This is a premium portfolio website for an AI Product Manager, showcasing:
- 2 years of UX/UI design experience
- 4 months of Product Management experience
- AI product expertise and strategic thinking
- Modern, professional design aesthetic

## Technology Stack

### Frontend Framework
- **React 18.2** - Latest React with hooks and concurrent features
- **Vite 5.0** - Lightning-fast build tool and dev server
- **TypeScript Ready** - Can be added if needed

### Styling & Animation
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Framer Motion 10** - Production-grade animation library
- **PostCSS & Autoprefixer** - CSS processing

### UI & Icons
- **Lucide React 0.294** - Beautiful, consistent icon library
- **clsx** - Utility for constructing className strings

### Build & Development
- **Node.js 16+** - Required runtime
- **npm/yarn** - Package managers

## Installation & Setup Guide

### Step 1: Prerequisites
Ensure you have:
- Node.js 16 or higher: `node --version`
- npm 8 or higher: `npm --version`
- Git (for version control)

### Step 2: Installation
```bash
# Navigate to project directory
cd Portfolio

# Install all dependencies
npm install

# Verify installation
npm list | head -20
```

### Step 3: Environment Setup
Create a `.env` file if needed:
```
VITE_API_URL=http://localhost:3000
VITE_ENVIRONMENT=development
```

### Step 4: Start Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

## Development Workflow

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

### File Organization

**Always follow this structure:**

```
src/
├── components/          # Reusable React components
├── hooks/              # Custom React hooks
├── constants/          # Constants and data
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # Entry point
```

### Component Development Best Practices

1. **Create components in appropriate folders**
   - Layout components → `components/layout/`
   - Section components → `components/sections/`
   - UI components → `components/ui/`

2. **Use named exports for components**
   ```jsx
   export const MyComponent = () => { ... }
   ```

3. **Always use Fragment or explicit containers**
   ```jsx
   <motion.div>
     {/* Content */}
   </motion.div>
   ```

4. **Implement Framer Motion animations**
   ```jsx
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
   >
   ```

## Customization Guide

### Update Portfolio Content

Edit `src/constants/data.js`:

```javascript
export const PORTFOLIO_DATA = {
  hero: {
    headline: "Your Headline",
    description: "Your description",
    // ...
  },
  about: { /* ... */ },
  skills: { /* ... */ },
  experience: [ /* ... */ ],
  projects: [ /* ... */ ],
  testimonials: [ /* ... */ ],
  contact: { /* ... */ }
}
```

### Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize primary colors
      }
    }
  }
}
```

### Add New Sections

1. Create component file: `src/components/sections/NewSection.jsx`
2. Import in `App.jsx`
3. Add section data to `constants/data.js`
4. Add navigation link to `NAV_ITEMS`

### Modify Animations

In Tailwind config or component:
```javascript
animation: {
  'my-animation': 'myKeyframes 2s ease-in-out'
}
```

## Performance Optimization

### Best Practices Implemented
- ✅ Code splitting with Vite
- ✅ Lazy image loading
- ✅ CSS optimization via Tailwind
- ✅ Framer Motion GPU acceleration
- ✅ Minified production build

### Further Optimization
- Use React.memo for expensive components
- Implement route-based code splitting
- Use next-gen image formats (WebP)
- Add service worker for offline support
- Implement progressive image loading

## Deployment Guide

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
# Add to package.json
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Manual Deployment

```bash
# Build the project
npm run build

# Upload 'dist' folder to your hosting provider
# (AWS S3, Google Cloud Storage, etc.)
```

## Troubleshooting

### Common Issues

**1. Port 3000 already in use**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

**2. Dark mode not persisting**
- Check `useTheme` hook in `hooks/useCustom.js`
- Verify localStorage is enabled
- Clear browser cache

**3. Animations laggy**
- Update Framer Motion: `npm install framer-motion@latest`
- Check GPU acceleration in browser DevTools
- Reduce animation complexity

**4. Build fails**
```bash
# Clear caches
rm -rf node_modules dist .vite
npm install
npm run build
```

**5. Styles not applying**
- Rebuild CSS: `npm run build`
- Check Tailwind config
- Clear browser cache
- Verify CSS file is imported

## Browser DevTools Tips

### Performance Monitoring
1. Open DevTools → Performance tab
2. Record user interactions
3. Check for jank (60fps target)
4. Monitor animations

### Dark Mode Testing
1. DevTools → Rendering → Emulate CSS media feature prefers-color-scheme
2. Test both light and dark modes

### Responsive Testing
1. DevTools → Device Toolbar
2. Test all breakpoints
3. Check mobile performance

## Version Management

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update specific package
npm update package-name

# Update all packages
npm update

# Major version updates
npm install package-name@latest
```

## Code Quality

### Linting
```bash
npm run lint
npm run lint -- --fix  # Auto-fix issues
```

### Pre-commit Hooks (Optional)
```bash
npm install husky lint-staged --save-dev
npx husky install
```

## Security Considerations

- ✅ No sensitive data in code
- ✅ Use environment variables for secrets
- ✅ Regular dependency updates
- ✅ HTTPS only in production
- ✅ Content Security Policy headers

## Resources & Learning

### Documentation
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

### Useful Tools
- [Can I Use](https://caniuse.com)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
- [CSS Tricks](https://css-tricks.com)

## Support & Feedback

For issues or questions:
1. Check troubleshooting section
2. Review component documentation
3. Check Framer Motion docs
4. Review React documentation

## License

MIT License - Feel free to use this as a template!
