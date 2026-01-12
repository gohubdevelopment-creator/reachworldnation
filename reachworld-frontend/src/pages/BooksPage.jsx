import { motion } from 'framer-motion';
import { FaBook, FaDownload, FaShoppingCart, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import APIService from '../services/api';

const BooksPage = () => {
  const [processingBookIndex, setProcessingBookIndex] = useState(null);
  const [error, setError] = useState(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    country: 'Nigeria',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openPurchaseModal = (bookIndex) => {
    setSelectedBookIndex(bookIndex);
    setShowPurchaseModal(true);
    setError(null);
  };

  // Handle book purchase with Flutterwave
  const handleBookPurchase = async (e) => {
    e.preventDefault();
    setProcessingBookIndex(selectedBookIndex);
    setError(null);

    try {
      // Product IDs: Digital=1,3,5... Physical=2,4,6...
      const productId = (selectedBookIndex * 2) + 2; // Maps to physical book IDs

      const response = await APIService.createOrder({
        items: [{ product_id: productId, quantity: 1 }],
        email: formData.email,
        fullName: formData.fullName,
        phone: formData.phone,
        shippingAddress: {
          shipping_address_line1: formData.address,
          shipping_city: formData.city,
          shipping_country: formData.country,
        },
        currency: 'NGN',
        gateway: 'flutterwave', // Use Flutterwave for redirect-based payment
        callbackUrl: `${window.location.origin}/payment-success`,
      });

      // Redirect to Flutterwave payment page
      if (response.authorization_url) {
        window.location.href = response.authorization_url;
      } else {
        throw new Error('Payment initialization failed');
      }
    } catch (err) {
      setError(err.message);
      setProcessingBookIndex(null);
    }
  };

  const readerStories = [
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      bookRead: 'The Kingdom Mindset',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      before: 'Business failing, ₦5 million in debt, no hope',
      after: 'Applied kingdom principles from the book. Revenue increased 400% in 6 months. Now employs 15 people.',
      quote: '"This book didn\'t just change my mindset—it transformed my entire business model. Every chapter was a breakthrough!"'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      bookRead: 'Breaking Free',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      before: '12 years of addiction, broken marriage, lost career',
      after: 'The book\'s teachings on deliverance set him free. Now leads recovery ministry reaching 200+ annually.',
      quote: '"I read it in one night. By morning, chains that held me for 12 years were broken. This book saved my life!"'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      bookRead: 'Divine Purpose Unlocked',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      before: 'Dead-end job, living paycheck to paycheck, no vision',
      after: 'Discovered her God-given purpose. Started consulting firm now impacting 50+ African businesses.',
      quote: '"Chapter 3 on \'Finding Your Kingdom Assignment\' changed everything. I finally understood why I was created!"'
    }
  ];

  const books = [
    {
      title: 'The Kingdom Mindset',
      description: 'Transform your thinking from earthly limitations to heavenly possibilities. Learn to operate from God\'s perspective in business, relationships, and life.',
      gradient: 'from-brand-gold to-vibrant-orange',
      category: 'Mindset',
      pages: 280,
      transformed: '50K+ Readers',
      keyBenefit: 'Break mental barriers and unlock divine strategies'
    },
    {
      title: 'Breaking Free',
      description: 'Complete deliverance from addiction, bondage, and spiritual strongholds. Discover the power of the Holy Spirit to set captives free.',
      gradient: 'from-holy-fire to-vibrant-orange',
      category: 'Deliverance',
      pages: 210,
      transformed: '30K+ Readers',
      keyBenefit: 'Experience instant freedom from chains'
    },
    {
      title: 'Divine Purpose Unlocked',
      description: 'Stop wandering aimlessly. This book reveals God\'s specific calling for your life and how to walk in it with confidence and authority.',
      gradient: 'from-royal-blue to-electric-purple',
      category: 'Purpose',
      pages: 320,
      transformed: '75K+ Readers',
      keyBenefit: 'Discover your unique kingdom assignment'
    },
    {
      title: 'Faith That Moves Mountains',
      description: 'Practical steps to activate supernatural faith. Learn how to pray, declare, and receive breakthrough in impossible situations.',
      gradient: 'from-electric-purple to-sky-blue',
      category: 'Faith',
      pages: 250,
      transformed: '100K+ Readers',
      keyBenefit: 'See miracles manifest in your circumstances'
    },
    {
      title: 'Kingdom Business Mastery',
      description: 'God\'s blueprint for marketplace success. Biblical principles for building businesses that honor God and impact nations.',
      gradient: 'from-vibrant-orange to-brand-gold',
      category: 'Business',
      pages: 360,
      transformed: '40K+ Readers',
      keyBenefit: 'Build profitable, God-glorifying enterprises'
    },
    {
      title: 'The Power of Declaration',
      description: 'Words create worlds. Master the art of prophetic declarations that shift atmospheres and manifest divine promises.',
      gradient: 'from-sky-blue to-royal-blue',
      category: 'Spiritual Warfare',
      pages: 190,
      transformed: '60K+ Readers',
      keyBenefit: 'Speak life and watch transformation happen'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600"
            alt="Books and reading"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/95 via-vibrant-orange/90 to-deep-charcoal/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <FaBook className="text-7xl mx-auto mb-6" />
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Books That <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold-300 to-white">Transform Lives</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              500,000+ books distributed. Thousands of testimonies. Read the book that will change your story.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '500K+', label: 'Books Distributed' },
                { number: '50+', label: 'Titles Published' },
                { number: '150+', label: 'Nations Reached' },
                { number: '100K+', label: 'Lives Changed' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reader Transformation Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Books That Changed Lives</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Real readers. Real transformations. See what happened when they applied what they read.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {readerStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  <div className="md:col-span-2">
                    <div className="relative group mb-6">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                        <FaCheckCircle /> Transformed
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">{story.name}</h3>
                    <p className="text-gray-600 mb-4">{story.location}</p>
                    <span className="inline-block bg-brand-gold text-white px-4 py-2 rounded-full font-semibold text-sm">
                      Read: {story.bookRead}
                    </span>
                  </div>

                  <div className="md:col-span-3">
                    <div className="mb-6">
                      <h4 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                        <FaBook className="text-brand-gold" /> The Transformation:
                      </h4>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-20 text-sm font-bold text-red-600 uppercase">Before:</div>
                        <p className="text-gray-700 flex-1">{story.before}</p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-20 text-sm font-bold text-green-600 uppercase">After:</div>
                        <p className="text-gray-900 font-semibold flex-1">{story.after}</p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-brand-gold bg-brand-gold/5 pl-6 py-4 italic text-gray-700 text-lg mb-6">
                      {story.quote}
                    </blockquote>

                    <button className="bg-gradient-to-r from-brand-gold to-vibrant-orange text-white px-8 py-4 rounded-xl font-black hover:shadow-2xl transition-all flex items-center gap-2">
                      <FaDownload /> Download "{story.bookRead}" Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Library */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Transformation Library</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Each book is a journey from where you are to where God is calling you
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className={`bg-gradient-to-br ${book.gradient} h-64 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
                    </div>
                    <FaBook className="text-8xl text-white relative z-10 group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <span className="inline-block bg-royal-blue text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 self-start">
                      {book.category}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">{book.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{book.description}</p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Pages:</span>
                        <span className="font-bold text-gray-900">{book.pages}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2">
                        <div className="text-sm text-green-600 font-bold">{book.transformed}</div>
                        <div className="text-xs text-gray-500">Lives Transformed</div>
                      </div>
                    </div>

                    <div className="bg-brand-gold/10 rounded-xl p-3 mb-4">
                      <p className="text-sm font-semibold text-gray-900 text-center">{book.keyBenefit}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-gradient-to-r from-royal-blue to-electric-purple text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <FaDownload className="text-sm" /> Free
                      </button>
                      <button
                        onClick={() => openPurchaseModal(index)}
                        className="bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <FaShoppingCart className="text-sm" /> Buy
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author's Heart */}
      <section className="py-24 bg-gradient-to-br from-royal-blue via-electric-purple to-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Pastor David S. Okeke"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black mb-6">Why I Write</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                "Every book I write comes from a personal battle I've fought and won. I don't write theory—I write
                transformation. When I was financially broken, God taught me kingdom mindset. When I battled doubt,
                He showed me faith that moves mountains."
              </p>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                "These books aren't just information. They're impartation. They carry the anointing that broke chains
                in my life and will break chains in yours. Read them with expectation—your breakthrough is in these pages."
              </p>
              <p className="text-2xl font-black text-brand-gold">
                - Pastor David S. Okeke
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-royal-blue mb-6">Your Transformation Starts with One Book</h2>
            <p className="text-xl text-gray-600 mb-8">
              Download any book free or order physical copies. Your breakthrough is waiting in these pages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-royal-blue to-electric-purple text-white px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all">
                Browse All Books
              </button>
              <button className="bg-gradient-to-r from-brand-gold to-vibrant-orange text-white px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all">
                Order Physical Copies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Purchase Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-gray-900">
                  Buy: {selectedBookIndex !== null && books[selectedBookIndex]?.title}
                </h3>
                <button
                  onClick={() => {
                    setShowPurchaseModal(false);
                    setProcessingBookIndex(null);
                    setError(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleBookPurchase} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="e.g. +234 801 234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Shipping Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    >
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={processingBookIndex !== null}
                    className="w-full bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-4 rounded-xl font-black text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processingBookIndex !== null ? 'Processing...' : 'Proceed to Payment'}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  You will be redirected to Flutterwave to complete your payment securely.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BooksPage;
