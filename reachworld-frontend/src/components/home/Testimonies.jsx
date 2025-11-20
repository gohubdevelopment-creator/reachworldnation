import { motion } from 'framer-motion';
import { FaHeart, FaPrayingHands, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const Testimonies = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', testimony: '' });

  const testimonies = [
    {
      name: "Grace Okon",
      location: "Lagos, Nigeria",
      date: "2 days ago",
      testimony: "After years of struggling with anxiety, I attended the Divinity Life Conference. The message on divine peace transformed my life. Today, I walk in complete peace and joy!",
      category: "Healing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Emmanuel Adeyemi",
      location: "Abuja, Nigeria",
      date: "5 days ago",
      testimony: "God used Pastor David's teaching on financial stewardship to break me free from debt. Within 6 months, all my debts were cleared. Glory to God!",
      category: "Breakthrough",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Blessing Nwosu",
      location: "Port Harcourt, Nigeria",
      date: "1 week ago",
      testimony: "I was diagnosed with a chronic illness. During the prayer meeting, I felt God's healing power. My doctors confirmed I'm completely healed!",
      category: "Miracle",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (Phase 2 - connect to backend)
    console.log('Testimony submitted:', formData);
    alert('Thank you for sharing your testimony! It will be reviewed and published soon.');
    setShowSubmitForm(false);
    setFormData({ name: '', email: '', testimony: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-brand-gold/10 text-royal-blue px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Testimonies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-4">
            Lives Being Transformed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how God is moving powerfully through ReachworldNation ministry
          </p>
        </motion.div>

        {/* Testimonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonies.map((testimony, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  testimony.category === 'Miracle' ? 'bg-purple-100 text-purple-700' :
                  testimony.category === 'Healing' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {testimony.category}
                </span>
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
              </div>

              {/* Quote Icon */}
              <FaQuoteLeft className="text-brand-gold text-3xl mb-4 opacity-50" />

              {/* Testimony Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimony.testimony}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <img
                  src={testimony.image}
                  alt={testimony.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-deep-charcoal">{testimony.name}</h4>
                  <p className="text-sm text-gray-500">{testimony.location}</p>
                </div>
                <span className="text-xs text-gray-400">{testimony.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Share Your Testimony Section */}
        <motion.div
          className="bg-gradient-to-r from-royal-blue to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaPrayingHands className="text-5xl text-brand-gold mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Has God Done Something Amazing in Your Life?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Share your testimony and inspire others. Your story could be the encouragement someone needs today!
          </p>

          {!showSubmitForm ? (
            <button
              onClick={() => setShowSubmitForm(true)}
              className="bg-brand-gold text-deep-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 inline-flex items-center space-x-2"
            >
              <FaHeart />
              <span>Share Your Testimony</span>
            </button>
          ) : (
            <motion.form
              className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-brand-gold"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-brand-gold"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Testimony</label>
                  <textarea
                    required
                    value={formData.testimony}
                    onChange={(e) => setFormData({...formData, testimony: e.target.value})}
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-brand-gold resize-none"
                    placeholder="Share your testimony... What did God do? How has your life changed?"
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-brand-gold text-deep-charcoal px-6 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300"
                  >
                    Submit Testimony
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSubmitForm(false)}
                    className="px-6 py-3 rounded-lg font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.form>
          )}
        </motion.div>

        {/* View More */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="/testimonies"
            className="inline-block text-royal-blue font-semibold text-lg hover:text-brand-gold transition-colors duration-300"
          >
            View All Testimonies →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonies;
