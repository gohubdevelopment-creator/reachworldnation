import { motion } from 'framer-motion';
import { FaUsers, FaGlobe, FaHandshake, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const CommunityPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    membershipType: '',
    interests: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Community registration:', formData);
  };

  const memberTransformations = [
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      journey: {
        joined: 'February 2023',
        before: 'Business failing, isolated, no spiritual support, ₦5 million in debt',
        week1: 'Joined Lagos chapter, assigned to prayer group with 8 other businesswomen',
        month1: 'First breakthrough: Prayer group prayed, business got major client',
        month6: 'Revenue increased 400%, debt cleared, now co-leads prayer group',
        now: 'Leads business ministry reaching 50+ entrepreneurs, mentors 15 women weekly'
      },
      quote: 'I joined looking for prayer support. I found a family that transformed every area of my life. The community became my strength.',
      impact: 'Now mentoring 15 women, business transformed, co-leads prayer group',
      gradient: 'from-brand-gold to-vibrant-orange'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      journey: {
        joined: 'January 2023',
        before: 'Battling addiction for 12 years, broken relationships, no hope',
        week1: 'Joined Singapore chapter, welcomed by recovery group leader',
        month1: 'Attended first community event, encountered God, delivered from addiction',
        month6: 'Completely free, marriage restored, started volunteering',
        now: 'Leads recovery ministry reaching 200+ annually, trains volunteers globally'
      },
      quote: 'The community didn\'t judge my past—they saw my future. Their love and accountability saved my life and my marriage.',
      impact: 'Leads recovery ministry, 200+ lives transformed annually, trains volunteers',
      gradient: 'from-royal-blue to-electric-purple'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      journey: {
        joined: 'March 2023',
        before: 'Struggling entrepreneur, living paycheck to paycheck, no vision',
        week1: 'Joined Accra chapter, connected with business mentorship group',
        month1: 'Received kingdom business training from community leaders',
        month6: 'Business revenue increased 400%, hired first 5 employees',
        now: 'Now employs 15 people, leads Ghana business chapter, mentors 50+ entrepreneurs'
      },
      quote: 'I thought I needed money. The community gave me something better—kingdom vision and a network of believers who believed in me.',
      impact: 'Employs 15 people, leads business chapter, mentors 50+ entrepreneurs',
      gradient: 'from-holy-fire to-vibrant-orange'
    },
    {
      name: 'Pastor John Adeyemi',
      location: 'Ibadan, Nigeria',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
      journey: {
        joined: 'June 2021',
        before: 'Leading small church of 30 members, feeling isolated, limited vision',
        week1: 'Joined Ibadan chapter, connected with pastor network',
        month1: 'Attended leadership summit, received mentorship from Pastor David',
        month6: 'Church grew to 100 members, planted first daughter church',
        now: 'Church at 2,000 members, planted 15 daughter churches, trains 100+ pastors'
      },
      quote: 'I was a lone shepherd. The community connected me to a global network of leaders. My vision expanded from my city to nations.',
      impact: '15 churches planted, 2,000 members, trains 100+ pastors annually',
      gradient: 'from-sky-blue to-electric-purple'
    }
  ];

  const chapterSuccessStories = [
    {
      country: 'Nigeria',
      flag: '🇳🇬',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      coordinator: 'Pastor John Adeyemi',
      members: '15,000+',
      growth: {
        year2020: '500 members, 2 prayer groups, 1 location',
        year2022: '5,000 members, 50 prayer groups, 8 locations',
        year2024: '15,000 members, 200 prayer groups, 25 locations'
      },
      impact: {
        churches: '30 new churches planted',
        salvations: '5,000+ salvations',
        training: '500+ leaders trained',
        community: 'Feeding 1,000 families monthly'
      },
      story: 'Started with 500 believers in Lagos. Today, Nigeria chapter is the largest globally, transforming communities across all 36 states.',
      gradient: 'from-brand-gold to-vibrant-orange'
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
      coordinator: 'Ambassador David Thompson',
      members: '3,500+',
      growth: {
        year2020: '50 members, 1 prayer group, community center meetings',
        year2022: '800 members, 15 prayer groups, 3 city chapters',
        year2024: '3,500 members, 60 prayer groups, 12 city chapters'
      },
      impact: {
        churches: '8 satellite churches',
        salvations: '500+ salvations',
        training: '150+ leaders trained',
        outreach: '5 annual conferences reaching 2,000+ each'
      },
      story: 'From 50 people in a Manchester community center to 3,500 members across 12 UK cities. British believers discovering kingdom purpose.',
      gradient: 'from-royal-blue to-electric-purple'
    },
    {
      country: 'Ghana',
      flag: '🇬🇭',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      coordinator: 'Ambassador Grace Mensah',
      members: '4,800+',
      growth: {
        year2020: '300 members, 5 prayer groups, Accra only',
        year2022: '1,500 members, 25 prayer groups, 4 cities',
        year2024: '4,800 members, 80 prayer groups, 10 cities'
      },
      impact: {
        churches: '12 new churches',
        salvations: '2,000+ salvations',
        training: '200+ leaders trained',
        business: 'Kingdom business network with 100+ entrepreneurs'
      },
      story: 'Ghana chapter pioneered kingdom business model. Entrepreneurs discovering that business is ministry. Economic transformation happening.',
      gradient: 'from-holy-fire to-vibrant-orange'
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
      coordinator: 'Minister Lisa Johnson',
      members: '5,200+',
      growth: {
        year2020: '200 members, 3 prayer groups, 2 cities',
        year2022: '1,800 members, 30 prayer groups, 10 cities',
        year2024: '5,200 members, 90 prayer groups, 25 cities'
      },
      impact: {
        churches: '15 partner churches',
        salvations: '800+ salvations',
        training: '250+ leaders trained',
        youth: 'Youth revival movement in 20 universities'
      },
      story: 'American believers hungry for authentic kingdom teaching. From coast to coast, 25 cities now have thriving ReachworldNation chapters.',
      gradient: 'from-sky-blue to-accent-blue'
    },
    {
      country: 'South Africa',
      flag: '🇿🇦',
      image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800',
      coordinator: 'Rev. Michael van Wyk',
      members: '2,100+',
      growth: {
        year2021: '100 members, 2 prayer groups, Cape Town',
        year2023: '800 members, 15 prayer groups, 3 cities',
        year2024: '2,100 members, 35 prayer groups, 6 cities'
      },
      impact: {
        churches: '5 new churches',
        salvations: '600+ salvations',
        training: '80+ leaders trained',
        reconciliation: 'Racial reconciliation prayer groups in all locations'
      },
      story: 'South African chapter focused on healing and reconciliation. Kingdom principles bringing together people across racial and economic divides.',
      gradient: 'from-vibrant-orange to-brand-gold'
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      coordinator: 'Minister Rachel Tan',
      members: '1,800+',
      growth: {
        year2021: '80 members, 2 prayer groups',
        year2023: '600 members, 12 prayer groups',
        year2024: '1,800 members, 30 prayer groups'
      },
      impact: {
        churches: '3 campus churches',
        salvations: '400+ salvations',
        training: '100+ leaders trained',
        missions: '50 members sent as missionaries to Asia'
      },
      story: 'Singapore chapter became Asia-Pacific training hub. Members sent as missionaries to 8 Asian nations. Small nation, massive kingdom impact.',
      gradient: 'from-electric-purple to-royal-blue'
    }
  ];

  const volunteerTransformations = [
    {
      name: 'David Thompson',
      location: 'London, United Kingdom',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      role: 'Media Volunteer → UK Chapter Leader',
      journey: {
        started: 'Started volunteering: Helped with social media posting once a week',
        month3: 'Discovered passion for media ministry, volunteered 10 hours/week',
        month6: 'Promoted to volunteer media coordinator, trained 5 volunteers',
        year1: 'Called to full-time ministry, launched UK chapter',
        now: 'Leading 3,500-member UK chapter, organized 5 national conferences'
      },
      transformation: 'Volunteering revealed his calling. What started as posting on social media became leading a national movement.',
      quote: 'I volunteered thinking I\'d help the ministry. Instead, volunteering transformed me and showed me my life\'s purpose.',
      gradient: 'from-brand-gold to-vibrant-orange'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      role: 'Event Volunteer → Business Chapter Leader',
      journey: {
        started: 'Started volunteering: Helped set up chairs for weekly meetings',
        month3: 'Coordinated logistics for 500-person conference',
        month6: 'Started business mentorship group for volunteers',
        year1: 'Launched kingdom business training program',
        now: 'Leads business chapter, mentors 50+ entrepreneurs, employs 15'
      },
      transformation: 'Volunteering at events connected her with business leaders. The network transformed her struggling business into a thriving enterprise.',
      quote: 'I volunteered to give back. God used my volunteering to give me the connections and skills that saved my business.',
      gradient: 'from-royal-blue to-electric-purple'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      role: 'Prayer Volunteer → Recovery Ministry Leader',
      journey: {
        started: 'Started volunteering: Attended prayer meetings as recovering addict',
        month3: 'Began praying for others in recovery, saw breakthrough',
        month6: 'Started leading recovery prayer group, 10 members delivered',
        year1: 'Launched full recovery ministry program',
        now: 'Leads recovery ministry reaching 200+ annually, trains volunteers globally'
      },
      transformation: 'Delivered from 12-year addiction, he turned his pain into purpose. Now helping hundreds find freedom through ministry he pioneered.',
      quote: 'Volunteering in prayer saved my life. Now I volunteer to help others find the same freedom I found.',
      gradient: 'from-holy-fire to-vibrant-orange'
    }
  ];

  const memberJourneyStages = [
    {
      stage: 'Week 1',
      title: 'Welcome & Connection',
      description: 'Join your local chapter, get assigned to prayer group, receive welcome package',
      example: 'Sarah joined Lagos chapter, met her prayer group of 8 businesswomen',
      icon: '👋',
      color: 'from-sky-blue to-electric-purple'
    },
    {
      stage: 'Month 1',
      title: 'First Breakthrough',
      description: 'Attend first community event, experience corporate prayer, see first answered prayer',
      example: 'Michael attended community event, encountered God, delivered from addiction',
      icon: '✨',
      color: 'from-brand-gold to-vibrant-orange'
    },
    {
      stage: 'Month 6',
      title: 'Growth & Involvement',
      description: 'Join ministry team, start volunteering, mentor new members, experience transformation',
      example: 'Grace completed business training, revenue increased 400%, started mentoring',
      icon: '📈',
      color: 'from-royal-blue to-electric-purple'
    },
    {
      stage: 'Year 1',
      title: 'Leadership & Multiplication',
      description: 'Lead prayer group, coordinate outreach, plant daughter chapter, train others',
      example: 'Pastor John planted first daughter church, now training other pastors',
      icon: '👑',
      color: 'from-holy-fire to-vibrant-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600"
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/95 via-royal-blue/90 to-deep-charcoal/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <FaUsers className="text-7xl mx-auto mb-6 text-brand-gold" />
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Community That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-vibrant-orange to-brand-gold animate-glow">Transforms</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              You don't just join a community—you join a family that transforms your life
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '2M+', label: 'Global Members' },
                { number: '150+', label: 'Nations' },
                { number: '5K+', label: 'Prayer Groups' },
                { number: '1K+', label: 'Ambassadors' }
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

      {/* Member Transformation Stories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Members Transforming Their World</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Every member has a transformation story—here are just a few
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {memberTransformations.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  {/* Image & Info Side */}
                  <div className="md:col-span-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
                    />
                    <div className={`bg-gradient-to-br ${member.gradient} text-white p-6 rounded-2xl`}>
                      <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                      <p className="text-white/90 mb-4">{member.location}</p>
                      <div className="border-t border-white/30 pt-4 mb-4">
                        <p className="text-sm font-semibold text-white/70 mb-2">JOINED</p>
                        <p className="text-lg font-bold">{member.journey.joined}</p>
                      </div>
                      <div className="border-t border-white/30 pt-4 mb-4">
                        <p className="text-sm font-semibold text-white/70 mb-2">CURRENT IMPACT</p>
                        <p className="text-base font-semibold">{member.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Journey Side */}
                  <div className="md:col-span-3">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-red-600 font-bold text-sm uppercase">Before Joining:</span>
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed">{member.journey.before}</p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-yellow-600 font-bold text-sm uppercase">Week 1:</span>
                        </div>
                        <p className="text-gray-800 text-base leading-relaxed font-semibold">{member.journey.week1}</p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-blue-600 font-bold text-sm uppercase">Month 1:</span>
                        </div>
                        <p className="text-gray-800 text-base leading-relaxed font-semibold">{member.journey.month1}</p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-purple-600 font-bold text-sm uppercase">Month 6:</span>
                        </div>
                        <p className="text-gray-800 text-base leading-relaxed font-semibold">{member.journey.month6}</p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-green-600 font-bold text-sm uppercase">Now:</span>
                        </div>
                        <p className="text-gray-900 text-base leading-relaxed font-bold">{member.journey.now}</p>
                      </div>

                      <div className="mt-8 pt-6 border-t-2 border-gray-200">
                        <blockquote className={`text-lg italic text-gray-700 leading-relaxed border-l-4 border-gradient-to-b ${member.gradient} pl-6 py-2`}>
                          "{member.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Your Journey Starts Here</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Here's what the typical member journey looks like in our community
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberJourneyStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-gray-100">
                  {/* Stage Header */}
                  <div className={`bg-gradient-to-br ${stage.color} text-white p-8 text-center`}>
                    <div className="text-6xl mb-4">{stage.icon}</div>
                    <div className="text-2xl font-black mb-2">{stage.stage}</div>
                    <h3 className="text-xl font-bold">{stage.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">{stage.description}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs font-bold text-gray-500 mb-2">REAL EXAMPLE:</p>
                      <p className="text-sm text-gray-900 font-semibold italic">"{stage.example}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Success Stories */}
      <section className="py-24 bg-gradient-to-br from-royal-blue via-electric-purple to-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaGlobe className="text-7xl mx-auto mb-6 text-brand-gold" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">Global Chapters Transforming Nations</h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto">
              From 500 members in 2020 to 2 million across 150 nations today—here's how it happened
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {chapterSuccessStories.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-500 border border-white/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={chapter.image}
                      alt={chapter.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-6xl mb-3">{chapter.flag}</div>
                      <h3 className="text-3xl font-black mb-1">{chapter.country}</h3>
                      <p className="text-white/90">{chapter.coordinator}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-black text-brand-gold mb-2">{chapter.members}</div>
                      <p className="text-white/70 text-sm">Current Members</p>
                    </div>

                    {/* Growth Timeline */}
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/10 rounded-xl p-3">
                        <p className="text-xs font-bold text-brand-gold mb-1">2020</p>
                        <p className="text-sm text-white">{chapter.growth.year2020}</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3">
                        <p className="text-xs font-bold text-brand-gold mb-1">2022</p>
                        <p className="text-sm text-white">{chapter.growth.year2022}</p>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <p className="text-xs font-bold text-brand-gold mb-1">2024</p>
                        <p className="text-sm text-white font-semibold">{chapter.growth.year2024}</p>
                      </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-white/10 rounded-xl p-3 text-center">
                        <p className="text-xl font-black text-white">{chapter.impact.churches.split(' ')[0]}</p>
                        <p className="text-xs text-white/70">{chapter.impact.churches.split(' ').slice(1).join(' ')}</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 text-center">
                        <p className="text-xl font-black text-white">{chapter.impact.salvations.split(' ')[0]}</p>
                        <p className="text-xs text-white/70">{chapter.impact.salvations.split(' ').slice(1).join(' ')}</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 text-center">
                        <p className="text-xl font-black text-white">{chapter.impact.training.split(' ')[0]}</p>
                        <p className="text-xs text-white/70">{chapter.impact.training.split(' ').slice(1).join(' ')}</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 text-center">
                        <p className="text-xl font-black text-white">{(chapter.impact.community || chapter.impact.outreach || chapter.impact.business || chapter.impact.reconciliation || chapter.impact.youth || chapter.impact.missions).split(' ')[0]}</p>
                        <p className="text-xs text-white/70">{(chapter.impact.community || chapter.impact.outreach || chapter.impact.business || chapter.impact.reconciliation || chapter.impact.youth || chapter.impact.missions).split(' ').slice(1).join(' ')}</p>
                      </div>
                    </div>

                    {/* Story */}
                    <p className="text-white/90 text-sm leading-relaxed italic">{chapter.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-2xl mb-8">Find a chapter near you or start one in your city</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-brand-gold text-royal-blue px-10 py-5 rounded-xl font-black text-xl hover:bg-white transition-all duration-300 shadow-2xl">
                Join a Chapter
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-xl font-black text-xl hover:bg-white hover:text-royal-blue transition-all duration-300">
                Start a Chapter
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Transformation Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaHandshake className="text-7xl text-royal-blue mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Volunteering Changed My Life</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Volunteers don't just serve—they discover their calling and get transformed in the process
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {volunteerTransformations.map((volunteer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={volunteer.image}
                      alt={volunteer.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-black text-white mb-1">{volunteer.name}</h3>
                      <p className="text-white/90 text-sm">{volunteer.location}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className={`bg-gradient-to-r ${volunteer.gradient} text-white px-4 py-2 rounded-xl mb-6 text-center`}>
                      <p className="font-bold text-sm">{volunteer.role}</p>
                    </div>

                    {/* Journey */}
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">STARTED</p>
                        <p className="text-sm text-gray-700">{volunteer.journey.started}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">3 MONTHS</p>
                        <p className="text-sm text-gray-700">{volunteer.journey.month3}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">6 MONTHS</p>
                        <p className="text-sm text-gray-800 font-semibold">{volunteer.journey.month6}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-green-600 mb-1">1 YEAR</p>
                        <p className="text-sm text-gray-900 font-bold">{volunteer.journey.year1}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-gold mb-1">NOW</p>
                        <p className="text-sm text-gray-900 font-black">{volunteer.journey.now}</p>
                      </div>
                    </div>

                    {/* Transformation */}
                    <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                      <p className="text-xs font-bold text-gray-500 mb-2">TRANSFORMATION</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{volunteer.transformation}</p>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm italic text-gray-700 leading-relaxed border-l-4 border-royal-blue pl-4">
                      "{volunteer.quote}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="bg-gradient-to-r from-royal-blue to-electric-purple text-white px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all duration-300">
              Become a Volunteer
            </button>
          </motion.div>
        </div>
      </section>

      {/* Community Benefits as Outcomes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaHeart className="text-6xl text-brand-gold mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">What You Receive as a Member</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Membership isn't about perks—it's about transformation outcomes
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {[
              {
                benefit: 'Prayer Groups',
                outcome: 'Sarah found healing and business breakthrough in her prayer group',
                story: 'Assigned to a group of 8 businesswomen who prayed with her through debt crisis. Within 6 months, business transformed. Now co-leads the group.',
                image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
                gradient: 'from-royal-blue to-electric-purple',
                icon: '🙏'
              },
              {
                benefit: 'Exclusive Resources',
                outcome: 'John\'s business transformed using member-only training materials',
                story: 'Access to kingdom business courses and leadership trainings normally costing $500+. Applied principles, revenue increased 300% in one year.',
                image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800',
                gradient: 'from-brand-gold to-vibrant-orange',
                icon: '📚'
              },
              {
                benefit: 'Mentorship Network',
                outcome: 'Grace connected with mentors who transformed her business',
                story: 'Matched with successful entrepreneur who mentored her weekly. Network opened doors to contracts worth ₦10 million. Now mentors 50+ herself.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
                gradient: 'from-holy-fire to-vibrant-orange',
                icon: '🤝'
              },
              {
                benefit: 'Member Recognition',
                outcome: 'Maria\'s testimony inspired 1,000+ people globally',
                story: 'Shared her transformation story at conference. Video reached 1M+ views. Now travels internationally sharing her journey. Ministry doors opened.',
                image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
                gradient: 'from-sky-blue to-electric-purple',
                icon: '⭐'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.benefit}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-5xl mb-3">{item.icon}</div>
                      <h3 className="text-3xl font-black text-white">{item.benefit}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className={`bg-gradient-to-r ${item.gradient} text-white px-6 py-4 rounded-2xl mb-6`}>
                      <p className="text-lg font-bold text-center">{item.outcome}</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl font-black text-royal-blue mb-6">Your Transformation Starts Today</h2>
              <p className="text-xl text-gray-600">Join 2 million members transforming their world through community</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="john@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Country *</label>
                  <select
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                  >
                    <option value="">Select your country</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="ghana">Ghana</option>
                    <option value="south-africa">South Africa</option>
                    <option value="canada">Canada</option>
                    <option value="singapore">Singapore</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Membership Type *</label>
                <select
                  required
                  value={formData.membershipType}
                  onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
                >
                  <option value="">Select membership type</option>
                  <option value="member">Community Member</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="prayer-warrior">Prayer Warrior</option>
                  <option value="ambassador">Ambassador (Application)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-3">Areas of Interest (Select all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Prayer Ministry', 'Outreach Programs', 'Media Ministry', 'Youth Ministry', 'Leadership Training', 'Community Service'].map((interest) => (
                    <label key={interest} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-royal-blue"
                      />
                      <span className="text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-royal-blue to-electric-purple text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all"
              >
                Join Community Now
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                You'll receive your member ID, welcome package, and prayer group assignment via email
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-royal-blue via-electric-purple to-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Don't Do Life Alone</h2>
            <p className="text-xl text-white/90 mb-8">
              Join a community that will pray with you, believe in you, and transform with you
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-brand-gold text-royal-blue px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-lg">
                Join Community
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-white hover:text-royal-blue transition-all">
                Become a Volunteer
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
