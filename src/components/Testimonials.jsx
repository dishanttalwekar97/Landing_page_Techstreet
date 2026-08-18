import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, Award, Sparkles, Filter } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

const EXPANDED_TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Rahul Sharma',
    role: 'Full-Time Bank Nifty Trader',
    category: 'Index Scalper',
    cohort: 'Batch 5 Graduate',
    rating: 5,
    highlight: 'Reduced Drawdowns by 70%',
    quote: 'The emphasis on risk management changed everything for me. Instead of over-trading and taking 15 chaotic trades a day, I now execute only 2-3 high-probability SMC setups with strict 1:2.5+ R:R.'
  },
  {
    id: 'test-2',
    name: 'Priya Mehta',
    role: 'Forex & Gold (XAU/USD) Analyst',
    category: 'Commodities & Forex',
    cohort: 'Mentorship Cohort 3',
    rating: 5,
    highlight: 'Mastered Liquidity Sweeps',
    quote: 'Akhand sir explains market microstructure without unnecessary indicator clutter. Spotting institutional order blocks and liquidity sweeps gave me the confidence to hold winning trades.'
  },
  {
    id: 'test-3',
    name: 'Ankit Verma',
    role: 'IT Engineer & Swing Trader',
    category: 'Working Professional',
    cohort: 'Price Action Masterclass',
    rating: 5,
    highlight: 'Consistent 1:3 R:R Setups',
    quote: 'As a working professional, I needed an objective framework I could execute on higher timeframes. The trade journaling system and risk calculator are worth ten times the course fee.'
  }
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Index Scalper', 'Commodities & Forex', 'Working Professional'];

  const filtered = activeCategory === 'All'
    ? EXPANDED_TESTIMONIALS
    : EXPANDED_TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <section id="testimonials" className="section-wrapper" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(20, 24, 30, 0.45) 50%, transparent 100%)' }}>
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Student Experiences"
            badgeIcon={MessageSquareQuote}
            title="Trusted by Serious"
            titleHighlight="Market Learners."
            subtitle="Read how our structured frameworks helped students establish discipline, eliminate revenge trading, and read price action clearly."
          />

          {/* Category Filter Pills */}
          <div className="courses-filter-tabs" style={{ marginBottom: '32px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? 'All Reviews' : cat}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="testimonials-grid">
            {filtered.map((item, idx) => (
              <Card
                key={item.id}
                className={`testimonial-card delay-${(idx + 1) * 150}`}
                enableGlow={true}
              >
                {/* Header with Star Rating & Cohort Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div className="testimonial-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" stroke="none" />
                    ))}
                  </div>

                  <span className="course-level-badge" style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(245, 158, 11, 0.08)', color: 'var(--accent-gold-light)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                    {item.cohort}
                  </span>
                </div>

                {/* Highlight Tag */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', fontWeight: 700, color: '#10B981', marginBottom: '10px' }}>
                  <Sparkles size={13} color="#10B981" />
                  <span>{item.highlight}</span>
                </div>

                {/* Quote */}
                <p className="testimonial-quote">"{item.quote}"</p>

                {/* Student Info */}
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="testimonial-name">{item.name}</span>
                      <CheckCircle size={14} color="#10B981" />
                    </div>
                    <span className="testimonial-role">{item.role}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>
              * Sample student review templates shown above. Verified across educational cohorts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
