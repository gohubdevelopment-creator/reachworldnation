# ReachWorld Nation Backend API

Python FastAPI backend for handling payment integrations (donations, subscriptions, orders) for the ReachWorld Nation platform.

## Features

- **Payment Processing**: Stripe integration (Paystack & Flutterwave ready)
- **One-Time Donations**: Accept donations of any amount
- **Monthly Subscriptions**: Kingdom Partner ($50), Ambassador ($100), Global Influencer ($250+)
- **Order Management**: Books (digital/physical) and event ticket purchases
- **Webhook Handling**: Automatic payment confirmations
- **PostgreSQL Database**: Production-ready data persistence
- **RESTful API**: Clean, documented endpoints

## Tech Stack

- **Framework**: FastAPI 0.115+
- **Database**: PostgreSQL + SQLAlchemy
- **Payment Gateways**: Stripe (Paystack & Flutterwave ready)
- **Migrations**: Alembic
- **Validation**: Pydantic

## Project Structure

```
reachworld-backend/
├── app/
│   ├── api/
│   │   └── v1/
│   │       └── endpoints/
│   │           └── payments.py      # Payment API endpoints
│   ├── core/
│   │   └── config.py                # Settings & environment variables
│   ├── db/
│   │   └── base.py                  # Database connection
│   ├── models/                      # SQLAlchemy models
│   │   ├── user.py
│   │   ├── subscription.py
│   │   ├── product.py
│   │   ├── order.py
│   │   └── payment.py
│   ├── schemas/                     # Pydantic schemas
│   │   └── payment.py
│   └── services/                    # Business logic
│       └── stripe_service.py
├── alembic/                         # Database migrations
├── main.py                          # FastAPI app entry point
├── requirements.txt                 # Python dependencies
├── .env.example                     # Environment variables template
└── README.md
```

## Setup Instructions

### 1. Prerequisites

- Python 3.10+
- PostgreSQL 14+
- Stripe account (for sandbox testing)

### 2. Install Dependencies

```bash
cd reachworld-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Database Setup

```bash
# Install PostgreSQL (macOS with Homebrew)
brew install postgresql@14
brew services start postgresql@14

# Create database
createdb reachworldnation

# Or using psql:
psql postgres
CREATE DATABASE reachworldnation;
\q
```

### 4. Environment Configuration

```bash
# Copy example env file
cp .env.example .env

# Edit .env with your settings
nano .env
```

**Required Environment Variables:**

```env
# Application
SECRET_KEY=your-secret-key-here-change-in-production
JWT_SECRET_KEY=your-jwt-secret-key-change-in-production
FIRST_SUPERUSER_PASSWORD=changeme

# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/reachworldnation

# Stripe (Get from https://dashboard.stripe.com/test/apikeys)
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### 5. Get Stripe Test Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Create account or login
3. Toggle to "Test mode" (top right)
4. Copy "Publishable key" → `STRIPE_PUBLISHABLE_KEY`
5. Click "Reveal test key" → Copy "Secret key" → `STRIPE_SECRET_KEY`
6. For webhooks (later): Stripe CLI or Dashboard Webhooks

### 6. Run Database Migrations

```bash
# Generate initial migration
alembic revision --autogenerate -m "Initial migration"

# Apply migrations
alembic upgrade head
```

### 7. Run the API Server

```bash
# Development mode (auto-reload)
python main.py

# Or using uvicorn directly
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- **API**: http://localhost:8000
- **Docs**: http://localhost:8000/docs (Swagger UI)
- **ReDoc**: http://localhost:8000/redoc

## API Endpoints

### Payment Endpoints

#### 1. Create Donation (One-Time)
```http
POST /v1/payments/donations
Content-Type: application/json

{
  "amount": 100.00,
  "email": "donor@example.com",
  "full_name": "John Doe",
  "currency": "USD",
  "gateway": "stripe"
}
```

**Response:**
```json
{
  "payment_intent_id": "pi_xxx",
  "client_secret": "pi_xxx_secret_xxx",
  "amount": 100.00,
  "currency": "USD",
  "gateway": "stripe"
}
```

#### 2. Create Subscription (Monthly Partnership)
```http
POST /v1/payments/subscriptions
Content-Type: application/json

