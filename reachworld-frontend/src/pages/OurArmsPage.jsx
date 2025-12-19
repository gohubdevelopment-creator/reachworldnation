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
        'Teachings & Sermons',
        'Discipleship Programs',
        'Prayer meetings',
        'Conferences & Retreats'
      ],
      path: '/arms/spiritual',
      color: 'from-purple-600 to-indigo-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:border-purple-400'
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
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:border-blue-400'
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
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverColor: 'hover:border-green-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-blue to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission Arms</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-100">
              Reachworld Nation operates through three strategic arms designed to transform lives
              spiritually, intellectually, and socially, raising a people grounded in Christ, truth, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Arms Section */}
      <section className="py-20">
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
                  className={`${arm.bgColor} border-2 ${arm.borderColor} ${arm.hoverColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group`}
                  onClick={() => navigate(arm.path)}
                >
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${arm.color} p-8 text-white`}>
                    <Icon className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h2 className="text-2xl font-bold leading-tight">{arm.title}</h2>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {arm.description}
                    </p>

                    {/* Sub-items */}
                    <ul className="space-y-3 mb-8">
                      {arm.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-brand-gold mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <button
                      onClick={() => navigate(arm.path)}
                      className="w-full bg-gradient-to-r from-royal-blue to-indigo-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
      <section className="bg-gradient-to-r from-royal-blue to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              Each arm offers opportunities to engage, volunteer, and partner with us in transforming lives globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/partner')}
                className="bg-brand-gold text-royal-blue px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-royal-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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
