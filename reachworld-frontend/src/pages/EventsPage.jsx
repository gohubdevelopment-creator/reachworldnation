import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTicketAlt, FaCheckCircle, FaQuoteLeft, FaImages, FaUsers } from 'react-icons/fa';
import APIService from '../services/api';

const EventsPage = () => {
  const [processingEvent, setProcessingEvent] = useState(null);
  const [error, setError] = useState(null);

  // Handle event registration
  const handleEventRegistration = async (eventTitle) => {
    setProcessingEvent(eventTitle);
    setError(null);

    try {
      // Map event titles to product IDs
      // Product ID 5: Divinity Life Conference 2025
      // Product ID 6: Global Leadership Summit 2025
      const eventProductMap = {
        'Divinity Life Conference 2025': 5,
        'Global Leadership Summit 2025': 6,
        'Youth Empowerment Bootcamp 2025': 6 // Using same ID as placeholder
      };

      const productId = eventProductMap[eventTitle];

      if (!productId) {
        throw new Error('Event not found');
      }

      // Create order for event registration
      const response = await APIService.createOrder({
        items: [
          {
            product_id: productId,
            quantity: 1
          }
        ],
        email: 'attendee@example.com', // TODO: Replace with actual user input
        shippingAddress: {
          street: '123 Main St',
          city: 'Lagos',
          state: 'Lagos',
          postal_code: '100001',
          country: 'Nigeria'
        },
        currency: 'NGN',
        callbackUrl: `${window.location.origin}/payment-success`,
      });

      // Redirect to Paystack payment page
      if (response.authorization_url) {
        window.location.href = response.authorization_url;
      }
    } catch (err) {
      setError(err.message || 'Failed to process registration');
      console.error('Registration error:', err);
      setProcessingEvent(null);
    }
  };
  // Past event transformation stories
  const attendeeStories = [
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      event: 'Divinity Life Conference 2024',
      attended: 'June 2024',
      before: 'Came to the conference drowning in ₦5M debt, business failing, marriage struggling',
      during: 'Received prayer for business breakthrough on Day 2, prophetic word about divine provision',
      after: 'Business revenue increased 400% in 6 months, debt cleared, marriage restored',
      quote: 'I came broken and left empowered. That conference didn\'t just inspire me—it transformed my entire life trajectory.',
      gradient: 'from-primary-gold to-primary-gold-light',
      keyMoment: 'Prayer for business breakthrough during prophetic session'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      event: 'Kingdom Business Summit 2024',
      attended: 'March 2024',
      before: 'Battling addiction for 12 years, career lost, relationships destroyed',
      during: 'Encountered God\'s power during altar call, received deliverance prayer from Pastor David',
      after: 'Completely free from addiction, marriage restored, now leads recovery ministry reaching 200+ annually',
      quote: 'The power of God hit me like lightning during that altar call. In one moment, 12 years of bondage broke. I\'ve been free ever since.',
      gradient: 'from-primary-blue to-primary-blue-light',
      keyMoment: 'Personal deliverance prayer from Pastor David at altar'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      event: 'Youth Empowerment Summit 2024',
      attended: 'September 2024',
      before: 'Dead-end job, no purpose, living paycheck to paycheck with no vision for the future',
      during: 'Discovered entrepreneurial calling during breakout session on kingdom business',
      after: 'Started consulting firm, now impacting 50+ African businesses, mentoring young entrepreneurs',
      quote: 'I walked into that summit as an employee and walked out as an entrepreneur. The teaching on divine purpose unlocked everything.',
      gradient: 'from-accent-red to-primary-gold',
      keyMoment: 'Calling discovery during kingdom business breakout session'
    },
    {
      name: 'Pastor John Adeyemi',
      location: 'Ibadan, Nigeria',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
      event: 'Global Leadership Summit 2023',
      attended: 'August 2023',
      before: 'Leading small church of 30 members, limited vision, struggling with growth',
      during: 'Received impartation for church growth during leadership session',
      after: 'Church grew to 2,000 members, planted 15 daughter churches across Nigeria, impacting 10,000+ weekly',
      quote: 'That summit expanded my vision from my city to nations. I learned God\'s plan for me was bigger than I ever imagined.',
      gradient: 'from-primary-blue to-primary-blue-light',
      keyMoment: 'Impartation for church growth during leadership prayer'
    }
  ];

  // Upcoming events with day-by-day transformation journey
  const upcomingEvents = [
    {
      title: 'Divinity Life Conference 2025',
      date: 'June 15-17, 2025',
      time: '9:00 AM - 5:00 PM WAT',
      location: 'Lagos, Nigeria',
      venue: 'Eko Convention Center',
      description: 'Three days that will change your life forever. Experience the supernatural power of God, receive prophetic impartation, and step into your divine destiny.',
      type: 'Conference',
      status: 'Early Bird Registration',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200',
      color: 'from-primary-blue to-primary-blue-dark',
      expectedAttendees: '20,000+',
      nations: '60+',
      dayByDay: [
        {
          day: 'Day 1: Breaking Chains',
          focus: 'Deliverance & Freedom',
          outcome: 'Last year: 3,200 people experienced instant deliverance from addictions, fear, and bondage',
          testimonial: '"I was set free from 15 years of addiction on Day 1" - Michael C.'
        },
        {
          day: 'Day 2: Empowerment Impartation',
          focus: 'Anointing & Authority',
          outcome: 'Last year: 5,400 received prophetic words that came to pass within 6 months',
          testimonial: '"The prophetic word about my business came true exactly" - Sarah O.'
        },
        {
          day: 'Day 3: Commission & Sending',
          focus: 'Calling & Purpose',
          outcome: 'Last year: 2,800 discovered their divine calling and started ministries/businesses',
          testimonial: '"I found my purpose on Day 3 and started my ministry" - Grace M.'
        }
      ]
    },
    {
      title: 'Global Leadership Summit 2025',
      date: 'August 10-12, 2025',
      time: '10:00 AM - 6:00 PM BST',
      location: 'London, UK',
      venue: 'Excel London',
      description: 'Empowering leaders to transform their spheres of influence. Biblical principles meet strategic insights for maximum kingdom impact.',
      type: 'Summit',
      status: 'Registration Open',
      image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=1200',
      color: 'from-primary-gold to-accent-red',
      expectedAttendees: '8,000+',
      nations: '35+',
      dayByDay: [
        {
          day: 'Day 1: Leadership Foundations',
          focus: 'Character & Integrity',
          outcome: 'Last year: 1,200 leaders committed to higher standards of excellence',
          testimonial: '"Reformed my entire leadership approach" - Pastor James'
        },
        {
          day: 'Day 2: Strategic Kingdom Advancement',
          focus: 'Vision & Execution',
          outcome: 'Last year: 800 leaders implemented strategies that doubled their impact',
          testimonial: '"My church grew from 100 to 500 using these strategies" - Rev. Sarah'
        },
        {
          day: 'Day 3: Multiplication & Legacy',
          focus: 'Raising Leaders',
          outcome: 'Last year: 600 leaders trained others, creating 2,000 new leaders',
          testimonial: '"Trained 50 leaders who are now transforming our nation" - Pastor John A.'
        }
      ]
    },
    {
      title: 'Youth Empowerment Bootcamp 2025',
      date: 'September 5-7, 2025',
      time: '8:00 AM - 4:00 PM GMT',
      location: 'Accra, Ghana',
      venue: 'National Theatre',
      description: 'Intensive training for the next generation. Discover your purpose, develop your skills, and make kingdom impact that changes nations.',
      type: 'Bootcamp',
      status: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200',
      color: 'from-accent-red to-primary-gold',
      expectedAttendees: '3,000+',
      nations: '20+',
      dayByDay: [
        {
          day: 'Day 1: Identity & Purpose',
          focus: 'Who You Are in Christ',
          outcome: 'Last year: 800 young people discovered their divine calling',
          testimonial: '"Found my purpose after years of confusion" - Grace M.'
        },
        {
          day: 'Day 2: Skills & Excellence',
          focus: 'Practical Training',
          outcome: 'Last year: 600 youth started businesses/ministries using skills learned',
          testimonial: '"Started my business with the training I received" - David O.'
        },
        {
          day: 'Day 3: Launch & Impact',
          focus: 'Taking Action',
          outcome: 'Last year: 400 youth committed to specific kingdom assignments',
          testimonial: '"Left with a clear action plan and launched my ministry" - Faith A.'
        }
      ]
    }
  ];

  // First-timer transformation guide
  const firstTimerGuide = [
    {
      step: 'Arrive with Expectation',
      description: 'Come believing God has something specific for you',
      story: 'Sarah was skeptical but came anyway. "I didn\'t expect much, but God had plans I couldn\'t imagine."'
    },
    {
      step: 'Engage Fully',
      description: 'Participate in worship, teaching, and prayer sessions',
      story: 'Michael almost skipped the altar call. "That was the moment everything changed for me."'
    },
    {
      step: 'Receive Your Breakthrough',
      description: 'Be open to what God wants to do in your life',
      story: 'Grace received a prophetic word that unlocked her calling. "I was never the same after that moment."'
    },
    {
      step: 'Take Action',
      description: 'Apply what you learn when you return home',
      story: 'Pastor John implemented what he learned. "My church grew from 30 to 2,000 by applying those principles."'
    }
  ];

  // Event impact timeline
  const eventHistory = [
    {
      year: '2020',
      event: 'First Divinity Conference',
      attendees: '500',
      outcome: 'Sarah Okonkwo attended and discovered kingdom business principles',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600'
    },
    {
      year: '2022',
      event: 'Expansion to 5,000',
      attendees: '5,000',
      outcome: 'Michael Chen received deliverance that set him free from addiction',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600'
    },
    {
      year: '2024',
      event: '15,000 Transformed',
      attendees: '15,000',
      outcome: 'Grace Mensah and 2,800 others discovered their divine calling',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600"
            alt="Conference worship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 via-primary-blue-dark/85 to-primary-blue/90"></div>
          {/* Subtle accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-gold/10 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <FaCalendarAlt className="text-7xl mx-auto mb-6" />
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Life-Changing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-primary-gold-light to-primary-gold animate-glow">Gatherings</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Where broken people become empowered believers—one event at a time
            </p>

            {/* Event impact stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '50+', label: 'Annual Events' },
                { number: '100K+', label: 'Attendees Yearly' },
                { number: '15K+', label: 'Lives Transformed' },
                { number: '60+', label: 'Nations Hosting' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-4xl font-black text-primary-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Event Transformation Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-blue mb-6">Last Year, 15,000 Lives Changed</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Meet the people who came broken and left empowered—their stories will inspire yours
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {attendeeStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  {/* Attendee Info */}
                  <div className="md:col-span-2">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
                    />
                    <div className="bg-gradient-to-r from-primary-blue to-primary-blue-dark text-white p-6 rounded-2xl">
                      <h3 className="text-2xl font-black mb-2">{story.name}</h3>
                      <p className="text-white/80 mb-4">{story.location}</p>
                      <div className="pt-4 border-t border-white/30">
                        <p className="text-sm font-semibold text-white/70 mb-1">ATTENDED</p>
                        <p className="text-lg font-bold mb-1">{story.event}</p>
                        <p className="text-sm text-white/60">{story.attended}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/30">
                        <p className="text-sm font-semibold text-white/70 mb-1">KEY MOMENT</p>
                        <p className="text-sm text-white/90">{story.keyMoment}</p>
                      </div>
                    </div>
                  </div>

                  {/* Transformation Journey */}
                  <div className="md:col-span-3">
                    <div className="space-y-6">
                      {/* Before */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 text-sm font-bold text-red-600 uppercase pt-1">Before:</div>
                        <p className="text-lg text-gray-700 flex-1">{story.before}</p>
                      </div>

                      {/* During */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 text-sm font-bold text-yellow-600 uppercase pt-1">During:</div>
                        <p className="text-lg text-gray-800 font-semibold flex-1">{story.during}</p>
                      </div>

                      {/* After */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 text-sm font-bold text-green-600 uppercase pt-1">After:</div>
                        <div className="flex-1">
                          <p className="text-lg text-gray-900 font-bold mb-3">{story.after}</p>
                          <div className="flex items-center gap-2 text-green-600">
                            <FaCheckCircle />
                            <span className="text-sm font-semibold">Complete Life Transformation</span>
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

                      {/* Register CTA */}
                      <button
                        onClick={() => handleEventRegistration('Divinity Life Conference 2025')}
                        disabled={processingEvent === 'Divinity Life Conference 2025'}
                        className="w-full bg-gradient-to-r from-primary-blue to-primary-blue-dark text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaTicketAlt />
                        {processingEvent === 'Divinity Life Conference 2025' ? 'Processing...' : 'Register for 2025 & Experience Your Own Transformation'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events with Day-by-Day Journey */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-blue mb-6">Upcoming Transformation Events</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Your breakthrough is waiting—register now and secure your spot
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Event Header Image */}
                <div className="relative h-96">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-neutral-dark bg-primary-gold px-4 py-2 rounded-full">
                        {event.type}
                      </span>
                      <span className="text-sm font-bold text-white bg-green-500 px-4 py-2 rounded-full">
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-5xl font-black text-white mb-4">{event.title}</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-white/90">
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-primary-gold text-xl" />
                        <span className="font-bold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="text-primary-gold text-xl" />
                        <span className="font-bold">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-primary-gold text-xl" />
                        <span className="font-bold">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaUsers className="text-primary-gold text-xl" />
                        <span className="font-bold">{event.expectedAttendees} Expected</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-8">
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">{event.description}</p>

                  {/* Day-by-Day Transformation Journey */}
                  <div className="mb-8">
                    <h4 className="text-3xl font-black text-primary-blue mb-6">What to Expect Each Day</h4>
                    <div className="space-y-6">
                      {event.dayByDay.map((day, dayIndex) => (
                        <motion.div
                          key={dayIndex}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: dayIndex * 0.1 }}
                          className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-l-4 border-primary-blue"
                        >
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white font-black text-2xl">
                              {dayIndex + 1}
                            </div>
                            <div className="flex-1">
                              <h5 className="text-2xl font-black text-gray-900 mb-2">{day.day}</h5>
                              <p className="text-lg text-primary-blue font-semibold mb-3">{day.focus}</p>
                              <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                                <p className="text-sm font-bold text-gray-700 mb-2">LAST YEAR'S OUTCOME:</p>
                                <p className="text-gray-900 font-semibold">{day.outcome}</p>
                              </div>
                              <div className="bg-primary-gold/10 rounded-xl p-4">
                                <FaQuoteLeft className="text-primary-gold mb-2" />
                                <p className="text-gray-700 italic">{day.testimonial}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Registration Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => handleEventRegistration(event.title)}
                      disabled={processingEvent === event.title}
                      className="flex-1 bg-gradient-to-r from-primary-blue to-primary-blue-dark text-white py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaTicketAlt />
                      {processingEvent === event.title ? 'Processing...' : 'Register Now'}
                    </button>
                    <button className="px-8 bg-gray-100 text-gray-700 py-5 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* First-Timer's Transformation Guide */}
      <section className="py-24 bg-gradient-to-br from-primary-blue via-primary-blue-dark to-neutral-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">Never Been? Here's What to Expect</h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto">
              A first-timer's guide to experiencing transformation at our events
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {firstTimerGuide.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-primary-blue font-black text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-black">{step.step}</h3>
                </div>
                <p className="text-white/90 text-lg mb-4">{step.description}</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <FaQuoteLeft className="text-primary-gold mb-2" />
                  <p className="italic text-white/95">{step.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Impact Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary-blue mb-6">Our Event Journey</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              From 500 attendees to 15,000 transformed lives—see how God has multiplied the impact
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {eventHistory.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="relative h-64">
                  <img
                    src={milestone.image}
                    alt={milestone.event}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary-gold text-primary-blue px-4 py-2 rounded-full font-black text-2xl">
                    {milestone.year}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white mb-2">{milestone.event}</h3>
                    <p className="text-4xl font-black text-primary-gold">{milestone.attendees}</p>
                    <p className="text-sm text-white/80">Attendees</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-gray-700 mb-2">TRANSFORMATION STORY:</p>
                  <p className="text-gray-900 font-semibold">{milestone.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-red to-primary-gold text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">Your Transformation Starts Here</h2>
            <p className="text-2xl text-white/90 mb-8">
              Don't wait for your life to change—register now and experience the power of God that transforms nations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleEventRegistration('Divinity Life Conference 2025')}
                disabled={processingEvent === 'Divinity Life Conference 2025'}
                className="bg-white text-holy-fire px-10 py-5 rounded-xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaTicketAlt />
                {processingEvent === 'Divinity Life Conference 2025' ? 'Processing...' : 'Register for Next Event'}
              </button>
              <button className="bg-royal-blue text-white px-10 py-5 rounded-xl font-black text-xl hover:bg-electric-purple transition-all shadow-2xl flex items-center justify-center gap-3">
                <FaCalendarAlt />
                View Full Calendar
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
