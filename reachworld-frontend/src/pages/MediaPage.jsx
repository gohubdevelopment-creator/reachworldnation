import { motion } from 'framer-motion';
import { FaPlay, FaVideo, FaHeadphones, FaPodcast, FaImages, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('sermons');

  const sermons = [
    {
      title: 'The Power of Kingdom Authority',
      date: '2025-03-15',
      duration: '45:30',
      views: '125K',
      thumbnail: '🎤',
      type: 'video'
    },
    {
      title: 'Walking in Divine Revelation',
      date: '2025-03-08',
      duration: '38:20',
      views: '98K',
      thumbnail: '✨',
      type: 'video'
    },
    {
      title: 'Faith That Moves Mountains',
      date: '2025-03-01',
      duration: '52:15',
      views: '156K',
      thumbnail: '⛰️',
      type: 'video'
    }
  ];

  const clips = [
    {
      title: 'Transform Your Mindset',
      duration: '2:30',
      views: '45K',
      thumbnail: '🧠'
    },
    {
      title: 'Kingdom Principles for Success',
      duration: '3:15',
      views: '67K',
      thumbnail: '👑'
    },
    {
      title: 'Prayer That Gets Results',
      duration: '2:45',
      views: '89K',
      thumbnail: '🙏'
    }
  ];

  const podcasts = [
    {
      title: 'Transformation Talk - Episode 45',
      date: '2025-03-10',
      duration: '55:00',
      listens: '12K',
      thumbnail: '🎧'
    },
    {
      title: 'Leadership Insights with Pastor David',
      date: '2025-03-05',
      duration: '48:30',
      listens: '15K',
      thumbnail: '🎙️'
    }
  ];

  const gallery = [
    { title: 'Divinity Life Conference 2024', images: 45, thumbnail: '📸' },
    { title: 'Global Outreach - Nigeria', images: 120, thumbnail: '🌍' },
    { title: 'Youth Empowerment Summit', images: 67, thumbnail: '👥' },
    { title: 'Book Launch Events', images: 34, thumbnail: '📚' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue via-electric-purple to-vibrant-orange text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">Media Center</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Watch powerful messages, listen to podcasts, and experience transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Stream Banner */}
      <section className="bg-holy-fire text-white py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <p className="text-xl font-bold">LIVE STREAM: Sunday Service at 9:00 AM WAT</p>
            <button className="bg-white text-holy-fire px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-all">
              Watch Live
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'sermons', label: 'Sermons & Teachings', icon: FaVideo },
              { id: 'clips', label: 'Short Clips', icon: FaPlay },
              { id: 'podcasts', label: 'Podcasts', icon: FaPodcast },
              { id: 'gallery', label: 'Photo Gallery', icon: FaImages }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-royal-blue text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons & Teachings */}
      {activeTab === 'sermons' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black text-royal-blue mb-8">Recent Sermons & Teachings</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sermons.map((sermon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                  >
                    {/* Video Thumbnail */}
                    <div className="bg-gradient-to-br from-royal-blue to-electric-purple h-48 flex items-center justify-center text-7xl relative group-hover:scale-105 transition-transform">
                      {sermon.thumbnail}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <FaPlay className="text-white text-4xl opacity-80 group-hover:scale-125 transition-transform" />
                      </div>
                    </div>

                    {/* Video Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-black text-gray-900 mb-2">{sermon.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>{sermon.date}</span>
                        <span>{sermon.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">{sermon.views} views</span>
                        <FaYoutube className="text-2xl text-red-600" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-royal-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-electric-purple transition-all">
                  Load More Sermons
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Short Clips */}
      {activeTab === 'clips' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black text-royal-blue mb-4">Transformation Nuggets</h2>
              <p className="text-xl text-gray-600 mb-8">Quick, powerful insights to transform your day</p>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {clips.map((clip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gradient-to-br from-vibrant-orange to-holy-fire rounded-2xl p-6 text-white cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div className="text-6xl mb-3">{clip.thumbnail}</div>
                    <h3 className="text-lg font-bold mb-2">{clip.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span>{clip.duration}</span>
                      <span>{clip.views}</span>
                    </div>
                    <button className="w-full mt-4 bg-white text-vibrant-orange py-2 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                      <FaPlay /> Watch
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Podcasts */}
      {activeTab === 'podcasts' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black text-royal-blue mb-8">Podcast Episodes</h2>
              <div className="space-y-6">
                {podcasts.map((podcast, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all flex items-center gap-6"
                  >
                    <div className="bg-gradient-to-br from-royal-blue to-electric-purple w-24 h-24 rounded-xl flex items-center justify-center text-5xl flex-shrink-0">
                      {podcast.thumbnail}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{podcast.title}</h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span>{podcast.date}</span>
                        <span>•</span>
                        <span>{podcast.duration}</span>
                        <span>•</span>
                        <span>{podcast.listens} listens</span>
                      </div>
                    </div>
                    <button className="bg-royal-blue text-white p-4 rounded-full hover:bg-electric-purple transition-all">
                      <FaHeadphones className="text-2xl" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Podcast Platforms */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Listen on Your Favorite Platform</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Spotify', 'Apple Podcasts', 'Google Podcasts', 'YouTube'].map((platform) => (
                    <button
                      key={platform}
                      className="bg-white px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-royal-blue hover:text-white transition-all"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery */}
      {activeTab === 'gallery' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black text-royal-blue mb-8">Event Photo Galleries</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {gallery.map((album, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-brand-gold to-vibrant-orange h-64 flex items-center justify-center text-9xl group-hover:scale-105 transition-transform">
                      {album.thumbnail}
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{album.title}</h3>
                      <p className="text-gray-600 mb-4">{album.images} photos</p>
                      <button className="w-full bg-royal-blue text-white py-3 rounded-xl font-bold hover:bg-electric-purple transition-all">
                        View Gallery
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-royal-blue to-electric-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Subscribe to Our Channel</h2>
            <p className="text-xl text-white/90 mb-8">
              Get notified when new sermons and teachings are uploaded
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-red-700 transition-all shadow-lg flex items-center gap-3 mx-auto">
              <FaYoutube className="text-3xl" />
              Subscribe on YouTube
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
