import React, { useRef, useState } from 'react';

/**
 * Button Component with optional subtle magnetic hover physics
 */
export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  href,
  onClick,
  className = '',
  magnetic = false,
  target,
  rel,
  ariaLabel,
  ...props
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetic || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Dampen magnetic offset
    setPosition({ x: x * 0.22, y: y * 0.22 });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  const magneticStyle = magnetic
    ? {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.4s var(--ease-spring)' : 'none'
      }
    : {};

  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        className={combinedClasses}
        style={magneticStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={onClick}
      className={combinedClasses}
      style={magneticStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
