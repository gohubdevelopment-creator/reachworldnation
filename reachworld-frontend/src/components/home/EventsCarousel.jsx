import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventsCarousel = () => {
  const events = [
    {
      title: 'Divinity Life Conference 2025',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Lagos, Nigeria',
      description: 'Experience powerful teachings on divine revelation and kingdom principles.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop',
      featured: true
    },
    {
      title: 'Global Outreach Mission',
      date: 'April 5-12, 2025',
      time: 'All Day',
      location: 'Multiple Locations',
      description: 'Join us as we spread the gospel across nations.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
      featured: false
    },
    {
      title: 'Youth Empowerment Summit',
      date: 'May 20, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Abuja, Nigeria',
      description: 'Equipping the next generation with purpose and leadership skills.',
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&h=400&fit=crop',
      featured: false
    },
    {
      title: 'Book Launch: "Kingdom Mindset"',
      date: 'June 8, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Virtual Event',
      description: 'Exclusive launch of the latest transformational book.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      featured: false
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
          <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us for life-changing conferences and gatherings
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
                  {/* Event Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    {event.featured && (
                      <div className="absolute top-4 right-4 bg-brand-gold text-deep-charcoal px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-deep-charcoal mb-3">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2 text-royal-blue" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-2 text-royal-blue" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2 text-royal-blue" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {event.description}
                    </p>

                    <button className={`w-full ${
                      event.featured ? 'btn-primary' : 'btn-secondary'
                    } text-center`}>
                      Register Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Events Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/events"
            className="inline-block text-royal-blue font-semibold text-lg hover:text-brand-gold transition-colors duration-300"
          >
            View All Events →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsCarousel;
