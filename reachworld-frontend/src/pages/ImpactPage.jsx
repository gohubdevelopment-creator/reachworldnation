import { motion } from 'framer-motion';
import { FaUsers, FaPrayingHands, FaBook, FaHeart, FaGlobeAmericas, FaHandsHelping, FaGraduationCap, FaChurch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const ImpactPage = () => {
  const navigate = useNavigate();

  const globalStats = [
    {
      icon: FaUsers,
      number: '10,000+',
      label: 'Lives Transformed',
      description: 'Individuals impacted through our three arms'
    },
    {
      icon: FaGlobeAmericas,
      number: '25+',
      label: 'Communities Reached',
      description: 'Across multiple regions and nations'
    },
    {
      icon: FaBook,
      number: '50+',
      label: 'Resources Published',
      description: 'Books, courses, and media content'
    },
    {
      icon: FaPrayingHands,
      number: '100+',
      label: 'Events & Gatherings',
      description: 'Conferences, retreats, and outreaches'
    }
  ];

  // Data for Impact Distribution Pie Chart
  const impactDistributionData = [
    { name: 'Spiritual Formation', value: 3500, color: '#9333ea' },
    { name: 'Media & Education', value: 4000, color: '#2563eb' },
    { name: 'Social Impact', value: 2500, color: '#059669' }
  ];

  // Data for Growth Over Time Line Chart
  const growthData = [
    { year: '2020', spiritual: 800, media: 500, social: 300 },
    { year: '2021', spiritual: 1500, media: 1200, social: 700 },
    { year: '2022', spiritual: 2300, media: 2000, social: 1200 },
    { year: '2023', spiritual: 3000, media: 3200, social: 1800 },
    { year: '2024', spiritual: 3500, media: 4000, social: 2500 }
  ];

  // Data for Arm Performance Radar
  const performanceData = [
    { category: 'Reach', spiritual: 90, media: 95, social: 85 },
    { category: 'Engagement', spiritual: 95, media: 85, social: 90 },
    { category: 'Impact', spiritual: 88, media: 92, social: 95 },
    { category: 'Growth', spiritual: 85, media: 90, social: 80 },
    { category: 'Sustainability', spiritual: 92, media: 88, social: 87 }
  ];

  // Data for Programs Bar Chart
  const programsData = [
    { arm: 'Spiritual', prayers: 200, discipleship: 1500, conferences: 30, teachings: 100 },
    { arm: 'Media', books: 15, courses: 2000, films: 10, podcasts: 500 },
    { arm: 'Social', families: 500, students: 150, outreaches: 50, relief: 20 }
  ];

  const armImpacts = [
    {
      arm: 'Spiritual Formation',
      icon: FaChurch,
      color: 'purple',
      stats: [
        { label: 'Prayer Gatherings', value: '200+ held' },
        { label: 'Discipleship Participants', value: '1,500+' },
        { label: 'Conferences & Retreats', value: '30+ events' },
        { label: 'Teaching Series', value: '100+ messages' }
      ],
      path: '/arms/spiritual'
    },
    {
      arm: 'Media & Education',
      icon: FaBook,
      color: 'blue',
      stats: [
        { label: 'Books Published', value: '15+' },
        { label: 'Online Course Enrollments', value: '2,000+' },
        { label: 'Digital Resources', value: '500+ downloads' },
        { label: 'Short Films Produced', value: '10+' }
      ],
      path: '/arms/media-education'
    },
    {
      arm: 'Social Impact',
      icon: FaHeart,
      color: 'green',
      stats: [
        { label: 'Families Supported', value: '500+' },
        { label: 'Students on Scholarships', value: '150+' },
        { label: 'Community Outreaches', value: '50+ events' },
        { label: 'Relief Initiatives', value: '20+ programs' }
      ],
      path: '/arms/social-impact'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Lagos, Nigeria',
      quote: 'Through the discipleship program, I discovered my identity in Christ and found clarity for my purpose. My life has been completely transformed.',
      arm: 'Spiritual Formation'
    },
    {
      name: 'David O.',
      location: 'Accra, Ghana',
      quote: 'The leadership course equipped me with practical skills and kingdom mindset that changed how I lead in my workplace and community.',
      arm: 'Media & Education'
    },
    {
      name: 'Grace A.',
      location: 'Nairobi, Kenya',
      quote: 'The scholarship program gave me hope when I had none. Now I\'m in university, pursuing my dreams and giving back to others.',
      arm: 'Social Impact'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        gradient: 'from-purple-600 to-indigo-600'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        gradient: 'from-blue-600 to-cyan-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        gradient: 'from-green-600 to-emerald-600'
      }
    };
    return colors[color];
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border-2 border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-royal-blue mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: <span className="font-bold">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-blue to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Impact</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-100">
              Witness the transformative power of Christ-centered ministry across spiritual formation, media education, and social impact initiatives worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Global Reach</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {globalStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="text-5xl text-brand-gold mb-4 mx-auto" />
                  <h3 className="text-4xl font-bold text-royal-blue mb-2">{stat.number}</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Distribution & Growth Charts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Impact Analytics</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Data-driven insights into our ministry's reach and effectiveness across all three arms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Impact Distribution Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-royal-blue mb-6 text-center">Lives Transformed by Arm</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={impactDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {impactDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-6 flex justify-center gap-6">
                {impactDistributionData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Growth Over Time Line Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-royal-blue mb-6 text-center">Growth Trajectory (2020-2024)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="spiritual" stroke="#9333ea" strokeWidth={3} name="Spiritual" />
                  <Line type="monotone" dataKey="media" stroke="#2563eb" strokeWidth={3} name="Media & Education" />
                  <Line type="monotone" dataKey="social" stroke="#059669" strokeWidth={3} name="Social Impact" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Radar & Programs Bar Chart */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Arm Performance Radar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-royal-blue mb-6 text-center">Arm Performance Metrics</h3>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={performanceData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Spiritual" dataKey="spiritual" stroke="#9333ea" fill="#9333ea" fillOpacity={0.3} />
                  <Radar name="Media" dataKey="media" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
                  <Radar name="Social" dataKey="social" stroke="#059669" fill="#059669" fillOpacity={0.3} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Impact by Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-royal-blue mb-6 text-center">Impact Breakdown by Arm</h3>
              <div className="space-y-6">
                {armImpacts.map((arm, index) => {
                  const Icon = arm.icon;
                  const colors = getColorClasses(arm.color);
                  return (
                    <div key={index} className={`${colors.bg} rounded-lg p-4 border ${colors.border}`}>
                      <div className="flex items-center mb-3">
                        <Icon className={`text-2xl ${colors.text} mr-3`} />
                        <h4 className="font-bold text-royal-blue">{arm.arm}</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {arm.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <p className={`text-xl font-bold ${colors.text}`}>{stat.value}</p>
                            <p className="text-xs text-gray-600">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4">Stories of Transformation</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real lives, real transformation, real impact across our three strategic arms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-gold"
              >
                <div className="mb-4">
                  <span className="inline-block bg-royal-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.arm}
                  </span>
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-royal-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaHandsHelping className="text-6xl mb-6 mx-auto text-brand-gold" />
            <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl mb-10 text-gray-100">
              Be part of transforming lives spiritually, intellectually, and socially. Your partnership creates lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/partner')}
                className="bg-brand-gold text-royal-blue px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </button>
              <button
                onClick={() => navigate('/our-arms')}
                className="bg-white text-royal-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Arms
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
