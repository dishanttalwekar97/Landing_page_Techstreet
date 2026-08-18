import React from 'react';
import { UserCheck, Award, ShieldCheck, CheckCircle, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { FOUNDER_INFO } from '../data/content';

/**
 * Enhanced Founder Avatar SVG Vector Illustration with Golden Sheen
 */
function FounderAvatarSVG() {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="founder-avatar-svg"
    >
      <defs>
        <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C222B" />
          <stop offset="50%" stopColor="#12161D" />
          <stop offset="100%" stopColor="#0B0D10" />
        </linearGradient>
        <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="glowBack" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.25)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Background Frame with Glow */}
      <rect width="400" height="500" fill="url(#avatarBg)" />
      <circle cx="200" cy="200" r="150" fill="url(#glowBack)" />

      {/* Decorative Candlestick Lines in Background */}
      <g opacity="0.2">
        <line x1="70" y1="240" x2="70" y2="60" stroke="#10B981" strokeWidth="2" />
        <rect x="64" y="100" width="12" height="90" fill="#10B981" rx="2" />

        <line x1="330" y1="300" x2="330" y2="80" stroke="#F59E0B" strokeWidth="2" />
        <rect x="324" y="130" width="12" height="110" fill="#F59E0B" rx="2" />
      </g>

      {/* Stylized Silhouette & Suit */}
      <circle cx="200" cy="180" r="76" fill="#262E38" />
      <circle cx="200" cy="180" r="68" fill="#303A47" />
      
      {/* Sleek Glasses & Professional Focus */}
      <path d="M164 174 C164 167 184 167 184 174 C184 181 164 181 164 174 Z" fill="none" stroke="#F59E0B" strokeWidth="3" />
      <path d="M216 174 C216 167 236 167 236 174 C236 181 216 181 216 174 Z" fill="none" stroke="#F59E0B" strokeWidth="3" />
      <line x1="184" y1="174" x2="216" y2="174" stroke="#F59E0B" strokeWidth="3" />

      {/* Professional Suit & Golden Tie */}
      <path d="M100 500 L155 310 L200 385 L245 310 L300 500 Z" fill="#181C22" />
      <path d="M192 360 L200 480 L208 360 Z" fill="url(#goldAccent)" />
      <path d="M135 340 L190 490 L100 500 Z" fill="#12151B" />
      <path d="M265 340 L210 490 L300 500 Z" fill="#12151B" />

      {/* Geometric Golden Lighting Arc */}
      <circle cx="200" cy="200" r="175" stroke="url(#goldAccent)" strokeWidth="2" strokeDasharray="8 10" opacity="0.45" />
    </svg>
  );
}

export function Founder() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="founder" className="section-wrapper">
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Leadership & Mentorship"
            badgeIcon={UserCheck}
            title="Meet Your"
            titleHighlight="Mentor."
            subtitle="Real market experience, transparent guidance, and an uncompromising commitment to your trading discipline."
          />

          <Card className="founder-card" enableGlow={true}>
            <div className="founder-grid">
              {/* Left Column: Stylized Portrait Frame */}
              <div className="founder-image-wrapper">
                <div className="founder-image-frame">
                  <FounderAvatarSVG />
                  <div className="founder-verified-badge">
                    <CheckCircle size={16} color="#10B981" />
                    <span>Verified Professional Trader</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder Details & Credentials */}
              <div className="founder-info-column">
                <div className="founder-title-sub">{FOUNDER_INFO.role}</div>
                <h3 className="founder-name">{FOUNDER_INFO.name}</h3>

                <p className="founder-bio">{FOUNDER_INFO.bio}</p>

                {/* Stat Badges */}
                <div className="founder-stats-strip">
                  {FOUNDER_INFO.stats.map((stat, idx) => (
                    <div key={idx} className="founder-stat-badge">
                      <div className="founder-stat-val">{stat.val}</div>
                      <div className="founder-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Verified Achievements Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {FOUNDER_INFO.milestones.map((ms, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="#F59E0B" style={{ flexShrink: 0 }} />
                      <span>{ms}</span>
                    </div>
                  ))}
                </div>

                {/* Trading Philosophy Quote with Gold Border */}
                <div className="founder-quote-box">
                  <p className="founder-quote-text">{FOUNDER_INFO.quote}</p>
                  <div
                    style={{
                      marginTop: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.82rem',
                      color: 'var(--accent-gold-light)',
                      fontWeight: 600
                    }}
                  >
                    <span>— Akhand Pratap Singh</span>
                    <span style={{ fontStyle: 'normal', color: 'var(--text-muted)' }}>Founder & Head Educator</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
