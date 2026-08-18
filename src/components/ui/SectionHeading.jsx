import React from 'react';

/**
 * SectionHeading Component
 * Unified heading hierarchy with badge, bold title, and subtitle
 */
export function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  subtitle,
  className = '',
  align = 'center'
}) {
  return (
    <div
      className={`section-header ${className}`}
      style={{ textAlign: align, marginLeft: align === 'left' ? 0 : 'auto', marginRight: align === 'right' ? 0 : 'auto' }}
    >
      {badge && (
        <div className="section-badge">
          {BadgeIcon && <BadgeIcon size={14} />}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="section-title">
        {title}{' '}
        {titleHighlight && (
          <span className="hero-title-highlight">{titleHighlight}</span>
        )}
      </h2>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
