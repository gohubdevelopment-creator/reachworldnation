import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BooksPage from './pages/BooksPage';
import MediaPage from './pages/MediaPage';
import PrayerPage from './pages/PrayerPage';
import PartnerPage from './pages/PartnerPage';
import BlogPage from './pages/BlogPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/prayer" element={<PrayerPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
