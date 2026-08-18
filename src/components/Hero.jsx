import React from 'react';
import { ArrowRight, Play, Shield, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';
import { HeroChart } from './HeroChart';
import { BRAND_INFO } from '../data/content';

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Multi-layered soft radial accent glows behind hero */}
      <div
        className="ambient-glow-pill"
        style={{
          width: '550px',
          height: '400px',
          top: '10%',
          left: '15%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />
      <div
        className="ambient-glow-pill"
        style={{
          width: '600px',
          height: '500px',
          top: '20%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.09) 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="content-container">
        <div className="hero-grid">
          {/* Left Column: Hero Copy */}
          <div className="hero-content">
            {/* Top Badge */}
            <div className="hero-badge-container">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                <span>Mentored by {BRAND_INFO.founder}</span>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <span style={{ color: '#FFF' }}>950K+ Community</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Master the Markets.{' '}
              <span className="hero-title-highlight">Trade With Confidence.</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline">
              {BRAND_INFO.subheadline}
            </p>

            {/* Two Action CTAs */}
            <div className="hero-cta-group">
              <Button
                href="#courses"
                size="lg"
                variant="primary"
                magnetic={true}
              >
                Explore Courses
                <ArrowRight size={18} />
              </Button>

              <Button
                href="#youtube"
                size="lg"
                variant="secondary"
                magnetic={true}
              >
                <Play size={18} fill="#F59E0B" stroke="none" />
                Watch on YouTube
              </Button>
            </div>

            {/* Core Trust & Topic Tags */}
            <div className="hero-feature-tags">
              <div className="hero-tag">
                <CheckCircle2 size={16} className="hero-tag-icon" />
                <span>Price Action & SMC</span>
              </div>
              <div className="hero-tag">
                <CheckCircle2 size={16} className="hero-tag-icon" />
                <span>Scalping Frameworks</span>
              </div>
              <div className="hero-tag">
                <CheckCircle2 size={16} className="hero-tag-icon" />
                <span>Risk Management First</span>
              </div>
              <div className="hero-tag">
                <CheckCircle2 size={16} className="hero-tag-icon" />
                <span>No Indicator Clutter</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Candlestick Canvas */}
          <div className="hero-chart-container">
            <HeroChart />
          </div>
        </div>
      </div>
    </section>
  );
}
