import { motion } from 'framer-motion';
import { FaPrayingHands, FaBible, FaUsers, FaMountain, FaCalendar, FaHandHoldingHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SpiritualArmPage = () => {
  const navigate = useNavigate();

  const programs = [
    {
      icon: FaBible,
      title: 'Teachings & Sermons',
      description: 'Christ-centered biblical teachings that establish believers in truth, identity, and kingdom principles.',
      features: ['Weekly messages', 'Topical series', 'Verse-by-verse studies', 'Audio & video archives']
    },
    {
      icon: FaUsers,
      title: 'Discipleship Programs',
      description: 'Structured pathways for spiritual growth, mentorship, and leadership development in Christ.',
      features: ['One-on-one mentoring', 'Small group studies', 'Leadership training', 'Spiritual formation tracks']
    },
    {
      icon: FaPrayingHands,
      title: 'Prayer Meetings',
      description: 'Corporate and personal prayer gatherings that create space for encounter with God and intercession.',
      features: ['Weekly prayer nights', 'Early morning prayers', 'Strategic intercession', 'Prayer requests & testimonies']
    },
    {
      icon: FaMountain,
      title: 'Conferences & Retreats',
      description: 'Intentional gatherings designed for deep spiritual renewal, teaching, and community building.',
      features: ['Annual conferences', 'Youth & young adult retreats', 'Leadership summits', 'Spiritual getaways']
    }
  ];

  const upcomingEvents = [
    {
      title: 'Weekly Prayer Night',
      date: 'Every Friday',
      time: '7:00 PM',
      location: 'Ministry Center / Online',
      type: 'Prayer'
    },
    {
      title: 'Discipleship Cohort 2025',
      date: 'January 2025',
      time: 'TBA',
      location: 'Multiple Locations',
      type: 'Discipleship'
    },
    {
      title: 'Kingdom Life Conference',
      date: 'Q2 2025',
      time: '3-Day Event',
      location: 'Main Venue',
      type: 'Conference'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaPrayingHands className="text-7xl mb-6 mx-auto text-brand-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Spiritual Formation & Kingdom Life</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-100">
              Establishing believers in Christ-centered truth, spiritual maturity, and kingdom identity through discipleship, teaching, prayer, and transformative gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-purple-50">
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
              The Spiritual Arm exists to cultivate deep, authentic relationship with God and establish believers in biblical truth. We create environments where individuals encounter Christ, grow in spiritual maturity, and develop kingdom mindsets that transform how they live, lead, and influence their world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through systematic teaching, intentional discipleship, corporate prayer, and strategic gatherings, we raise a generation grounded in the Word, empowered by the Spirit, and committed to advancing God's kingdom on earth.
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
                  className="bg-white border-2 border-purple-200 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300"
                >
                  <Icon className="text-5xl text-purple-600 mb-4" />
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

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600"
              >
                <div className="flex items-center mb-4">
                  <FaCalendar className="text-2xl text-purple-600 mr-3" />
                  <span className="text-sm font-semibold text-purple-600 uppercase">{event.type}</span>
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Ministry Moments</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Witness the transformative power of spiritual formation through prayer, worship, and teaching.
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
                className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl h-64 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="text-purple-600 font-semibold">Gallery Image {item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
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
              Join us in cultivating spiritual depth and kingdom transformation. There are multiple ways to engage with this arm of our ministry.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Join a Program</h3>
                <p className="text-gray-200 mb-4">Participate in discipleship, prayer meetings, or upcoming conferences.</p>
                <button
                  onClick={() => navigate('/events')}
                  className="bg-brand-gold text-royal-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
                >
                  View Programs
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-gray-200 mb-4">Serve in prayer teams, event coordination, or discipleship mentoring.</p>
                <button
                  onClick={() => navigate('/community')}
                  className="bg-white text-royal-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Join Team
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Support This Arm</h3>
                <p className="text-gray-200 mb-4">Partner financially to sustain spiritual formation initiatives.</p>
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

export default SpiritualArmPage;
