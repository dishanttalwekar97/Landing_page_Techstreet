import React from 'react';
import {
  CheckCircle2,
  Layers,
  Globe2,
  ShieldCheck,
  Brain,
  Users,
  Sparkles
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { WHY_US_CARDS } from '../data/content';

const iconMap = {
  CheckCircle2: CheckCircle2,
  Layers: Layers,
  Globe2: Globe2,
  ShieldCheck: ShieldCheck,
  Brain: Brain,
  Users: Users
};

export function WhyUs() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="why-us" className="section-wrapper">
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="The Techstreet Edge"
            badgeIcon={Sparkles}
            title="Why Trading"
            titleHighlight="Techstreet?"
            subtitle="Engineered to provide an unshakeable foundation for traders who prioritize consistency, discipline, and capital preservation."
          />

          <div className="why-us-grid">
            {WHY_US_CARDS.map((item, idx) => {
              const IconComp = iconMap[item.icon] || CheckCircle2;
              return (
                <Card
                  key={item.title}
                  className={`why-card delay-${(idx % 3 + 1) * 100}`}
                >
                  <div className="why-icon-box">
                    <IconComp size={24} strokeWidth={2.2} />
                  </div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
