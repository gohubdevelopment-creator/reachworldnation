import { motion } from 'framer-motion';
import { FaPrayingHands, FaBook, FaHandsHelping } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OurArmsPage = () => {
  const navigate = useNavigate();

  const arms = [
    {
      id: 'spiritual',
      icon: FaPrayingHands,
      title: 'Spiritual Formation & Kingdom Life',
      description: 'This arm focuses on spiritual growth, Christ-centered teachings, discipleship, prayer gatherings, and conferences designed to establish believers in truth and identity.',
      items: [
        'Teachings',
        'Discipleship Programs',
        'Prayer meetings',
        'Conferences & Retreats'
      ],
      path: '/arms/spiritual',
      accentColor: '#0d9488' // Teal
    },
    {
      id: 'media',
      icon: FaBook,
      title: 'Media, Education & Knowledge Systems',
      description: 'Through media, education, and creative expressions, we communicate truth, renew minds, and equip individuals for leadership, influence, and purpose.',
      items: [
        'Books & Publications',
        'Short Films & Visual Stories',
        'Online Teachings & Courses',
        'Podcasts & Digital Resources'
      ],
      path: '/arms/media-education',
      accentColor: '#7c3aed' // Purple
    },
    {
      id: 'social',
      icon: FaHandsHelping,
      title: 'Social Impact & Human Development',
      description: 'This arm addresses real-life needs through compassion-driven initiatives, community outreach, scholarships, relief efforts, and mindset reorientation.',
      items: [
        'Community Outreaches',
        'Scholarships & Education Support',
        'Relief & Humanitarian Aid',
        'Mindset Reorientation Programs'
      ],
      path: '/arms/social-impact',
      accentColor: '#d4af37' // Gold
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-neutral-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission Arms</h1>
            <div className="w-24 h-1 bg-primary-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-cream">
              Reachworld Nation operates through three strategic arms designed to transform lives
              spiritually, intellectually, and socially, raising a people grounded in Christ, truth, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Arms Section */}
      <section className="py-20 bg-neutral-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {arms.map((arm, index) => {
              const Icon = arm.icon;
              return (
                <motion.div
                  key={arm.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-neutral-white border-2 border-neutral-light hover:border-primary-blue rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
                  onClick={() => navigate(arm.path)}
                >
                  {/* Card Header */}
                  <div className="bg-primary-blue p-8 text-neutral-white relative overflow-hidden">
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-16 -mt-16"
                      style={{ backgroundColor: arm.accentColor }}
                    ></div>
                    <Icon className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <h2 className="text-2xl font-bold leading-tight relative z-10">{arm.title}</h2>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <p className="text-neutral-gray mb-6 leading-relaxed">
                      {arm.description}
                    </p>

                    {/* Sub-items */}
                    <ul className="space-y-3 mb-8">
                      {arm.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-gold mr-2 mt-1">✓</span>
                          <span className="text-neutral-gray">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <button
                      onClick={() => navigate(arm.path)}
                      className="w-full bg-primary-gold text-neutral-dark py-4 rounded-lg font-semibold hover:bg-primary-gold-light hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Explore {arm.title.split('&')[0].trim()}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-light text-neutral-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-cream">
              Each arm offers opportunities to engage, volunteer, and partner with us in transforming lives globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/partner')}
                className="bg-primary-gold text-neutral-dark px-8 py-4 rounded-lg font-bold hover:bg-primary-gold-light transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-neutral-white text-primary-blue px-8 py-4 rounded-lg font-bold hover:bg-neutral-light transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurArmsPage;
