import { motion } from 'framer-motion';
import { FaHandsHelping, FaUsers, FaPlayCircle, FaBookOpen, FaShoppingCart } from 'react-icons/fa';

const QuickAccessButtons = () => {
  const buttons = [
    {
      icon: FaPlayCircle,
      title: 'Watch Messages',
      description: 'Transformational Teachings',
      story: 'Fresh revelations await',
      link: '/media',
      bgColor: 'bg-accent-purple',
      hoverBgColor: 'hover:bg-accent-purple/90'
    },
    {
      icon: FaBookOpen,
      title: 'Download Books',
      description: 'Free Resources',
      story: 'Transform your mind',
      link: '/books',
      bgColor: 'bg-accent-red',
      hoverBgColor: 'hover:bg-accent-red/90'
    },
    {
      icon: FaShoppingCart,
      title: 'Buy Books',
      description: 'Premium Collection',
      story: 'Invest in your growth',
      link: '/books',
      bgColor: 'bg-primary-blue',
      hoverBgColor: 'hover:bg-primary-blue-light'
    },
    {
      icon: FaHandsHelping,
      title: 'Partner With Us',
      description: 'Transform Nations',
      story: 'Impact lives globally',
      link: '/partner',
      bgColor: 'bg-primary-gold',
      hoverBgColor: 'hover:bg-primary-gold-light',
      textColor: 'text-neutral-dark'
    },
    {
      icon: FaUsers,
      title: 'Join ReachworldNation',
      description: 'Become Part of Us',
      story: 'Global community awaits',
      link: '/community',
      bgColor: 'bg-accent-teal',
      hoverBgColor: 'hover:bg-accent-teal/90'
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
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
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
              <div className={`relative ${button.bgColor} ${button.hoverBgColor} rounded-2xl p-8 ${button.textColor || 'text-neutral-white'} h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500`}>
                {/* Animated Background Orbs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="bg-white/20 p-6 rounded-2xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <button.icon className="text-5xl drop-shadow-lg" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-black tracking-tight">{button.title}</h3>
                    <p className="text-xl font-semibold opacity-90">{button.description}</p>
                    <p className="text-sm opacity-70 italic">{button.story}</p>
                  </div>

                  <div className="pt-4 w-full">
                    <div className={`inline-flex items-center space-x-2 text-lg font-bold ${button.textColor === 'text-neutral-dark' ? 'bg-neutral-dark text-neutral-white' : 'bg-neutral-white text-neutral-dark'} px-6 py-3 rounded-lg group-hover:translate-x-2 transition-all duration-300 shadow-md`}>
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
