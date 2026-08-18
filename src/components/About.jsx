import React from 'react';
import { Layers, ShieldCheck, Brain, Award, CheckCircle } from 'lucide-react';
import { CandlestickChartIcon } from './ui/Icons';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { ABOUT_CONTENT } from '../data/content';

const iconMap = {
  Layers: Layers,
  CandlestickChart: CandlestickChartIcon,
  ShieldCheck: ShieldCheck,
  Brain: Brain
};

export function About() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="about" className="section-wrapper">
      <div className="content-container">
        <div ref={sectionRef} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="About Trading Techstreet"
            badgeIcon={Award}
            title="Learn Trading From"
            titleHighlight="Experience."
            subtitle="Built on real market battles, disciplined risk frameworks, and practical chart execution."
          />

          <div className="about-grid">
            {/* Left Column: Descriptive Story & Philosophy */}
            <div className="about-text-content">
              <p style={{ color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: 500 }}>
                {ABOUT_CONTENT.paragraph1}
              </p>
              <p>
                {ABOUT_CONTENT.paragraph2}
              </p>

              <div
                style={{
                  marginTop: '28px',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(245, 158, 11, 0.05)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(245, 158, 11, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle size={20} />
                </div>
                <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  Zero get-rich-quick schemes. 100% disciplined, repeatable trading frameworks.
                </span>
              </div>
            </div>

            {/* Right Column: 4 Educational Pillars */}
            <div className="about-pillars-grid">
              {ABOUT_CONTENT.pillars.map((pillar, idx) => {
                const IconComp = iconMap[pillar.icon] || Layers;
                return (
                  <div key={pillar.title} className={`pillar-card delay-${(idx + 1) * 100}`}>
                    <div className="pillar-icon-box">
                      <IconComp size={22} />
                    </div>
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
