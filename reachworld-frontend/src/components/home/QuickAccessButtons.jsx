import { motion } from 'framer-motion';
import { FaPrayingHands, FaHeart, FaBible, FaHandsHelping } from 'react-icons/fa';

const QuickAccessButtons = () => {
  const buttons = [
    {
      icon: FaPrayingHands,
      title: 'Prayer Request',
      description: 'God Hears You',
      story: 'Your breakthrough starts here',
      link: '/prayer',
      gradient: 'from-electric-purple via-electric-purple-dark to-royal-blue-700',
      iconBg: 'bg-white/20',
      glow: 'shadow-[0_0_40px_rgba(139,92,246,0.4)]'
    },
    {
      icon: FaHeart,
      title: 'Share Testimony',
      description: 'Inspire Others',
      story: 'Your story changes lives',
      link: '/testimonies',
      gradient: 'from-holy-fire via-vibrant-orange to-holy-fire-dark',
      iconBg: 'bg-white/20',
      glow: 'shadow-[0_0_40px_rgba(220,38,38,0.4)]'
    },
    {
      icon: FaBible,
      title: 'Daily Devotional',
      description: 'Feed Your Spirit',
      story: 'Fresh word every morning',
      link: '/devotional',
      gradient: 'from-royal-blue-600 via-accent-blue to-royal-blue-800',
      iconBg: 'bg-white/20',
      glow: 'shadow-[0_0_40px_rgba(0,51,160,0.4)]'
    },
    {
      icon: FaHandsHelping,
      title: 'Partner With Us',
      description: 'Transform Nations',
      story: 'Impact lives globally',
      link: '/partner',
      gradient: 'from-brand-gold-400 via-vibrant-orange to-brand-gold-600',
      iconBg: 'bg-white/20',
      glow: 'shadow-[0_0_40px_rgba(212,175,55,0.4)]'
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {buttons.map((button, index) => (
            <motion.a
              key={index}
              href={button.link}
              className="group block relative"
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className={`relative bg-gradient-to-br ${button.gradient} rounded-2xl p-8 text-white h-full overflow-hidden ${button.glow} hover:shadow-2xl transition-all duration-500`}>
                {/* Animated Background Orbs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className={`${button.iconBg} p-6 rounded-2xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 backdrop-blur-sm`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <button.icon className="text-5xl drop-shadow-lg" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-black tracking-tight">{button.title}</h3>
                    <p className="text-xl font-semibold text-white/90">{button.description}</p>
                    <p className="text-sm text-white/70 italic">{button.story}</p>
                  </div>

                  <div className="pt-4 w-full">
                    <div className="inline-flex items-center space-x-2 text-lg font-bold bg-white/20 px-6 py-3 rounded-lg backdrop-blur-sm group-hover:bg-white group-hover:text-gray-900 group-hover:translate-x-2 transition-all duration-300">
                      <span>Take Action</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccessButtons;
