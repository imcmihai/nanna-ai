import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import IntegrationsSection from './components/IntegrationsSection';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import StickyForm from './components/StickyForm';
import Footer from './components/Footer';

function App() {
  const [showStickyForm, setShowStickyForm] = useState(false);
  const [isStickyFormExpanded, setIsStickyFormExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowStickyForm(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleStickyForm = () => {
    setIsStickyFormExpanded(!isStickyFormExpanded);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection id="hero" />
        <FeaturesSection id="features" />
        <IntegrationsSection id="integrations" />
        <AboutSection id="about" />
        <WhyUsSection id="why-us" />
      </main>
      <StickyForm 
        show={showStickyForm} 
        isExpanded={isStickyFormExpanded}
        onToggle={toggleStickyForm}
      />
      <Footer />
    </div>
  );
}

export default App;