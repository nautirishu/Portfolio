# 🎯 Quick Start Guide

## 60-Second Setup

```bash
# 1. Navigate to project
cd Portfolio

# 2. Install dependencies (takes ~2 min)
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

Done! Your portfolio is running locally.

## 5-Minute Customization

### 1. Update Your Name & Headline

Open `src/constants/data.js`:

```javascript
export const PORTFOLIO_DATA = {
  hero: {
    headline: "YOUR NAME & Your Title",  // Change this
    subheadline: "Crafting human-centered AI products",
    // ...
  },
```

### 2. Update Contact Info

```javascript
contact: {
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  social: {
    linkedin: "https://linkedin.com/in/yourname",
    github: "https://github.com/yourname",
    twitter: "https://twitter.com/yourname",
  }
}
```

### 3. Update Experience

```javascript
experience: [
  {
    role: "Your Role",
    company: "Company Name",
    duration: "Month Year - Month Year",
    description: "Brief description",
    responsibilities: ["Responsibility 1", "Responsibility 2"],
    achievements: ["Achievement 1", "Achievement 2"],
    tools: ["Tool 1", "Tool 2"],
    type: "PM" // or "UX"
  }
]
```

### 4. Update Projects

Each project has:
- Title, description, category
- Problem statement
- Research insights
- Strategy
- PM responsibilities
- Challenges
- Outcomes & metrics
- Tech stack
- Skills applied

### 5. Save & Refresh

Your changes update instantly in the browser!

## File Locations Quick Reference

| What | Where |
|------|-------|
| Update content | `src/constants/data.js` |
| Change colors | `tailwind.config.js` |
| Add components | `src/components/` |
| Modify styles | `src/index.css` |
| Change navigation | `NAV_ITEMS` in `data.js` |

## Common Tasks

### Add a New Social Link

1. Open `src/constants/data.js`
2. Add to contact.social:
   ```javascript
   dribbble: "https://dribbble.com/yourname"
   ```
3. Add icon to Footer.jsx and Navbar.jsx

### Change Color Scheme

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: "#your-color", // Primary color
    600: "#darker-shade",
  }
}
```

### Add New Section

1. Create `src/components/sections/NewSection.jsx`
2. Import in `App.jsx`
3. Add to `App.jsx` render
4. Add navigation item to `NAV_ITEMS`

### Update Skills

Edit `PORTFOLIO_DATA.skills.categories`:
```javascript
{
  title: "Your Category",
  skills: ["Skill 1", "Skill 2", "Skill 3"]
}
```

## Deployment Checklist

Before deploying:
- [ ] Update all content in `data.js`
- [ ] Test dark mode (toggle in navbar)
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Test contact form
- [ ] Update meta tags in `index.html`
- [ ] Optimize images
- [ ] Run production build: `npm run build`

## Project Structure Map

```
Portfolio/
├── src/
│   ├── components/        ← React components
│   │   ├── layout/        ← Navbar, Footer
│   │   ├── sections/      ← Page sections
│   │   └── ui/            ← Reusable UI
│   ├── hooks/             ← Custom hooks
│   ├── constants/
│   │   └── data.js        ← EDIT THIS FOR CONTENT
│   ├── App.jsx            ← Main component
│   ├── index.css          ← Styles
│   └── main.jsx           ← Entry point
├── tailwind.config.js     ← Design tokens
├── vite.config.js         ← Build config
├── package.json           ← Dependencies
└── index.html             ← HTML template
```

## Testing Checklist

### Desktop
- [ ] All sections visible and properly spaced
- [ ] Hover animations work smoothly
- [ ] Navigation scrolls to sections
- [ ] Dark mode toggles correctly
- [ ] Links open in new tabs

### Mobile
- [ ] Layout responsive at 320px width
- [ ] Hamburger menu works
- [ ] Text is readable (no overflow)
- [ ] Touch interactions work
- [ ] Forms are mobile-friendly

### Accessibility
- [ ] Tab navigation works
- [ ] Links have clear labels
- [ ] Color contrast sufficient
- [ ] No keyboard traps
- [ ] Alt text on images

## Performance Tips

1. **Optimize images**
   - Use WebP format
   - Compress before uploading
   - Use appropriate sizes

2. **Minimize CSS**
   - Tailwind purges unused CSS
   - No custom CSS needed usually

3. **Code splitting**
   - Sections load on demand
   - Keep bundle size small

4. **Monitoring**
   - Check Lighthouse score
   - Aim for 90+
   - Monitor Core Web Vitals

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- --port 3001` |
| Changes not showing | Hard refresh `Ctrl+Shift+R` |
| Dark mode broken | Clear localStorage |
| Build fails | Delete `node_modules`, run `npm install` |
| Styles missing | Check Tailwind config |

## Next Steps

1. ✅ **Setup complete**
2. 📝 **Edit content** in `data.js`
3. 🎨 **Customize colors** in `tailwind.config.js`
4. 🚀 **Test locally** with `npm run dev`
5. 🌐 **Deploy** with `npm run build`

## Deployment Options

### Vercel (Recommended - Free for hobby)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
- Connect GitHub repo
- Auto-deploy on push
- Free tier available

### GitHub Pages
```bash
npm run build
# Deploy 'dist' folder
```

### Traditional Hosting
1. `npm run build`
2. Upload `dist` folder to hosting
3. Configure server for SPA

## Getting Help

- 📖 Check `DEVELOPMENT.md` for detailed docs
- 🔧 Check `COMPONENTS.md` for API reference
- 🐛 Check troubleshooting section above
- 📚 Read component comments in code

## Key Concepts

### Sections are independent
Each section (Hero, About, Projects, etc.) is a separate component that can be reordered or removed.

### Data-driven
All content comes from `PORTFOLIO_DATA` in `data.js` - no hardcoding needed.

### Animations are automatic
Framer Motion handles animations - they work when elements enter viewport.

### Dark mode is built-in
Toggle in navbar - persists to localStorage.

### Fully responsive
Uses Tailwind breakpoints - mobile-first design approach.

## Command Reference

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Production build
npm run preview          # Preview production build

# Code quality
npm run lint             # Check code style
npm run lint -- --fix    # Auto-fix issues

# Dependencies
npm install              # Install packages
npm update               # Update packages
npm outdated             # Check for updates
```

## Common Customizations

### Change primary color from blue to purple
```javascript
// tailwind.config.js
colors: {
  primary: {
    500: "#a855f7",  // purple-500
    600: "#9333ea",  // purple-600
  }
}
```

### Disable dark mode toggle
```javascript
// Remove from Navbar.jsx:
<motion.button onClick={() => setIsDark(!isDark)}>
```

### Change section order
```javascript
// In App.jsx, rearrange component order:
<HeroSection />
<ProjectsSection />      {/* Moved up */}
<AboutSection />
{/* ... */}
```

### Make logo clickable
```javascript
// In Navbar.jsx:
<a href="/">
  <div className="w-8 h-8 ...">RK</div>
</a>
```

---

**You're all set! Start customizing your portfolio now.** 🚀
