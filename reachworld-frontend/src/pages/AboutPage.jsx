import { motion } from 'framer-motion';
import { FaGlobe, FaBook } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Transformation Promise */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600"
            alt="Worship gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 via-primary-blue-dark/85 to-primary-blue/90"></div>
          {/* Subtle accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-gold/10 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              From Broken to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-primary-gold-light to-primary-gold animate-glow">Beloved</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              The story of a man called by God to transform 2 million lives across 150 nations
            </p>

            {/* Quick impact stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '2M+', label: 'Lives Transformed' },
                { number: '150+', label: 'Nations Reached' },
                { number: '500K+', label: 'Books Distributed' },
                { number: '5K+', label: 'Churches Planted' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-4xl font-black text-primary-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
                <FaGlobe className="text-4xl text-primary-blue mr-4" />
                <h2 className="text-3xl font-black text-primary-blue">Our Vision</h2>
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
                <FaGlobe className="text-4xl text-primary-gold mr-4" />
                <h2 className="text-3xl font-black text-primary-blue">Our Mission</h2>
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

      {/* Pastor David's Journey Timeline */}
      <section className="py-24 bg-gradient-to-br from-primary-blue via-accent-purple to-neutral-dark text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">The Journey of a Messenger</h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              From a broken past to becoming God's vessel for global transformation
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <div className="max-w-7xl mx-auto">
            {[
              {
                year: '1985',
                title: 'The Calling',
                subtitle: 'Broken but Chosen',
                story: 'In the depths of personal struggle and financial ruin, David encountered God in a way that would forever change his destiny. "I had nothing," he recalls, "but God showed me I was called to reach the unreachable."',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
                gradient: 'from-accent-red to-primary-gold',
                icon: '🔥'
              },
              {
                year: '1992',
                title: 'The Transformation',
                subtitle: 'From Doubt to Divine Authority',
                story: 'Seven years of discipleship, study, and spiritual refinement transformed David from a broken man into a vessel of divine authority. His first teaching reached 50 people. Within months, hundreds were being transformed.',
                image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800',
                gradient: 'from-accent-purple to-primary-blue',
                icon: '✨'
              },
              {
                year: '2005',
                title: 'The Commission',
                subtitle: 'Sent to the Nations',
                story: 'God spoke clearly: "You will reach nations with My word." That year, Reachworld Nation was born. The first international outreach to Ghana saw 10,000 salvations in one crusade. The mandate was undeniable.',
                image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800',
                gradient: 'from-primary-gold to-primary-gold-light',
                icon: '🌍'
              },
              {
                year: '2024',
                title: 'The Multiplication',
                subtitle: 'A Global Movement',
                story: 'Today, 2 million lives transformed. 150 nations impacted. 5,000 churches planted. 500,000 books changing mindsets globally. The mission continues: every nation, every tribe, every tongue will hear the message of transformation.',
                image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
                gradient: 'from-primary-blue to-primary-blue-light',
                icon: '👑'
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${index % 2 === 1 ? 'md:dir-rtl' : ''}`}
              >
                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-50 rounded-2xl blur-2xl group-hover:opacity-70 transition-opacity duration-500`} />
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                    />
                    <div className="absolute top-6 left-6 text-7xl">{milestone.icon}</div>
                    <div className={`absolute bottom-6 left-6 bg-gradient-to-r ${milestone.gradient} text-white px-6 py-3 rounded-xl font-black text-2xl`}>
                      {milestone.year}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <div className={`inline-block bg-gradient-to-r ${milestone.gradient} text-white px-4 py-2 rounded-full font-bold mb-4`}>
                      Milestone {index + 1}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-3">{milestone.title}</h3>
                    <p className="text-2xl text-brand-gold font-semibold mb-6">{milestone.subtitle}</p>
                    <p className="text-xl text-white/80 leading-relaxed italic">
                      "{milestone.story}"
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Message CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="group relative bg-gradient-to-r from-primary-gold to-primary-gold-light text-primary-blue px-10 py-6 rounded-xl font-black text-xl shadow-2xl hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                Watch Pastor David's Full Story
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Core Beliefs with Living Testimonies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-blue mb-6">Core Beliefs Lived Out</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              These aren't just principles we teach—they're transformations we've witnessed in thousands of lives
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-20">
            {[
              {
                belief: 'Faith',
                principle: 'Unwavering trust in God\'s word and promises for supernatural breakthroughs',
                gradient: 'from-primary-blue to-accent-purple',
                story: {
                  name: 'Sarah Okonkwo',
                  location: 'Lagos, Nigeria',
                  before: 'Struggling with a failing business and crushing debt of ₦5 million',
                  after: 'Applied faith principles from Pastor David\'s teachings. Within 6 months, business revenue increased 400%. Debt cleared. Now employs 15 people.',
                  quote: '"I learned that faith isn\'t just believing—it\'s acting on God\'s word despite circumstances. This belief system saved my business and my family."',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
                  timeline: '6 months'
                }
              },
              {
                belief: 'Transformation',
                principle: 'Complete renewal of mind, spirit, and life through divine revelation',
                gradient: 'from-accent-red to-primary-gold',
                story: {
                  name: 'Michael Chen',
                  location: 'Singapore',
                  before: 'Battling addiction for 12 years, broken relationships, lost career',
                  after: 'Encountered transformation message at Divinity Life Conference 2023. Completely delivered from addiction. Restored marriage. Now leads recovery ministry reaching 200+ annually.',
                  quote: '"The transformation wasn\'t gradual—it was instant. One encounter with God\'s power through this ministry changed everything."',
                  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
                  timeline: '18 months ago'
                }
              },
              {
                belief: 'Kingdom Mindset',
                principle: 'Operating from heaven\'s perspective in every area of life',
                gradient: 'from-primary-gold to-primary-gold-light',
                story: {
                  name: 'Grace Mensah',
                  location: 'Accra, Ghana',
                  before: 'Employed in dead-end job, living paycheck to paycheck, no vision for future',
                  after: 'Shifted to kingdom mindset through Pastor David\'s mentorship program. Started business aligned with God\'s vision. Now runs successful consulting firm impacting 50+ African businesses.',
                  quote: '"I went from employee mentality to kingdom entrepreneur. The mindset shift unlocked resources I didn\'t know existed."',
                  image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
                  timeline: '2 years ago'
                }
              },
              {
                belief: 'Global Influence',
                principle: 'Impacting nations with Christ-like excellence and authority',
                gradient: 'from-accent-teal to-accent-purple',
                story: {
                  name: 'Pastor John Adeyemi',
                  location: 'Ibadan, Nigeria',
                  before: 'Leading small church of 30 members, limited vision for growth',
                  after: 'Trained at Reachworld Nation Leadership Summit. Church grew to 2,000 members. Planted 15 daughter churches across Nigeria. Impacting 10,000+ lives weekly.',
                  quote: '"I learned that God\'s vision for me wasn\'t just my city—it was nations. This belief expanded my territory beyond imagination."',
                  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
                  timeline: '3 years ago'
                }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-5 gap-8 items-center"
              >
                {/* Belief Card */}
                <div className={`md:col-span-2 bg-gradient-to-br ${item.gradient} p-10 rounded-3xl text-white shadow-2xl`}>
                  <h3 className="text-4xl font-black mb-4">{item.belief}</h3>
                  <p className="text-xl text-white/90 leading-relaxed">{item.principle}</p>
                  <div className="mt-8 pt-8 border-t border-white/30">
                    <p className="text-sm font-semibold text-white/70 mb-2">LIVING PROOF:</p>
                    <p className="text-lg font-bold">{item.story.name}</p>
                    <p className="text-white/80">{item.story.location}</p>
                  </div>
                </div>

                {/* Transformation Story */}
                <div className="md:col-span-3">
                  <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
                    {/* Story Header with Image */}
                    <div className="flex items-start gap-6 mb-6">
                      <img
                        src={item.story.image}
                        alt={item.story.name}
                        className="w-24 h-24 rounded-full object-cover shadow-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-2xl font-black text-gray-900">{item.story.name}</h4>
                          <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                            Transformed {item.story.timeline}
                          </span>
                        </div>
                        <p className="text-gray-600">{item.story.location}</p>
                      </div>
                    </div>

                    {/* Before/After */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-20 text-sm font-bold text-red-600 uppercase">Before:</div>
                        <p className="text-gray-700 flex-1">{item.story.before}</p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-20 text-sm font-bold text-green-600 uppercase">After:</div>
                        <p className="text-gray-900 font-semibold flex-1">{item.story.after}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className={`border-l-4 border-gradient-to-b ${item.gradient} pl-6 py-2 italic text-gray-700 text-lg`}>
                      {item.story.quote}
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Stories */}
      <section className="py-24 bg-gradient-to-br from-primary-blue via-accent-purple to-neutral-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">Transforming Nations, One Life at a Time</h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto">
              From the streets of Lagos to the villages of India, here's how Reachworld Nation is changing the world
            </p>
          </motion.div>

          {/* Regional Impact Stories */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                region: 'West Africa',
                nations: '15 Nations',
                lives: '800K+ Lives',
                story: {
                  title: 'The Village That Found Hope',
                  location: 'Kano State, Nigeria',
                  impact: 'In 2022, our team held a 3-day crusade in a predominantly non-Christian village. 5,000 people attended. 2,300 gave their lives to Christ. Today, 3 thriving churches serve 1,500 regular attendees. The village chief himself is now a deacon.',
                  image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
                  metric: '3 Churches Planted'
                }
              },
              {
                region: 'Europe',
                nations: '12 Nations',
                lives: '150K+ Lives',
                story: {
                  title: 'Awakening in the UK',
                  location: 'Manchester, United Kingdom',
                  impact: 'Started with 50 people in a community center in 2019. Through Pastor David\'s UK tour and continued mentorship, the Manchester chapter now reaches 3,000 weekly. Members from 15 different nationalities. Planted 8 satellite locations across England.',
                  image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
                  metric: '8 Satellite Churches'
                }
              },
              {
                region: 'Asia',
                nations: '8 Nations',
                lives: '300K+ Lives',
                story: {
                  title: 'Singapore Miracle',
                  location: 'Singapore',
                  impact: 'In 2020, distributed 50,000 free books across Singapore during COVID lockdown. Books reached prisoners, hospitals, schools. Led to 120 documented salvations, 40 complete life transformations, and the formation of 6 prayer groups that now serve 800 people monthly.',
                  image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
                  metric: '50K Books Distributed'
                }
              }
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={region.story.image}
                      alt={region.story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-black mb-1">{region.story.title}</h3>
                      <p className="text-white/80">{region.story.location}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-black text-primary-gold">{region.nations}</div>
                        <div className="text-xs text-white/60">Reached</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-primary-gold">{region.lives}</div>
                        <div className="text-xs text-white/60">Transformed</div>
                      </div>
                    </div>

                    <p className="text-white/90 leading-relaxed mb-4">{region.story.impact}</p>

                    <div className="pt-4 border-t border-white/20">
                      <div className="text-primary-gold font-bold text-lg">{region.story.metric}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-2xl mb-8">Want to see transformation in your nation?</p>
            <button className="bg-primary-gold text-primary-blue px-10 py-5 rounded-xl font-black text-xl hover:bg-white transition-all duration-300 shadow-2xl">
              Bring Reachworld Nation to Your City
            </button>
          </motion.div>
        </div>
      </section>

      {/* Statement of Faith with Living Outcomes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-blue mb-6">What We Believe & Why It Matters</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Our theology isn't just doctrine—it's the foundation for transformation in 2 million lives
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                belief: 'We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.',
                outcome: '→ This truth brought Sarah wholeness after years of searching in other religions'
              },
              {
                belief: 'We believe in the deity of our Lord Jesus Christ, His virgin birth, sinless life, miracles, vicarious death, bodily resurrection, ascension, and personal return.',
                outcome: '→ Michael\'s addiction was broken when he encountered the risen Christ'
              },
              {
                belief: 'We believe the Bible is the inspired, infallible Word of God, our supreme authority in all matters of faith and conduct.',
                outcome: '→ Grace\'s business decisions transformed when she made Scripture her guide'
              },
              {
                belief: 'We believe in the necessity of the new birth through faith in Jesus Christ and the regenerating work of the Holy Spirit.',
                outcome: '→ 2,300 people in Kano village experienced new birth through our crusade'
              },
              {
                belief: 'We believe in the baptism of the Holy Spirit with evidence of speaking in tongues and the operation of spiritual gifts.',
                outcome: '→ Our leaders operate in prophetic gifts that have directed ministry to 150 nations'
              },
              {
                belief: 'We believe in the healing of the sick, the working of miracles, and the demonstration of God\'s power.',
                outcome: '→ Documented healings in every crusade—cancers healed, blind eyes opened, deaf ears unstopped'
              },
              {
                belief: 'We believe in the resurrection of both the saved and the lost; the saved unto eternal life and the lost unto eternal damnation.',
                outcome: '→ This urgency drives our mission to reach every nation before Christ returns'
              },
              {
                belief: 'We believe in the spiritual unity of believers in our Lord Jesus Christ and the importance of the local church.',
                outcome: '→ 5,000 churches planted worldwide operating in this unity and mandate'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-blue"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-black">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-900 font-semibold mb-3 leading-relaxed">{item.belief}</p>
                    <p className="text-base text-primary-gold italic font-medium">{item.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-xl text-gray-600 mb-6">Experience these truths transforming your life</p>
            <button className="bg-gradient-to-r from-primary-blue to-accent-purple text-white px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all duration-300">
              Join a Community Near You
            </button>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-blue mb-6">Transformed Leaders Transforming Nations</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Each leader carries a testimony of God's transforming power in their own life
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: 'Pastor David S. Okeke',
                role: 'Founder & Lead Minister',
                journey: {
                  before: 'Financially broken, battling doubt and failure',
                  transformation: 'Divine encounter in 1985 changed everything',
                  now: 'Leading global ministry impacting 2M+ lives across 150 nations'
                },
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
                quote: '"God doesn\'t call the qualified—He qualifies the called."',
                gradient: 'from-primary-gold to-primary-gold-light'
              },
              {
                name: 'Rev. Elizabeth Okeke',
                role: 'Director of Women\'s Ministry',
                journey: {
                  before: 'Struggling with identity and purpose after career setback',
                  transformation: 'Found calling through mentorship and prayer',
                  now: 'Leading women\'s conferences reaching 50K+ women annually'
                },
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
                quote: '"Every woman has a God-sized purpose waiting to be unlocked."',
                gradient: 'from-accent-purple to-primary-blue'
              },
              {
                name: 'Pastor James Nwosu',
                role: 'Director of Global Missions',
                journey: {
                  before: 'Former businessman with no ministry background',
                  transformation: 'Radical call to missions in 2010',
                  now: 'Oversees mission work in 150+ nations, planted 5,000 churches'
                },
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
                quote: '"The nations are waiting—will you answer the call?"',
                gradient: 'from-accent-red to-primary-gold'
              },
              {
                name: 'Minister Grace Adebayo',
                role: 'Director of Youth & Next Generation',
                journey: {
                  before: 'Lost youth, no direction or vision for future',
                  transformation: 'Encountered God at Divinity Conference 2018',
                  now: 'Leading youth movement across Africa, 100K+ young people mentored'
                },
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600',
                quote: '"This generation will shake nations for the kingdom."',
                gradient: 'from-accent-teal to-accent-purple'
              },
              {
                name: 'Pastor Michael Obi',
                role: 'Director of Media & Communications',
                journey: {
                  before: 'Successful media professional but spiritually empty',
                  transformation: 'Surrendered career to God\'s call in 2015',
                  now: 'Overseeing media ministry reaching 5M+ monthly through digital platforms'
                },
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600',
                quote: '"Every platform is a pulpit for kingdom impact."',
                gradient: 'from-primary-gold to-primary-blue-light'
              },
              {
                name: 'Dr. Favour Chioma',
                role: 'Director of Leadership Development',
                journey: {
                  before: 'Academic success but no spiritual depth',
                  transformation: 'Mentored by Pastor David, discovered leadership calling',
                  now: 'Training 1,000+ leaders annually through Reachworld Nation Institute'
                },
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600',
                quote: '"Leaders aren\'t born—they\'re forged through transformation."',
                gradient: 'from-primary-gold to-accent-red'
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  {/* Leader Photo */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80`} />

                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-black text-white mb-1">{leader.name}</h3>
                      <p className={`text-lg font-semibold text-primary-gold`}>
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Transformation Journey */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 font-bold text-sm">BEFORE:</span>
                        <p className="text-gray-600 text-sm flex-1">{leader.journey.before}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-500 font-bold text-sm">SHIFT:</span>
                        <p className="text-gray-700 text-sm flex-1 font-semibold">{leader.journey.transformation}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 font-bold text-sm">NOW:</span>
                        <p className="text-gray-900 text-sm flex-1 font-bold">{leader.journey.now}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className={`border-l-4 border-primary-blue pl-4 py-3 italic text-gray-700 bg-gray-50 rounded-r-xl`}>
                      {leader.quote}
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
