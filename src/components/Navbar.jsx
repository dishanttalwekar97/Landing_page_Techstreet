import React, { useState, useEffect } from 'react';
import { TrendingUp, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  // Clean, focused core navigation items
  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Playbook', href: '#playbook', id: 'playbook' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'Calculator', href: '#calculator', id: 'calculator' },
    { label: 'YouTube', href: '#youtube', id: 'youtube' },
    { label: 'Mentor', href: '#founder', id: 'founder' }
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="content-container">
          <div className="nav-container">
            {/* 1. Left: Brand Logo */}
            <a
              href="#hero"
              className="nav-brand"
              aria-label="Trading Techstreet Homepage"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <div className="brand-icon-box">
                <TrendingUp size={19} strokeWidth={2.4} />
              </div>
              <div className="brand-name-text">
                Trading <span className="brand-text-accent">Techstreet</span>
              </div>
            </a>

            {/* 2. Center: Clean Glass Nav Capsule */}
            <nav className="nav-menu-desktop" aria-label="Primary Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <div key={link.id} className="nav-link-item">
                    <a
                      href={link.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* 3. Right: Sleek Primary Action CTA */}
            <div className="nav-cta-group">
              <Button
                href="#courses"
                size="sm"
                variant="primary"
                magnetic={true}
                className="btn-nav-cta"
                onClick={(e) => handleNavClick(e, '#courses')}
              >
                <span>Explore Courses</span>
                <ArrowRight size={15} />
              </Button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Menu">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
          <div className="nav-brand">
            <div className="brand-icon-box">
              <TrendingUp size={18} />
            </div>
            <div className="brand-name-text" style={{ fontSize: '1.1rem' }}>
              Trading <span className="brand-text-accent">Techstreet</span>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="modal-close-btn"
            style={{ position: 'static' }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1, overflowY: 'auto' }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                fontSize: '0.96rem',
                fontWeight: activeSection === link.id ? 700 : 500,
                color: activeSection === link.id ? 'var(--accent-gold-light)' : '#E5E7EB',
                backgroundColor: activeSection === link.id ? 'rgba(245, 158, 11, 0.12)' : 'transparent',
                border: activeSection === link.id ? '1px solid rgba(245, 158, 11, 0.25)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
            >
              {link.label}
              <ArrowRight size={14} style={{ opacity: activeSection === link.id ? 1 : 0.4 }} />
            </a>
          ))}
        </nav>

        <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Button
            href="#courses"
            variant="primary"
            style={{ width: '100%' }}
            onClick={(e) => handleNavClick(e, '#courses')}
          >
            <span>Explore Courses</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </aside>
    </>
  );
}
