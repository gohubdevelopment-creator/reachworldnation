import { motion } from 'framer-motion';
import { FaBook, FaSearch, FaComment, FaShare, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Mindset', 'Leadership', 'Faith', 'Kingdom', 'Purpose'];

  // Featured transformation stories - readers who applied teachings
  const featuredStories = [
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      post: 'The Kingdom Mindset: Thinking Like Heaven',
      before: 'Business failing, ₦5M debt, employee mindset',
      transformation: 'Applied kingdom business principles from this article',
      after: 'Revenue increased 400%, debt cleared, now employs 15 people',
      quote: 'This article didn\'t just inform me—it transformed how I think about business and wealth.',
      gradient: 'from-brand-gold to-vibrant-orange',
      readersImpacted: '12,400+'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      post: 'Breaking Free from Limiting Beliefs',
      before: '12 years battling addiction, bound by mental strongholds',
      transformation: 'Identified and destroyed limiting beliefs using steps from this post',
      after: 'Free from addiction, marriage restored, leads recovery ministry',
      quote: 'The mental stronghold identification process in this article was the key to my freedom.',
      gradient: 'from-electric-purple to-royal-blue',
      readersImpacted: '8,900+'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      post: 'Discovering Your Divine Purpose',
      before: 'Dead-end job, no vision, confused about calling',
      transformation: 'Followed step-by-step purpose discovery guide',
      after: 'Started consulting firm, impacting 50+ African businesses',
      quote: 'The 10-step process revealed my calling with crystal clarity. I finally know why I\'m alive.',
      gradient: 'from-holy-fire to-vibrant-orange',
      readersImpacted: '15,600+'
    }
  ];

  const posts = [
    {
      title: 'The Kingdom Mindset: Thinking Like Heaven',
      excerpt: 'Discover how to align your thoughts with divine perspective and unlock supernatural breakthroughs in every area of life.',
      author: 'Pastor David S. Okeke',
      date: 'March 15, 2025',
      category: 'Kingdom',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800',
      readersTransformed: '12,400+',
      testimonial: '"Changed how I see business and wealth" - Sarah O.'
    },
    {
      title: '7 Principles of Transformational Leadership',
      excerpt: 'Learn the biblical foundations of leading with authority, influence, and Christ-like excellence.',
      author: 'Pastor David S. Okeke',
      date: 'March 10, 2025',
      category: 'Leadership',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
      readersTransformed: '9,200+',
      testimonial: '"My church grew from 30 to 2,000 using these principles" - Pastor John A.'
    },
    {
      title: 'Breaking Free from Limiting Beliefs',
      excerpt: 'How to identify and destroy mental strongholds that keep you from your God-given potential.',
      author: 'Pastor David S. Okeke',
      date: 'March 5, 2025',
      category: 'Mindset',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      readersTransformed: '8,900+',
      testimonial: '"The key to my freedom from addiction" - Michael C.'
    },
    {
      title: 'Faith That Moves Mountains: Practical Steps',
      excerpt: 'Activate mountain-moving faith through these proven spiritual principles and declarations.',
      author: 'Pastor David S. Okeke',
      date: 'February 28, 2025',
      category: 'Faith',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800',
      readersTransformed: '11,300+',
      testimonial: '"My impossible situation became possible" - Grace M.'
    },
    {
      title: 'Discovering Your Divine Purpose',
      excerpt: 'A step-by-step guide to finding and fulfilling the unique assignment God has for your life.',
      author: 'Pastor David S. Okeke',
      date: 'February 20, 2025',
      category: 'Purpose',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      readersTransformed: '15,600+',
      testimonial: '"Finally know why I\'m alive" - Grace M.'
    },
    {
      title: 'Kingdom Prosperity: God\'s Blueprint for Wealth',
      excerpt: 'Unlock biblical principles for supernatural provision and financial breakthrough.',
      author: 'Pastor David S. Okeke',
      date: 'February 12, 2025',
      category: 'Kingdom',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800',
      readersTransformed: '13,800+',
      testimonial: '"Business revenue increased 400% in 6 months" - Sarah O.'
    }
  ];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600"
            alt="Writing and learning"
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
            <FaBook className="text-7xl mx-auto mb-6" />
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Teachings That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-vibrant-orange to-brand-gold-300 animate-glow">Transform Lives</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Biblical insights and kingdom principles that readers are applying to change their world
            </p>

            {/* Blog impact stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '500+', label: 'Articles Published' },
                { number: '50K+', label: 'Readers Transformed' },
                { number: '1M+', label: 'Monthly Readers' },
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

      {/* Featured Transformation Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Readers Who Applied These Teachings</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              These aren't just blog posts—they're transformation blueprints that real people are using to change their lives
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {featuredStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  {/* Reader Info */}
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
                        <p className="text-sm font-semibold text-white/70 mb-1">APPLIED ARTICLE</p>
                        <p className="text-lg font-bold mb-1">"{story.post}"</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/30">
                        <p className="text-3xl font-black text-brand-gold">{story.readersImpacted}</p>
                        <p className="text-sm text-white/70">Readers transformed by this article</p>
                      </div>
                    </div>
                  </div>

                  {/* Transformation Journey */}
                  <div className="md:col-span-3">
                    <div className="space-y-6">
                      {/* Before */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-28 text-sm font-bold text-red-600 uppercase pt-1">Before Reading:</div>
                        <p className="text-lg text-gray-700 flex-1">{story.before}</p>
                      </div>

                      {/* Application */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-28 text-sm font-bold text-yellow-600 uppercase pt-1">Applied:</div>
                        <p className="text-lg text-gray-800 font-semibold flex-1">{story.transformation}</p>
                      </div>

                      {/* Result */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-28 text-sm font-bold text-green-600 uppercase pt-1">Result:</div>
                        <div className="flex-1">
                          <p className="text-lg text-gray-900 font-bold mb-3">{story.after}</p>
                          <div className="flex items-center gap-2 text-green-600">
                            <FaCheckCircle />
                            <span className="text-sm font-semibold">Life Transformation Through Application</span>
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

                      {/* Read CTA */}
                      <button className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                        <FaBook />
                        Read "{story.post}" & Transform Your Life
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group cursor-pointer"
                >
                  {/* Featured Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-sm font-bold text-white bg-brand-gold px-4 py-2 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-royal-blue transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <div className="flex items-center gap-2">
                          <FaCheckCircle className="text-green-500" />
                          <span className="text-green-600 font-bold">{post.readersTransformed}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Lives transformed by this teaching</p>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <p className="text-sm italic text-gray-700">{post.testimonial}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                      <button className="text-royal-blue font-bold hover:text-electric-purple transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-royal-blue to-electric-purple text-white px-10 py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-holy-fire to-vibrant-orange text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Transform Your Life Weekly</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to receive fresh revelations and transformational insights that thousands are using to change their world
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-5 rounded-xl text-gray-900 focus:outline-none text-lg"
              />
              <button className="bg-white text-holy-fire px-10 py-5 rounded-xl font-black hover:bg-gray-100 transition-all whitespace-nowrap text-lg shadow-2xl">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/80 text-sm mt-4">
              Join 50,000+ subscribers receiving weekly transformation teachings
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
