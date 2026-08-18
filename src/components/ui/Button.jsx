import React, { useRef, useState } from 'react';

/**
 * Button Component with optional subtle magnetic hover physics
 * Handles both standard buttons and anchor navigation links with smooth scrolling.
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
  style = {},
  ...props
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetic || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.22, y: y * 0.22 });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e) => {
    // If it's an internal hash link like #courses, perform guaranteed smooth scroll
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (onClick) {
      onClick(e);
    }
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
  const mergedStyle = { ...magneticStyle, ...style };

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        className={combinedClasses}
        style={mergedStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
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
      onClick={handleClick}
      className={combinedClasses}
      style={mergedStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
