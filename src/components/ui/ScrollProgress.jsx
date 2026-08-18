import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Top fixed accent scroll progress bar
 */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress-bar"
      style={{ transform: `scaleX(${progress / 100})` }}
      aria-hidden="true"
    />
  );
}
