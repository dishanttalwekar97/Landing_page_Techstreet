import { useState, useEffect } from 'react';

/**
 * useScrollProgress Hook
 * Returns the scroll progress of the page as a percentage (0 to 100).
 * 
 * @returns {number} progress (0-100)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      const progressPercent = Math.min(Math.max((currentScroll / totalScroll) * 100, 0), 100);
      setProgress(progressPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
