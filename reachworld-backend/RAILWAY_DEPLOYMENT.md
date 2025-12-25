# Deploying to Railway (Development)

This guide will help you deploy your FastAPI backend to Railway for development purposes.

## Prerequisites

1. A Railway account (sign up at https://railway.app)
2. Git repository initialized in your project
3. Railway CLI installed (optional but recommended)

## Quick Setup Steps

### 1. Prepare Your Repository

Make sure your backend code is committed to git:

```bash
cd reachworld-backend
git add .
git commit -m "Prepare for Railway deployment"
```

### 2. Deploy to Railway

#### Option A: Using Railway Dashboard (Easiest)

1. Go to https://railway.app and log in
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect your FastAPI app

#### Option B: Using Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

### 3. Add PostgreSQL Database (Recommended for Production-like Development)

1. In your Railway project dashboard, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically create a `DATABASE_URL` environment variable
4. Your app will use this automatically (no manual configuration needed!)

**Note:** For quick testing, you can use SQLite (already configured in your .env). Railway supports SQLite, but PostgreSQL is recommended for better performance and production parity.

### 4. Configure Environment Variables

In your Railway project dashboard, go to "Variables" and add:

**Required Variables:**
```
APP_NAME=ReachWorld Nation API
APP_ENV=development
DEBUG=True
API_VERSION=v1
SECRET_KEY=<generate-a-secure-random-key>
FRONTEND_URL=https://reachworldnation.vercel.app
ALLOWED_ORIGINS=http://localhost:5173,https://reachworldnation.vercel.app
```

**Payment Gateways (use your test keys):**
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
PAYSTACK_SECRET_KEY=sk_test_...
PAYSTACK_PUBLIC_KEY=pk_test_...
```

**Email Configuration:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAILS_FROM_EMAIL=noreply@reachworldnation.org
EMAILS_FROM_NAME=ReachWorld Nation
```

**JWT Settings:**
```
JWT_SECRET_KEY=<generate-a-secure-random-key>
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

**Admin Account:**
```
FIRST_SUPERUSER_EMAIL=admin@reachworldnation.org
FIRST_SUPERUSER_PASSWORD=<choose-a-secure-password>
```

### 5. Generate a Domain

Railway will automatically generate a domain for your app (e.g., `your-app.up.railway.app`). You can:
- Use the auto-generated domain
- Set a custom subdomain
- Add your own custom domain

### 6. Verify Deployment

Once deployed, visit:
- `https://your-app.railway.app/` - Should show API info
- `https://your-app.railway.app/health` - Should return `{"status": "healthy"}`
- `https://your-app.railway.app/v1/docs` - FastAPI interactive docs

## Important Notes for Development

### Database Choice

- **SQLite (Current)**: Already configured, works on Railway, good for quick testing
- **PostgreSQL (Recommended)**: Better for development that mirrors production
  - Railway provides free PostgreSQL with generous limits
  - Automatically injects `DATABASE_URL` environment variable
  - No configuration needed - your app will use it automatically

### Environment Variables

Railway automatically injects:
- `PORT` - Used in your Procfile
- `DATABASE_URL` - If you add PostgreSQL
- `RAILWAY_ENVIRONMENT` - Deployment environment info

### CORS Configuration

Make sure your `ALLOWED_ORIGINS` includes all domains that will access your API:
```
ALLOWED_ORIGINS=http://localhost:5173,https://reachworldnation.vercel.app
```

Your frontend at `https://reachworldnation.vercel.app` will be able to make requests to your Railway backend.

### File Uploads

Railway has ephemeral storage. For development, local file storage works, but consider:
- Using Railway's persistent volumes (beta feature)
- Or integrate cloud storage (AWS S3, Cloudinary) later for production

## Monitoring and Logs

- View logs in Railway dashboard under "Deployments" → "Logs"
- Monitor usage under "Metrics"
- Railway free tier is generous for development:
  - $5 free credit per month
  - 500 hours of runtime

## Cost Management (Development)

Railway is free for development with:
- $5/month free credit
- Pay only for what you use beyond free tier
- For a simple API, you'll likely stay within free tier

Estimated costs for development:
- Small API with PostgreSQL: ~$2-3/month (covered by free credit)
- Can pause/sleep the service when not in use to save credits

## Updating Your Deployment

When you make changes:

```bash
git add .
git commit -m "Your changes"
git push
```

Railway will automatically redeploy when you push to your main branch.

## Troubleshooting

### Build Fails
- Check Railway logs for error messages
- Ensure `requirements.txt` has all dependencies
- Verify Python version compatibility

### App Won't Start
- Check that `Procfile` is correct
- Verify environment variables are set
- Check logs for startup errors

### Database Connection Issues
- If using PostgreSQL, ensure `DATABASE_URL` is set
- For SQLite, it should work out of the box
- Check database connection settings in logs

## Next Steps

1. Deploy your backend to Railway
2. Update your frontend to use the Railway API URL
3. Test all endpoints
4. Configure custom domain (optional)
5. Set up monitoring and alerts

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- FastAPI Docs: https://fastapi.tiangolo.com
