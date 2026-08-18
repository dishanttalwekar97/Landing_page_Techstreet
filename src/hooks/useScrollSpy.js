import { useState, useEffect } from 'react';

/**
 * useScrollSpy Hook
 * Tracks which section ID is currently active in the viewport.
 * 
 * @param {string[]} sectionIds - Array of element IDs to observe (without #)
 * @param {number} offset - Pixel offset from top for trigger zone (default: 100)
 * @returns {string} Currently active section ID
 */
export function useScrollSpy(sectionIds = [], offset = 120) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      // If at very top, default to first section
      if (window.scrollY < 200 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
