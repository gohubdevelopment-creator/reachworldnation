import { motion } from 'framer-motion';
import { FaBook, FaDownload, FaShoppingCart, FaCheckCircle, FaTimes, FaCreditCard, FaUniversity, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';
import APIService from '../services/api';

const BooksPage = () => {
  const [processingBookIndex, setProcessingBookIndex] = useState(null);
  const [error, setError] = useState(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const [gateway, setGateway] = useState('flutterwave');
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    country: 'Nigeria',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openPurchaseModal = (bookIndex) => {
    setSelectedBookIndex(bookIndex);
    setShowPurchaseModal(true);
    setError(null);
  };

  // Handle book purchase with selected gateway
  const handleBookPurchase = async (e) => {
    e.preventDefault();
    setProcessingBookIndex(selectedBookIndex);
    setError(null);

    try {
      // Product IDs: Digital=1,3,5... Physical=2,4,6...
      const productId = (selectedBookIndex * 2) + 2; // Maps to physical book IDs

      const response = await APIService.createOrder({
        items: [{ product_id: productId, quantity: 1 }],
        email: formData.email,
        fullName: formData.fullName,
        phone: formData.phone,
        shippingAddress: {
          shipping_address_line1: formData.address,
          shipping_city: formData.city,
          shipping_country: formData.country,
        },
        currency: gateway === 'stripe' ? 'USD' : 'NGN',
        gateway: gateway,
        callbackUrl: `${window.location.origin}/books?payment=success`,
      });

      // Redirect to payment page
      if (response.authorization_url) {
        window.location.href = response.authorization_url;
      } else if (response.client_secret) {
        // For Stripe, we'd need to handle client-side payment
        // For now, show error as we don't have Stripe Elements here
        throw new Error('Stripe payments require card details. Please select Paystack or Flutterwave.');
      } else {
        throw new Error('Payment initialization failed');
      }
    } catch (err) {
      setError(err.message);
      setProcessingBookIndex(null);
    }
  };

  const readerStories = [
    {
      name: 'Sarah Okonkwo',
      location: 'Lagos, Nigeria',
      bookRead: 'The Kingdom Mindset',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      before: 'Business failing, ₦5 million in debt, no hope',
      after: 'Applied kingdom principles from the book. Revenue increased 400% in 6 months. Now employs 15 people.',
      quote: '"This book didn\'t just change my mindset—it transformed my entire business model. Every chapter was a breakthrough!"'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      bookRead: 'Breaking Free',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      before: '12 years of addiction, broken marriage, lost career',
      after: 'The book\'s teachings on deliverance set him free. Now leads recovery ministry reaching 200+ annually.',
      quote: '"I read it in one night. By morning, chains that held me for 12 years were broken. This book saved my life!"'
    },
    {
      name: 'Grace Mensah',
      location: 'Accra, Ghana',
      bookRead: 'Divine Purpose Unlocked',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      before: 'Dead-end job, living paycheck to paycheck, no vision',
      after: 'Discovered her God-given purpose. Started consulting firm now impacting 50+ African businesses.',
      quote: '"Chapter 3 on \'Finding Your Kingdom Assignment\' changed everything. I finally understood why I was created!"'
    }
  ];

  const books = [
    {
      title: 'Life by Design',
      description: 'You were never meant to live by trial and error. You were meant to live by design — God\'s design. Learn how to build your life with intention and align your daily habits with divine purpose.',
      fullDescription: `LIFE BY DESIGN — Living Intentionally, Not Accidentally

You were never meant to live by trial and error.
You were meant to live by design — God's design.

Life by Design is a powerful and revealing book that helps you discover how to live with purpose, clarity, and direction in a world that celebrates busyness over meaning. It teaches you how to build your life with intention, align your daily habits with divine purpose, and become the person God designed you to be.

In this book, you'll learn:
• How to uncover God's blueprint for your life.
• The power of identity, vision, and purpose in shaping destiny.
• How to stop reacting to life and start creating your future with wisdom.
• The spiritual and practical systems that lead to lasting growth.
• How to make daily decisions that move you toward your purpose, not away from it.

Each chapter is filled with depth, truth, and practical wisdom that will awaken your mind and spirit. It's not about chasing success — it's about becoming the kind of person success finds.

Your life is not random.
Your calling is not a coincidence.
Everything about you was designed with intention.

This book will help you rediscover that design and empower you to live it out with faith, focus, and fulfillment.`,
      image: '/books/Life-by-design.jpeg',
      gradient: 'from-royal-blue to-electric-purple',
      category: 'Purpose',
      price: 10000,
      transformed: '30K+ Readers',
      keyBenefit: 'Build the future God already imagined for you'
    },
    {
      title: '100 Days Journey into the Finished Works of Christ',
      description: 'A life-transforming devotional designed to help you rediscover who you are, what you have, and what you can do — because of Jesus. Walk in the victory Christ secured.',
      fullDescription: `100 DAYS JOURNEY INTO THE FINISHED WORKS OF CHRIST — Living From What Christ Has Already Done

You were not called to struggle for what Christ has already finished.
You were called to live in the victory He secured.

100 Days Journey into the Finished Works of Christ is a life-transforming devotional designed to help you rediscover who you are, what you have, and what you can do — because of Jesus. For 100 days, you'll walk through powerful truths about grace, righteousness, healing, provision, and identity in Christ.

This devotional is more than daily reading; it's a spiritual awakening.

Each day includes:
• A short, revelatory teaching rooted in Scripture.
• A reflection to renew your mindset.
• A prayer to align your heart with God's truth.
• A declaration to help you live by faith, not fear.

You'll learn how to:
• Rest in what Jesus has already accomplished on the Cross.
• Live with peace, power, and divine confidence.
• Break free from guilt, shame, and self-effort.
• Walk daily in victory, not defeat.
• See yourself the way God sees you — complete in Christ.

This journey will shift you from trying to earn God's favor to enjoying it. From chasing blessings to walking in them. From striving for victory to living from victory.

The Cross is not a beginning of your effort — it's the end of your struggle.

Now, walk in it.`,
      image: '/books/reachworld-devotional.jpeg',
      gradient: 'from-brand-gold to-vibrant-orange',
      category: 'Devotional',
      price: 6000,
      transformed: '50K+ Readers',
      keyBenefit: 'Experience freedom, peace, and power every single day'
    },
    {
      title: 'Reasons for Your Limitations',
      description: 'A confronting, enlightening, and liberating book that exposes the real causes of stagnation, delay, and underachievement — both spiritual and practical.',
      fullDescription: `REASONS FOR YOUR LIMITATIONS — Breaking the Barriers That Hold You Back

Before God lifts a man, He opens his eyes.
Many people pray for elevation, yet remain bound by invisible walls within.

Reasons for Your Limitations is a confronting, enlightening, and liberating book that exposes the real causes of stagnation, delay, and underachievement — both spiritual and practical. It reveals that limitations are rarely external; they are mostly internal, built from beliefs, fears, habits, and ignorance.

In this powerful book, you'll learn:
• Why some people never rise despite great potential.
• The hidden roots of repeated failure and how to uproot them.
• How your mindset, choices, and associations shape your limits.
• The role of faith, obedience, and personal discipline in breakthrough.
• How to rebuild your inner system for success and divine progress.

Every chapter is filled with truth, light, and wisdom to help you confront the real enemy — not people, not systems, but the patterns that limit your greatness from within.

This is not a book of excuses; it's a book of awakening. It calls you to take responsibility for your destiny and partner with God for transformation.

When understanding comes, freedom begins.
When truth enters, limits fall.`,
      image: '/books/Reasons-for-your-limitations.jpeg',
      gradient: 'from-purple-600 to-blue-700',
      category: 'Breakthrough',
      price: 8000,
      transformed: '75K+ Readers',
      keyBenefit: 'Step into clarity, courage, and breakthrough'
    },
    {
      title: 'The Divine Man',
      description: 'A journey into the life of divinity — a revelation of what happens when a man rises beyond flesh, ego, and brokenness...',
      fullDescription: `THE DIVINE MAN — A Journey into the Life of Divinity

Before man was called to lead, he was called to be like God.

The true measure of manhood is not strength, success, or status — it is divinity expressed through humanity.

The Divine Man is not just a book about men. It is a journey into the life of divinity — a revelation of what happens when a man rises beyond flesh, ego, and brokenness to walk in his original image: the likeness of God.

This book calls every man back to his source — to rediscover the divine life that flows from fellowship, purity, purpose, and authority in Christ. It's for men who want to live beyond survival and power, to become vessels of wisdom, love, and kingdom dominion.

Inside, you'll learn:
• The mystery of divine identity — understanding who you are in God.
• How to live from your spirit, not your struggles.
• The systems that build inner strength, purity, and discipline.
• The link between divine presence, purpose, and power.
• How to lead with character, humility, and spiritual authority.

Every page is a call to rise — to embrace your divine nature and express heaven's character on earth.

The Divine Man is not about perfection; it's about transformation.

It's about becoming a man who reflects the God who formed him.

You were never meant to live ordinary.
You were meant to live divine.`,
      image: '/books/The-divine-man.jpeg',
      gradient: 'from-blue-600 to-indigo-700',
      category: 'Identity',
      price: 10000,
      transformed: '60K+ Readers',
      keyBenefit: 'Think like Christ, walk like Christ, rule with His wisdom'
    },
    {
      title: 'Pray in This Manner',
      description: 'Master the art of effective prayer. Learn the patterns and principles Jesus taught His disciples for prayers that move heaven.',
      fullDescription: `PRAY IN THIS MANNER — The Art of Effective Prayer

Prayer is not just talking to God — it's partnering with Him.

Pray in This Manner is a comprehensive guide to understanding and practicing the prayer life Jesus modeled for His disciples. This book breaks down the Lord's Prayer and reveals the depths of each phrase, teaching you how to pray with power, authority, and results.

In this book, you'll discover:
• The true meaning behind each line of the Lord's Prayer.
• How to approach God with confidence and reverence.
• The keys to answered prayer that Jesus Himself revealed.
• How to pray for provision, protection, and deliverance.
• The connection between forgiveness, faith, and breakthrough.

This is not about religious formulas — it's about relationship and revelation. When you understand how Jesus taught us to pray, your prayer life will never be the same.`,
      image: '/books/Pray-in-this-manner.jpeg',
      gradient: 'from-sky-500 to-purple-600',
      category: 'Prayer',
      price: 8000,
      transformed: '100K+ Readers',
      keyBenefit: 'Experience answered prayers consistently'
    },
    {
      title: 'Spiritual Authority and Dominion',
      description: 'Walk in the authority Christ has given you. Understand your position in the spirit realm and exercise dominion over every situation.',
      fullDescription: `SPIRITUAL AUTHORITY AND DOMINION — Walking in Your God-Given Power

You were created to reign, not to be ruled.

Spiritual Authority and Dominion is a powerful revelation of the believer's position in Christ and the authority we carry in the spirit realm. This book exposes the enemy's tactics and equips you to stand firm, take charge, and exercise the dominion God has given you.

In this book, you'll learn:
• The biblical foundation of spiritual authority.
• How to identify and overcome spiritual attacks.
• The keys to walking in consistent victory.
• How to release the power of God in every situation.
• Your rights and responsibilities as a son of God.

You are not a victim — you are a victor. It's time to take your place and walk in the authority that is rightfully yours in Christ Jesus.`,
      image: '/books/Spiritual-Authority-and-Dominion.jpeg',
      gradient: 'from-amber-600 to-orange-600',
      category: 'Spiritual Warfare',
      price: 8000,
      transformed: '40K+ Readers',
      keyBenefit: 'Take charge of your spiritual environment'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600"
            alt="Books and reading"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/95 via-vibrant-orange/90 to-deep-charcoal/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <FaBook className="text-7xl mx-auto mb-6" />
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Books That <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold-300 to-white">Transform Lives</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              500,000+ books distributed. Thousands of testimonies. Read the book that will change your story.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '500K+', label: 'Books Distributed' },
                { number: '50+', label: 'Titles Published' },
                { number: '150+', label: 'Nations Reached' },
                { number: '100K+', label: 'Lives Changed' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reader Transformation Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Books That Changed Lives</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Real readers. Real transformations. See what happened when they applied what they read.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {readerStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  <div className="md:col-span-2">
                    <div className="relative group mb-6">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                        <FaCheckCircle /> Transformed
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">{story.name}</h3>
                    <p className="text-gray-600 mb-4">{story.location}</p>
                    <span className="inline-block bg-brand-gold text-white px-4 py-2 rounded-full font-semibold text-sm">
                      Read: {story.bookRead}
                    </span>
                  </div>

                  <div className="md:col-span-3">
                    <div className="mb-6">
                      <h4 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                        <FaBook className="text-brand-gold" /> The Transformation:
                      </h4>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-20 text-sm font-bold text-red-600 uppercase">Before:</div>
                        <p className="text-gray-700 flex-1">{story.before}</p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-20 text-sm font-bold text-green-600 uppercase">After:</div>
                        <p className="text-gray-900 font-semibold flex-1">{story.after}</p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-brand-gold bg-brand-gold/5 pl-6 py-4 italic text-gray-700 text-lg mb-6">
                      {story.quote}
                    </blockquote>

                    <button className="bg-gradient-to-r from-brand-gold to-vibrant-orange text-white px-8 py-4 rounded-xl font-black hover:shadow-2xl transition-all flex items-center gap-2">
                      <FaDownload /> Download "{story.bookRead}" Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Library */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-royal-blue mb-6">Transformation Library</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Each book is a journey from where you are to where God is calling you
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col">
                  <div
                    className="h-72 relative overflow-hidden cursor-pointer"
                    onClick={() => { setSelectedBookIndex(index); setShowDetailModal(true); }}
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${book.gradient} opacity-20`} />
                    <div className="absolute top-4 right-4 bg-white text-royal-blue px-3 py-1 rounded-full font-black text-lg shadow-lg">
                      ₦{book.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <span className="inline-block bg-royal-blue text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 self-start">
                      {book.category}
                    </span>
                    <h3
                      className="text-2xl font-black text-gray-900 mb-3 cursor-pointer hover:text-royal-blue transition-colors"
                      onClick={() => { setSelectedBookIndex(index); setShowDetailModal(true); }}
                    >
                      {book.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{book.description}</p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Price:</span>
                        <span className="font-black text-royal-blue text-xl">₦{book.price.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2">
                        <div className="text-sm text-green-600 font-bold">{book.transformed}</div>
                        <div className="text-xs text-gray-500">Lives Transformed</div>
                      </div>
                    </div>

                    <div className="bg-brand-gold/10 rounded-xl p-3 mb-4">
                      <p className="text-sm font-semibold text-gray-900 text-center">{book.keyBenefit}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => { setSelectedBookIndex(index); setShowDetailModal(true); }}
                        className="bg-gradient-to-r from-royal-blue to-electric-purple text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <FaBook className="text-sm" /> Details
                      </button>
                      <button
                        onClick={() => openPurchaseModal(index)}
                        className="bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <FaShoppingCart className="text-sm" /> Buy
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author's Heart */}
      <section className="py-24 bg-gradient-to-br from-royal-blue via-electric-purple to-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Pastor David S. Okeke"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black mb-6">Why I Write</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                "Every book I write comes from a personal battle I've fought and won. I don't write theory—I write
                transformation. When I was financially broken, God taught me kingdom mindset. When I battled doubt,
                He showed me faith that moves mountains."
              </p>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                "These books aren't just information. They're impartation. They carry the anointing that broke chains
                in my life and will break chains in yours. Read them with expectation—your breakthrough is in these pages."
              </p>
              <p className="text-2xl font-black text-brand-gold">
                - Pastor David S. Okeke
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-royal-blue mb-6">Your Transformation Starts with One Book</h2>
            <p className="text-xl text-gray-600 mb-8">
              Download any book free or order physical copies. Your breakthrough is waiting in these pages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-royal-blue to-electric-purple text-white px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all">
                Browse All Books
              </button>
              <button className="bg-gradient-to-r from-brand-gold to-vibrant-orange text-white px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all">
                Order Physical Copies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Detail Modal */}
      {showDetailModal && selectedBookIndex !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={books[selectedBookIndex].image}
                alt={books[selectedBookIndex].title}
                className="w-full h-64 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${books[selectedBookIndex].gradient} opacity-30`} />
              <button
                onClick={() => setShowDetailModal(false)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <FaTimes className="text-xl" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-royal-blue text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {books[selectedBookIndex].category}
                </span>
                <h2 className="text-3xl font-black text-white drop-shadow-lg">
                  {books[selectedBookIndex].title}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-black text-royal-blue">
                    ₦{books[selectedBookIndex].price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-2 text-sm">{books[selectedBookIndex].transformed}</span>
                </div>
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    openPurchaseModal(selectedBookIndex);
                  }}
                  className="bg-gradient-to-r from-brand-gold to-vibrant-orange text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <FaShoppingCart /> Buy Now
                </button>
              </div>

              <div className="bg-brand-gold/10 rounded-xl p-4 mb-6">
                <p className="font-semibold text-gray-900 text-center">{books[selectedBookIndex].keyBenefit}</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {books[selectedBookIndex].fullDescription}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    openPurchaseModal(selectedBookIndex);
                  }}
                  className="w-full bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Purchase This Book - ₦{books[selectedBookIndex].price.toLocaleString()}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Purchase Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-gray-900">
                  Buy: {selectedBookIndex !== null && books[selectedBookIndex]?.title}
                </h3>
                <button
                  onClick={() => {
                    setShowPurchaseModal(false);
                    setProcessingBookIndex(null);
                    setError(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleBookPurchase} className="space-y-4">
                {/* Gateway Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setGateway('stripe')}
                      className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                        gateway === 'stripe'
                          ? 'border-royal-blue bg-royal-blue/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FaCreditCard
                        className={`text-xl ${
                          gateway === 'stripe' ? 'text-royal-blue' : 'text-gray-400'
                        }`}
                      />
                      <span
                        className={`font-semibold text-xs ${
                          gateway === 'stripe' ? 'text-royal-blue' : 'text-gray-600'
                        }`}
                      >
                        Stripe
                      </span>
                      <span className="text-[10px] text-gray-500">International</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGateway('paystack')}
                      className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                        gateway === 'paystack'
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FaUniversity
                        className={`text-xl ${
                          gateway === 'paystack' ? 'text-green-600' : 'text-gray-400'
                        }`}
                      />
                      <span
                        className={`font-semibold text-xs ${
                          gateway === 'paystack' ? 'text-green-600' : 'text-gray-600'
                        }`}
                      >
                        Paystack
                      </span>
                      <span className="text-[10px] text-gray-500">Nigeria</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGateway('flutterwave')}
                      className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                        gateway === 'flutterwave'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FaGlobe
                        className={`text-xl ${
                          gateway === 'flutterwave' ? 'text-orange-500' : 'text-gray-400'
                        }`}
                      />
                      <span
                        className={`font-semibold text-xs ${
                          gateway === 'flutterwave' ? 'text-orange-500' : 'text-gray-600'
                        }`}
                      >
                        Flutterwave
                      </span>
                      <span className="text-[10px] text-gray-500">Africa</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="e.g. +234 801 234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Shipping Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    >
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={processingBookIndex !== null}
                    className="w-full bg-gradient-to-r from-brand-gold to-vibrant-orange text-white py-4 rounded-xl font-black text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processingBookIndex !== null ? 'Processing...' : 'Proceed to Payment'}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  You will be redirected to {gateway === 'stripe' ? 'Stripe' : gateway === 'paystack' ? 'Paystack' : 'Flutterwave'} to complete your payment securely.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BooksPage;
