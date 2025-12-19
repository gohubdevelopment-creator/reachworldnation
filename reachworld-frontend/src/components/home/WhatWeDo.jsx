import { motion } from 'framer-motion';
import { FaPrayingHands, FaBook, FaHandsHelping, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const WhatWeDo = () => {
  const navigate = useNavigate();

  const arms = [
    {
      icon: FaPrayingHands,
      title: 'Spiritual Formation',
      subtitle: 'Kingdom Life',
      description: 'Establishing believers through Christ-centered teachings, discipleship, prayer gatherings, and transformative conferences.',
      path: '/arms/spiritual',
      accentColor: 'accent-teal' // Subtle differentiation
    },
    {
      icon: FaBook,
      title: 'Media & Education',
      subtitle: 'Knowledge Systems',
      description: 'Communicating truth and equipping leaders through books, films, online courses, and creative digital resources.',
      path: '/arms/media-education',
      accentColor: 'accent-purple' // Subtle differentiation
    },
    {
      icon: FaHandsHelping,
      title: 'Social Impact',
      subtitle: 'Human Development',
      description: 'Addressing real-life needs through community outreach, scholarships, relief efforts, and mindset transformation.',
      path: '/arms/social-impact',
      accentColor: 'primary-gold' // Subtle differentiation
    }
  ];

  return (
    <section className="py-20 bg-neutral-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Reachworld Nation operates through three strategic arms designed to transform lives
            spiritually, intellectually, and socially—raising a people grounded in Christ, truth, and impact.
          </p>
        </motion.div>

        {/* Three Arms Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {arms.map((arm, index) => {
            const Icon = arm.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => navigate(arm.path)}
              >
                <div className="bg-neutral-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-2 border-neutral-light hover:border-primary-blue">
                  {/* Icon Header */}
                  <div className="p-8 text-center bg-gradient-to-br from-neutral-light to-neutral-white">
                    <div className={`bg-primary-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-4xl text-neutral-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-blue mb-2">{arm.title}</h3>
                    <p className={`text-sm font-semibold text-${arm.accentColor} uppercase tracking-wide mb-4`}>
                      {arm.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="px-8 pb-8">
                    <p className="text-neutral-gray leading-relaxed mb-6 text-center">
                      {arm.description}
                    </p>

                    {/* Learn More Button */}
                    <button
                      onClick={() => navigate(arm.path)}
                      className="w-full bg-primary-gold text-neutral-dark py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-gold-light hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/our-arms')}
            className="bg-primary-blue text-neutral-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-blue-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Our Arms
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
