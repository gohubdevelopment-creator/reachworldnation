import LiveServiceIndicator from '../components/home/LiveServiceIndicator';
import HeroBanner from '../components/home/HeroBanner';
import QuickAccessButtons from '../components/home/QuickAccessButtons';
import PrayerWorshipActivities from '../components/home/PrayerWorshipActivities';
import DailyDevotional from '../components/home/DailyDevotional';
import Testimonies from '../components/home/Testimonies';
import ImpactStats from '../components/home/ImpactStats';
import EventsCarousel from '../components/home/EventsCarousel';
import FoundersMessage from '../components/home/FoundersMessage';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Live Service Indicator - Shows when service is live */}
      <LiveServiceIndicator />

      {/* Hero Banner - Ministry-focused rotating slides */}
      <HeroBanner />

      {/* Quick Actions - Prayer, Testimony, Devotional, Partner */}
      <QuickAccessButtons />

      {/* Prayer & Worship Activities - Active ministry schedule */}
      <PrayerWorshipActivities />

      {/* Daily Devotional - Today's word with download */}
      <DailyDevotional />

      {/* Recent Testimonies - Lives being transformed */}
      <Testimonies />

      {/* Founder's Message - Welcome from Pastor David */}
      <FoundersMessage />

      {/* Impact Statistics - Numbers showing God's work */}
      <ImpactStats />

      {/* Upcoming Events - Conferences and gatherings */}
      <EventsCarousel />
    </div>
  );
};

export default HomePage;
