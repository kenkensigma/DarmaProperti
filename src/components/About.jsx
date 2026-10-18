import React from 'react';
import { translations } from '../i18n/translations.js';

export function About({ currentLang }) {
  const t = translations[currentLang];

  return (
    <section className="about-section thin-line-top" id="about" aria-label="Tentang Darma Properti">
      <div className="site-container">
        <div className="about-grid">
          {/* Section Headline */}
          <div className="about-header-col">
            <span className="editorial-index">{t.about.index}</span>
            <h2 className="about-h2">{t.about.heading}</h2>
          </div>

          {/* Factual Editorial Copy */}
          <div className="about-content-col">
            <p className="about-lead">{t.about.lead}</p>
            <p className="about-body">{t.about.body1}</p>
            <p className="about-body">{t.about.body2}</p>

            <div className="about-notice-box">
              <span className="editorial-badge" style={{ alignSelf: 'flex-start' }}>
                {t.about.noticeBadge}
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                {t.about.noticeText}
              </p>
            </div>
          </div>

          {/* Architectural Detail Photograph */}
          <div className="about-image-col">
            <div className="about-image-container">
              <img
                src="/images/about-architecture.jpg"
                alt={t.about.imageAlt}
                className="about-image"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
