import { motion } from 'framer-motion';
import { FaUsers, FaGlobe, FaHandshake, FaCrown } from 'react-icons/fa';
import { useState } from 'react';

const CommunityPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    membershipType: '',
    interests: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Community registration:', formData);
  };

  const chapters = [
    { country: 'Nigeria', members: '15,000+', coordinator: 'Pastor John Doe', icon: '🇳🇬' },
    { country: 'United Kingdom', members: '3,500+', coordinator: 'Rev. Sarah Smith', icon: '🇬🇧' },
    { country: 'United States', members: '5,200+', coordinator: 'Minister David Brown', icon: '🇺🇸' },
    { country: 'Ghana', members: '4,800+', coordinator: 'Pastor Grace Mensah', icon: '🇬🇭' },
    { country: 'South Africa', members: '2,100+', coordinator: 'Rev. Michael van Wyk', icon: '🇿🇦' },
    { country: 'Canada', members: '1,800+', coordinator: 'Minister Lisa Chen', icon: '🇨🇦' }
  ];

  const benefits = [
    {
      title: 'Exclusive Community Access',
      description: 'Join our private community portal with members worldwide',
      icon: '👥',
      color: 'from-royal-blue to-electric-purple'
    },
    {
      title: 'Member ID & Recognition',
      description: 'Get your official ReachworldNation member ID and certificate',
      icon: '🎫',
      color: 'from-brand-gold to-vibrant-orange'
    },
    {
      title: 'Prayer Groups',
      description: 'Connect with prayer groups in your region for spiritual support',
      icon: '🙏',
      color: 'from-electric-purple to-sky-blue'
    },
    {
      title: 'Exclusive Resources',
      description: 'Access members-only teachings, books, and training materials',
      icon: '📚',
      color: 'from-holy-fire to-vibrant-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue via-electric-purple to-vibrant-orange text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FaUsers className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">Join ReachworldNation</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Become part of a global community transforming nations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              { number: '2M+', label: 'Global Members', icon: '👥' },
              { number: '150+', label: 'Nations', icon: '🌍' },
              { number: '5K+', label: 'Prayer Groups', icon: '🙏' },
              { number: '1K+', label: 'Ambassadors', icon: '⭐' }
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

      {/* Member Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-4">Member Benefits</h2>
            <p className="text-xl text-gray-600">What you get as a community member</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${benefit.color} p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all`}
              >
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black text-royal-blue mb-4">Register Now</h2>
              <p className="text-xl text-gray-600">Fill out the form to join our global community</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="john@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Country *</label>
                  <select
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                  >
                    <option value="">Select your country</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="ghana">Ghana</option>
                    <option value="south-africa">South Africa</option>
                    <option value="canada">Canada</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Membership Type *</label>
                <select
                  required
                  value={formData.membershipType}
                  onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                >
                  <option value="">Select membership type</option>
                  <option value="member">Community Member</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="prayer-warrior">Prayer Warrior</option>
                  <option value="ambassador">Ambassador (Application)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-3">Areas of Interest (Select all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Prayer Ministry', 'Outreach Programs', 'Media Ministry', 'Youth Ministry', 'Leadership Training', 'Community Service'].map((interest) => (
                    <label key={interest} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-royal-blue"
                      />
                      <span className="text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all"
              >
                Join Community
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                You'll receive your member ID and welcome package via email
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Global Chapters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaGlobe className="text-6xl text-royal-blue mx-auto mb-4" />
            <h2 className="text-4xl font-black text-royal-blue mb-4">Our Global Chapters</h2>
            <p className="text-xl text-gray-600">Find a ReachworldNation community near you</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-7xl text-center mb-4">{chapter.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 text-center mb-2">{chapter.country}</h3>
                <div className="text-center space-y-2">
                  <p className="text-3xl font-black text-royal-blue">{chapter.members}</p>
                  <p className="text-sm text-gray-500">Members</p>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Coordinator:</p>
                    <p className="font-semibold text-gray-900">{chapter.coordinator}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-20 bg-gradient-to-br from-royal-blue to-electric-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <FaHandshake className="text-7xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">Become a Volunteer</h2>
            <p className="text-xl text-white/90 mb-8">
              Use your skills, talents, and time to make a difference in nations. Join our volunteer team today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-gold text-royal-blue px-8 py-4 rounded-xl font-black hover:bg-white transition-all shadow-lg">
                Register as Volunteer
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-royal-blue transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
