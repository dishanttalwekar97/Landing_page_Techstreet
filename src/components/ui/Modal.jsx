import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

/**
 * Modal Dialog for interactive previews (Course syllabus, Video details, Lead Playbook)
 * Uses React Portal to mount directly into document.body, ensuring zero stacking/transform conflicts.
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

  const modalElement = (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal dialog"
        >
          <X size={18} />
        </button>

        {title && (
          <div className="modal-header-box">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF' }}>{title}</h3>
          </div>
        )}

        <div className="modal-body-scroll">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
}
