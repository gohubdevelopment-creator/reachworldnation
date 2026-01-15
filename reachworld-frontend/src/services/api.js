// API Service for ReachWorld Nation Backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

class APIService {
  /**
   * Create a one-time donation
   * @param {Object} params
   * @param {number} params.amount - Amount to donate
   * @param {string} params.email - Donor email
   * @param {string} params.fullName - Donor full name
   * @param {string} [params.phone] - Donor phone
   * @param {string} [params.currency] - Currency (USD for Stripe, NGN for Paystack/Flutterwave)
   * @param {string} [params.gateway] - Payment gateway ('stripe', 'paystack', or 'flutterwave')
   * @param {string} [params.callbackUrl] - Callback URL after payment
   */
  static async createDonation({ amount, email, fullName, phone, currency = 'USD', gateway = 'stripe', callbackUrl }) {
    const response = await fetch(`${API_BASE_URL}/v1/payments/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        email,
        full_name: fullName,
        phone,
        currency: gateway === 'stripe' ? 'usd' : currency,
        gateway,
        metadata: {
          source: 'partner_page',
          callback_url: callbackUrl || window.location.origin + '/payment-success',
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to create donation');
    }

    return response.json();
  }

  /**
   * Create a monthly subscription
   * @param {Object} params
   * @param {string} params.tier - Subscription tier ('kingdom_partner', 'ambassador', 'global_influencer')
   * @param {string} params.email - Subscriber email
   * @param {string} params.fullName - Subscriber full name
   * @param {string} [params.phone] - Subscriber phone
   * @param {string} [params.gateway] - Payment gateway ('stripe', 'paystack', or 'flutterwave')
   * @param {string} [params.callbackUrl] - Callback URL after payment
   */
  static async createSubscription({ tier, email, fullName, phone, gateway = 'stripe', callbackUrl }) {
    const response = await fetch(`${API_BASE_URL}/v1/payments/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tier,
        email,
        full_name: fullName,
        phone,
        gateway,
        callback_url: callbackUrl || window.location.origin + '/payment-success',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to create subscription');
    }

    return response.json();
  }

  /**
   * Create an order (for books or event tickets)
   * @param {Object} params
   * @param {Array} params.items - Order items [{product_id, quantity}]
   * @param {string} params.email - Customer email
   * @param {string} params.fullName - Customer full name
   * @param {string} [params.phone] - Customer phone
   * @param {Object} [params.shippingAddress] - Shipping address
   * @param {string} [params.customerNotes] - Order notes
   * @param {string} [params.currency] - Currency
   * @param {string} [params.callbackUrl] - Callback URL
   * @param {string} [params.gateway] - Payment gateway ('stripe', 'paystack', or 'flutterwave')
   */
  static async createOrder({
    items,
    email,
    fullName,
    phone,
    shippingAddress,
    customerNotes,
    currency = 'USD',
    callbackUrl,
    gateway = 'stripe',
  }) {
    const response = await fetch(`${API_BASE_URL}/v1/payments/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        email,
        full_name: fullName,
        phone,
        gateway,
        currency: gateway === 'stripe' ? 'usd' : currency,
        callback_url: callbackUrl || window.location.origin + '/payment-success',
        // Flatten shipping address fields
        shipping_address_line1: shippingAddress?.shipping_address_line1 || shippingAddress?.street,
        shipping_address_line2: shippingAddress?.shipping_address_line2,
        shipping_city: shippingAddress?.shipping_city || shippingAddress?.city,
        shipping_state: shippingAddress?.shipping_state || shippingAddress?.state,
        shipping_country: shippingAddress?.shipping_country || shippingAddress?.country,
        shipping_postal_code: shippingAddress?.shipping_postal_code || shippingAddress?.postal_code,
        customer_notes: customerNotes,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to create order');
    }

    return response.json();
  }

  /**
   * Get payment status
   * @param {number} paymentId - Payment ID
   */
  static async getPaymentStatus(paymentId) {
    const response = await fetch(`${API_BASE_URL}/v1/payments/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to get payment status');
    }

    return response.json();
  }
}

export default APIService;
