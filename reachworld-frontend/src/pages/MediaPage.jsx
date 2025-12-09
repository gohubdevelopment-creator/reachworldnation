import { motion } from 'framer-motion';
import { FaPlay, FaVideo, FaHeadphones, FaPodcast, FaImages, FaYoutube, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('sermons');

  // Teaching transformation stories - how sermons changed lives
  const teachingStories = [
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      sermon: 'Kingdom Mindset for Business',
      watchedDate: 'January 2024',
      before: 'Business failing, ₦5M in debt, losing hope',
      transformation: 'Watched sermon series on kingdom principles, applied faith-based strategies',
      after: 'Revenue increased 400% in 6 months, debt cleared, now employs 15 people',
      quote: 'That sermon didn\'t just teach me—it transformed my entire approach to business. I went from survival to thriving.',
      gradient: 'from-brand-gold to-vibrant-orange',
      livesImpacted: '2,400+'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      sermon: 'Breaking Free from Bondage',
      watchedDate: 'March 2023',
      before: '12 years battling addiction, broken relationships, lost career',
      transformation: 'Encountered God\'s power through this message, applied deliverance principles',
      after: 'Completely free from addiction, marriage restored, now leads recovery ministry reaching 200+ annually',
      quote: 'I watched this sermon at 3 AM in my darkest hour. By morning, I was a different person. God\'s power broke every chain.',
      gradient: 'from-electric-purple to-royal-blue',
      livesImpacted: '1,800+'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      sermon: 'Divine Purpose & Calling',
      watchedDate: 'June 2024',
      before: 'Dead-end job, living paycheck to paycheck, no vision',
      transformation: 'Message revealed her kingdom calling, shifted from employee to entrepreneur mindset',
      after: 'Started consulting firm, now impacting 50+ African businesses, mentoring young entrepreneurs',
      quote: 'This teaching unlocked a version of myself I didn\'t know existed. My whole life trajectory changed in 52 minutes.',
      gradient: 'from-holy-fire to-vibrant-orange',
      livesImpacted: '950+'
    }
  ];

  // Spiritual journey paths - curated sermon playlists with outcomes
  const journeyPaths = [
    {
      title: 'New Believer Journey',
      description: 'Start your walk with Christ with foundational teachings',
      sermons: 5,
      duration: '4 hours',
      completions: '12,000+',
      gradient: 'from-sky-blue to-electric-purple',
      icon: '🌱',
      outcome: 'Sarah from UK: "Went from confusion to clarity. Now leading a small group!"'
    },
    {
      title: 'Faith Breakthrough Path',
      description: 'Overcome doubt and step into supernatural faith',
      sermons: 7,
      duration: '6 hours',
      completions: '8,500+',
      gradient: 'from-brand-gold to-vibrant-orange',
      icon: '⚡',
      outcome: 'John from Nigeria: "My business went from failing to flourishing. Faith works!"'
    },
    {
      title: 'Leadership Development',
      description: 'Transform from follower to kingdom leader',
      sermons: 10,
      duration: '8 hours',
      completions: '5,200+',
      gradient: 'from-royal-blue to-electric-purple',
      icon: '👑',
      outcome: 'Pastor James: "These teachings took my church from 30 to 2,000 members."'
    },
    {
      title: 'Prophetic & Spiritual Gifts',
      description: 'Activate and operate in your spiritual gifts',
      sermons: 6,
      duration: '5 hours',
      completions: '6,800+',
      gradient: 'from-electric-purple to-holy-fire',
      icon: '🔥',
      outcome: 'Grace from Ghana: "Now operating in prophecy, seeing lives transformed weekly."'
    }
  ];

  // Featured sermons with transformation data
  const sermons = [
    {
      title: 'The Power of Kingdom Authority',
      date: 'March 15, 2025',
      duration: '45:30',
      views: '125K',
      thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
      livesChanged: '2,400+',
      category: 'Authority',
      testimonial: '"This message gave me authority over my circumstances" - Sarah O.',
      gradient: 'from-royal-blue to-electric-purple'
    },
    {
      title: 'Walking in Divine Revelation',
      date: 'March 8, 2025',
      duration: '38:20',
      views: '98K',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      livesChanged: '1,800+',
      category: 'Revelation',
      testimonial: '"God spoke directly to me through this teaching" - Michael C.',
      gradient: 'from-electric-purple to-vibrant-orange'
    },
    {
      title: 'Faith That Moves Mountains',
      date: 'March 1, 2025',
      duration: '52:15',
      views: '156K',
      thumbnail: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800',
      livesChanged: '3,100+',
      category: 'Faith',
      testimonial: '"My impossible situation became possible after this sermon" - Grace M.',
      gradient: 'from-brand-gold to-holy-fire'
    },
    {
      title: 'Breaking Generational Curses',
      date: 'February 22, 2025',
      duration: '48:45',
      views: '142K',
      thumbnail: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800',
      livesChanged: '2,700+',
      category: 'Deliverance',
      testimonial: '"Patterns that plagued my family for decades—broken!" - David A.',
      gradient: 'from-holy-fire to-vibrant-orange'
    },
    {
      title: 'Kingdom Mindset for Wealth',
      date: 'February 15, 2025',
      duration: '55:20',
      views: '189K',
      thumbnail: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800',
      livesChanged: '4,200+',
      category: 'Prosperity',
      testimonial: '"Changed how I see money. Business exploded!" - Sarah O.',
      gradient: 'from-brand-gold to-vibrant-orange'
    },
    {
      title: 'The Anointing for Ministry',
      date: 'February 8, 2025',
      duration: '42:30',
      views: '112K',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      livesChanged: '1,900+',
      category: 'Anointing',
      testimonial: '"Stepped into my calling after this message" - Pastor John A.',
      gradient: 'from-electric-purple to-sky-blue'
    }
  ];

  // Podcast guest transformation stories
  const podcastEpisodes = [
    {
      title: 'From Addiction to Ambassador - Michael\'s Story',
      episode: 'Episode 45',
      date: 'March 10, 2025',
      duration: '55:00',
      listens: '12K',
      guest: 'Michael Chen',
      guestImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      journey: 'Michael shares his 12-year battle with addiction and the divine encounter that set him free',
      breakthrough: 'Discusses the exact moment watching Pastor David\'s sermon that broke every chain',
      now: 'Leading recovery ministry in Singapore reaching 200+ people annually',
      quote: '"I went from hopeless addict to hope dealer in one supernatural encounter."'
    },
    {
      title: 'Kingdom Business Blueprint - Sarah\'s Testimony',
      episode: 'Episode 42',
      date: 'March 5, 2025',
      duration: '48:30',
      listens: '15K',
      guest: 'Sarah Okonkwo',
      guestImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      journey: 'Sarah reveals how she went from ₦5M debt to thriving business owner',
      breakthrough: 'The kingdom mindset shift that changed everything in 6 months',
      now: 'Running successful business employing 15 people, mentoring entrepreneurs',
      quote: '"Applying kingdom principles turned my failing business into a flourishing empire."'
    },
    {
      title: 'Calling Discovered - Grace\'s Journey',
      episode: 'Episode 38',
      date: 'February 20, 2025',
      duration: '52:15',
      listens: '18K',
      guest: 'Grace Mensah',
      guestImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
      journey: 'From dead-end job to divine purpose—Grace shares her transformation',
      breakthrough: 'How one sermon unlocked her entrepreneurial calling',
      now: 'Consulting firm impacting 50+ African businesses, training next generation',
      quote: '"I went from surviving to thriving when I discovered my kingdom assignment."'
    }
  ];

  // Ministry moments gallery with stories
  const galleryAlbums = [
    {
      title: 'Divinity Life Conference 2024',
      images: 45,
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      story: '15,000 attendees. 8,200 salvations. 3,400 healings. Lives forever changed.',
      highlight: 'This is the moment 500 people rushed the altar for breakthrough prayer',
      gradient: 'from-royal-blue to-electric-purple'
    },
    {
      title: 'Global Outreach - Nigeria 2024',
      images: 120,
      thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
      story: 'Kano village crusade: 5,000 attended, 2,300 salvations, 3 churches planted',
      highlight: 'Sarah receiving prayer that led to her business breakthrough',
      gradient: 'from-brand-gold to-vibrant-orange'
    },
    {
      title: 'Youth Empowerment Summit 2024',
      images: 67,
      thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
      story: '2,000 young people equipped. 400 found their calling. Next generation rising.',
      highlight: 'The moment Grace discovered her entrepreneurial calling',
      gradient: 'from-sky-blue to-electric-purple'
    },
    {
      title: 'Book Launch & Signing Events',
      images: 34,
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      story: '50,000 books distributed. Lives transformed through written word.',
      highlight: 'Michael receiving the book that started his freedom journey',
      gradient: 'from-holy-fire to-vibrant-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Watch Lives Change */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600"
            alt="Worship gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/95 via-royal-blue-900/90 to-electric-purple/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Watch <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-vibrant-orange to-brand-gold-300 animate-glow">Lives Change</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Every sermon, every podcast, every message—designed to transform your life
            </p>

            {/* Teaching impact stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '5M+', label: 'Monthly Viewers' },
                { number: '10K+', label: 'Lives Transformed' },
                { number: '500+', label: 'Messages Available' },
                { number: '150+', label: 'Nations Reached' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-4xl font-black text-brand-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Stream Banner */}
      <section className="bg-holy-fire text-white py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              <p className="text-xl font-bold">LIVE STREAM: Sunday Service at 9:00 AM WAT</p>
            </div>
            <button className="bg-white text-holy-fire px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-all">
              Watch Live
            </button>
          </motion.div>
        </div>
      </section>

      {/* Teaching Transformation Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Sermons That Changed Everything</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              These aren't just viewers—they're lives forever transformed by the power of God's word
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {teachingStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  {/* Person & Sermon Info */}
                  <div className="md:col-span-2">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
                    />
                    <div className="bg-gradient-to-r from-royal-blue to-electric-purple text-white p-6 rounded-2xl">
                      <h3 className="text-2xl font-black mb-2">{story.name}</h3>
                      <p className="text-white/80 mb-4">{story.location}</p>
                      <div className="pt-4 border-t border-white/30">
                        <p className="text-sm font-semibold text-white/70 mb-1">WATCHED</p>
                        <p className="text-lg font-bold mb-1">"{story.sermon}"</p>
                        <p className="text-sm text-white/60">{story.watchedDate}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/30">
                        <p className="text-3xl font-black text-brand-gold">{story.livesImpacted}</p>
                        <p className="text-sm text-white/70">Lives impacted by this sermon</p>
                      </div>
                    </div>
                  </div>

                  {/* Transformation Journey */}
                  <div className="md:col-span-3">
                    <div className="space-y-6">
                      {/* Before */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 text-sm font-bold text-red-600 uppercase pt-1">Before:</div>
                        <p className="text-lg text-gray-700 flex-1">{story.before}</p>
                      </div>

                      {/* Transformation Process */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 text-sm font-bold text-yellow-600 uppercase pt-1">Journey:</div>
                        <p className="text-lg text-gray-800 font-semibold flex-1">{story.transformation}</p>
                      </div>

                      {/* After */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 text-sm font-bold text-green-600 uppercase pt-1">After:</div>
                        <div className="flex-1">
                          <p className="text-lg text-gray-900 font-bold mb-3">{story.after}</p>
                          <div className="flex items-center gap-2 text-green-600">
                            <FaCheckCircle />
                            <span className="text-sm font-semibold">Complete Transformation Achieved</span>
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className={`bg-gradient-to-r ${story.gradient} p-6 rounded-2xl text-white mt-8`}>
                        <FaQuoteLeft className="text-3xl text-white/50 mb-3" />
                        <blockquote className="text-xl italic leading-relaxed">
                          {story.quote}
                        </blockquote>
                        <p className="text-right mt-4 font-bold">— {story.name}</p>
                      </div>

                      {/* Watch CTA */}
                      <button className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                        <FaPlay />
                        Watch "{story.sermon}" That Transformed {story.name}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Spiritual Journey Paths */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Your Transformation Journey</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Curated sermon paths designed to take you from where you are to where God wants you to be
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {journeyPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${path.gradient} p-8 rounded-3xl text-white shadow-2xl hover:shadow-[0_0_60px_rgba(0,51,160,0.4)] transition-all duration-500`}>
                  <div className="text-7xl mb-4">{path.icon}</div>
                  <h3 className="text-3xl font-black mb-3">{path.title}</h3>
                  <p className="text-xl text-white/90 mb-6">{path.description}</p>

                  <div className="flex gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-black">{path.sermons}</div>
                      <div className="text-sm text-white/70">Sermons</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black">{path.duration}</div>
                      <div className="text-sm text-white/70">Total Time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black">{path.completions}</div>
                      <div className="text-sm text-white/70">Completed</div>
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/30">
                    <p className="text-sm font-semibold text-white/80 mb-2">SUCCESS STORY:</p>
                    <p className="italic text-white/95">"{path.outcome}"</p>
                  </div>

                  <button className="w-full bg-white text-royal-blue py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-3 group-hover:scale-105 duration-300">
                    <FaPlay />
                    Start This Journey
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sermons with Transformation Data */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Recent Teachings</h2>
            <p className="text-2xl text-gray-600">Life-changing messages available now</p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Sermon Thumbnail */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/50 group-hover:scale-125 transition-transform duration-300">
                        <FaPlay className="text-white text-2xl ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-brand-gold text-royal-blue px-3 py-1 rounded-full text-sm font-bold">
                      {sermon.category}
                    </div>
                  </div>

                  {/* Sermon Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-royal-blue transition-colors">
                      {sermon.title}
                    </h3>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>{sermon.date}</span>
                      <span>{sermon.duration}</span>
                    </div>

                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">{sermon.views} views</span>
                        <div className="flex items-center gap-2">
                          <FaCheckCircle className="text-green-500" />
                          <span className="text-green-600 font-bold">{sermon.livesChanged}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Lives transformed by this message</p>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm italic text-gray-700">{sermon.testimonial}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-royal-blue to-electric-purple text-white px-10 py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all">
              Load More Sermons
            </button>
          </div>
        </div>
      </section>

      {/* Podcast Guest Transformation Stories */}
      <section className="py-24 bg-gradient-to-br from-royal-blue via-electric-purple to-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaPodcast className="text-7xl mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">Transformation Talk Podcast</h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto">
              Real people, real stories, real transformation—hear the journeys that will inspire yours
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {podcastEpisodes.map((episode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-500 border border-white/20"
              >
                <div className="grid md:grid-cols-3 gap-6 p-8">
                  {/* Guest Photo & Info */}
                  <div className="text-center">
                    <img
                      src={episode.guestImage}
                      alt={episode.guest}
                      className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-brand-gold"
                    />
                    <h3 className="text-2xl font-black mb-2">{episode.guest}</h3>
                    <p className="text-brand-gold font-semibold mb-4">{episode.episode}</p>
                    <div className="text-sm text-white/70">
                      <p>{episode.date}</p>
                      <p>{episode.duration}</p>
                      <p className="mt-2 font-semibold">{episode.listens} listens</p>
                    </div>
                  </div>

                  {/* Episode Details */}
                  <div className="md:col-span-2">
                    <h4 className="text-3xl font-black mb-6">{episode.title}</h4>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm font-bold text-brand-gold mb-2">THE JOURNEY:</p>
                        <p className="text-white/90">{episode.journey}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-gold mb-2">THE BREAKTHROUGH:</p>
                        <p className="text-white/90">{episode.breakthrough}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-gold mb-2">NOW:</p>
                        <p className="text-white font-semibold">{episode.now}</p>
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/30">
                      <FaQuoteLeft className="text-2xl text-brand-gold mb-2" />
                      <p className="italic text-lg">{episode.quote}</p>
                    </div>

                    <button className="w-full bg-brand-gold text-royal-blue py-4 rounded-xl font-black text-lg hover:bg-white transition-all flex items-center justify-center gap-3">
                      <FaHeadphones />
                      Listen to {episode.guest}'s Story
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Podcast Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
          >
            <h3 className="text-3xl font-black mb-6">Listen on Your Favorite Platform</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Spotify', 'Apple Podcasts', 'Google Podcasts', 'YouTube Music'].map((platform) => (
                <button
                  key={platform}
                  className="bg-white text-royal-blue px-8 py-4 rounded-xl font-bold hover:bg-brand-gold transition-all"
                >
                  {platform}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministry Moments Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaImages className="text-7xl text-royal-blue mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Ministry Moments</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Capturing transformation as it happens—see the moments that changed lives forever
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {galleryAlbums.map((album, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(0,51,160,0.3)] transition-all duration-500">
                  {/* Gallery Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={album.thumbnail}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Album Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <FaImages className="text-brand-gold text-2xl" />
                        <span className="text-white font-bold">{album.images} Photos</span>
                      </div>
                      <h3 className="text-3xl font-black text-white mb-3">{album.title}</h3>
                      <p className="text-white/90 text-lg">{album.story}</p>
                    </div>
                  </div>

                  {/* Album Details */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                    <div className="flex items-start gap-3 mb-4">
                      <FaCheckCircle className="text-green-500 text-xl mt-1" />
                      <div>
                        <p className="text-sm font-bold text-gray-700 mb-1">HIGHLIGHTED MOMENT:</p>
                        <p className="text-gray-900 font-semibold">{album.highlight}</p>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-4 rounded-xl font-black hover:shadow-2xl transition-all">
                      View Full Gallery
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-gradient-to-br from-holy-fire to-vibrant-orange text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <FaYoutube className="text-8xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">Don't Miss the Next Transformation</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to get notified when new life-changing messages are uploaded
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-holy-fire px-10 py-5 rounded-xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center gap-3">
                <FaYoutube className="text-3xl" />
                Subscribe on YouTube
              </button>
              <button className="bg-royal-blue text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-electric-purple transition-all shadow-2xl">
                Join Email List
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
