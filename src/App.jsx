import React, { useState } from 'react';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { BackgroundAnimation } from './components/ui/BackgroundAnimation';
import { TickerTape } from './components/TickerTape';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MediaPartners } from './components/MediaPartners';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { StrategyComparison } from './components/StrategyComparison';
import { ConceptInspector } from './components/ConceptInspector';
import { Courses } from './components/Courses';
import { RiskCalculator } from './components/RiskCalculator';
import { YouTubeSection } from './components/YouTubeSection';
import { Founder } from './components/Founder';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Download, Sparkles } from 'lucide-react';

const SECTION_IDS = [
  'hero',
  'about',
  'methodology-comparison',
  'playbook',
  'courses',
  'calculator',
  'youtube',
  'founder',
  'why-us',
  'testimonials',
  'faqs',
  'community'
];

export function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 100);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Dynamic ambient floating auroras & chart particle constellation */}
      <BackgroundAnimation />

      {/* Background grain noise */}
      <div className="bg-noise-overlay" aria-hidden="true" />

      {/* Top fixed scroll progress indicator */}
      <ScrollProgress />

      {/* 1. Very Top Live Market Ticker Tape Marquee */}
      <TickerTape />

      {/* 2. Sticky Glass Navbar with Live Activity Beacon */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Content */}
      <main id="main-content">
        {/* 3. Hero Section with Gold (XAU/USD) Pro Terminal */}
        <Hero />

        {/* 4. Trust & Institutional Ecosystem Strip */}
        <MediaPartners />

        {/* 5. Trust Numbers Strip */}
        <TrustStats />

        <hr className="section-divider" />

        {/* 6. About Section */}
        <About />

        <hr className="section-divider" />

        {/* 7. Interactive Strategy Comparison Split Slider (Retail vs Institutional) */}
        <StrategyComparison />

        <hr className="section-divider" />

        {/* 8. Institutional Playbook / Setup Inspector */}
        <ConceptInspector />

        <hr className="section-divider" />

        {/* 9. Courses Masterclass Grid with Category Filters & Difficulty Meters */}
        <Courses />

        <hr className="section-divider" />

        {/* 10. Interactive Pro Position Sizing & Risk Calculator */}
        <RiskCalculator />

        <hr className="section-divider" />

        {/* 11. YouTube Masterclass Section with Interactive Player */}
        <YouTubeSection />

        <hr className="section-divider" />

        {/* 12. Meet Your Mentor (Founder) */}
        <Founder />

        <hr className="section-divider" />

        {/* 13. Why Us Section */}
        <WhyUs />

        <hr className="section-divider" />

        {/* 14. Student Testimonials Section */}
        <Testimonials />

        <hr className="section-divider" />

        {/* 15. Frequently Asked Questions Accordion */}
        <FAQ />

        <hr className="section-divider" />

        {/* 16. Community Channels */}
        <Community />
      </main>

      {/* 17. Footer with Required Risk Disclaimer */}
      <Footer />

      {/* Floating Free Playbook Cheat Sheet Trigger */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 990
        }}
      >
        <button
          type="button"
          onClick={() => setIsLeadModalOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
            color: '#0B0D10',
            fontWeight: 700,
            fontSize: '0.86rem',
            border: '2px solid rgba(255,255,255,0.4)',
            boxShadow: '0 8px 30px rgba(245, 158, 11, 0.5), 0 0 15px rgba(251, 191, 36, 0.4)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
        >
          <Download size={16} strokeWidth={2.5} />
          <span>Free 10-Rule Playbook PDF</span>
        </button>
      </div>

      {/* Free Playbook Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />
    </div>
  );
}

export default App;
