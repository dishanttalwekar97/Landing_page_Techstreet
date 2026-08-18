import { useState, useEffect } from 'react';

/**
 * useCountUp Hook
 * Animates a numeric counter smoothly from 0 to target when triggered.
 * 
 * @param {number} targetValue - End number
 * @param {boolean} trigger - Whether the animation is active/in-view
 * @param {number} duration - Duration in milliseconds (default: 2000ms)
 * @returns {number} Current animated count value (rounded integer)
 */
export function useCountUp(targetValue, trigger = true, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    // If reduced motion is preferred, jump straight to the end value
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(targetValue);
      return;
    }

    let startTime = null;
    let animationFrameId;

    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      setCount(Math.floor(easedProgress * targetValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [targetValue, trigger, duration]);

  return count;
}
