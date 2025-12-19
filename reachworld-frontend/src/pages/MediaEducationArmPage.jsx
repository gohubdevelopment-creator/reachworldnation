import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaGraduationCap, FaPodcast, FaFilm, FaLaptop } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MediaEducationArmPage = () => {
  const navigate = useNavigate();

  const programs = [
    {
      icon: FaBook,
      title: 'Books & Publications',
      description: 'Written resources that communicate kingdom truth, renew minds, and equip believers for purpose-driven living.',
      features: ['Kingdom theology books', 'Devotional guides', 'Leadership manuals', 'Digital & print formats']
    },
    {
      icon: FaFilm,
      title: 'Short Films & Visual Stories',
      description: 'Compelling visual narratives that inspire faith, provoke thought, and demonstrate the power of transformed lives.',
      features: ['Documentary series', 'Testimony films', 'Teaching visuals', 'Social impact stories']
    },
    {
      icon: FaLaptop,
      title: 'Online Teachings & Courses',
      description: 'Structured digital learning pathways designed to develop spiritual, intellectual, and practical competencies.',
      features: ['Bible study courses', 'Leadership development', 'Life skills training', 'Certificate programs']
    },
    {
      icon: FaPodcast,
      title: 'Podcasts & Digital Resources',
      description: 'On-demand audio content delivering truth, inspiration, and practical wisdom for everyday kingdom living.',
      features: ['Weekly podcast episodes', 'Interview series', 'Teaching archives', 'Downloadable resources']
    }
  ];

  const recentReleases = [
    {
      type: 'Book',
      title: 'Kingdom Mindset: Renewing the Way You Think',
      date: 'Available Now',
      format: 'Print & Digital'
    },
    {
      type: 'Course',
      title: 'Biblical Leadership Foundations',
      date: 'Enrollment Open',
      format: 'Online, 6 Weeks'
    },
    {
      type: 'Film',
      title: 'From Brokenness to Purpose',
      date: 'Coming Soon',
      format: 'Short Documentary'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaBook className="text-7xl mb-6 mx-auto text-brand-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Media, Education & Knowledge Systems</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-100">
              Through media, education, and creative expressions, we communicate truth, renew minds, and equip individuals for leadership, influence, and purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-blue-50">
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
              The Media & Education Arm exists to leverage communication platforms, educational systems, and creative media to articulate kingdom truth with clarity and cultural relevance. We believe that minds renewed by truth produce transformed lives and lasting impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through books, films, courses, and digital resources, we equip individuals with knowledge, critical thinking, and practical skills that enable them to lead with wisdom, influence with integrity, and build solutions that advance God's purposes in every sphere of society.
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
                  className="bg-white border-2 border-blue-200 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
                >
                  <Icon className="text-5xl text-blue-600 mb-4" />
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

      {/* Recent Releases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Recent Releases</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentReleases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{item.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Status:</strong> {item.date}</p>
                  <p><strong>Format:</strong> {item.format}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/books')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore All Resources
            </button>
          </div>
        </div>
      </section>

      {/* Media Gallery Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Media & Content Gallery</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our growing library of books, films, courses, and digital resources.
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
                className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl h-64 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="text-blue-600 font-semibold">Media Item {item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaGraduationCap className="text-6xl mb-6 mx-auto text-brand-gold" />
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-10 text-gray-100">
              Engage with transformative content and help us amplify kingdom truth through media and education.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Access Resources</h3>
                <p className="text-gray-200 mb-4">Read books, watch films, and enroll in courses that renew your mind.</p>
                <button
                  onClick={() => navigate('/books')}
                  className="bg-brand-gold text-royal-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
                >
                  Browse Library
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-gray-200 mb-4">Contribute as a writer, editor, filmmaker, or digital content creator.</p>
                <button
                  onClick={() => navigate('/community')}
                  className="bg-white text-royal-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Join Team
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">Support This Arm</h3>
                <p className="text-gray-200 mb-4">Fund media production, course development, and content distribution.</p>
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

export default MediaEducationArmPage;
