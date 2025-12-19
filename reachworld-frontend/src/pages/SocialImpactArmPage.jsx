import { motion } from 'framer-motion';
import { FaHandsHelping, FaUsers, FaGraduationCap, FaHeart, FaBrain, FaHandHoldingHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SocialImpactArmPage = () => {
  const navigate = useNavigate();

  const programs = [
    {
      icon: FaUsers,
      title: 'Community Outreaches',
      description: 'Compassion-driven initiatives that meet practical needs, demonstrate Christ\'s love, and build stronger communities.',
      features: ['Local neighborhood outreaches', 'Food distribution programs', 'Medical & health camps', 'Youth empowerment initiatives']
    },
    {
      icon: FaGraduationCap,
      title: 'Scholarships & Education Support',
      description: 'Breaking barriers to education by providing financial aid, mentorship, and resources for deserving students.',
      features: ['Full & partial scholarships', 'School supplies distribution', 'Tutoring & mentorship', 'Vocational training programs']
    },
    {
      icon: FaHeart,
      title: 'Relief & Humanitarian Aid',
      description: 'Rapid response to disasters and crises, providing essential resources and hope to those in urgent need.',
      features: ['Disaster relief efforts', 'Emergency assistance', 'Refugee support programs', 'Crisis intervention']
    },
    {
      icon: FaBrain,
      title: 'Mindset Reorientation Programs',
      description: 'Transforming worldviews and thought patterns to empower individuals for sustainable development and kingdom impact.',
      features: ['Identity & purpose workshops', 'Financial literacy training', 'Leadership & entrepreneurship', 'Life skills development']
    }
  ];

  const impactStories = [
    {
      number: '500+',
      label: 'Families Reached',
      description: 'Through community outreach programs'
    },
    {
      number: '150+',
      label: 'Students Supported',
      description: 'Via scholarships and educational aid'
    },
    {
      number: '20+',
      label: 'Communities Served',
      description: 'Across multiple regions'
    }
  ];

  const ongoingInitiatives = [
    {
      title: 'Back-to-School Program 2025',
      description: 'Providing school supplies and uniforms to underprivileged children.',
      status: 'Active',
      participants: '200+ children'
    },
    {
      title: 'Community Health Fair',
      description: 'Free medical screenings, consultations, and health education.',
      status: 'Quarterly',
      participants: 'Multiple locations'
    },
    {
      title: 'Youth Empowerment Series',
      description: 'Skills training and mentorship for young adults seeking purpose and employment.',
      status: 'Ongoing',
      participants: '100+ participants'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaHandsHelping className="text-7xl mb-6 mx-auto text-brand-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Social Impact & Human Development</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-100">
              This arm addresses real-life needs through compassion-driven initiatives, community outreach, scholarships, relief efforts, and mindset reorientation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-royal-blue mb-6">Vision of This Arm</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Social Impact Arm exists to embody the compassion of Christ through tangible acts of service that address human suffering, systemic poverty, and limited opportunity. We believe that genuine transformation occurs when spiritual truth meets practical action.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through community outreach, educational support, humanitarian relief, and mindset transformation programs, we create pathways for individuals and communities to experience holistic development—spiritual, intellectual, economic, and social—that reflects the kingdom of God on earth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Key Programs</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-green-200 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:border-green-400 transition-all duration-300"
                >
                  <Icon className="text-5xl text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-royal-blue mb-3">{program.title}</h3>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-gold mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {impactStories.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20"
              >
                <h3 className="text-5xl font-bold text-brand-gold mb-3">{stat.number}</h3>
                <p className="text-2xl font-semibold mb-2">{stat.label}</p>
                <p className="text-gray-200">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Initiatives Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Ongoing Initiatives</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ongoingInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {initiative.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{initiative.title}</h3>
                <p className="text-gray-700 mb-4">{initiative.description}</p>
                <p className="text-gray-600 text-sm">
                  <strong>Reach:</strong> {initiative.participants}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Stories of Transformation</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Witness the real-life impact of compassion in action through community outreach and relief efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl h-64 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="text-green-600 font-semibold">Impact Story {item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaHandHoldingHeart className="text-6xl mb-6 mx-auto text-brand-gold" />
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-10 text-gray-100">
              Join us in making a tangible difference in the lives of individuals and communities through compassion and action.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Participate</h3>
                <p className="text-gray-200 mb-4">Join upcoming outreach events, relief efforts, and community programs.</p>
                <button
                  onClick={() => navigate('/events')}
                  className="bg-brand-gold text-royal-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
                >
                  See Events
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-gray-200 mb-4">Serve in outreach teams, relief coordination, or mentorship programs.</p>
                <button
                  onClick={() => navigate('/community')}
                  className="bg-white text-royal-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Join Team
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Support This Arm</h3>
                <p className="text-gray-200 mb-4">Fund scholarships, relief efforts, and community transformation initiatives.</p>
                <button
                  onClick={() => navigate('/partner')}
                  className="bg-white text-royal-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Partner Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialImpactArmPage;
