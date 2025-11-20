import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Join Us in Worship This Sunday',
      subtitle: 'Experience God\'s presence through powerful praise and worship',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      cta: 'Join Live Service'
    },
    {
      title: 'Prayer Changes Everything',
      subtitle: 'Submit your prayer request and join our intercessory team',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop',
      cta: 'Send Prayer Request'
    },
    {
      title: 'Lives Being Transformed Daily',
      subtitle: 'Read amazing testimonies of healing, breakthrough, and miracles',
      image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1920&h=1080&fit=crop',
      cta: 'Read Testimonies'
    },
    {
      title: 'Divinity Life Conference 2025',
      subtitle: 'Three days of powerful ministry, worship, and divine encounters',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop',
      cta: 'Register Now'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/90 via-blue-900/85 to-deep-charcoal/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center text-white">
            <div>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl lg:text-3xl mb-8 text-brand-gold max-w-4xl mx-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.button
                className="btn-primary text-lg px-8 py-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[currentSlide].cta}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-brand-gold w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
