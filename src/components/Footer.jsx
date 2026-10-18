import React from 'react';
import { siteConfig } from '../config/site.js';
import { translations } from '../i18n/translations.js';

export function Footer({ currentLang, onToggleLang }) {
  const t = translations[currentLang];
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div>
            <h3 className="footer-brand-title">{siteConfig.brandName}</h3>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <nav className="footer-nav" aria-label="Navigasi Footer">
            <a href="#services" className="footer-link">{t.nav.services}</a>
            <a href="#projects" className="footer-link">{t.nav.projects}</a>
            <a href="#about" className="footer-link">{t.nav.about}</a>
            <a href="#properties" className="footer-link">{t.nav.properties}</a>
            <a href="#contact" className="footer-link">{t.nav.contact}</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {currentYear} {siteConfig.brandName}. {t.footer.allRights}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
            <div className="lang-switch">
              <button
                type="button"
                className={`lang-btn ${currentLang === 'id' ? 'active' : ''}`}
                onClick={() => onToggleLang('id')}
              >
                ID
              </button>
              <button
                type="button"
                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => onToggleLang('en')}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 15l-6-6-6 6" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
