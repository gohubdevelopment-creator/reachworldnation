import { motion } from 'framer-motion';
import { FaPlay, FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const FoundersMessage = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Video Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!showVideo ? (
              <div className="relative group">
                {/* Founder's Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                    alt="David S. Okeke - Founder"
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setShowVideo(true)}
                      className="bg-brand-gold text-deep-charcoal p-6 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl"
                    >
                      <FaPlay className="text-4xl ml-1" />
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-royal-blue/20 rounded-full blur-2xl"></div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                {/* Video Placeholder */}
                <div className="w-full h-full bg-deep-charcoal flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaPlay className="text-6xl mx-auto mb-4" />
                    <p className="text-xl">Video Player Placeholder</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Integration will be added in Phase 2
                    </p>
                    <button
                      onClick={() => setShowVideo(false)}
                      className="mt-4 px-6 py-2 bg-brand-gold text-deep-charcoal rounded-lg hover:bg-white transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-block">
              <span className="bg-brand-gold/10 text-royal-blue px-4 py-2 rounded-full font-semibold text-sm">
                A MESSAGE FROM OUR FOUNDER
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal">
              Welcome to Reachworld Nation
            </h2>

            {/* Founder Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">DSO</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-deep-charcoal">David S. Okeke</h3>
                <p className="text-gray-600">Founder & Lead Pastor</p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative pl-8 border-l-4 border-brand-gold py-2">
              <FaQuoteLeft className="absolute top-0 left-2 text-brand-gold/30 text-3xl" />
              <p className="text-xl text-gray-700 italic leading-relaxed">
                "Our mission is not just to reach people, but to transform lives through
                divine revelation and kingdom principles. Every believer is called to walk
                in purpose and make a global impact."
              </p>
            </div>

            {/* Body Text */}
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                For over a decade, we've been committed to empowering believers worldwide
                through transformational teachings, powerful books, and global outreach programs.
              </p>
              <p>
                Whether you're seeking spiritual growth, looking to understand your purpose,
                or ready to make a difference in the world, you've come to the right place.
              </p>
              <p>
                Join us on this journey of transformation as we reach nations and change
                lives together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary">
                Learn More About Us
              </button>
              <button className="btn-secondary">
                Watch Full Message
              </button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-blue">15+</div>
                <div className="text-sm text-gray-600">Years of Ministry</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-blue">30+</div>
                <div className="text-sm text-gray-600">Books Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-blue">150+</div>
                <div className="text-sm text-gray-600">Nations Reached</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;
