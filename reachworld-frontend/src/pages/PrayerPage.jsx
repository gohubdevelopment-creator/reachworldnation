import { motion } from 'framer-motion';
import { FaPrayingHands, FaClock, FaCheckCircle, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const PrayerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    request: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prayer request submitted:', formData);
  };

  const prayerMiracles = [
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      category: 'Financial Breakthrough',
      request: 'Submitted prayer request for ₦5 million business debt',
      timeline: [
        { stage: 'Request Submitted', date: 'January 2024', status: 'completed' },
        { stage: 'Prayer Team Response', date: 'Same Day', status: 'completed' },
        { stage: 'Breakthrough', date: 'March 2024', status: 'completed' }
      ],
      outcome: 'Within 6 months, business revenue increased 400%. Debt completely cleared. Now employs 15 people and testifies of God\'s faithfulness.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      quote: '"The prayer team stood with me in faith. Within weeks, unexpected contracts came. God turned my crisis into a testimony!"'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      category: 'Deliverance',
      request: 'Desperate cry for freedom from 12-year addiction',
      timeline: [
        { stage: 'Crisis Call', date: 'June 2023', status: 'completed' },
        { stage: 'Emergency Prayer', date: 'Within 1 Hour', status: 'completed' },
        { stage: 'Total Deliverance', date: 'July 2023', status: 'completed' }
      ],
      outcome: 'Completely delivered from addiction. Marriage restored. Now leads recovery ministry reaching 200+ people annually with the same testimony.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      quote: '"I submitted my prayer request at midnight. By morning, the team had prayed. God broke chains that held me for 12 years!"'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      category: 'Business & Purpose',
      request: 'Prayer for direction and breakthrough in career',
      timeline: [
        { stage: 'Direction Needed', date: 'March 2022', status: 'completed' },
        { stage: 'Mentorship + Prayer', date: 'April 2022', status: 'completed' },
        { stage: 'Business Launch', date: 'September 2022', status: 'completed' }
      ],
      outcome: 'Discovered God-given business vision through prayer. Launched consulting firm now impacting 50+ African businesses with kingdom principles.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      quote: '"The prayer team didn\'t just pray—they connected me with mentorship. God opened doors I never knew existed!"'
    },
    {
      name: 'Pastor John Adeyemi',
      location: 'Ibadan, Nigeria',
      category: 'Ministry Growth',
      request: 'Prayer for church breakthrough and vision expansion',
      timeline: [
        { stage: 'Plateau Struggle', date: 'January 2021', status: 'completed' },
        { stage: 'Strategic Prayer', date: 'February 2021', status: 'completed' },
        { stage: 'Exponential Growth', date: 'Ongoing', status: 'completed' }
      ],
      outcome: 'Church grew from 30 to 2,000 members. Planted 15 daughter churches across Nigeria. Now impacting 10,000+ lives weekly.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
      quote: '"The prophetic prayers from the team shifted everything. God gave me a vision for nations, not just my neighborhood!"'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Miracle Testimony Showcase */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1600"
            alt="Prayer gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/95 via-royal-blue-900/90 to-deep-charcoal/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <FaPrayingHands className="text-7xl mx-auto mb-6 text-brand-gold" />
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              The Power of Prayer: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-vibrant-orange to-brand-gold-300">Real Stories</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              When you submit a prayer request, you're not alone—our team stands with you in faith
            </p>

            {/* Prayer Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '50K+', label: 'Prayers Answered' },
                { number: '24/7', label: 'Prayer Coverage' },
                { number: '<1hr', label: 'Response Time' },
                { number: '100+', label: 'Prayer Warriors' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-4xl font-black text-brand-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prayer Miracle Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Miracles Through Prayer</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Real people. Real prayers. Real breakthroughs. See how God answered when our team stood in faith.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {prayerMiracles.map((miracle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  {/* Story Header with Image */}
                  <div className="md:col-span-2">
                    <div className="relative group mb-6">
                      <img
                        src={miracle.image}
                        alt={miracle.name}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                        <FaCheckCircle /> Answered
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">{miracle.name}</h3>
                    <p className="text-gray-600 mb-4">{miracle.location}</p>
                    <span className="inline-block bg-electric-purple text-white px-4 py-2 rounded-full font-semibold text-sm">
                      {miracle.category}
                    </span>
                  </div>

                  {/* Prayer Journey Timeline */}
                  <div className="md:col-span-3">
                    <div className="mb-6">
                      <h4 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                        <FaPrayingHands className="text-electric-purple" /> Prayer Request:
                      </h4>
                      <p className="text-gray-700 italic">"{miracle.request}"</p>
                    </div>

                    {/* Timeline */}
                    <div className="mb-6 space-y-4">
                      {miracle.timeline.map((stage, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <FaCheckCircle className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-bold text-gray-900">{stage.stage}</p>
                              <span className="text-sm text-gray-500">{stage.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Outcome */}
                    <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 mb-6">
                      <h4 className="text-lg font-black text-green-600 mb-2">THE BREAKTHROUGH:</h4>
                      <p className="text-gray-900 font-semibold">{miracle.outcome}</p>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-brand-gold bg-brand-gold/5 pl-6 py-4 italic text-gray-700 text-lg">
                      {miracle.quote}
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Journey Process */}
      <section className="py-24 bg-gradient-to-br from-royal-blue via-electric-purple to-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">Your Prayer Journey</h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto">
              Here's what happens when you submit a prayer request to Reachworld Nation
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'You Submit',
                description: 'Share your prayer need with complete confidentiality',
                icon: <FaPrayingHands className="text-5xl" />,
                time: 'Right Now'
              },
              {
                step: '2',
                title: 'Team Prays',
                description: 'Our 24/7 prayer warriors receive and intercede immediately',
                icon: <FaHeart className="text-5xl" />,
                time: 'Within 1 Hour'
              },
              {
                step: '3',
                title: 'We Follow Up',
                description: 'Personal contact to encourage and stand with you in faith',
                icon: <FaClock className="text-5xl" />,
                time: '24-48 Hours'
              },
              {
                step: '4',
                title: 'God Answers',
                description: 'Watch as breakthrough manifests and testimony emerges',
                icon: <FaCheckCircle className="text-5xl" />,
                time: 'In God\'s Timing'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-brand-gold mb-4">{step.icon}</div>
                <div className="text-6xl font-black text-white/20 mb-2">{step.step}</div>
                <h3 className="text-2xl font-black mb-3">{step.title}</h3>
                <p className="text-white/80 mb-4">{step.description}</p>
                <span className="inline-block bg-brand-gold text-royal-blue px-4 py-2 rounded-full font-bold text-sm">
                  {step.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Prayer Request Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Submit Your Prayer Request</h2>
              <p className="text-2xl text-gray-600">
                Let our prayer team stand with you in faith for breakthrough
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-electric-purple focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-electric-purple focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-electric-purple focus:outline-none"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Prayer Category *</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-electric-purple focus:outline-none"
                  >
                    <option value="">Select category</option>
                    <option value="healing">Healing & Health</option>
                    <option value="financial">Financial Breakthrough</option>
                    <option value="family">Family & Relationships</option>
                    <option value="career">Career & Business</option>
                    <option value="spiritual">Spiritual Growth</option>
                    <option value="deliverance">Deliverance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Your Prayer Request *</label>
                <textarea
                  required
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-electric-purple focus:outline-none"
                  placeholder="Share your prayer need with us. All requests are kept confidential."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-electric-purple to-royal-blue text-white py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPrayingHands /> Submit Prayer Request
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Our prayer team will respond within 24 hours. You're not alone—we're standing with you in faith!
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Prayer Team Introduction */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Meet Your Prayer Warriors</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              These are the faithful believers standing with you in prayer—each with their own testimony
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                name: 'Rev. Elizabeth Okeke',
                role: 'Director of Prayer Ministry',
                testimony: 'God answered my desperate cry 15 years ago. Now I stand in the gap for others facing similar battles.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
                specialization: 'Family & Relationships'
              },
              {
                name: 'Minister Grace Adebayo',
                role: 'Intercessory Prayer Lead',
                testimony: 'From financial ruin to breakthrough—I know firsthand how prayer changes everything.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600',
                specialization: 'Financial Breakthrough'
              },
              {
                name: 'Pastor James Nwosu',
                role: 'Deliverance Prayer Coordinator',
                testimony: 'Delivered from addiction through prayer. Now I pray for others to experience the same freedom.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
                specialization: 'Deliverance & Freedom'
              }
            ].map((warrior, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={warrior.image}
                    alt={warrior.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-1">{warrior.name}</h3>
                    <p className="text-brand-gold font-semibold">{warrior.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">"{warrior.testimony}"</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Specializes in:</p>
                    <p className="font-bold text-electric-purple">{warrior.specialization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-600 mb-6">
              Plus 100+ prayer warriors committed to interceding for you 24/7
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-purple to-royal-blue text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Your Breakthrough Starts with Prayer</h2>
            <p className="text-xl text-white/90 mb-8">
              Don't face your battle alone. Let our prayer team stand with you in faith for the miracle you need.
            </p>
            <button className="bg-brand-gold text-royal-blue px-10 py-5 rounded-xl font-black text-xl hover:bg-white transition-all duration-300 shadow-2xl">
              Submit Prayer Request Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrayerPage;
