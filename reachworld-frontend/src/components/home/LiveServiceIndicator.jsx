import { motion } from 'framer-motion';
import { FaCircle, FaPlay, FaPrayingHands } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const LiveServiceIndicator = () => {
  const [isLive, setIsLive] = useState(false); // This would be connected to real API in Phase 2
  const [viewerCount, setViewerCount] = useState(0);

  // Simulated live status (replace with actual API in Phase 2)
  useEffect(() => {
    // For demo purposes, randomly show as live
    const checkLiveStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      // Simulate live on Sundays 9-12 or Wednesdays 6-8
      if ((day === 0 && hour >= 9 && hour < 12) || (day === 3 && hour >= 18 && hour < 20)) {
        setIsLive(true);
        setViewerCount(Math.floor(Math.random() * 500) + 200);
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (!isLive) {
    return (
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaPrayingHands className="text-brand-gold text-xl" />
            <div>
              <p className="font-semibold">Next Service: Sunday 9:00 AM WAT</p>
              <p className="text-sm text-gray-300">Join us for powerful worship and teaching</p>
            </div>
          </div>
          <button className="bg-brand-gold text-deep-charcoal px-4 py-2 rounded-lg font-semibold hover:bg-white transition-all duration-300">
            Set Reminder
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.div
            className="flex items-center space-x-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaCircle className="text-white text-sm" />
            <span className="font-bold text-lg">LIVE NOW</span>
          </motion.div>
          <div className="hidden md:block">
            <p className="font-semibold">Sunday Worship Service</p>
            <p className="text-sm">{viewerCount.toLocaleString()} watching now</p>
          </div>
        </div>
        <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-bold hover:bg-brand-gold hover:text-deep-charcoal transition-all duration-300 flex items-center space-x-2">
          <FaPlay />
          <span>Watch Live</span>
        </button>
      </div>
    </motion.div>
  );
};

export default LiveServiceIndicator;
