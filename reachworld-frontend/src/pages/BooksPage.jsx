import { motion } from 'framer-motion';
import { FaBook, FaDownload, FaShoppingCart, FaSearch, FaHeadphones, FaFilePdf } from 'react-icons/fa';
import { useState } from 'react';

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Faith', 'Leadership', 'Mindset', 'Kingdom', 'Purpose', 'Transformation'];

  const books = [
    {
      title: 'The Power of Divine Revelation',
      category: 'Faith',
      price: 'Free',
      isPaid: false,
      formats: ['PDF', 'Audio'],
      description: 'Unlock supernatural insights and walk in divine understanding',
      image: '📖'
    },
    {
      title: 'Kingdom Mindset Revolution',
      category: 'Kingdom',
      price: '$15.99',
      isPaid: true,
      formats: ['PDF', 'Audio', 'Hardcover'],
      description: 'Transform your thinking and operate from heaven\'s perspective',
      image: '👑'
    },
    {
      title: 'Leadership Excellence',
      category: 'Leadership',
      price: '$12.99',
      isPaid: true,
      formats: ['PDF', 'Audio'],
      description: 'Biblical principles for becoming an influential leader',
      image: '⭐'
    },
    {
      title: 'Faith That Moves Mountains',
      category: 'Faith',
      price: 'Free',
      isPaid: false,
      formats: ['PDF'],
      description: 'Activate mountain-moving faith in your life',
      image: '⛰️'
    },
    {
      title: 'Transformation Journey',
      category: 'Transformation',
      price: '$18.99',
      isPaid: true,
      formats: ['PDF', 'Audio', 'Hardcover'],
      description: 'Your 90-day guide to complete life transformation',
      image: '✨'
    },
    {
      title: 'Discovering Your Purpose',
      category: 'Purpose',
      price: 'Free',
      isPaid: false,
      formats: ['PDF', 'Audio'],
      description: 'Find and fulfill your God-given purpose',
      image: '🎯'
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Books & Resources</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transform your life with powerful teachings and divine revelation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">500K+</span> Books Distributed
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">50+</span> Titles Available
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search books by title or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Books Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredBooks.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500">No books found matching your criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBooks.map((book, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow group"
                  >
                    {/* Book Cover */}
                    <div className="bg-gradient-to-br from-royal-blue to-electric-purple h-64 flex items-center justify-center text-9xl group-hover:scale-105 transition-transform">
                      {book.image}
                    </div>

                    {/* Book Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-royal-blue bg-royal-blue/10 px-3 py-1 rounded-full">
                          {book.category}
                        </span>
                        <span className={`text-lg font-black ${book.isPaid ? 'text-brand-gold' : 'text-green-600'}`}>
                          {book.price}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-gray-900 mb-3">{book.title}</h3>
                      <p className="text-gray-600 mb-4">{book.description}</p>

                      {/* Available Formats */}
                      <div className="flex gap-2 mb-4">
                        {book.formats.map((format) => (
                          <span
                            key={format}
                            className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {format === 'PDF' && <FaFilePdf />}
                            {format === 'Audio' && <FaHeadphones />}
                            {format === 'Hardcover' && <FaBook />}
                            {format}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        {!book.isPaid && (
                          <button className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                            <FaDownload />
                            Download Free
                          </button>
                        )}
                        {book.isPaid && (
                          <>
                            <button className="w-full bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                              <FaShoppingCart />
                              Buy on Amazon
                            </button>
                            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all">
                              Buy on Selar
                            </button>
                          </>
                        )}
                        <button className="w-full bg-white border-2 border-royal-blue text-royal-blue py-3 rounded-xl font-bold hover:bg-royal-blue hover:text-white transition-all">
                          Preview Book
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Book Download Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-4">How to Get Your Free Books</h2>
            <p className="text-xl text-gray-600">Simple steps to access life-changing resources</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Select Book', description: 'Choose from our free book collection', icon: '📚' },
              { step: '2', title: 'Enter Email', description: 'Provide your email for verification', icon: '✉️' },
              { step: '3', title: 'Verify', description: 'Check your email and verify', icon: '✅' },
              { step: '4', title: 'Download', description: 'Receive instant download link', icon: '⬇️' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-4xl font-black text-royal-blue mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-royal-blue to-electric-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Start Your Transformation Today</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of readers worldwide who have experienced life-changing breakthroughs
            </p>
            <button className="bg-brand-gold text-royal-blue px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-lg">
              Browse All Books
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BooksPage;
