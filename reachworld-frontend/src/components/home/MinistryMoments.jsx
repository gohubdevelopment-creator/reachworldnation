import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

const MinistryMoments = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const moments = [
    {
      image: 'https://images.unsplash.com/photo-1510674485131-d4b499a30f4b?w=800&h=600&fit=crop',
      title: 'Powerful Worship',
      category: 'Worship Service',
      isVideo: false
    },
    {
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop',
      title: 'Healing & Deliverance',
      category: 'Ministry',
      isVideo: true
    },
    {
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
      title: 'Hands Raised in Praise',
      category: 'Worship',
      isVideo: false
    },
    {
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop',
      title: 'Prayer & Intercession',
      category: 'Prayer Meeting',
      isVideo: false
    },
    {
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&h=600&fit=crop',
      title: 'Youth on Fire',
      category: 'Youth Service',
      isVideo: true
    },
    {
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
      title: 'Global Outreach',
      category: 'Missions',
      isVideo: false
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-white to-neutral-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary-gold/20 text-primary-gold px-6 py-3 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
            See God At Work
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-primary-blue mb-6 leading-none">
            Ministry In
            <span className="block text-primary-gold">
              Action
            </span>
          </h2>
          <p className="text-2xl text-neutral-gray max-w-3xl mx-auto">
            Witness the power of God transforming lives in real-time through worship, healing, and deliverance
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(moment)}
            >
              {/* Image */}
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Overlay for Better Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/40 to-transparent"></div>

              {/* Play Icon for Videos */}
              {moment.isVideo && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="bg-primary-gold p-6 rounded-full group-hover:scale-125 transition-all duration-300 shadow-lg">
                    <FaPlay className="text-4xl text-neutral-dark" />
                  </div>
                </motion.div>
              )}

              {/* Text Overlay - Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-neutral-white">
                <span className="inline-block bg-primary-gold text-neutral-dark px-3 py-1 rounded-full text-xs font-semibold mb-2 uppercase tracking-wide">
                  {moment.category}
                </span>
                <h3 className="text-2xl font-black">{moment.title}</h3>
              </div>

              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 bg-primary-gold p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <svg className="w-5 h-5 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-neutral-gray mb-6">
            Want to experience this for yourself?
          </p>
          <motion.button
            className="bg-primary-gold text-neutral-dark text-xl font-bold px-10 py-5 rounded-xl shadow-2xl hover:bg-primary-gold-light transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 bg-primary-gold p-4 rounded-full hover:bg-primary-gold-light transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes className="text-3xl text-neutral-dark" />
          </button>
          <motion.img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute bottom-8 left-8 right-8 text-center text-neutral-white">
            <span className="inline-block bg-primary-gold text-neutral-dark px-4 py-2 rounded-full text-sm font-semibold mb-3">
              {selectedImage.category}
            </span>
            <h3 className="text-4xl font-black">{selectedImage.title}</h3>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default MinistryMoments;
