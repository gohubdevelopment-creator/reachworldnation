# ReachworldNation Website - Phase 1

A modern, responsive website for ReachworldNation ministry, built with React, TailwindCSS, and Framer Motion.

## Project Overview

**Phase 1 Status**: Homepage Frontend (For Client Review)
**Timeline**: 2 weeks for review, then 4 weeks for full implementation
**Delivery Date**: TBD after client approval

## Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion
- **Carousel**: Swiper.js
- **Icons**: React Icons
- **Routing**: React Router DOM

## Brand Colors

- **Royal Blue**: `#0033A0` (Primary - Authority & Trust)
- **Gold**: `#FFD700` (Accent - Excellence & Glory)
- **White**: `#FFFFFF` (Background - Purity)
- **Deep Charcoal**: `#0D0D0D` (Text - Contrast)
- **Sky Blue**: `#00BFFF` (Secondary Accent - Innovation)

## Current Features (Phase 1 - Homepage)

### 1. Header Component
- Sticky navigation bar
- Responsive mobile menu
- Brand logo and tagline
- Navigation links (8 main sections)
- "Join Us" CTA button

### 2. Hero Banner
- Auto-rotating carousel (4 slides)
- Smooth animations and transitions
- Navigation arrows and indicators
- Dynamic headlines and CTAs
- Gradient backgrounds with decorative elements

### 3. Quick Access Buttons
- 4 main action cards:
  - Watch Messages
  - Download Books
  - Partner with Us
  - Join ReachworldNation
- Hover animations
- Icon-based design
- Color-coded sections

### 4. Impact Statistics
- Animated number counters
- 4 key metrics:
  - Nations Impacted (150+)
  - Books Distributed (500K+)
  - Lives Reached (2M+)
  - Church Partners (5K+)
- Glass-morphism design
- Decorative background effects

### 5. Events Carousel
- Swiper.js implementation
- Upcoming events showcase
- Responsive grid (1-3 columns)
- Featured event highlighting
- Date, time, location details
- Registration CTAs

### 6. Footer Component
- 4-column layout (responsive)
- Contact information
- Quick links (Ministry, Resources, Connect)
- Social media integration
- Newsletter subscription
- Legal links (Privacy, Terms, Cookies)

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── home/
│   │   ├── HeroBanner.jsx
│   │   ├── QuickAccessButtons.jsx
│   │   ├── ImpactStats.jsx
│   │   └── EventsCarousel.jsx
│   └── common/
├── pages/
│   └── HomePage.jsx
├── assets/
│   ├── images/
│   └── icons/
├── utils/
├── data/
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Navigate to project directory:
```bash
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

4. Open browser to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components adapt gracefully to different screen sizes.

## Phase 2 Plans (Post-Review)

After client approval, Phase 2 will include:

### Backend Integration
1. **Payment Gateways** (Priority 1)
   - Flutterwave
   - Paystack
   - PayPal
   - Stripe

2. **Email System** (Priority 2)
   - Newsletter subscriptions
   - Contact form emails
   - Book download delivery
   - Event registration confirmations

3. **CRM Integration** (Priority 3)
   - HubSpot or Mailchimp
   - User data management
   - Partnership tracking

### Additional Pages
- About Section
- Ministry Programs
- Books & Resources (with download system)
- Media Center (Video/Audio streaming)
- Prayer & Counseling
- Partnership Portal
- Global Network
- Blog/Messages
- Events & Registration
- Contact Page

### Advanced Features
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

## Notes for Client Review

### What to Review:
1. Overall design and color scheme
2. Layout and component placement
3. Animation speeds and transitions
4. Content accuracy and messaging
5. Mobile responsiveness
6. Navigation structure
7. Call-to-action effectiveness

### What's NOT Included Yet:
- Backend functionality
- Real payment processing
- Email system
- Database connections
- User accounts
- Content management system
- Other pages (About, Books, Media, etc.)

These will be implemented in Phase 2 after approval.

## Development Notes

### Custom CSS Classes
TailwindCSS utilities are extended with custom classes:
- `.btn-primary` - Gold button with hover effects
- `.btn-secondary` - Royal blue button with hover effects

### Animation Library
Framer Motion provides:
- Entrance animations
- Scroll-triggered animations
- Hover states
- Page transitions

### Code Quality
- Clean, modular component structure
- Reusable components
- Commented code where necessary
- ESLint configured
- Mobile-first approach

## Support & Contact

For questions or clarifications during the review period, please contact the development team.

---

**Built with ❤️ for ReachworldNation**
*Transforming Lives Globally*
