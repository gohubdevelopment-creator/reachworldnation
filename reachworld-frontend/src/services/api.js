// API Service for ReachWorld Nation Backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

class APIService {
  /**
   * Create a one-time donation
   */
  static async createDonation({ amount, email, fullName, phone, currency = 'NGN' }) {
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
        currency,
        gateway: 'paystack',
        metadata: {
          source: 'partner_page',
          callback_url: window.location.origin + '/payment-success',
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
   */
  static async createSubscription({ tier, email, fullName, phone }) {
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
        gateway: 'paystack',
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
   */
  static async createOrder({
    items,
    email,
    fullName,
    phone,
    shippingAddress,
    customerNotes,
    currency = 'NGN',
    callbackUrl,
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
        gateway: 'paystack',
        currency,
        callback_url: callbackUrl,
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
