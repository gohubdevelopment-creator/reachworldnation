import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
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

  const offices = [
    {
      country: 'Nigeria (Headquarters)',
      address: '123 Kingdom Avenue, Victoria Island, Lagos, Nigeria',
      phone: '+234 XXX XXX XXXX',
      email: 'nigeria@reachworldnation.org',
      icon: '🇳🇬'
    },
    {
      country: 'United Kingdom',
      address: '45 Revelation Street, London, UK',
      phone: '+44 XXX XXX XXXX',
      email: 'uk@reachworldnation.org',
      icon: '🇬🇧'
    },
    {
      country: 'United States',
      address: '789 Divine Boulevard, Houston, TX, USA',
      phone: '+1 XXX XXX XXXX',
      email: 'usa@reachworldnation.org',
      icon: '🇺🇸'
    },
    {
      country: 'Ghana',
      address: '56 Glory Road, Accra, Ghana',
      phone: '+233 XXX XXX XXXX',
      email: 'ghana@reachworldnation.org',
      icon: '🇬🇭'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue via-electric-purple to-sky-blue text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FaEnvelope className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-white/90">
              We'd love to hear from you. Reach out to us anytime!
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
                color: 'from-royal-blue to-electric-purple'
              },
              {
                icon: FaPhone,
                title: 'Call Us',
                content: '+234 XXX XXX XXXX',
                subContent: 'Mon-Fri: 9AM - 5PM WAT',
                color: 'from-brand-gold to-vibrant-orange'
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
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-royal-blue mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-black text-royal-blue mb-6">We're Here to Help</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you have questions about our ministry, need prayer support, want to partner with us,
                  or simply want to connect, we're here for you.
                </p>
                <p className="text-lg text-gray-700">
                  Our team typically responds within 24 hours during business days.
                </p>
              </div>

              {/* Social Media */}
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

              {/* Newsletter */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Subscribe to Newsletter</h3>
                <p className="text-gray-600 mb-4">Get weekly inspiration and updates</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                  />
                  <button className="bg-royal-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-electric-purple transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-4">Our Global Offices</h2>
            <p className="text-xl text-gray-600">Find us in these locations around the world</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{office.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-gray-900 mb-3">{office.country}</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start gap-2">
                        <FaMapMarkerAlt className="mt-1 text-royal-blue flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-royal-blue" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-royal-blue" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Integration Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-6xl mx-auto"
          >
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <FaMapMarkerAlt className="text-6xl mx-auto mb-4" />
                <p className="text-xl font-semibold">Google Maps Integration</p>
                <p className="text-sm">Interactive map showing all office locations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
