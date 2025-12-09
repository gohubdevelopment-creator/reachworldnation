import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTicketAlt } from 'react-icons/fa';

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: 'Divinity Life Conference 2025',
      date: 'June 15-17, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Lagos, Nigeria',
      venue: 'Eko Convention Center',
      description: 'Three days of powerful teachings, worship, and impartation. Experience divine revelation and kingdom authority.',
      type: 'Conference',
      status: 'Early Bird Registration',
      image: '🎤',
      color: 'from-royal-blue to-electric-purple'
    },
    {
      title: 'Global Leadership Summit',
      date: 'August 10-12, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'London, UK',
      venue: 'Excel London',
      description: 'Empowering leaders to transform their spheres of influence with biblical principles and strategic insights.',
      type: 'Summit',
      status: 'Registration Open',
      image: '👔',
      color: 'from-brand-gold to-vibrant-orange'
    },
    {
      title: 'Youth Empowerment Bootcamp',
      date: 'September 5-7, 2025',
      time: '8:00 AM - 4:00 PM',
      location: 'Accra, Ghana',
      venue: 'National Theatre',
      description: 'Intensive training for young leaders to discover purpose, develop skills, and make kingdom impact.',
      type: 'Bootcamp',
      status: 'Coming Soon',
      image: '🎯',
      color: 'from-holy-fire to-vibrant-orange'
    }
  ];

  const pastEvents = [
    {
      title: 'Divinity Life Conference 2024',
      date: 'June 2024',
      attendees: '15,000+',
      nations: '45',
      highlights: 'Powerful miracles, prophetic impartation, life transformations',
      image: '📸'
    },
    {
      title: 'Kingdom Business Summit 2024',
      date: 'March 2024',
      attendees: '5,000+',
      nations: '30',
      highlights: 'Business breakthroughs, strategic partnerships, financial miracles',
      image: '💼'
    }
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
            <FaCalendarAlt className="text-7xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">Events & Conferences</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Join us for life-changing gatherings around the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Mark your calendars for these transformational gatherings</p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Event Image/Icon */}
                  <div className={`bg-gradient-to-br ${event.color} h-full min-h-[300px] flex items-center justify-center text-9xl`}>
                    {event.image}
                  </div>

                  {/* Event Details */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-white bg-royal-blue px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                      <span className="text-sm font-semibold text-white bg-green-600 px-3 py-1 rounded-full">
                        {event.status}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaCalendarAlt className="text-royal-blue" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaClock className="text-royal-blue" />
                        <span className="font-semibold">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaMapMarkerAlt className="text-royal-blue" />
                        <span className="font-semibold">{event.location} - {event.venue}</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-royal-blue to-electric-purple text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <FaTicketAlt /> Register Now
                      </button>
                      <button className="px-6 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-4">Past Events Highlights</h2>
            <p className="text-xl text-gray-600">Celebrating what God has done</p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="bg-gradient-to-br from-brand-gold to-vibrant-orange h-48 flex items-center justify-center text-8xl">
                  {event.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-500 mb-4">{event.date}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-royal-blue/10 py-3 rounded-lg">
                      <div className="text-2xl font-black text-royal-blue">{event.attendees}</div>
                      <div className="text-sm text-gray-600">Attendees</div>
                    </div>
                    <div className="text-center bg-brand-gold/10 py-3 rounded-lg">
                      <div className="text-2xl font-black text-brand-gold">{event.nations}</div>
                      <div className="text-sm text-gray-600">Nations</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{event.highlights}</p>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-royal-blue hover:text-white transition-all">
                    View Gallery
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-royal-blue mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sync our events with your Google Calendar to never miss a gathering
            </p>
            <button className="bg-gradient-to-r from-royal-blue to-electric-purple text-white px-8 py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all flex items-center gap-3 mx-auto">
              <FaCalendarAlt /> Add to Google Calendar
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-royal-blue to-electric-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Don't Miss Out!</h2>
            <p className="text-xl text-white/90 mb-8">
              Register early for our upcoming events and secure your spot for a life-changing experience
            </p>
            <button className="bg-brand-gold text-royal-blue px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-lg">
              View All Events
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
