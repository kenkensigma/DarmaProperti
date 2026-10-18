import React, { useEffect } from 'react';
import { translations } from '../i18n/translations.js';

export function DevNoticeModal({ isOpen, onClose, currentLang }) {
  const t = translations[currentLang];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span className="editorial-badge" style={{ borderColor: '#f59e0b', color: '#b45309' }}>
            {t.devModal.badge}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup modal"
            style={{ padding: 4, cursor: 'pointer' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="square" />
            </svg>
          </button>
        </div>

        <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{t.devModal.title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
          {t.devModal.desc}
        </p>

        <div className="modal-code-block">
          <div style={{ color: '#9ca3af', marginBottom: 4 }}>// File: {t.devModal.filePath}</div>
          <div>{t.devModal.example}</div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-2)' }}
        >
          {t.devModal.close}
        </button>
      </div>
    </div>
  );
}
