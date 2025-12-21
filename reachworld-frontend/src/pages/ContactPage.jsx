import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  // Stories of people we've helped through contact
  const helpStories = [
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      contactReason: 'Prayer request for failing business',
      contacted: 'January 2024',
      response: 'Team prayed within 2 hours, Pastor David sent prophetic encouragement',
      outcome: 'Business transformed, revenue increased 400%, debt cleared',
      quote: 'I contacted in desperation. The team\'s immediate prayer and Pastor David\'s personal response changed everything.',
      gradient: 'from-primary-gold to-primary-gold-light'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      contactReason: 'Crisis - battling addiction, needed help',
      contacted: 'March 2023',
      response: 'Care team connected him to mentorship program and prayer warriors',
      outcome: 'Free from addiction, marriage restored, now leads recovery ministry',
      quote: 'That contact form saved my life. Within hours, I had a prayer team and mentor walking with me.',
      gradient: 'from-accent-purple to-primary-blue'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      contactReason: 'Seeking purpose and calling guidance',
      contacted: 'June 2024',
      response: 'Invited to mentorship session, received career prophecy',
      outcome: 'Started consulting firm, now impacting 50+ African businesses',
      quote: 'I reached out confused about my purpose. They responded with a clear path that unlocked my calling.',
      gradient: 'from-accent-red to-primary-gold'
    }
  ];

  // Care team members with their own testimonies
  const careTeam = [
    {
      name: 'Minister Grace Adebayo',
      role: 'Care Team Lead',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
      story: 'Former lost soul, now helping thousands find their way',
      commitment: 'Personally responds to urgent prayer requests within hours'
    },
    {
      name: 'Pastor Michael Obi',
      role: 'Mentorship Coordinator',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      story: 'Transformed from emptiness to purpose through this ministry',
      commitment: 'Connects seekers with life-changing mentorship programs'
    },
    {
      name: 'Rev. Elizabeth Okeke',
      role: 'Women\'s Ministry Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      story: 'Found her calling through this ministry, now empowering thousands',
      commitment: 'Dedicated to helping women discover their divine purpose'
    }
  ];

  const offices = [
    {
      country: 'Nigeria (Headquarters)',
      address: '123 Kingdom Avenue, Victoria Island, Lagos, Nigeria',
      phone: '+234 XXX XXX XXXX',
      email: 'nigeria@reachworldnation.org',
      image: 'https://images.unsplash.com/photo-1583948305806-9f827c78f1e2?w=800',
      impact: '50,000+ lives prayed for annually',
      story: 'Our flagship office where it all began—transforming Lagos one prayer at a time'
    },
    {
      country: 'United Kingdom',
      address: '45 Revelation Street, London, UK',
      phone: '+44 XXX XXX XXXX',
      email: 'uk@reachworldnation.org',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
      impact: '15,000+ European believers connected',
      story: 'Awakening Europe through prayer, teaching, and kingdom community'
    },
    {
      country: 'United States',
      address: '789 Divine Boulevard, Houston, TX, USA',
      phone: '+1 XXX XXX XXXX',
      email: 'usa@reachworldnation.org',
      image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800',
      impact: '12,000+ American lives transformed',
      story: 'Bringing revival to America through powerful prayer and mentorship'
    },
    {
      country: 'Ghana',
      address: '56 Glory Road, Accra, Ghana',
      phone: '+233 XXX XXX XXXX',
      email: 'ghana@reachworldnation.org',
      image: 'https://images.unsplash.com/photo-1531656875849-b8e6ee9c3c3c?w=800',
      impact: '8,000+ Ghanaians experiencing breakthrough',
      story: 'Transforming West Africa through kingdom principles and divine encounters'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600"
            alt="Communication and connection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 via-primary-blue-dark/85 to-primary-blue/90"></div>
          {/* Subtle accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-gold/10 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <FaEnvelope className="text-7xl mx-auto mb-6" />
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              You're Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-primary-gold-light to-primary-gold animate-glow">Alone</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Thousands have contacted us in crisis and found transformation—your breakthrough starts here
            </p>

            {/* Contact response stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '<1hr', label: 'Response Time' },
                { number: '24/7', label: 'Prayer Coverage' },
                { number: '100K+', label: 'Prayers Answered' },
                { number: '150+', label: 'Nations Served' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-4xl font-black text-primary-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories of People We've Helped */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-blue mb-6">Here's How We Helped</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Real people who contacted us in their darkest moments and found hope, healing, and transformation
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {helpStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  <div className="md:col-span-2">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
                    />
                    <div className="bg-gradient-to-r from-primary-blue to-accent-purple text-white p-6 rounded-2xl">
                      <h3 className="text-2xl font-black mb-2">{story.name}</h3>
                      <p className="text-white/80 mb-4">{story.location}</p>
                      <div className="pt-4 border-t border-white/30">
                        <p className="text-sm font-semibold text-white/70 mb-1">CONTACTED ABOUT</p>
                        <p className="text-lg font-bold mb-1">{story.contactReason}</p>
                        <p className="text-sm text-white/60">{story.contacted}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 text-sm font-bold text-yellow-600 uppercase pt-1">Response:</div>
                        <p className="text-lg text-gray-800 font-semibold flex-1">{story.response}</p>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 text-sm font-bold text-green-600 uppercase pt-1">Outcome:</div>
                        <div className="flex-1">
                          <p className="text-lg text-gray-900 font-bold mb-3">{story.outcome}</p>
                          <div className="flex items-center gap-2 text-green-600">
                            <FaCheckCircle />
                            <span className="text-sm font-semibold">Complete Transformation Through Care</span>
                          </div>
                        </div>
                      </div>

                      <div className={`bg-gradient-to-r ${story.gradient} p-6 rounded-2xl text-white mt-8`}>
                        <FaQuoteLeft className="text-3xl text-white/50 mb-3" />
                        <blockquote className="text-xl italic leading-relaxed">
                          {story.quote}
                        </blockquote>
                        <p className="text-right mt-4 font-bold">— {story.name}</p>
                      </div>

                      <button className="w-full bg-gradient-to-r from-primary-blue to-accent-purple text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                        <FaEnvelope />
                        Contact Us & Experience Your Own Breakthrough
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Team Introduction */}
      <section className="py-24 bg-gradient-to-br from-primary-blue via-accent-purple to-neutral-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">Meet Your Care Team</h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto">
              Transformed people helping transform others—each team member carries their own testimony of God's power
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            {careTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all border border-white/20"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                  <p className="text-primary-gold font-semibold mb-4">{member.role}</p>
                  <p className="text-white/90 mb-4 italic">"{member.story}"</p>
                  <div className="pt-4 border-t border-white/30">
                    <p className="text-sm font-bold text-white/70 mb-2">COMMITMENT:</p>
                    <p className="text-white">{member.commitment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <p className="text-2xl mb-4">
              <span className="font-black text-primary-gold">Pastor David personally reads</span> every urgent prayer request
            </p>
            <p className="text-xl text-white/80">
              You're not just filling out a form—you're connecting with people who genuinely care about your transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaEnvelope,
                title: 'Email Us',
                content: 'info@reachworldnation.org',
                subContent: 'support@reachworldnation.org',
                color: 'from-primary-blue to-accent-purple'
              },
              {
                icon: FaPhone,
                title: 'Call Us',
                content: '+234 XXX XXX XXXX',
                subContent: 'Mon-Fri: 9AM - 5PM WAT',
                color: 'from-primary-gold to-primary-gold-light'
              },
              {
                icon: FaWhatsapp,
                title: 'WhatsApp',
                content: '+234 XXX XXX XXXX',
                subContent: '24/7 Quick Response',
                color: 'from-green-500 to-green-600'
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${method.color} p-8 rounded-2xl text-white text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
              >
                <method.icon className="text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-3">{method.title}</h3>
                <p className="text-lg font-semibold mb-1">{method.content}</p>
                <p className="text-white/80 text-sm">{method.subContent}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-primary-blue mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:outline-none"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:outline-none"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:outline-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-blue to-accent-purple text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all"
                >
                  Send Message
                </button>

                <p className="text-center text-gray-500 text-sm">
                  We typically respond within 24 hours. Urgent prayer requests receive immediate attention.
                </p>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-black text-primary-blue mb-6">We're Here to Help</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you have questions about our ministry, need prayer support, want to partner with us,
                  or simply want to connect, we're here for you.
                </p>
                <p className="text-lg text-gray-700">
                  Our care team is committed to responding with genuine love, support, and prayer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: FaFacebook, color: 'bg-blue-600' },
                    { icon: FaTwitter, color: 'bg-sky-500' },
                    { icon: FaInstagram, color: 'bg-pink-600' },
                    { icon: FaYoutube, color: 'bg-red-600' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`${social.color} text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform`}
                    >
                      <social.icon className="text-2xl" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Subscribe to Newsletter</h3>
                <p className="text-gray-600 mb-4">Get weekly inspiration and updates</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:outline-none"
                  />
                  <button className="bg-primary-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-accent-purple transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices with Community Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-primary-blue mb-4">Our Global Offices</h2>
            <p className="text-xl text-gray-600">Find us in these locations—each transforming their nation</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="relative h-64">
                  <img
                    src={office.image}
                    alt={office.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl font-black text-white mb-2">{office.country}</h3>
                    <p className="text-primary-gold font-bold text-lg">{office.impact}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">"{office.story}"</p>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start gap-2">
                      <FaMapMarkerAlt className="mt-1 text-primary-blue flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-primary-blue" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-primary-blue" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent-red to-primary-gold text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Your Breakthrough Is One Message Away</h2>
            <p className="text-xl text-white/90 mb-8">
              Don't wait—reach out now and let us stand with you in prayer for your transformation
            </p>
            <button className="bg-white text-accent-red px-10 py-5 rounded-xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
