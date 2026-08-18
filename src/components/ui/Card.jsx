import React, { useRef, useState } from 'react';

/**
 * Card Component with glassmorphism and desktop cursor-following radial glow
 */
export function Card({
  children,
  className = '',
  enableGlow = true,
  onClick,
  style = {},
  as = 'div',
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    if (!enableGlow || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;
    setMousePos({ x, y });
  };

  const Component = as;

  const glowStyle = enableGlow
    ? {
        '--mouse-x': mousePos.x,
        '--mouse-y': mousePos.y,
        ...style
      }
    : style;

  return (
    <Component
      ref={cardRef}
      className={`glass-card ${enableGlow ? 'glow-card-interactive' : ''} ${className}`.trim()}
      style={glowStyle}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}
