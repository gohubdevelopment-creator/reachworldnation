import { motion } from 'framer-motion';
import { FaGlobe, FaCross, FaUsers, FaBook } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue to-electric-purple text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">About ReachworldNation</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Transforming lives globally through divine revelation and kingdom principles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaGlobe className="text-4xl text-royal-blue mr-4" />
                <h2 className="text-3xl font-black text-royal-blue">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To reach every nation with the transforming power of God's word, raising a generation
                of believers who operate in divine revelation, kingdom authority, and demonstrate
                Christ-like excellence in every sphere of influence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaCross className="text-4xl text-brand-gold mr-4" />
                <h2 className="text-3xl font-black text-royal-blue">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower believers worldwide through transformational teachings, impactful books,
                global outreach programs, and community engagement that brings lasting change to
                individuals, families, and nations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-royal-blue mb-4">Core Beliefs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundational principles that guide our ministry and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Faith',
                description: 'Unwavering trust in God\'s word and promises for supernatural breakthroughs',
                icon: '🙏',
                color: 'from-royal-blue to-electric-purple'
              },
              {
                title: 'Transformation',
                description: 'Complete renewal of mind, spirit, and life through divine revelation',
                icon: '✨',
                color: 'from-vibrant-orange to-holy-fire'
              },
              {
                title: 'Kingdom Mindset',
                description: 'Operating from heaven\'s perspective in every area of life',
                icon: '👑',
                color: 'from-brand-gold to-vibrant-orange'
              },
              {
                title: 'Global Influence',
                description: 'Impacting nations with Christ-like excellence and authority',
                icon: '🌍',
                color: 'from-sky-blue to-electric-purple'
              }
            ].map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${belief.color} p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-shadow`}
              >
                <div className="text-5xl mb-4">{belief.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{belief.title}</h3>
                <p className="text-white/90">{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Biography */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black text-royal-blue mb-4">Our Founder</h2>
              <p className="text-xl text-gray-600">Pastor David S. Okeke</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-royal-blue to-electric-purple h-96 rounded-2xl flex items-center justify-center text-white text-6xl">
                  <FaUsers />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-black text-royal-blue">A Life of Impact</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pastor David S. Okeke is a renowned international minister, author, and transformational
                  teacher with a passionate heart for nations. His ministry has touched over 2 million lives
                  across 150+ nations through powerful teachings, life-changing books, and strategic outreach
                  programs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With a unique blend of divine revelation, practical wisdom, and kingdom authority, Pastor
                  David has authored over 50 transformational books that have revolutionized the mindsets of
                  believers worldwide. His teachings on faith, purpose, leadership, and kingdom principles
                  have empowered countless individuals to walk in their God-given destiny.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Beyond the pulpit, Pastor David is a strategic thinker, mentor, and catalyst for change,
                  committed to raising a generation of kingdom influencers who will transform their spheres
                  of influence with excellence and divine authority.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-royal-blue mb-4">Statement of Faith</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What we believe and stand upon
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              'We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.',
              'We believe in the deity of our Lord Jesus Christ, His virgin birth, sinless life, miracles, vicarious death, bodily resurrection, ascension, and personal return.',
              'We believe the Bible is the inspired, infallible Word of God, our supreme authority in all matters of faith and conduct.',
              'We believe in the necessity of the new birth through faith in Jesus Christ and the regenerating work of the Holy Spirit.',
              'We believe in the baptism of the Holy Spirit with evidence of speaking in tongues and the operation of spiritual gifts.',
              'We believe in the healing of the sick, the working of miracles, and the demonstration of God\'s power.',
              'We believe in the resurrection of both the saved and the lost; the saved unto eternal life and the lost unto eternal damnation.',
              'We believe in the spiritual unity of believers in our Lord Jesus Christ and the importance of the local church.'
            ].map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start bg-gray-50 p-6 rounded-xl"
              >
                <FaBook className="text-2xl text-royal-blue mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{statement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-royal-blue to-electric-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Leadership Structure</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              A team of dedicated servants committed to advancing the kingdom of God worldwide
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg">
                Our leadership team is composed of anointed ministers, strategic thinkers, and passionate
                servants who work together to fulfill our mission of reaching nations. Under the guidance
                of Pastor David S. Okeke, we operate with integrity, excellence, and a commitment to
                transforming lives globally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
