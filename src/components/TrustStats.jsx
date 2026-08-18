import React from 'react';
import { GraduationCap, TrendingUp, Video } from 'lucide-react';
import { YoutubeIcon } from './ui/Icons';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { TRUST_METRICS } from '../data/content';

const iconMap = {
  Youtube: YoutubeIcon,
  GraduationCap: GraduationCap,
  TrendingUp: TrendingUp,
  Video: Video
};

function StatItem({ item, isInView }) {
  const animatedValue = useCountUp(item.value, isInView, 1800);
  const IconComponent = iconMap[item.icon] || TrendingUp;

  return (
    <div className="trust-item">
      <div className="trust-icon-box">
        <IconComponent size={24} />
      </div>
      <div>
        <div className="trust-value">
          {animatedValue}
          <span className="trust-value-suffix">{item.suffix}</span>
        </div>
        <div className="trust-label">{item.label}</div>
      </div>
    </div>
  );
}

export function TrustStats() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="trust-strip">
      <div className="content-container">
        <div ref={ref} className={`trust-card reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <div className="trust-grid">
            {TRUST_METRICS.map((metric) => (
              <StatItem key={metric.id} item={metric} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
