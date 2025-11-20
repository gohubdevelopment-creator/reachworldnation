import { motion } from 'framer-motion';
import { FaPrayingHands, FaMusic, FaHandsHelping, FaBible, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const PrayerWorshipActivities = () => {
  const activities = [
    {
      icon: FaPrayingHands,
      title: 'Morning Prayer',
      time: 'Daily - 6:00 AM',
      location: 'Online & In-Person',
      description: 'Start your day with powerful intercession and praise',
      color: 'from-royal-blue-500 to-royal-blue-700',
      participants: '500+ believers',
      status: 'Happening Now'
    },
    {
      icon: FaMusic,
      title: 'Worship Night',
      time: 'Every Friday - 7:00 PM',
      location: 'Church Headquarters',
      description: 'Experience God\'s presence through worship and the Word',
      color: 'from-royal-blue-600 to-royal-blue-800',
      participants: '1,200+ believers',
      status: 'This Friday'
    },
    {
      icon: FaBible,
      title: 'Bible Study',
      time: 'Wednesday - 6:30 PM',
      location: 'Multiple Locations',
      description: 'Dive deep into the Word with interactive teaching',
      color: 'from-accent-blue to-royal-blue-600',
      participants: '800+ believers',
      status: 'Tomorrow'
    },
    {
      icon: FaHandsHelping,
      title: 'Intercessory Prayer',
      time: 'Saturday - 5:00 AM',
      location: 'Prayer Mountain',
      description: 'Join us in fervent prayer for nations and families',
      color: 'from-brand-gold-500 to-brand-gold-700',
      participants: '300+ intercessors',
      status: 'This Saturday'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-royal-blue/10 text-royal-blue px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Join Our Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-4">
            Prayer & Worship Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow believers in powerful times of prayer, worship, and the Word
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`bg-gradient-to-br ${activity.color} rounded-xl p-6 text-white h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="text-3xl" />
                  </div>

                  {/* Status Badge */}
                  <div className="inline-block bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {activity.status}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-white/90">
                    <div className="flex items-center space-x-2 text-sm">
                      <FaClock className="text-white/70" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <FaMapMarkerAlt className="text-white/70" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-sm mb-4">{activity.description}</p>

                  {/* Participants */}
                  <p className="text-xs text-white/70 mb-4">{activity.participants}</p>

                  {/* CTA Button */}
                  <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-semibold hover:bg-brand-gold transition-all duration-300">
                    Join Activity
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Prayer Request Section */}
        <motion.div
          className="bg-gradient-to-r from-royal-blue to-blue-900 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <FaPrayingHands className="text-5xl text-brand-gold mb-4" />
              <h3 className="text-3xl font-bold mb-4">Need Prayer Right Now?</h3>
              <p className="text-xl text-gray-200 mb-6">
                Our intercessory team is standing by to pray with you. Share your prayer need and experience God's power.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online Now</span>
                </div>
                <span>•</span>
                <span>Response within 24 hours</span>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-brand-gold"
                />
                <textarea
                  placeholder="Share your prayer request..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-brand-gold resize-none"
                ></textarea>
                <button className="w-full bg-brand-gold text-deep-charcoal py-3 rounded-lg font-bold hover:bg-white transition-all duration-300">
                  Submit Prayer Request
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrayerWorshipActivities;
