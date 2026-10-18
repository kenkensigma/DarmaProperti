import React from 'react';
import { translations } from '../i18n/translations.js';

export function Hero({ currentLang }) {
  const t = translations[currentLang];

  return (
    <section className="andramatin-hero-stage" id="hero" aria-label="Hero Darma Properti">
      <div className="hero-columns-grid">
        {/* =================================================================
            COLUMN 1: Left Editorial Canvas
            ================================================================= */}
        <div className="hero-grid-col col-left">
          <div className="col-left-statement-wrap">
            <p className="hero-statement-copy">
              {currentLang === 'id' ? t.hero.editorialStatementId : t.hero.editorialStatement}
            </p>
          </div>
        </div>

        {/* =================================================================
            COLUMN 2: Center Negative Space & Angled Lawn Cutout
            ================================================================= */}
        <div className="hero-grid-col col-center">
          {/* Angled Lawn Slice at Bottom */}
          <div className="col-center-lawn-wrap">
            <div className="lawn-angled-mask">
              <img
                src="/images/hero-architecture.jpg"
                alt=""
                className="lawn-cutout-img"
                aria-hidden="true"
              />
            </div>
            <a href="#projects" className="lawn-action-cta">
              <span className="lawn-cta-arrow">&rarr;</span>
              <span className="lawn-cta-text">{t.hero.learnMoreProject}</span>
            </a>
          </div>
        </div>

        {/* =================================================================
            COLUMN 3: Right Architectural Photo with Chamfered Corner
            ================================================================= */}
        <div className="hero-grid-col col-right">
          <div className="building-chamfer-mask">
            <img
              src="/images/hero-architecture.jpg"
              alt={
                currentLang === 'id'
                  ? "Arsitektur residensial kontemporer dengan kisi kayu jati dan kanopi beton"
                  : "Contemporary residential architecture with teak timber screens and concrete canopy"
              }
              className="building-full-img"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Minimalist Downward Circle Scroll Button */}
          <a href="#about" className="hero-circle-scroll-btn" aria-label={t.hero.scrollHint}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="square" />
            </svg>
          </a>
        </div>

        {/* =================================================================
            OVERSIZED WORDMARK LAYERS (Split across Column 2 and 3)
            Exact match to Andramatin editorial typographic overlap
            ================================================================= */}
        
        {/* Layer 1: Solid Black (Over white canvas in Column 1 & 2) */}
        <div className="andramatin-giant-wordmark wordmark-ink-layer" aria-hidden="true">
          <span>{t.hero.brand}</span>
        </div>

        {/* Layer 2: White Translucent (Over architectural photo in Column 3) */}
        <div className="andramatin-giant-wordmark wordmark-photo-layer" aria-label={t.hero.brand}>
          <span>{t.hero.brand}</span>
        </div>
      </div>
    </section>
  );
}
