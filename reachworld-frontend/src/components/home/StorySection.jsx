import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaHeart, FaPrayingHands, FaGlobeAmericas, FaFire } from 'react-icons/fa';

const StorySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const storyBeats = [
    {
      icon: FaHeart,
      title: "Called",
      description: "From broken to beloved",
      gradient: "from-holy-fire to-vibrant-orange",
      detail: "Every believer has a story. Yours starts with God's love."
    },
    {
      icon: FaPrayingHands,
      title: "Transformed",
      description: "By prayer and the Word",
      gradient: "from-electric-purple to-royal-blue-700",
      detail: "Through powerful encounters, lives are completely changed."
    },
    {
      icon: FaFire,
      title: "Empowered",
      description: "By the Holy Spirit",
      gradient: "from-vibrant-orange to-brand-gold-500",
      detail: "Equipped with divine purpose and supernatural ability."
    },
    {
      icon: FaGlobeAmericas,
      title: "Sent",
      description: "To transform nations",
      gradient: "from-royal-blue-600 to-accent-blue",
      detail: "Your story becomes a testimony that changes the world."
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-deep-charcoal text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          style={{ y, opacity }}
        >
          <motion.h2
            className="text-display-mobile md:text-display-xl font-black mb-6 leading-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Your Story
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-orange via-holy-fire to-brand-gold">
              Starts Here
            </span>
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Grace takes us from who we were to who God always knew we could be.
          </motion.p>
        </motion.div>

        {/* Story Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {storyBeats.map((beat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connection Line */}
              {index < storyBeats.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-white/30 to-transparent -translate-x-4 z-0"></div>
              )}

              {/* Card */}
              <div className={`relative bg-gradient-to-br ${beat.gradient} rounded-2xl p-8 h-full shadow-2xl hover:shadow-[0_0_60px_rgba(255,107,53,0.4)] transition-all duration-500 group-hover:scale-105`}>
                {/* Animated Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="bg-white/20 p-8 rounded-full backdrop-blur-sm"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <beat.icon className="text-6xl drop-shadow-2xl" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-4xl font-black tracking-tight">{beat.title}</h3>

                  {/* Description */}
                  <p className="text-xl font-semibold">{beat.description}</p>

                  {/* Detail */}
                  <p className="text-sm text-white/80 leading-relaxed">{beat.detail}</p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 group-hover:h-2 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-vibrant-orange via-holy-fire to-vibrant-orange text-white text-2xl font-black px-12 py-6 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Begin Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-holy-fire via-vibrant-orange to-holy-fire opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
