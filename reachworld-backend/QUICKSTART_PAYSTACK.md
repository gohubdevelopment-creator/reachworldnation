# Quick Start with Paystack (5 Minutes)

Get your payment system running in 5 minutes with Paystack!

## 1. Get Paystack Keys (2 min)

1. Go to https://dashboard.paystack.com/signup
2. Sign up (free)
3. Go to Settings → API Keys & Webhooks
4. Copy your test keys:
   - **Secret Key** (sk_test_...)
   - **Public Key** (pk_test_...)

## 2. Configure Environment (30 sec)

Edit `reachworld-backend/.env`:

```env
PAYSTACK_SECRET_KEY=sk_test_your_actual_secret_key_here
PAYSTACK_PUBLIC_KEY=pk_test_your_actual_public_key_here
```

## 3. Install & Run (1 min)

```bash
cd reachworld-backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install
pip install -r requirements.txt

# Run
python main.py
```

## 4. Test Payment (1.5 min)

### Option A: Using API Docs (Easiest)

1. Open browser: http://localhost:8000/docs
2. Find `POST /v1/payments/donations`
3. Click "Try it out"
4. Paste this:

```json
{
  "amount": 10000,
  "email": "test@example.com",
  "full_name": "Test User",
  "currency": "NGN",
  "gateway": "paystack"
}
```

5. Click "Execute"
6. Copy the `authorization_url` from response
7. Open that URL in your browser
8. Use test card: **4084 0840 8408 4081**
   - CVV: **408**
   - Expiry: **12/25**
   - PIN: **0000**
9. Complete payment!

### Option B: Using curl

```bash
# Create donation
curl -X POST http://localhost:8000/v1/payments/donations \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 10000,
    "email": "test@example.com",
    "currency": "NGN",
    "gateway": "paystack"
  }'

# You'll get back an authorization_url - open it in browser to pay
```

## 5. Verify It Worked

Check your terminal - you should see the server logs showing the payment was created.

---

## That's It!

You now have a working payment API! 🎉

### What You Can Do Next:

**Test Endpoints:**
- ✅ Donations: `POST /v1/payments/donations`
- ✅ Subscriptions: `POST /v1/payments/subscriptions`
- ✅ Orders (Books/Events): `POST /v1/payments/orders`
- ✅ Payment Status: `GET /v1/payments/payments/{id}`
- ✅ Webhooks: `POST /v1/payments/webhooks/paystack`

**Supported Currencies:**
- NGN (Nigerian Naira) - Recommended
- GHS (Ghanaian Cedi)
- ZAR (South African Rand)
- KES (Kenyan Shilling)
- USD (US Dollar)

**Test Cards:**
| Card Number | Type | PIN |
|-------------|------|-----|
| 4084 0840 8408 4081 | Success | 0000 |
| 5060 6666 6666 6666 | Decline | 0000 |
| 5399 8383 8383 8381 | OTP Required | 0000 |

OTP for testing: **123456**

---

## Need Help?

- **Full Setup Guide**: See [PAYSTACK_SETUP.md](PAYSTACK_SETUP.md)
- **API Docs**: http://localhost:8000/docs (when server is running)
- **Paystack Docs**: https://paystack.com/docs
- **Test Cards**: https://paystack.com/docs/payments/test-payments

---

## Troubleshooting

**Server won't start?**
```bash
# Make sure virtual environment is active
source venv/bin/activate

# Check all dependencies installed
pip install -r requirements.txt
```

**"Invalid API Key" error?**
- Check your `.env` file has the correct keys
- Make sure you used `sk_test_` (not `pk_test_`) for SECRET_KEY
- Restart the server after changing `.env`

**Payment not showing up?**
- Check the webhook was received (terminal logs)
- Verify payment status: `GET /v1/payments/payments/{id}`

---

Happy testing! 🚀
