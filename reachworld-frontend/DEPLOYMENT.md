# Deployment Guide - ReachworldNation Website

This guide covers deploying the ReachworldNation website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All dependencies are installed (`npm install`)
- [ ] Build runs successfully (`npm run build`)
- [ ] No console errors in development mode
- [ ] All environment variables are configured
- [ ] SEO meta tags are properly set
- [ ] Favicon and social media images are added
- [ ] Analytics tracking codes are added (if needed)

## Environment Variables

Create a `.env` file in the root directory (for Phase 2):

```env
# API Configuration (Phase 2)
VITE_API_URL=https://api.reachworldnation.org
VITE_API_KEY=your_api_key_here

# Payment Gateway Keys (Phase 2)
VITE_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_key
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_key
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_key

# Analytics (Optional)
VITE_GA_TRACKING_ID=your_google_analytics_id
VITE_FB_PIXEL_ID=your_facebook_pixel_id

# Email Service (Phase 2)
VITE_EMAIL_SERVICE_URL=your_email_service_url
```

**Note**: For Vite, all environment variables must be prefixed with `VITE_` to be exposed to the client.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest and most optimized platform for React + Vite apps.

#### Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

#### Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add environment variables (if any)
7. Click "Deploy"

**Custom Domain Setup:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

---

### Option 2: Netlify

Netlify offers great performance and CI/CD integration.

#### Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

#### Deploy via Netlify Dashboard

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Add environment variables in Site settings → Environment variables
7. Click "Deploy site"

**Custom Domain Setup:**
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS as instructed

---

### Option 3: GitHub Pages

GitHub Pages is free for public repositories.

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/reachworld-frontend",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/reachworld-frontend/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: `gh-pages` branch

---

### Option 4: AWS Amplify

AWS Amplify provides scalable hosting with AWS integration.

1. Push code to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Click "Get Started" under Hosting
4. Connect GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Add environment variables
7. Deploy

---

### Option 5: Firebase Hosting

Firebase offers fast global CDN and easy integration with Firebase services.

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init hosting
```

Select:
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds: `No` (for now)

4. Build and deploy:
```bash
npm run build
firebase deploy
```

---

## Build Optimization

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build Locally

```bash
npm run preview
```

### Build Analysis

To analyze bundle size:

1. Install plugin:
```bash
npm install -D rollup-plugin-visualizer
```

2. Update `vite.config.js`:
```javascript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ],
})
```

3. Run build to see bundle analysis.

---

## Performance Optimization

### Image Optimization
- Use WebP format for images
- Compress images before uploading
- Use lazy loading for images below the fold

### Code Splitting
Already implemented via dynamic imports in React Router.

### Caching Strategy
Both Vercel and Netlify automatically configure optimal caching headers.

---

## Monitoring & Analytics

### Google Analytics (Phase 2)

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

Consider integrating Sentry for error tracking:
```bash
npm install @sentry/react
```

---

## SSL/HTTPS

All recommended platforms (Vercel, Netlify, AWS Amplify, Firebase) provide automatic SSL certificates via Let's Encrypt.

---

## Continuous Deployment

### Automatic Deployments

Both Vercel and Netlify support automatic deployments:
- Push to `main` branch → Production deployment
- Push to `develop` branch → Preview deployment
- Pull requests → Preview deployments

### Deploy Previews

Every pull request gets a unique preview URL for testing.

---

## Rollback Strategy

### Vercel
- Go to Deployments tab
- Click on previous successful deployment
- Click "Promote to Production"

### Netlify
- Go to Deploys tab
- Select previous deployment
- Click "Publish deploy"

---

## Domain Configuration

### DNS Settings

For custom domain (e.g., reachworldnation.org):

**A Records:**
```
@    -> Platform IP (provided by host)
```

**CNAME Records:**
```
www  -> Platform domain (e.g., cname.vercel-dns.com)
```

### Email Records

Ensure email services are not affected:
- Keep MX records intact
- Verify SPF and DKIM records

---

## Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **API Keys**: Use environment variables for all sensitive data
3. **HTTPS**: Always enforce HTTPS
4. **Headers**: Security headers are configured in `vercel.json` and `netlify.toml`
5. **Dependencies**: Regularly update dependencies for security patches

---

## Troubleshooting

### Build Fails

1. Check Node version (should be 18+)
2. Clear cache: `rm -rf node_modules package-lock.json && npm install`
3. Check for TypeScript/ESLint errors
4. Verify all dependencies are installed

### 404 Errors on Refresh

Ensure SPA fallback is configured (already done in `vercel.json` and `netlify.toml`).

### Slow Loading

1. Check bundle size
2. Enable compression (automatically done by platforms)
3. Optimize images
4. Use CDN for assets

---

## Post-Deployment Checklist

After deployment:
- [ ] Test all pages and navigation
- [ ] Verify mobile responsiveness
- [ ] Check all CTAs and buttons
- [ ] Test forms (Phase 2)
- [ ] Verify payment gateways (Phase 2)
- [ ] Check SEO meta tags
- [ ] Test social media sharing
- [ ] Verify analytics tracking
- [ ] Check performance with Lighthouse
- [ ] Test on multiple browsers
- [ ] Verify custom domain SSL

---

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Firebase: [firebase.google.com/docs/hosting](https://firebase.google.com/docs/hosting)

---

**Last Updated**: Phase 1 - Homepage Frontend
**Next Update**: Phase 2 - Backend Integration
