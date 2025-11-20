# Development Guide - ReachworldNation Website

Complete guide for developers working on the ReachworldNation website project.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Tech Stack](#tech-stack)
4. [Development Workflow](#development-workflow)
5. [Component Guidelines](#component-guidelines)
6. [Styling Guide](#styling-guide)
7. [Animation Guidelines](#animation-guidelines)
8. [Best Practices](#best-practices)
9. [Phase 2 Roadmap](#phase-2-roadmap)

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)

### Initial Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd reachworld-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## Project Structure

```
reachworld-frontend/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── assets/            # Images, icons, fonts
│   │   ├── images/
│   │   └── icons/
│   ├── components/        # React components
│   │   ├── common/        # Shared components
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── home/          # Homepage components
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── QuickAccessButtons.jsx
│   │   │   ├── FoundersMessage.jsx
│   │   │   ├── ImpactStats.jsx
│   │   │   └── EventsCarousel.jsx
│   │   └── layout/        # Layout components
│   │       ├── Header.jsx
│   │       └── Footer.jsx
│   ├── pages/             # Page components
│   │   └── HomePage.jsx
│   ├── utils/             # Utility functions
│   ├── data/              # Static data/constants
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── vercel.json            # Vercel config
├── netlify.toml           # Netlify config
├── PROJECT_README.md      # Project overview
├── DEPLOYMENT.md          # Deployment guide
└── DEVELOPMENT.md         # This file
```

---

## Tech Stack

### Core Technologies
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling & UI
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Swiper.js** - Carousel/slider component
- **React Icons** - Icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## Development Workflow

### Creating New Components

1. Create component file in appropriate directory:
```jsx
// src/components/home/NewComponent.jsx
import { motion } from 'framer-motion';

const NewComponent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Component content */}
      </div>
    </section>
  );
};

export default NewComponent;
```

2. Import and use in page:
```jsx
import NewComponent from '../components/home/NewComponent';
```

### Adding New Pages

1. Create page component:
```jsx
// src/pages/AboutPage.jsx
const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Page content */}
    </div>
  );
};

export default AboutPage;
```

2. Add route in App.jsx:
```jsx
<Route path="/about" element={<AboutPage />} />
```

### Working with Data

Create data files for reusable content:
```javascript
// src/data/events.js
export const eventsData = [
  {
    title: 'Event Name',
    date: 'March 15, 2025',
    location: 'Lagos, Nigeria',
    // ... more fields
  }
];
```

---

## Component Guidelines

### Component Structure

```jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaIcon } from 'react-icons/fa';

const ComponentName = ({ prop1, prop2 }) => {
  // 1. State
  const [state, setState] = useState(initialValue);

  // 2. Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);

  // 3. Handlers
  const handleAction = () => {
    // Handler logic
  };

  // 4. Render
  return (
    <section className="section-classes">
      {/* JSX */}
    </section>
  );
};

export default ComponentName;
```

### Props and PropTypes

For better type safety, consider adding PropTypes:
```jsx
import PropTypes from 'prop-types';

ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  onAction: PropTypes.func,
};

ComponentName.defaultProps = {
  items: [],
  onAction: () => {},
};
```

---

## Styling Guide

### Brand Colors

Use Tailwind custom colors defined in `tailwind.config.js`:

```jsx
// Primary
className="bg-royal-blue text-white"      // #0033A0
className="text-brand-gold"               // #FFD700
className="bg-sky-blue"                   // #00BFFF
className="text-deep-charcoal"            // #0D0D0D
```

### Custom Button Styles

Pre-defined button classes:
```jsx
<button className="btn-primary">
  Gold Button
</button>

<button className="btn-secondary">
  Blue Button
</button>
```

### Responsive Design

Use Tailwind breakpoints:
```jsx
<div className="
  w-full              /* Mobile */
  md:w-1/2            /* Tablet: 768px+ */
  lg:w-1/3            /* Desktop: 1024px+ */
  xl:w-1/4            /* Large: 1280px+ */
">
```

Breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

### Layout Container

Always wrap content in container:
```jsx
<section>
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

---

## Animation Guidelines

### Using Framer Motion

#### Basic Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

#### Scroll-triggered Animation
```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
>
  Content
</motion.div>
```

#### Hover Effects
```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Clickable Content
</motion.div>
```

#### Stagger Children
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
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

### Animation Performance

- Use `transform` properties (scale, rotate, translate) for better performance
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Test on mobile devices

---

## Best Practices

### Code Quality

1. **Consistent Naming**
   - Components: PascalCase (e.g., `HomePage`)
   - Files: PascalCase for components (e.g., `HomePage.jsx`)
   - Variables/functions: camelCase (e.g., `handleClick`)
   - Constants: UPPER_SNAKE_CASE (e.g., `API_URL`)

2. **Component Size**
   - Keep components under 300 lines
   - Extract reusable logic into custom hooks
   - Split large components into smaller ones

3. **Import Organization**
   ```jsx
   // 1. External libraries
   import { useState } from 'react';
   import { motion } from 'framer-motion';

   // 2. Internal components
   import Header from './components/Header';

   // 3. Utils and helpers
   import { formatDate } from './utils/dates';

   // 4. Styles and assets
   import './styles.css';
   ```

### Performance

1. **Lazy Loading**
   ```jsx
   import { lazy, Suspense } from 'react';

   const HeavyComponent = lazy(() => import('./HeavyComponent'));

   <Suspense fallback={<LoadingSpinner />}>
     <HeavyComponent />
   </Suspense>
   ```

2. **Memoization**
   ```jsx
   import { useMemo, useCallback } from 'react';

   const expensiveValue = useMemo(() => {
     return computeExpensiveValue(data);
   }, [data]);

   const handleClick = useCallback(() => {
     // Handler logic
   }, [dependencies]);
   ```

3. **Image Optimization**
   - Use WebP format
   - Implement lazy loading for images
   - Use appropriate image sizes

### Accessibility

1. **Semantic HTML**
   ```jsx
   <nav>, <main>, <section>, <article>, <aside>
   ```

2. **ARIA Labels**
   ```jsx
   <button aria-label="Close menu">
     <FaTimes />
   </button>
   ```

3. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Test with Tab key navigation

4. **Alt Text**
   ```jsx
   <img src="image.jpg" alt="Descriptive text" />
   ```

### Git Workflow

1. **Commit Messages**
   ```
   feat: Add event registration form
   fix: Resolve mobile menu toggle issue
   style: Update button hover effects
   refactor: Extract stats logic to custom hook
   docs: Update deployment guide
   ```

2. **Branch Naming**
   ```
   feature/event-registration
   fix/mobile-menu-bug
   refactor/stats-component
   docs/api-documentation
   ```

---

## Phase 2 Roadmap

### Backend Integration (Week 3-4)

1. **API Setup**
   - Set up REST API or GraphQL server
   - Configure CORS
   - Implement authentication

2. **Payment Gateways**
   - Flutterwave integration
   - Paystack integration
   - PayPal integration
   - Stripe integration

3. **Email Service**
   - Newsletter subscriptions
   - Contact form emails
   - Book download delivery
   - Event registration confirmations

### Additional Pages (Week 4-5)

- About Section
- Ministry Programs
- Books & Resources
- Media Center
- Prayer & Counseling
- Partnership Portal
- Global Network
- Blog/Messages
- Events & Registration
- Contact Page

### Advanced Features (Week 5-6)

- User authentication
- Book verification system
- Online community portal
- Payment processing
- Email automation
- Multi-language support
- Dark mode toggle
- Chatbot integration
- SEO optimization
- Analytics integration

---

## Testing

### Manual Testing Checklist

- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] Mobile responsiveness on various devices
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)
- [ ] Animations perform smoothly
- [ ] Images load correctly
- [ ] No console errors
- [ ] Accessibility with screen readers

### Future: Automated Testing

Consider adding:
- Jest for unit tests
- React Testing Library for component tests
- Cypress for E2E tests

---

## Resources

### Documentation
- [React](https://react.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)

### Tools
- [VS Code](https://code.visualstudio.com)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

## Support

For questions or issues during development:
- Check existing documentation
- Review similar components
- Consult the tech stack documentation
- Ask the team lead

---

**Happy Coding!**

*Building something great for ReachworldNation* 🚀