{
  "tier": "kingdom_partner",
  "email": "partner@example.com",
  "full_name": "Jane Smith",
  "gateway": "stripe",
  "payment_method_id": "pm_xxx"
}
```

**Tiers:**
- `kingdom_partner`: $50/month
- `ambassador`: $100/month
- `global_influencer`: $250/month

#### 3. Create Order (Books/Events)
```http
POST /v1/payments/orders
Content-Type: application/json

{
  "items": [
    {"product_id": 1, "quantity": 2}
  ],
  "email": "customer@example.com",
  "full_name": "Bob Johnson",
  "gateway": "stripe",
  "shipping_address_line1": "123 Main St",
  "shipping_city": "Lagos",
  "shipping_country": "Nigeria"
}
```

#### 4. Get Payment Status
```http
GET /v1/payments/payments/{payment_id}
```

#### 5. Stripe Webhook
```http
POST /v1/payments/webhooks/stripe
```

## Testing with Stripe

### Test Card Numbers

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **3D Secure**: 4000 0027 6000 3184

Use any future expiry date (e.g., 12/34) and any 3-digit CVC.

### Testing Webhooks Locally

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:8000/v1/payments/webhooks/stripe

# Copy the webhook signing secret to .env as STRIPE_WEBHOOK_SECRET
```

## Database Migrations

```bash
# Create new migration after model changes
alembic revision --autogenerate -m "Description of changes"

# Apply migrations
alembic upgrade head

# Rollback one migration
alembic downgrade -1

# View migration history
alembic history
```

## Development Workflow

### 1. Adding a New Payment Gateway (Paystack Example)

1. **Add service** in `app/services/paystack_service.py`
2. **Update schemas** in `app/schemas/payment.py`
3. **Add endpoint logic** in `app/api/v1/endpoints/payments.py`
4. **Test** with Paystack test keys

### 2. Adding New Product Types

1. **Update model** in `app/models/product.py`
2. **Create migration**: `alembic revision --autogenerate -m "Add new product type"`
3. **Apply**: `alembic upgrade head`
4. **Update schemas** as needed

## Production Deployment

### Environment Variables for Production

```env
APP_ENV=production
DEBUG=False
DATABASE_URL=postgresql://user:pass@prod-host:5432/dbname
STRIPE_SECRET_KEY=sk_live_your_live_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
```

### Docker Deployment (Coming Soon)

```bash
# Build image
docker build -t reachworldnation-api .

# Run container
docker run -p 8000:8000 --env-file .env reachworldnation-api
```

## Security Considerations

- Never commit `.env` file
- Use strong `SECRET_KEY` and `JWT_SECRET_KEY` in production
- Enable HTTPS in production
- Validate webhook signatures
- Use Stripe live keys only in production
- Implement rate limiting for API endpoints
- Regular security audits

## Troubleshooting

### Database Connection Error
```bash
# Check PostgreSQL is running
brew services list

# Test connection
psql -d reachworldnation -U postgres
```

### Stripe Webhook Signature Verification Failed
- Ensure `STRIPE_WEBHOOK_SECRET` matches your endpoint secret
- Use Stripe CLI for local testing

### Import Errors
```bash
# Ensure virtual environment is activated
source venv/bin/activate

# Reinstall dependencies
pip install -r requirements.txt
```

## Next Steps

- [ ] Add Paystack integration for African payments
- [ ] Add Flutterwave integration
- [ ] Implement email notifications
- [ ] Add admin dashboard endpoints
- [ ] Implement user authentication
- [ ] Add order fulfillment workflow
- [ ] Create digital download system
- [ ] Add analytics endpoints

## API Documentation

Once the server is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Support

For issues or questions, please contact the development team or create an issue in the repository.

## License

Proprietary - ReachWorld Nation
