import { motion } from 'framer-motion';
import { FaBook, FaSearch, FaComment, FaShare } from 'react-icons/fa';
import { useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Mindset', 'Leadership', 'Faith', 'Kingdom', 'Purpose'];

  const posts = [
    {
      title: 'The Kingdom Mindset: Thinking Like Heaven',
      excerpt: 'Discover how to align your thoughts with divine perspective and unlock supernatural breakthroughs in every area of life.',
      author: 'Pastor David S. Okeke',
      date: 'March 15, 2025',
      category: 'Kingdom',
      readTime: '5 min read',
      image: '👑'
    },
    {
      title: '7 Principles of Transformational Leadership',
      excerpt: 'Learn the biblical foundations of leading with authority, influence, and Christ-like excellence.',
      author: 'Pastor David S. Okeke',
      date: 'March 10, 2025',
      category: 'Leadership',
      readTime: '8 min read',
      image: '⭐'
    },
    {
      title: 'Breaking Free from Limiting Beliefs',
      excerpt: 'How to identify and destroy mental strongholds that keep you from your God-given potential.',
      author: 'Pastor David S. Okeke',
      date: 'March 5, 2025',
      category: 'Mindset',
      readTime: '6 min read',
      image: '🧠'
    },
    {
      title: 'Faith That Moves Mountains: Practical Steps',
      excerpt: 'Activate mountain-moving faith through these proven spiritual principles and declarations.',
      author: 'Pastor David S. Okeke',
      date: 'February 28, 2025',
      category: 'Faith',
      readTime: '7 min read',
      image: '⛰️'
    },
    {
      title: 'Discovering Your Divine Purpose',
      excerpt: 'A step-by-step guide to finding and fulfilling the unique assignment God has for your life.',
      author: 'Pastor David S. Okeke',
      date: 'February 20, 2025',
      category: 'Purpose',
      readTime: '10 min read',
      image: '🎯'
    }
  ];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue via-electric-purple to-sky-blue text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FaBook className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">Messages & Insights</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Transformational teachings on mindset, leadership, faith, and kingdom principles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-royal-blue text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                >
                  {/* Featured Image */}
                  <div className="bg-gradient-to-br from-royal-blue to-electric-purple h-64 flex items-center justify-center text-9xl group-hover:scale-105 transition-transform">
                    {post.image}
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-royal-blue bg-royal-blue/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-royal-blue transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                      <button className="text-royal-blue font-bold hover:text-electric-purple transition-colors">
                        Read More →
                      </button>
                    </div>

                    {/* Social Actions */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-royal-blue transition-colors">
                        <FaComment /> Comment
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-royal-blue transition-colors">
                        <FaShare /> Share
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-royal-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-electric-purple transition-all">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-royal-blue to-electric-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Never Miss an Update</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to receive fresh revelations and transformational insights directly to your inbox
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none"
              />
              <button className="bg-brand-gold text-royal-blue px-8 py-4 rounded-xl font-black hover:bg-white transition-all whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 50,000+ subscribers receiving weekly inspiration
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
