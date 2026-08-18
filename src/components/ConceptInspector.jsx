import React, { useState } from 'react';
import { Target, Zap, Shield, Sparkles, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { useInView } from '../hooks/useInView';

const PLAYBOOK_SETUPS = [
  {
    id: 'fvg',
    title: 'Fair Value Gap (FVG) Fill',
    category: 'Smart Money Concepts',
    subtitle: 'Institutional Imbalance Exploitation',
    description: 'When aggressive institutional buying or selling creates a 3-candle imbalance, price frequently returns to fill the gap before continuing the primary trend.',
    entryTrigger: 'Price taps the 50% equilibrium level (Consequent Encroachment) of the FVG.',
    stopLossRule: 'Placed just above/below Candle #1 high/low.',
    targetRule: 'Next major liquidity high or low (Minimum 1:2.5 R:R).',
    winRateStat: 'High Confluence Setup'
  },
  {
    id: 'liquidity-sweep',
    title: 'Liquidity Sweep & Judas Swing',
    category: 'Market Microstructure',
    subtitle: 'Hunting Retail Stop Losses',
    description: 'Institutions intentionally push price beyond obvious swing highs/lows to trigger retail breakout orders and stop losses, providing the liquidity needed to enter large positions in the opposite direction.',
    entryTrigger: 'Candle closes back inside the previous key range with a long wick rejection.',
    stopLossRule: 'Placed beyond the extreme wick of the sweep.',
    targetRule: 'Opposing range high/low or liquidity pool (1:3+ R:R).',
    winRateStat: 'Elite Reversal Edge'
  },
  {
    id: 'order-block',
    title: 'Institutional Order Block',
    category: 'Price Action',
    subtitle: 'Footprints of Big Banks',
    description: 'The last opposing candle before an aggressive explosive impulse move that broke market structure (BOS). This zone represents resting institutional limit orders.',
    entryTrigger: 'First retest into the 50% body of the Order Block with lower-timeframe confirmation.',
    stopLossRule: 'Placed tightly behind the Order Block base.',
    targetRule: 'Key structural higher-timeframe resistance level.',
    winRateStat: 'Asymmetric 1:3 R:R'
  },
  {
    id: 'polarity-flip',
    title: 'Support-Resistance Flip',
    category: 'Classical Technicals',
    subtitle: 'Structure Transition Model',
    description: 'When a strong support zone is broken with aggressive volume, it transitions into immediate overhead resistance upon the first pull-back.',
    entryTrigger: 'Bearish candlestick confirmation (Pin bar or Engulfing) on the level test.',
    stopLossRule: 'Placed above the retest swing high.',
    targetRule: 'Next key horizontal support tier.',
    winRateStat: 'Trend Continuation'
  }
];

export function ConceptInspector() {
  const [ref, isInView] = useInView({ threshold: 0.15 });
  const [activeSetupId, setActiveSetupId] = useState('fvg');

  const activeSetup = PLAYBOOK_SETUPS.find((s) => s.id === activeSetupId) || PLAYBOOK_SETUPS[0];

  return (
    <section id="playbook" className="section-wrapper" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(18, 22, 28, 0.4) 50%, transparent 100%)' }}>
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Institutional Playbook"
            badgeIcon={BookOpen}
            title="The 4 Core Execution"
            titleHighlight="Setups We Teach."
            subtitle="Explore the exact high-probability execution blueprints taught in our advanced masterclasses."
          />

          <div className="playbook-layout-grid">
            {/* Left Column: Interactive Setup Selector Tabs */}
            <div className="playbook-tabs-col">
              {PLAYBOOK_SETUPS.map((setup) => {
                const isActive = activeSetup.id === setup.id;
                return (
                  <div
                    key={setup.id}
                    className={`playbook-tab-card ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSetupId(setup.id)}
                  >
                    <div className="playbook-tab-header">
                      <span className="playbook-tab-cat">{setup.category}</span>
                      {isActive && <Sparkles size={14} color="#F59E0B" />}
                    </div>
                    <h3 className="playbook-tab-title">{setup.title}</h3>
                    <p className="playbook-tab-sub">{setup.subtitle}</p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Detailed Setup Anatomy & Execution Blueprint */}
            <div className="playbook-display-col">
              <Card className="playbook-details-card" enableGlow={true}>
                {/* Header Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span className="section-badge" style={{ margin: 0 }}>
                    {activeSetup.category}
                  </span>
                  <span className="course-level-badge" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    {activeSetup.winRateStat}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  {activeSetup.title}
                </h3>
                <p style={{ color: 'var(--accent-gold-light)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '18px' }}>
                  {activeSetup.subtitle}
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
                  {activeSetup.description}
                </p>

                {/* 3 Step Execution Rules */}
                <div className="playbook-rules-grid">
                  <div className="playbook-rule-box">
                    <div className="playbook-rule-badge entry">1. ENTRY TRIGGER</div>
                    <p className="playbook-rule-text">{activeSetup.entryTrigger}</p>
                  </div>

                  <div className="playbook-rule-box">
                    <div className="playbook-rule-badge stoploss">2. STOP LOSS RULE</div>
                    <p className="playbook-rule-text">{activeSetup.stopLossRule}</p>
                  </div>

                  <div className="playbook-rule-box">
                    <div className="playbook-rule-badge target">3. TARGET OBJECTIVE</div>
                    <p className="playbook-rule-text">{activeSetup.targetRule}</p>
                  </div>
                </div>

                <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Included in Masterclass Video Modules + Live Replays</span>
                  </div>

                  <Button href="#courses" variant="primary" size="sm" magnetic={true}>
                    Master This Setup in Courses
                    <ArrowRight size={15} />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
