import { motion } from 'framer-motion';
import { FaPrayingHands, FaHeart, FaCalendar, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const PrayerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    request: '',
    urgent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prayer request submitted:', formData);
    // Handle form submission
  };

  const testimonies = [
    {
      name: 'Sarah Johnson',
      location: 'Lagos, Nigeria',
      testimony: 'After ReachworldNation prayed for my business, I experienced a supernatural turnaround. Sales increased by 300% in 3 months!',
      date: 'March 2025',
      category: 'Business Breakthrough'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      testimony: 'The mentorship program transformed my leadership skills. I was promoted to CEO within 6 months of our sessions.',
      date: 'February 2025',
      category: 'Career & Purpose'
    },
    {
      name: 'Grace Okonkwo',
      location: 'London, UK',
      testimony: 'After 8 years of waiting, God blessed me with twins! The prayers and faith declarations were powerful.',
      date: 'January 2025',
      category: 'Family & Relationships'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-purple via-royal-blue to-sky-blue text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FaPrayingHands className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">Prayer & Counselling</h1>
            <p className="text-xl md:text-2xl text-white/90">
              We believe in the power of prayer and are here to stand with you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black text-royal-blue mb-4">Submit Your Prayer Request</h2>
              <p className="text-xl text-gray-600">
                Let us join our faith with yours for a breakthrough
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Prayer Category *</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                  >
                    <option value="">Select a category</option>
                    <option value="healing">Healing & Health</option>
                    <option value="financial">Financial Breakthrough</option>
                    <option value="family">Family & Relationships</option>
                    <option value="career">Career & Purpose</option>
                    <option value="spiritual">Spiritual Growth</option>
                    <option value="deliverance">Deliverance & Freedom</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Prayer Request */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Your Prayer Request *</label>
                  <textarea
                    required
                    value={formData.request}
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="Share your prayer request with us..."
                  ></textarea>
                </div>

                {/* Urgent Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                    className="w-5 h-5 text-royal-blue"
                  />
                  <label htmlFor="urgent" className="ml-3 text-gray-700 font-semibold">
                    This is an urgent prayer request
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all"
                >
                  Submit Prayer Request
                </button>

                <p className="text-center text-gray-500 text-sm">
                  Your request will be prayed over by our prayer team within 24 hours
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* One-on-One Mentorship */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <FaCalendar className="text-6xl text-brand-gold mx-auto mb-4" />
              <h2 className="text-4xl font-black text-royal-blue mb-4">Book One-on-One Mentorship</h2>
              <p className="text-xl text-gray-600">
                Personal guidance from our leadership team for your spiritual and personal growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-4">What You'll Get</h3>
                <ul className="space-y-4">
                  {[
                    'Personalized spiritual guidance',
                    'Life purpose discovery sessions',
                    'Leadership development',
                    'Business and career mentorship',
                    'Accountability and support',
                    'Prayer and prophetic direction'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-royal-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-brand-gold to-vibrant-orange p-8 rounded-2xl text-white shadow-lg"
              >
                <h3 className="text-2xl font-black mb-4">Session Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="font-semibold">Duration:</span>
                    <span>60 minutes</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="font-semibold">Format:</span>
                    <span>Video Call / Phone</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="font-semibold">Availability:</span>
                    <span>Flexible scheduling</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Follow-up:</span>
                    <span>Email support included</span>
                  </div>
                </div>
                <button className="w-full bg-white text-brand-gold py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all">
                  Schedule Your Session
                </button>
                <p className="text-center text-white/80 text-sm mt-4">
                  Limited slots available each month
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies Wall */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-4">Testimonies of Transformation</h2>
            <p className="text-xl text-gray-600">
              See how God is moving through prayer and mentorship
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {testimonies.map((testimony, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimony.testimony}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimony.name}</p>
                  <p className="text-sm text-gray-500">{testimony.location}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-royal-blue text-white px-3 py-1 rounded-full">
                      {testimony.category}
                    </span>
                    <span className="text-xs text-gray-400">{testimony.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Share Testimony CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="bg-gradient-to-r from-holy-fire to-vibrant-orange text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-3 mx-auto">
              <FaHeart />
              Share Your Testimony
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-royal-blue to-electric-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Your Breakthrough is Here</h2>
            <p className="text-xl text-white/90 mb-8">
              Don't go through life's challenges alone. Let us stand in faith with you for your miracle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-royal-blue px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
                Submit Prayer Request
              </button>
              <button className="bg-brand-gold text-white px-8 py-4 rounded-xl font-bold hover:bg-vibrant-orange transition-all">
                Book Mentorship
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrayerPage;
