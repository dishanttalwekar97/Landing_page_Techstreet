import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

export function LeadMagnetModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      setDownloaded(true);
      setTimeout(() => {
        setDownloaded(false);
        onClose();
      }, 3500);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Download The Institutional Risk Discipline Playbook">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="course-level-badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-gold-light)', border: '1px solid rgba(245,158,11,0.3)' }}>
            FREE 1-PAGE CHEAT SHEET (PDF)
          </span>
          <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
            Used by 5,000+ Students
          </span>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
          Master the exact 10 mathematical rules of capital preservation, position sizing, and emotional drawdown control practiced by professional traders.
        </p>

        {/* Cheat Sheet Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
            <CheckCircle2 size={15} color="#10B981" />
            <span>The 1% - 2% Position Sizing Algorithm with Stop-Loss formulas</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
            <CheckCircle2 size={15} color="#10B981" />
            <span>How to calculate asymmetric 1:2.5+ minimum Risk-to-Reward setups</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
            <CheckCircle2 size={15} color="#10B981" />
            <span>The 3-Consecutive Loss Rule to eliminate revenge trading</span>
          </div>
        </div>

        {!downloaded ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', color: '#FFF', fontWeight: 600, marginBottom: '6px' }}>
                Your Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Aman Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="newsletter-input"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', color: '#FFF', fontWeight: 600, marginBottom: '6px' }}>
                Email Address for PDF Delivery
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <Button variant="secondary" size="sm" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button variant="primary" size="sm" type="submit">
                <Download size={16} />
                Send Instant PDF Download
              </Button>
            </div>
          </form>
        ) : (
          <div style={{ padding: '24px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <CheckCircle2 size={36} color="#10B981" style={{ margin: '0 auto 12px auto' }} />
            <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '6px' }}>Playbook PDF Sent!</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
              Check your inbox ({email}) for the instant download link and printable cheat sheet.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
