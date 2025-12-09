import { motion } from 'framer-motion';
import { FaHandsHelping, FaCrown, FaDollarSign, FaGlobe } from 'react-icons/fa';

const PartnerPage = () => {
  const partnershipLevels = [
    {
      name: 'Kingdom Partner',
      amount: '$50/month',
      icon: '🤝',
      benefits: ['Monthly newsletter', 'Prayer support', 'Exclusive updates', 'Digital resources']
    },
    {
      name: 'Ambassador',
      amount: '$100/month',
      icon: '⭐',
      benefits: ['All Kingdom Partner benefits', 'Special recognition', 'Event invitations', 'Leadership resources', 'Quarterly calls with leadership']
    },
    {
      name: 'Global Influencer',
      amount: '$250+/month',
      icon: '👑',
      benefits: ['All Ambassador benefits', 'VIP conference access', 'Personal mentorship session', 'Featured on website', 'Strategic partnership opportunities']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-gold via-vibrant-orange to-holy-fire text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FaHandsHelping className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">Partner With Us</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Join us in transforming nations and changing lives globally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '150+', label: 'Nations Reached', icon: '🌍' },
              { number: '2M+', label: 'Lives Transformed', icon: '✨' },
              { number: '500K+', label: 'Books Distributed', icon: '📚' },
              { number: '5000+', label: 'Churches Planted', icon: '⛪' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-black text-royal-blue mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-4">Partnership Levels</h2>
            <p className="text-xl text-gray-600">Choose how you want to make an impact</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnershipLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-7xl text-center mb-4">{level.icon}</div>
                <h3 className="text-2xl font-black text-royal-blue text-center mb-2">{level.name}</h3>
                <div className="text-3xl font-black text-brand-gold text-center mb-6">{level.amount}</div>
                <ul className="space-y-3 mb-8">
                  {level.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  Become a Partner
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Giving */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <FaDollarSign className="text-6xl text-brand-gold mx-auto mb-4" />
              <h2 className="text-4xl font-black text-royal-blue mb-4">One-Time Donation</h2>
              <p className="text-xl text-gray-600">Make a one-time gift to support our mission</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {['$25', '$50', '$100', '$250', '$500', '$1000', 'Custom'].map((amount) => (
                  <button
                    key={amount}
                    className="bg-white border-2 border-gray-200 py-4 rounded-xl font-bold hover:border-royal-blue hover:bg-royal-blue hover:text-white transition-all"
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <button className="w-full bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all">
                Donate Now
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                Secure payment via Flutterwave, Paystack, PayPal & Stripe
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ambassador Program */}
      <section className="py-20 bg-gradient-to-br from-royal-blue to-electric-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <FaCrown className="text-7xl mx-auto mb-6" />
              <h2 className="text-4xl font-black mb-4">Become an Ambassador</h2>
              <p className="text-xl text-white/90">
                Represent ReachworldNation in your nation and sphere of influence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Responsibilities</h3>
                <ul className="space-y-2">
                  {['Promote ministry teachings', 'Organize local events', 'Recruit partners', 'Share testimonies'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {['Official recognition', 'Exclusive training', 'Leadership development', 'Networking opportunities'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-brand-gold text-royal-blue px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-lg">
                Apply to Become an Ambassador
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Where Your Gift Goes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-4">Where Your Gift Goes</h2>
            <p className="text-xl text-gray-600">Every dollar makes a difference</p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { percentage: '40%', category: 'Global Missions', icon: '🌍', color: 'from-royal-blue to-electric-purple' },
              { percentage: '30%', category: 'Free Books', icon: '📚', color: 'from-brand-gold to-vibrant-orange' },
              { percentage: '20%', category: 'Media Production', icon: '🎥', color: 'from-holy-fire to-vibrant-orange' },
              { percentage: '10%', category: 'Operations', icon: '⚙️', color: 'from-sky-blue to-electric-purple' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-white text-center shadow-lg`}
              >
                <div className="text-6xl mb-3">{item.icon}</div>
                <div className="text-4xl font-black mb-2">{item.percentage}</div>
                <div className="text-lg font-semibold">{item.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
