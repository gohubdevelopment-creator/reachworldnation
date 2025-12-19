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
      accentColor: "accent-red",
      detail: "Every believer has a story. Yours starts with God's love."
    },
    {
      icon: FaPrayingHands,
      title: "Transformed",
      description: "By prayer and the Word",
      accentColor: "accent-purple",
      detail: "Through powerful encounters, lives are completely changed."
    },
    {
      icon: FaFire,
      title: "Empowered",
      description: "By the Holy Spirit",
      accentColor: "primary-gold",
      detail: "Equipped with divine purpose and supernatural ability."
    },
    {
      icon: FaGlobeAmericas,
      title: "Sent",
      description: "To transform nations",
      accentColor: "accent-teal",
      detail: "Your story becomes a testimony that changes the world."
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-primary-blue text-neutral-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          style={{ y, opacity }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 leading-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Your Story
            <br />
            <span className="text-primary-gold">
              Starts Here
            </span>
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl text-neutral-cream max-w-3xl mx-auto font-light"
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
                <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-neutral-white/30 to-transparent -translate-x-4 z-0"></div>
              )}

              {/* Card */}
              <div className="relative bg-neutral-white rounded-2xl p-8 h-full shadow-2xl hover:shadow-primary-gold/30 transition-all duration-500 group-hover:scale-105 border-2 border-neutral-light">
                {/* Animated Glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-${beat.accentColor} text-neutral-white rounded-full flex items-center justify-center font-black text-xl shadow-lg`}
                    style={{
                      backgroundColor: beat.accentColor === 'accent-red' ? '#dc2626' :
                        beat.accentColor === 'accent-purple' ? '#7c3aed' :
                        beat.accentColor === 'primary-gold' ? '#d4af37' :
                        '#0d9488'
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="bg-primary-blue/10 p-8 rounded-full"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <beat.icon className="text-6xl text-primary-blue" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-4xl font-black tracking-tight text-primary-blue">{beat.title}</h3>

                  {/* Description */}
                  <p className="text-xl font-semibold text-neutral-gray">{beat.description}</p>

                  {/* Detail */}
                  <p className="text-sm text-neutral-gray leading-relaxed">{beat.detail}</p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-gold group-hover:h-2 transition-all duration-300"></div>
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
            className="bg-primary-gold text-neutral-dark text-2xl font-black px-12 py-6 rounded-2xl shadow-2xl hover:bg-primary-gold-light transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Begin Your Journey</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
