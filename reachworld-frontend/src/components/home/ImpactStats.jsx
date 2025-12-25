import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGlobe, FaBook, FaUsers, FaChurch } from 'react-icons/fa';

const ImpactStats = () => {
  const stats = [
    {
      icon: FaGlobe,
      number: 150,
      label: 'Nations Impacted',
      suffix: '+'
    },
    {
      icon: FaBook,
      number: 500000,
      label: 'Books Distributed',
      suffix: '+'
    },
    {
      icon: FaUsers,
      number: 2000000,
      label: 'Lives Reached',
      suffix: '+'
    },
    {
      icon: FaChurch,
      number: 5000,
      label: 'Church Partners',
      suffix: '+'
    }
  ];

  const AnimatedNumber = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [target]);

    const formatNumber = (num) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
      }
      return num.toString();
    };

    return (
      <span>
        {formatNumber(count)}
        {suffix}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-brand-gold">
            Transforming lives and reaching nations with the Gospel
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-brand-gold/30 to-vibrant-orange/30 p-8 rounded-full backdrop-blur-sm shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                  <stat.icon className="text-6xl text-brand-gold drop-shadow-lg" />
                </div>
              </motion.div>
              <div className="text-5xl md:text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-white">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-xl font-semibold text-white/95">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl mb-6">
            Join us in making a difference around the world
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
