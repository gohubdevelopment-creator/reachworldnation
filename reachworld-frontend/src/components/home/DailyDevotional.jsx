import { motion } from 'framer-motion';
import { FaBook, FaDownload, FaBible, FaQuoteLeft } from 'react-icons/fa';

const DailyDevotional = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const devotional = {
    title: "Walking in Divine Purpose",
    verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
    excerpt: "Today, God wants to remind you that every step you take is guided by His divine purpose. You are not wandering aimlessly; you are walking in the path He has prepared for you...",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=600&fit=crop"
  };

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={devotional.image}
                alt="Daily Devotional"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-2 mb-2">
                  <FaBible className="text-brand-gold text-2xl" />
                  <span className="text-brand-gold font-semibold">Today's Word</span>
                </div>
                <h3 className="text-2xl font-bold">{today}</h3>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-block bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full font-semibold text-sm mb-4">
                Daily Devotional
              </span>
              <h2 className="text-4xl font-bold mb-4">{devotional.title}</h2>
            </div>

            {/* Scripture Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-brand-gold">
              <FaQuoteLeft className="text-brand-gold text-2xl mb-3" />
              <p className="text-lg italic leading-relaxed mb-3">
                "{devotional.verse}"
              </p>
              <p className="text-brand-gold font-semibold">— {devotional.reference}</p>
            </div>

            {/* Excerpt */}
            <p className="text-gray-200 text-lg leading-relaxed">
              {devotional.excerpt}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-brand-gold text-deep-charcoal px-6 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300 flex items-center space-x-2 shadow-lg">
                <FaDownload />
                <span>Download Today's Devotional</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 border border-white/30">
                <FaBook />
                <span>Read Full Message</span>
              </button>
            </div>

            {/* Subscribe Prompt */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-sm mb-2">Get daily devotionals delivered to your email</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
                />
                <button className="bg-brand-gold text-deep-charcoal px-6 py-2 rounded-lg font-semibold hover:bg-white transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DailyDevotional;
