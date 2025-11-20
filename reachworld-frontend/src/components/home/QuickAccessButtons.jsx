import { motion } from 'framer-motion';
import { FaPrayingHands, FaHeart, FaBible, FaHandsHelping } from 'react-icons/fa';

const QuickAccessButtons = () => {
  const buttons = [
    {
      icon: FaPrayingHands,
      title: 'Prayer Request',
      description: 'Submit Your Need',
      link: '/prayer',
      color: 'from-purple-600 to-purple-800'
    },
    {
      icon: FaHeart,
      title: 'Share Testimony',
      description: 'Tell Your Story',
      link: '/testimonies',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: FaBible,
      title: 'Daily Devotional',
      description: 'Feed Your Spirit',
      link: '/devotional',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: FaHandsHelping,
      title: 'Partner With Us',
      description: 'Support The Work',
      link: '/partner',
      color: 'from-brand-gold to-yellow-600'
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
              className="group block"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className={`bg-gradient-to-br ${button.color} rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-white/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <button.icon className="text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold">{button.title}</h3>
                  <p className="text-white/90">{button.description}</p>
                  <div className="pt-2">
                    <span className="inline-flex items-center space-x-2 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <span>→</span>
                    </span>
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
