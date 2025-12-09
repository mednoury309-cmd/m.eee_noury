import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { IntroAnimation } from './components/IntroAnimation';
import { AIChat } from './components/AIChat';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col relative bg-bg">
        {loading && <IntroAnimation onComplete={() => setLoading(false)} />}
        
        {/* We hide the main content until loading is almost done, or just let it sit behind the overlay */}
        <div className={`flex-1 flex flex-col transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <ScrollToTop />
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
        
        {/* Chat can appear after load */}
        {!loading && <AIChat />}
      </div>
    </Router>
  );
}

export default App;