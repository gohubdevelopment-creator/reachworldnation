import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Arms', path: '/our-arms' },
    { name: 'Media', path: '/media' },
    { name: 'Programs & Events', path: '/events' },
    { name: 'Impact', path: '/impact' },
    { name: 'About Us', path: '/about' },
    { name: 'Partner With Us', path: '/partner' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-blue text-neutral-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/logo-white-black.png"
              alt="ReachworldNation Logo"
              className="h-12 w-auto object-contain rounded-xl"
            />
            <div>
              <h1 className="text-xl font-bold text-neutral-white">ReachworldNation</h1>
              <p className="text-xs text-primary-gold">Transforming Lives Globally</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.path}
                className="text-neutral-cream hover:text-primary-gold transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/community"
              className="bg-primary-gold text-neutral-dark px-6 py-2 rounded-lg font-semibold hover:bg-primary-gold-light transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Join Us
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block py-2 text-neutral-cream hover:text-primary-gold transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="/community" className="bg-primary-gold text-neutral-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold-light transition-all duration-300 w-full mt-4 block text-center">
                Join Us
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
