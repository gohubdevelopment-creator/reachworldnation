import { motion } from 'framer-motion';
import { FaHandsHelping, FaDollarSign, FaGlobe, FaChurch } from 'react-icons/fa';

const PartnerPage = () => {
  const partnerTransformations = [
    {
      name: 'David & Mary Thompson',
      location: 'London, United Kingdom',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
      level: 'Global Influencer ($250+/month)',
      journey: {
        before: 'Successful business owners but spiritually empty, searching for purpose',
        shift: 'Attended Divinity Life Conference 2022, encountered God\'s call to partnership',
        after: 'Monthly partnership for 2 years. Their giving funded 12 church plants in Africa. Marriage transformed. Now leading UK chapter reaching 3,000 weekly.',
        impact: '12 churches planted, 5,000+ salvations'
      },
      quote: 'Partnership didn\'t just transform nations—it transformed our marriage, our business, and our purpose. We discovered that giving is the pathway to receiving God\'s abundance.',
      gradient: 'from-brand-gold to-vibrant-orange',
      testimonialDate: 'Partner since January 2022'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      level: 'Ambassador ($100/month)',
      journey: {
        before: 'Struggling entrepreneur, living paycheck to paycheck',
        shift: 'Started as Kingdom Partner ($50/month) despite financial struggles',
        after: 'Within 6 months, business revenue increased 400%. Upgraded to Ambassador level. Now employs 15 people and mentors 50+ young entrepreneurs.',
        impact: 'Funded 500 books distributed, 50+ lives changed'
      },
      quote: 'I gave out of obedience when I had nothing. God multiplied it back. Now my partnership is funding the same transformation in others that I experienced.',
      gradient: 'from-royal-blue to-electric-purple',
      testimonialDate: 'Partner since March 2023'
    },
    {
      name: 'Pastor John Adeyemi',
      location: 'Ibadan, Nigeria',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
      level: 'Kingdom Partner ($50/month)',
      journey: {
        before: 'Leading small church of 30 members, no vision for expansion',
        shift: 'Became Kingdom Partner, received leadership training and mentorship',
        after: 'Church grew to 2,000 members. Planted 15 daughter churches. Now trains 100+ pastors annually. Partnership gave him vision and resources.',
        impact: '15 churches planted, 10,000+ weekly reach'
      },
      quote: 'My $50/month partnership connected me to a global network that expanded my vision. I\'m not just a partner—I\'m part of a movement transforming Africa.',
      gradient: 'from-holy-fire to-vibrant-orange',
      testimonialDate: 'Partner since June 2021'
    },
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      level: 'Kingdom Partner ($50/month)',
      journey: {
        before: 'Business failing, ₦5 million in debt, no hope',
        shift: 'Received free book through partnership program, life transformed',
        after: 'Became partner out of gratitude. Business restored. Debt cleared. Now her partnership funds books for others in crisis.',
        impact: 'Funded 200 books distributed in Nigeria'
      },
      quote: 'Someone\'s partnership gave me that free book that saved my life. Now I partner so someone else can receive their breakthrough.',
      gradient: 'from-sky-blue to-electric-purple',
      testimonialDate: 'Partner since February 2024'
    }
  ];

  const givingTierImpact = [
    {
      tier: '$50/month',
      tierName: 'Kingdom Partner',
      annualGiving: '$600/year',
      enables: 'Funds 200 free books annually',
      story: {
        title: 'The Book That Saved Maria\'s Life',
        location: 'Manila, Philippines',
        narrative: 'Maria received a free copy of "Kingdom Mindset" through a Kingdom Partner\'s giving. The book helped her overcome depression and discover her purpose. Today, she leads a thriving youth ministry reaching 500 teenagers.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800'
      },
      gradient: 'from-sky-blue to-electric-purple',
      icon: '📚'
    },
    {
      tier: '$100/month',
      tierName: 'Ambassador',
      annualGiving: '$1,200/year',
      enables: 'Plants 2 churches annually',
      story: {
        title: 'Two Churches Born in Rural Ghana',
        location: 'Tamale, Ghana',
        narrative: 'Ambassador partnerships funded the planting of 2 churches in rural villages. 350 people now worship weekly. 120 salvations in the first year. Village transformation includes new school and community center.',
        image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800'
      },
      gradient: 'from-royal-blue to-electric-purple',
      icon: '⛪'
    },
    {
      tier: '$250+/month',
      tierName: 'Global Influencer',
      annualGiving: '$3,000+/year',
      enables: 'Trains 50 leaders annually',
      story: {
        title: 'Leadership School That Changed Kenya',
        location: 'Nairobi, Kenya',
        narrative: 'Global Influencer giving funded a year-long leadership training program. 50 pastors trained. They now lead churches reaching 25,000 people weekly across Kenya. 8 new Bible schools started by graduates.',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800'
      },
      gradient: 'from-brand-gold to-vibrant-orange',
      icon: '👥'
    }
  ];

  const churchPlantingJourneys = [
    {
      title: 'From Nothing to 500 Members',
      location: 'Kano State, Nigeria',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      journey: {
        month1: 'Partnership funded: Land lease, tent, 20 chairs',
        month3: 'First service: 50 attendees, 15 salvations',
        month6: '150 members, baptized 40 new believers',
        year1: '500 members, permanent building, planted 2 daughter churches'
      },
      pastor: 'Pastor Samuel Musa',
      impact: '500 weekly attendees, 2 daughter churches, community feeding program serving 200 families',
      partnershipCost: '$3,000 total',
      gradient: 'from-holy-fire to-vibrant-orange'
    },
    {
      title: 'Prison Ministry Becomes Church',
      location: 'Accra, Ghana',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      journey: {
        month1: 'Partnership funded: Prison ministry resources',
        month3: '40 inmates transformed, Bible study groups formed',
        month6: 'Released inmates started prayer meetings in community',
        year1: 'Full church established, 200 members, 90% former inmates/families'
      },
      pastor: 'Pastor Emmanuel Boateng',
      impact: '200 members, zero recidivism rate among church members, job placement program',
      partnershipCost: '$2,500 total',
      gradient: 'from-royal-blue to-accent-blue'
    },
    {
      title: 'University Campus Revival',
      location: 'Singapore',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      journey: {
        month1: 'Partnership funded: Campus ministry launch, free books',
        month3: '15 students committed, weekly Bible study started',
        month6: '100 students attending, 30 salvations, campus revival',
        year1: '300 students, official campus church, 5 student leaders sent as missionaries'
      },
      pastor: 'Minister Rachel Tan',
      impact: '300 students, 5 missionaries sent globally, campus-wide transformation',
      partnershipCost: '$4,000 total',
      gradient: 'from-vibrant-orange to-brand-gold'
    }
  ];

  const ambassadorProfiles = [
    {
      name: 'Ambassador David Thompson',
      location: 'London, United Kingdom',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      journey: {
        before: 'Successful businessman, spiritually empty',
        became: 'Kingdom Partner → Ambassador → UK Chapter Leader',
        now: 'Leading UK chapter reaching 3,000 weekly, organized 5 conferences'
      },
      impact: {
        souls: '500+ led to Christ',
        chapters: '3 new chapters started',
        partners: 'Recruited 50+ Kingdom Partners',
        churches: 'Funded 12 church plants in Africa'
      },
      quote: 'Being an Ambassador isn\'t about status—it\'s about stewarding influence for kingdom impact.',
      gradient: 'from-brand-gold to-vibrant-orange'
    },
    {
      name: 'Ambassador Grace Mensah',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      journey: {
        before: 'Struggling entrepreneur, paycheck to paycheck',
        became: 'Kingdom Partner → Ambassador → Business Mentor',
        now: 'Mentoring 50+ entrepreneurs, leading Ghana business network'
      },
      impact: {
        souls: '200+ led to Christ',
        chapters: '2 business chapters started',
        partners: 'Recruited 30+ Kingdom Partners',
        training: 'Trained 100+ in kingdom business principles'
      },
      quote: 'God transformed my business when I became a partner. Now I\'m transforming nations through kingdom entrepreneurship.',
      gradient: 'from-royal-blue to-electric-purple'
    },
    {
      name: 'Ambassador Pastor John Adeyemi',
      location: 'Ibadan, Nigeria',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
      journey: {
        before: 'Small church pastor, limited vision',
        became: 'Kingdom Partner → Ambassador → Regional Leader',
        now: 'Overseeing 15 churches, training 100+ pastors annually'
      },
      impact: {
        souls: '10,000+ weekly reach',
        chapters: '15 daughter churches planted',
        partners: 'Recruited 75+ Kingdom Partners',
        training: 'Trained 100+ pastors in Nigeria'
      },
      quote: 'Partnership gave me the vision and network to multiply beyond my local church. I\'m now planting churches across Nigeria.',
      gradient: 'from-holy-fire to-vibrant-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600"
            alt="Partnership transformation"
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
            <FaHandsHelping className="text-7xl mx-auto mb-6 text-brand-gold" />
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Partners Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-vibrant-orange to-brand-gold animate-glow">Nations</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Your partnership doesn't just transform nations—it transforms YOU
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '5K+', label: 'Churches Planted' },
                { number: '500K+', label: 'Books Distributed' },
                { number: '150+', label: 'Nations Reached' },
                { number: '2M+', label: 'Lives Transformed' }
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

      {/* Partner Transformation Stories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Partnership That Transforms Lives</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              These partners didn't just give financially—they experienced transformation themselves
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {partnerTransformations.map((partner, index) => (
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
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
                    />
                    <div className={`bg-gradient-to-br ${partner.gradient} text-white p-6 rounded-2xl`}>
                      <h3 className="text-2xl font-black mb-2">{partner.name}</h3>
                      <p className="text-white/90 mb-4">{partner.location}</p>
                      <div className="border-t border-white/30 pt-4 mb-4">
                        <p className="text-sm font-semibold text-white/70 mb-2">PARTNERSHIP LEVEL</p>
                        <p className="text-lg font-bold">{partner.level}</p>
                      </div>
                      <div className="border-t border-white/30 pt-4 mb-4">
                        <p className="text-sm font-semibold text-white/70 mb-2">THEIR IMPACT</p>
                        <p className="text-base font-semibold">{partner.journey.impact}</p>
                      </div>
                      <div className="text-xs text-white/70">{partner.testimonialDate}</div>
                    </div>
                  </div>

                  {/* Story Side */}
                  <div className="md:col-span-3">
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-red-600 font-bold text-sm uppercase">Before Partnership:</span>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{partner.journey.before}</p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-yellow-600 font-bold text-sm uppercase">The Shift:</span>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">{partner.journey.shift}</p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-green-600 font-bold text-sm uppercase">Today:</span>
                        </div>
                        <p className="text-gray-900 text-lg leading-relaxed font-bold">{partner.journey.after}</p>
                      </div>

                      <div className="mt-8 pt-6 border-t-2 border-gray-200">
                        <blockquote className={`text-xl italic text-gray-700 leading-relaxed border-l-4 border-gradient-to-b ${partner.gradient} pl-6 py-2`}>
                          "{partner.quote}"
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

      {/* Giving Tier Impact Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Your Partnership, Their Breakthrough</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Every giving level creates specific, measurable transformation
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {givingTierImpact.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-gray-100">
                  {/* Tier Header */}
                  <div className={`bg-gradient-to-br ${tier.gradient} text-white p-8 text-center`}>
                    <div className="text-6xl mb-4">{tier.icon}</div>
                    <h3 className="text-3xl font-black mb-2">{tier.tierName}</h3>
                    <div className="text-4xl font-black mb-2">{tier.tier}</div>
                    <p className="text-white/80 text-sm">{tier.annualGiving}</p>
                    <div className="mt-6 pt-6 border-t border-white/30">
                      <p className="text-lg font-bold">{tier.enables}</p>
                    </div>
                  </div>

                  {/* Story */}
                  <div className="p-6">
                    <img
                      src={tier.story.image}
                      alt={tier.story.title}
                      className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    <h4 className="text-2xl font-black text-gray-900 mb-2">{tier.story.title}</h4>
                    <p className="text-brand-gold font-semibold mb-4">{tier.story.location}</p>
                    <p className="text-gray-700 leading-relaxed">{tier.story.narrative}</p>
                  </div>

                  {/* CTA */}
                  <div className="p-6 pt-0">
                    <button className={`w-full bg-gradient-to-r ${tier.gradient} text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                      Become a {tier.tierName}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Church Planting Journey Stories */}
      <section className="py-24 bg-gradient-to-br from-royal-blue via-electric-purple to-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaChurch className="text-7xl mx-auto mb-6 text-brand-gold" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">5,000+ Churches Planted</h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto">
              Every church has a story. Your partnership writes the next chapter.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-12">
            {churchPlantingJourneys.map((church, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Side */}
                  <div className="relative h-96 md:h-auto">
                    <img
                      src={church.image}
                      alt={church.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black mb-2">{church.title}</h3>
                      <p className="text-white/90 text-lg">{church.location}</p>
                      <div className={`inline-block mt-4 bg-gradient-to-r ${church.gradient} px-4 py-2 rounded-full font-bold`}>
                        Planted in {church.year}
                      </div>
                    </div>
                  </div>

                  {/* Journey Side */}
                  <div className="p-8">
                    <h4 className="text-2xl font-black mb-6 text-brand-gold">The Journey</h4>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black">1</div>
                        <div>
                          <p className="font-bold text-white/70 text-sm">MONTH 1</p>
                          <p className="text-white">{church.journey.month1}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black">3</div>
                        <div>
                          <p className="font-bold text-white/70 text-sm">MONTH 3</p>
                          <p className="text-white">{church.journey.month3}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black">6</div>
                        <div>
                          <p className="font-bold text-white/70 text-sm">MONTH 6</p>
                          <p className="text-white">{church.journey.month6}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center font-black text-royal-blue">1Y</div>
                        <div>
                          <p className="font-bold text-brand-gold text-sm">YEAR 1</p>
                          <p className="text-white font-bold">{church.journey.year1}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/30 pt-6 space-y-3">
                      <div>
                        <p className="text-white/70 text-sm font-semibold mb-1">LEAD PASTOR</p>
                        <p className="text-white font-bold text-lg">{church.pastor}</p>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-semibold mb-1">TODAY'S IMPACT</p>
                        <p className="text-white">{church.impact}</p>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-semibold mb-1">PARTNERSHIP INVESTMENT</p>
                        <p className="text-brand-gold font-black text-2xl">{church.partnershipCost}</p>
                      </div>
                    </div>
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
            <p className="text-2xl mb-8">Your partnership can plant the next church that transforms a nation</p>
            <button className="bg-brand-gold text-royal-blue px-10 py-5 rounded-xl font-black text-xl hover:bg-white transition-all duration-300 shadow-2xl">
              Plant a Church Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ambassador Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Ambassador Success Stories</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Ambassadors aren't just giving financially—they're leading movements in their nations
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {ambassadorProfiles.map((ambassador, index) => (
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
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-black text-white mb-1">{ambassador.name}</h3>
                      <p className="text-white/90">{ambassador.location}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Journey */}
                    <div className="mb-6 space-y-3">
                      <div>
                        <p className="text-xs font-bold text-red-600 mb-1">BEFORE</p>
                        <p className="text-gray-600 text-sm">{ambassador.journey.before}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-yellow-600 mb-1">JOURNEY</p>
                        <p className="text-gray-700 text-sm font-semibold">{ambassador.journey.became}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-green-600 mb-1">TODAY</p>
                        <p className="text-gray-900 text-sm font-bold">{ambassador.journey.now}</p>
                      </div>
                    </div>

                    {/* Impact Stats */}
                    <div className={`bg-gradient-to-br ${ambassador.gradient} rounded-2xl p-6 mb-6`}>
                      <p className="text-white/80 text-xs font-bold mb-4">AMBASSADOR IMPACT</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-2xl font-black text-white">{ambassador.impact.souls.split(' ')[0]}</p>
                          <p className="text-white/80 text-xs">{ambassador.impact.souls.split(' ').slice(1).join(' ')}</p>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-white">{ambassador.impact.chapters.split(' ')[0]}</p>
                          <p className="text-white/80 text-xs">{ambassador.impact.chapters.split(' ').slice(1).join(' ')}</p>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-white">{ambassador.impact.partners.split(' ')[0]}</p>
                          <p className="text-white/80 text-xs">{ambassador.impact.partners.split(' ').slice(1).join(' ')}</p>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-white">{ambassador.impact.training?.split(' ')[0] || ambassador.impact.churches?.split(' ')[0]}</p>
                          <p className="text-white/80 text-xs">{(ambassador.impact.training || ambassador.impact.churches)?.split(' ').slice(1).join(' ')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 italic text-sm leading-relaxed border-l-4 border-royal-blue pl-4">
                      "{ambassador.quote}"
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
              Apply to Become an Ambassador
            </button>
          </motion.div>
        </div>
      </section>

      {/* Where Your Gift Goes - Visual Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FaGlobe className="text-6xl text-brand-gold mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Where Your Gift Goes</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Every dollar creates measurable transformation in real lives
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                percentage: '40%',
                category: 'Global Missions',
                project: '2024 Project: 50 New Churches Across Africa',
                story: 'Funded crusades in 15 nations. 50,000 salvations. 50 new churches established. Training 200 pastors.',
                image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
                color: 'from-royal-blue to-electric-purple'
              },
              {
                percentage: '30%',
                category: 'Free Books',
                project: '2024 Project: 100K Books to Unreached Nations',
                story: 'Distributed 100,000 free books across Asia and Africa. 5,000 documented life transformations. 1,200 salvations.',
                image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
                color: 'from-brand-gold to-vibrant-orange'
              },
              {
                percentage: '20%',
                category: 'Media Production',
                project: '2024 Project: Digital Ministry Expansion',
                story: 'Produced 200 sermons, 50 podcasts, 20 courses. Reached 5M+ people monthly. 10,000 online salvations.',
                image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800',
                color: 'from-holy-fire to-vibrant-orange'
              },
              {
                percentage: '10%',
                category: 'Operations',
                project: '2024: Expanded to 5 New Nations',
                story: 'Opened offices in 5 nations. Hired 20 full-time staff. Enabled 24/7 prayer support. Infrastructure for growth.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
                color: 'from-sky-blue to-electric-purple'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  {/* Percentage Header */}
                  <div className={`bg-gradient-to-br ${item.color} p-8 text-center text-white`}>
                    <div className="text-6xl font-black mb-3">{item.percentage}</div>
                    <div className="text-xl font-bold">{item.category}</div>
                  </div>

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-black text-gray-900 mb-3">{item.project}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Giving */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <FaDollarSign className="text-6xl text-brand-gold mx-auto mb-4" />
              <h2 className="text-4xl font-black text-royal-blue mb-4">One-Time Donation</h2>
              <p className="text-xl text-gray-600">Make a one-time gift to support our mission</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {['$25', '$50', '$100', '$250', '$500', '$1000', 'Custom'].map((amount) => (
                  <button
                    key={amount}
                    className="bg-gray-50 border-2 border-gray-200 py-4 rounded-xl font-bold hover:border-royal-blue hover:bg-royal-blue hover:text-white transition-all"
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <button className="w-full bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all">
                Donate Now
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                Secure payment via Flutterwave, Paystack, PayPal & Stripe
              </p>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">Your Partnership Starts Today</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of partners who are transforming nations and experiencing personal breakthrough
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-brand-gold text-royal-blue px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-lg">
                Become a Monthly Partner
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-white hover:text-royal-blue transition-all">
                Give One-Time Gift
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
