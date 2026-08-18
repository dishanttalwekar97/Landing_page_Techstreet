import React, { useState } from 'react';
import {
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { YoutubeIcon, TelegramIcon, InstagramIcon } from './ui/Icons';
import { BRAND_INFO, FOOTER_TOPICS } from '../data/content';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const quickLinks = [
    { label: 'About Mentor', href: '#about' },
    { label: 'Masterclass Programs', href: '#courses' },
    { label: 'Free YouTube Lessons', href: '#youtube' },
    { label: 'Why Trading Techstreet', href: '#why-us' },
    { label: 'Student Testimonials', href: '#testimonials' },
    { label: 'Join Community', href: '#community' }
  ];

  return (
    <footer className="footer-main">
      <div className="content-container">
        {/* Mandatory Visible Risk & Educational Disclaimer Box */}
        <div className="disclaimer-card" role="region" aria-label="Risk Disclaimer">
          <div className="disclaimer-title">
            <AlertTriangle size={18} color="#F59E0B" />
            <span>Important Risk & Educational Disclaimer</span>
          </div>
          <p className="disclaimer-text">
            <strong>Trading Techstreet</strong> and <strong>Akhand Pratap Singh</strong> provide content strictly for educational and informational purposes only. None of the materials, strategies, videos, chart analysis, or community posts constitute financial advice, investment recommendations, or an offer/solicitation to buy or sell any financial instrument. Trading in Equities, Futures & Options, Forex, Commodities, and Cryptocurrencies involves substantial risk of capital loss and is not suitable for every individual. You are solely responsible for your own trading and investment decisions. Past performance does not guarantee future results. Always trade with risk capital you can afford to lose and consult a certified financial advisor before risking capital in live markets.
          </p>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Socials */}
          <div>
            <a href="#hero" className="nav-brand" aria-label="Trading Techstreet">
              <div className="brand-icon-box">
                <TrendingUp size={20} strokeWidth={2.5} />
              </div>
              <span>
                Trading <span className="brand-text-accent">Techstreet</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Premier trading education founded by Akhand Pratap Singh. Empowering 950K+ traders worldwide through practical price action and strict risk management.
            </p>
            <div className="footer-social-links">
              <a
                href="https://youtube.com/@tradingtechstreet"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Trading Techstreet YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Trading Techstreet Telegram"
              >
                <TelegramIcon size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Trading Techstreet Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Topics */}
          <div>
            <h4 className="footer-col-title">Educational Topics</h4>
            <div className="footer-topics-tags">
              {FOOTER_TOPICS.map((topic) => (
                <span key={topic} className="footer-topic-tag">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter / Market Insights */}
          <div>
            <h4 className="footer-col-title">Market Insights Digest</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Subscribe for weekly educational chart reviews, webinar invites, and price action case studies.
            </p>
            
            <form onSubmit={handleSubscribe} className="newsletter-box">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                  aria-label="Email Address for newsletter"
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={16} />
                </button>
              </div>

              {subscribed && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#10B981' }}>
                  <CheckCircle2 size={14} />
                  <span>Thank you! You're subscribed to weekly insights.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Trading Techstreet. All rights reserved. Led by Akhand Pratap Singh.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#hero" className="footer-link">Terms of Service</a>
            <a href="#hero" className="footer-link">Privacy Policy</a>
            <a href="#hero" className="footer-link">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
