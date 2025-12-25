# Paystack Integration Setup Guide

## Quick Start with Paystack

Paystack is perfect for African payments and much easier to set up than Stripe. This guide will get you testing in 5 minutes!

---

## Step 1: Get Paystack Test Keys (2 minutes)

### Create Paystack Account

1. Go to [https://dashboard.paystack.com/signup](https://dashboard.paystack.com/signup)
2. Sign up with your email (it's free!)
3. Verify your email
4. Login to dashboard

### Get Your Test API Keys

1. Once logged in, you'll see the dashboard
2. Look for **"Settings"** in the left sidebar
3. Click **"API Keys & Webhooks"**
4. You'll see two test keys:
   - **Public Key** (starts with `pk_test_`)
   - **Secret Key** (click "Show" to reveal, starts with `sk_test_`)

5. Copy both keys

---

## Step 2: Update Your .env File

Open `/reachworld-backend/.env` and update:

```env
# Payment Gateway - Paystack (Africa)
PAYSTACK_SECRET_KEY=sk_test_your_actual_key_here
PAYSTACK_PUBLIC_KEY=pk_test_your_actual_key_here
```

**Example:**
```env
PAYSTACK_SECRET_KEY=sk_test_abc123xyz789def456
PAYSTACK_PUBLIC_KEY=pk_test_xyz789abc123ghi456
```

---

## Step 3: Install Dependencies

```bash
cd reachworld-backend

# Activate virtual environment (if not already)
source venv/bin/activate

# Install/update dependencies
pip install -r requirements.txt
```

---

## Step 4: Start the Server

```bash
# Make sure PostgreSQL is running
# If not installed, see DATABASE_SETUP.md

# Run the server
python main.py
```

The API should start at http://localhost:8000

---

## Step 5: Test with API Docs

1. Open browser: **http://localhost:8000/docs**
2. Find **"POST /v1/payments/donations"**
3. Click **"Try it out"**
4. Use this test data:

```json
{
  "amount": 100,
  "email": "test@example.com",
  "full_name": "Test User",
  "currency": "NGN",
  "gateway": "paystack"
}
```

5. Click **"Execute"**
6. You'll get a response with `authorization_url`
7. **Copy that URL** and open in browser

---

## Step 6: Complete Test Payment

1. Paste the `authorization_url` in your browser
2. You'll see Paystack payment page
3. Use these **Paystack test cards**:

### Test Cards (Nigerian Cards)

**Successful Payment:**
- Card: `4084 0840 8408 4081`
- CVV: `408`
- Expiry: Any future date (e.g., `12/25`)
- PIN: `0000`

**Declined Card:**
- Card: `5060 6666 6666 6666`
- CVV: `123`
- Expiry: Any future date
- PIN: `0000`

**Test Card Requiring OTP:**
- Card: `5399 8383 8383 8381`
- CVV: `564`
- Expiry: Any future date
- OTP: `123456`

4. Complete the payment
5. You'll be redirected back
6. Check your terminal - webhook event should be logged!

---

## Currency Support

Paystack supports multiple African currencies:

| Currency | Code | Countries |
|----------|------|-----------|
| Nigerian Naira | NGN | Nigeria |
| Ghanaian Cedi | GHS | Ghana |
| South African Rand | ZAR | South Africa |
| Kenyan Shilling | KES | Kenya |
| US Dollar | USD | International |

### Example Requests

**Nigerian Donation (NGN):**
```json
{
  "amount": 50000,
  "email": "donor@example.com",
  "currency": "NGN",
  "gateway": "paystack"
}
```

**Ghanaian Donation (GHS):**
```json
{
  "amount": 500,
  "email": "donor@example.com",
  "currency": "GHS",
  "gateway": "paystack"
}
```

---

## Webhook Setup (For Production)

### Option 1: During Development (Use ngrok)

```bash
# Install ngrok
brew install ngrok

# Expose your local server
ngrok http 8000

# You'll get a URL like: https://abc123.ngrok.io
# Add webhook in Paystack dashboard:
# https://abc123.ngrok.io/v1/payments/webhooks/paystack
```

### Option 2: In Production

1. Deploy your backend to production
2. Go to Paystack Dashboard → Settings → API Keys & Webhooks
3. Add webhook URL: `https://your-domain.com/v1/payments/webhooks/paystack`
4. Save

Paystack will send events like:
- `charge.success` - Payment succeeded
- `charge.failed` - Payment failed
- `subscription.create` - Subscription created
- `subscription.disable` - Subscription cancelled

---

## API Endpoints with Paystack

### 1. One-Time Donation

```http
POST /v1/payments/donations
Content-Type: application/json

{
  "amount": 10000,
  "email": "donor@example.com",
  "full_name": "John Doe",
  "currency": "NGN",
  "gateway": "paystack"
}
```

**Response:**
```json
{
  "payment_intent_id": "DON-ABC123XYZ789",
  "authorization_url": "https://checkout.paystack.com/abc123",
  "amount": 10000,
  "currency": "NGN",
  "gateway": "paystack"
}
```

**Frontend Action:**
- Redirect user to `authorization_url`
- User completes payment on Paystack
- Paystack redirects back to your callback URL
- Webhook confirms payment to your backend

---

### 2. Verify Payment Status

After user returns from Paystack, verify the payment:

```http
GET /v1/payments/payments/{payment_id}
```

---

## Subscription Tiers (Pricing)

### Nigerian Naira (NGN) Pricing

| Tier | Monthly Price (NGN) | USD Equivalent |
|------|---------------------|----------------|
| Kingdom Partner | ₦40,000 | ~$50 |
| Ambassador | ₦80,000 | ~$100 |
| Global Influencer | ₦200,000 | ~$250 |

### Implementation Note

Subscriptions with Paystack require:
1. Customer creation
2. Plan creation (done once)
3. Subscription creation with authorization

We'll implement subscription endpoints next if needed.

---

## Common Issues & Solutions

### Issue: "Invalid API Key"

**Solution:**
- Check your `.env` file
- Make sure you're using `sk_test_` (secret key) not `pk_test_`
- Restart the server after updating `.env`

### Issue: "Unable to initialize transaction"

**Solution:**
- Check your internet connection
- Verify Paystack API is up: https://status.paystack.com
- Check amount is greater than minimum (NGN 50 / $0.50)

### Issue: "Webhook signature verification failed"

**Solution:**
- Make sure you're using the correct secret key
- Webhook URL must be HTTPS in production
- Check Paystack dashboard for webhook logs

---

## Testing Checklist

- [ ] Test Keys configured in `.env`
- [ ] Dependencies installed (`pypaystack2`)
- [ ] Server running (`python main.py`)
- [ ] API docs accessible (`http://localhost:8000/docs`)
- [ ] Donation endpoint works
- [ ] Test payment completed successfully
- [ ] Webhook received (check terminal logs)
- [ ] Payment status updated in database

---

## Advantages of Paystack

✅ **African-First**: Built for African payments
✅ **Easy Setup**: Just 2 API keys needed
✅ **Multiple Currencies**: NGN, GHS, ZAR, KES, USD
✅ **Mobile Money**: Support for M-Pesa, MTN Mobile Money
✅ **Bank Transfer**: Direct bank payments
✅ **USSD**: Pay via USSD codes
✅ **Lower Fees**: Better rates for African transactions
✅ **Great Documentation**: https://paystack.com/docs

---

## Next Steps

Once basic donations work, you can add:

1. **Subscriptions** - Monthly recurring payments
2. **Split Payments** - Multi-recipient splits
3. **Mobile Money** - M-Pesa, MTN, etc.
4. **Transfers** - Send money to partners
5. **Disputes** - Handle chargebacks

---

## Support & Resources

- **Paystack Docs**: https://paystack.com/docs
- **API Reference**: https://paystack.com/docs/api
- **Test Cards**: https://paystack.com/docs/payments/test-payments
- **Support**: support@paystack.com
- **Status Page**: https://status.paystack.com

---

## Quick Reference

**API Endpoint**: https://api.paystack.co
**Test Cards**: 4084 0840 8408 4081 (PIN: 0000)
**Webhook Events**: `charge.success`, `charge.failed`
**Minimum Amount**: NGN 50 / $0.50
**Fee**: 1.5% + NGN 100 (capped at NGN 2,000)

---

Ready to test? Run `python main.py` and visit http://localhost:8000/docs! 🚀
