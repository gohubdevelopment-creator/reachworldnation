import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCreditCard, FaUniversity, FaGlobe } from 'react-icons/fa';
import StripeCheckout from './StripeCheckout';

const PaymentModal = ({
  isOpen,
  onClose,
  type = 'donation', // 'donation' | 'subscription' | 'order'
  amount,
  currency = 'USD',
  tier, // For subscriptions
  onSubmit,
  isProcessing,
}) => {
  const [step, setStep] = useState('form'); // 'form' | 'stripe'
  const [gateway, setGateway] = useState('stripe');
  const [clientSecret, setClientSecret] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.fullName) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      const result = await onSubmit({
        ...formData,
        gateway,
        amount,
        currency: gateway === 'stripe' ? 'USD' : 'NGN',
        tier,
      });

      if (gateway === 'stripe' && result?.client_secret) {
        setClientSecret(result.client_secret);
        setStep('stripe');
      } else if ((gateway === 'paystack' || gateway === 'flutterwave') && result?.authorization_url) {
        window.location.href = result.authorization_url;
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStripeSuccess = (paymentIntent) => {
    window.location.href = `/payment-success?payment_intent=${paymentIntent.id}`;
  };

  const handleClose = () => {
    setStep('form');
    setClientSecret(null);
    setError(null);
    onClose();
  };

  const getTitle = () => {
    switch (type) {
      case 'subscription':
        return `Become a ${tier?.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}`;
      case 'order':
        return 'Complete Your Order';
      default:
        return 'Make a Donation';
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-royal-blue to-electric-purple p-6 rounded-t-3xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="text-2xl font-bold text-white">{getTitle()}</h2>
            {amount && (
              <p className="text-white/80 mt-1">
                {gateway === 'stripe' ? '$' : '₦'}
                {amount?.toLocaleString()} {gateway === 'stripe' ? 'USD' : 'NGN'}
                {type === 'subscription' && '/month'}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm">
                {error}
              </div>
            )}

            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Gateway Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setGateway('stripe')}
                      className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                        gateway === 'stripe'
                          ? 'border-royal-blue bg-royal-blue/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FaCreditCard
                        className={`text-xl ${
                          gateway === 'stripe' ? 'text-royal-blue' : 'text-gray-400'
                        }`}
                      />
                      <span
                        className={`font-semibold text-xs ${
                          gateway === 'stripe' ? 'text-royal-blue' : 'text-gray-600'
                        }`}
                      >
                        Stripe
                      </span>
                      <span className="text-[10px] text-gray-500">International</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGateway('paystack')}
                      className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                        gateway === 'paystack'
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FaUniversity
                        className={`text-xl ${
                          gateway === 'paystack' ? 'text-green-600' : 'text-gray-400'
                        }`}
                      />
                      <span
                        className={`font-semibold text-xs ${
                          gateway === 'paystack' ? 'text-green-600' : 'text-gray-600'
                        }`}
                      >
                        Paystack
                      </span>
                      <span className="text-[10px] text-gray-500">Nigeria</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGateway('flutterwave')}
                      className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                        gateway === 'flutterwave'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FaGlobe
                        className={`text-xl ${
                          gateway === 'flutterwave' ? 'text-orange-500' : 'text-gray-400'
                        }`}
                      />
                      <span
                        className={`font-semibold text-xs ${
                          gateway === 'flutterwave' ? 'text-orange-500' : 'text-gray-600'
                        }`}
                      >
                        Flutterwave
                      </span>
                      <span className="text-[10px] text-gray-500">Africa</span>
                    </button>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-blue focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-blue focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-blue focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Continue to Payment'
                  )}
                </button>
              </form>
            ) : (
              <div>
                <button
                  onClick={() => setStep('form')}
                  className="mb-4 text-royal-blue font-semibold text-sm hover:underline"
                >
                  ← Back to details
                </button>
                <StripeCheckout
                  clientSecret={clientSecret}
                  amount={amount}
                  currency={currency.toLowerCase()}
                  onSuccess={handleStripeSuccess}
                  onError={(msg) => setError(msg)}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PaymentModal;
