import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    ministry: [
      { name: 'About Us', path: '/about' },
      { name: 'Vision & Mission', path: '/about#vision' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Statement of Faith', path: '/about#faith' }
    ],
    resources: [
      { name: 'Books', path: '/books' },
      { name: 'Sermons', path: '/media/sermons' },
      { name: 'Podcasts', path: '/media/podcasts' },
      { name: 'Blog', path: '/blog' }
    ],
    connect: [
      { name: 'Events', path: '/events' },
      { name: 'Partner with Us', path: '/partner' },
      { name: 'Join Us', path: '/join' },
      { name: 'Contact', path: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' }
    ]
  };

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="bg-deep-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo-white-black.png"
                  alt="ReachworldNation Logo"
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">ReachworldNation</h3>
                  <p className="text-sm text-brand-gold">Transforming Lives Globally</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering believers worldwide through divine revelation, transformational teachings,
                and kingdom principles. Join us in making a global impact.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <FaEnvelope className="text-brand-gold" />
                  <span>info@reachworldnation.org</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <FaPhone className="text-brand-gold" />
                  <span>+234 (0) 800 000 0000</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <FaMapMarkerAlt className="text-brand-gold" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ministry Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-brand-gold">Ministry</h4>
            <ul className="space-y-2">
              {footerLinks.ministry.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-brand-gold">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 text-brand-gold">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-center md:text-left">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-brand-gold hover:text-deep-charcoal transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-brand-gold"
                />
                <button className="bg-brand-gold text-deep-charcoal px-6 py-2 rounded-r-lg font-semibold hover:bg-royal-blue hover:text-white transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} ReachworldNation. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="hover:text-brand-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
