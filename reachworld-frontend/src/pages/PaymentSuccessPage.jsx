import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  const reference = searchParams.get('reference') || searchParams.get('trxref');

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/books'); // Redirect to books page
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue via-primary-blue-dark to-neutral-dark flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <FaCheckCircle className="text-9xl text-green-500 mx-auto mb-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl font-black text-primary-blue mb-4"
        >
          Payment Successful!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600 mb-8"
        >
          Thank you for your purchase. Your order has been confirmed.
        </motion.p>

        {reference && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-100 rounded-xl p-6 mb-8"
          >
            <p className="text-sm font-bold text-gray-700 mb-2">TRANSACTION REFERENCE</p>
            <p className="text-lg font-mono text-primary-blue">{reference}</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <p className="text-gray-600">
            A confirmation email has been sent to your email address.
          </p>

          <div className="flex items-center justify-center gap-3 text-primary-blue">
            <FaSpinner className="animate-spin text-xl" />
            <p className="text-lg">
              Redirecting to books page in <span className="font-bold text-2xl">{countdown}</span> seconds...
            </p>
          </div>

          <button
            onClick={() => navigate('/books')}
            className="mt-6 bg-gradient-to-r from-brand-gold to-vibrant-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
          >
            Return to Books Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccessPage;
