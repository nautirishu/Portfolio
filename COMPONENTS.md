# 🎨 Component API Reference & Configuration

## UI Components Reference

### Button Component

```jsx
import { Button } from './components/ui';

<Button
  variant="primary"      // primary | secondary | outline | ghost
  size="md"             // sm | md | lg
  className=""          // Additional Tailwind classes
  onClick={() => {}}
  disabled={false}
>
  Click Me
</Button>
```

**Props:**
- `variant`: Button style variant
- `size`: Button size
- `className`: Extra Tailwind classes
- All standard HTML button props supported

### Card Component

```jsx
import { Card } from './components/ui';

<Card
  hover={true}          // Enable hover animation
  className=""          // Extra classes
>
  Content here
</Card>
```

### Badge Component

```jsx
import { Badge } from './components/ui';

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="purple">Purple</Badge>
<Badge variant="pink">Pink</Badge>
```

### SectionHeading Component

```jsx
import { SectionHeading } from './components/ui';

<SectionHeading
  title="Section Title"
  subtitle="Optional subtitle"
  centered={true}       // Center align
  className=""
/>
```

### GradientText Component

```jsx
import { GradientText } from './components/ui';

<GradientText className="text-2xl">
  Gradient text
</GradientText>
```

### Tag Component

```jsx
import { Tag } from './components/ui';

<Tag className="text-sm">React</Tag>
```

### Container Component

```jsx
import { Container } from './components/ui';

<Container className="py-20">
  Responsive container content
</Container>
```

## Custom Hooks

### useTheme

Manages light/dark mode with localStorage persistence.

```jsx
import { useTheme } from './hooks/useCustom';

const [isDark, setIsDark] = useTheme();

// Returns:
// isDark: boolean - current theme
// setIsDark: function - toggle theme
```

### useScrollPosition

Tracks vertical scroll position.

```jsx
import { useScrollPosition } from './hooks/useCustom';

const scrollPosition = useScrollPosition();
// Returns number - pixels scrolled from top
```

### useInView

Triggers animations when element enters viewport.

```jsx
import { useInView } from './hooks/useCustom';

const [ref, isInView] = useInView(0.1);

// ref: attach to DOM element
// isInView: boolean - visible in viewport
```

## Section Components

### HeroSection

Main hero section with animated background and CTA buttons.

```jsx
import { HeroSection } from './components/sections/HeroSection';

<HeroSection />
```

**Customization:**
Edit `PORTFOLIO_DATA.hero` in `constants/data.js`

### AboutSection

About section with story and skill preview.

```jsx
import { AboutSection } from './components/sections/AboutSection';

<AboutSection />
```

### ExperienceSection

Timeline experience section (expandable cards).

```jsx
import { ExperienceSection } from './components/sections/ExperienceSection';

<ExperienceSection />
```

### SkillsSection

Skills categories with proficiency matrix.

```jsx
import { SkillsSection } from './components/sections/SkillsSection';

<SkillsSection />
```

### ProjectsSection

Project cards with modal for detailed case studies.

```jsx
import { ProjectsSection } from './components/sections/ProjectsSection';

<ProjectsSection />
```

### TestimonialsSection

Testimonial cards with ratings.

```jsx
import { TestimonialsSection } from './components/sections/TestimonialsSection';

<TestimonialsSection />
```

### ContactSection

Contact form with info and social links.

```jsx
import { ContactSection } from './components/sections/ContactSection';

<ContactSection />
```

## Layout Components

### Navbar

Sticky navigation with dark mode toggle and mobile menu.

```jsx
import { Navbar } from './components/layout/Navbar';

<Navbar />
```

### Footer

Footer with links and social media.

```jsx
import { Footer } from './components/layout/Footer';

<Footer />
```

## Tailwind Configuration

### Custom Colors

```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    900: '#0c2d6b',
  },
  dark: {
    800: '#1f2937',
    900: '#111827',
  }
}
```

### Custom Animations

```javascript
// tailwind.config.js
animation: {
  'gradient': 'gradient 8s ease infinite',
  'float': 'float 3s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite',
},
keyframes: {
  gradient: {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
  // ... more keyframes
}
```

### Responsive Breakpoints

```javascript
// Default Tailwind breakpoints
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

## Data Structure

### PORTFOLIO_DATA

```javascript
{
  hero: {
    headline: string
    subheadline: string
    description: string
    cta: {
      primary: string
      secondary: string
    }
  },
  about: {
    intro: string
    story: string
    highlights: string[]
  },
  skills: {
    categories: [
      {
        title: string
        skills: string[]
      }
    ]
  },
  experience: [
    {
      role: string
      company: string
      duration: string
      description: string
      responsibilities: string[]
      achievements: string[]
      tools: string[]
      type: "PM" | "UX"
    }
  ],
  projects: [
    {
      id: number
      title: string
      category: string
      description: string
      image: string
      problem: string
      research: string[]
      strategy: string
      pmResponsibilities: string[]
      challenges: string[]
      outcomes: string[]
      metrics: object
      techStack: string[]
      skills: string[]
    }
  ],
  testimonials: [
    {
      name: string
      role: string
      content: string
      image: string
    }
  ],
  contact: {
    email: string
    phone: string
    location: string
    social: {
      linkedin: string
      github: string
      twitter: string
    }
  }
}
```

## Framer Motion Patterns

### Staggered Container

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects

```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Scroll Trigger

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## CSS Custom Properties

### Available in Global CSS

```css
/* Animations */
.gradient-text - Gradient text effect
.ai-glow - AI glow effect
.reveal - Reveal on scroll animation

/* Button Styles */
.btn-premium - Premium button style
.btn-premium-dark - Dark premium button

/* Classes */
.scroll-smooth - Smooth scrolling
```

## Performance Tips

1. **Use `once: true` in viewport animations**
   ```jsx
   whileInView={{ ... }}
   viewport={{ once: true }}
   ```

2. **Limit animating elements**
   - Avoid animating many elements simultaneously
   - Use GPU-friendly properties (transform, opacity)

3. **Lazy load images**
   - Use `loading="lazy"` attribute
   - Consider intersection observer

4. **Code split sections**
   - Each section can be lazy loaded
   - Use React.lazy() for route-based splitting

## Accessibility

### ARIA Labels

```jsx
<button aria-label="Close menu">
  <X />
</button>
```

### Semantic HTML

```jsx
<main>
  <article>
    <section id="projects">
      <h2>Projects</h2>
    </section>
  </article>
</main>
```

### Keyboard Navigation

- Tab: Navigate elements
- Enter: Activate buttons/links
- Escape: Close modals
- Arrow keys: Navigate within components

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid, Flexbox support required
- ES6+ JavaScript required
- CSS Custom Properties support required

## Build Configuration

### Vite Config

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  }
})
```

### Environment Variables

```bash
# .env.local
VITE_APP_TITLE=My Portfolio
VITE_API_URL=http://localhost:3000
```

Access in code:
```javascript
import.meta.env.VITE_APP_TITLE
```

---

**Need help? Check the DEVELOPMENT.md for more details!**
