import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Join Us in Worship',
      subtitle: 'Experience God\'s presence through powerful praise and worship',
      image: 'https://images.unsplash.com/photo-1510674485131-d4b499a30f4b?w=1920&h=1080&fit=crop',
      cta: 'Join Live Service'
    },
    {
      title: 'Prayer Changes Everything',
      subtitle: 'Submit your prayer request and join our intercessory team',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=1080&fit=crop',
      cta: 'Send Prayer Request'
    },
    {
      title: 'Lives Being Transformed Daily',
      subtitle: 'Read amazing testimonies of healing, breakthrough, and miracles',
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1920&h=1080&fit=crop',
      cta: 'Read Testimonies'
    },
    {
      title: 'Divinity Life Conference 2025',
      subtitle: 'Three days of powerful ministry, worship, and divine encounters',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&h=1080&fit=crop',
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
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            {/* Light overlay for text contrast while showing starry background */}
            <div className="absolute inset-0 bg-primary-blue/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center text-neutral-white">
            <div className="max-w-6xl">
              <motion.h1
                className="text-5xl md:text-7xl font-display font-black mb-8 leading-none tracking-tight"
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <span className="inline-block text-neutral-white">{slides[currentSlide].title.split(' ').slice(0, -2).join(' ')}</span>{' '}
                <span className="inline-block text-primary-gold">
                  {slides[currentSlide].title.split(' ').slice(-2).join(' ')}
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-3xl mb-10 font-light text-neutral-cream max-w-4xl mx-auto leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  className="bg-primary-gold text-neutral-dark text-xl font-bold px-10 py-5 rounded-xl shadow-2xl hover:bg-primary-gold-light transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{slides[currentSlide].cta}</span>
                </motion.button>
                <motion.button
                  className="bg-neutral-white text-primary-blue text-xl font-semibold px-10 py-5 rounded-xl hover:bg-neutral-cream transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Now visible with solid backgrounds */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-gold hover:bg-primary-gold-light text-neutral-dark p-4 rounded-full transition-all duration-300 shadow-lg"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-gold hover:bg-primary-gold-light text-neutral-dark p-4 rounded-full transition-all duration-300 shadow-lg"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary-gold w-8'
                : 'bg-neutral-white/70 hover:bg-neutral-white w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
