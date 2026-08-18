import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Modal Dialog for interactive previews (Course syllabus, Video details)
 */
export function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal dialog"
        >
          <X size={18} />
        </button>

        {title && (
          <div style={{ padding: '24px 28px 16px 28px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFF' }}>{title}</h3>
          </div>
        )}

        <div style={{ padding: '24px 28px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
