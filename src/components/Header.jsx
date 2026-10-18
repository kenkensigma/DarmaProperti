import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site.js';
import { translations } from '../i18n/translations.js';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../utils/whatsapp.js';

export function Header({ currentLang, onToggleLang, onOpenDevNotice }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const handleWhatsAppClick = (e) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      onOpenDevNotice();
    }
  };

  const navItems = [
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#about', label: t.nav.about },
    { href: '#properties', label: t.nav.properties },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="header-grid-layout">
        {/* Column 1: Brand Wordmark (Andramatin style) */}
        <div className="header-col header-col-1">
          <a href="#" className="brand-editorial-link" aria-label="Darma Properti">
            <span className="brand-editorial-title">{siteConfig.brandName}</span>
            <span className="brand-reg-symbol">&reg;</span>
          </a>
        </div>

        {/* Column 2: Center Editorial Navigation */}
        <div className="header-col header-col-2">
          <nav className="header-editorial-nav" aria-label="Navigasi Utama">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="editorial-nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3: Controls, Minimal Switch & Language */}
        <div className="header-col header-col-3">
          <div className="header-controls-wrap">
            {/* Minimal architectural toggle pill */}
            <div className="editorial-pill-switch" title="Architectural System Active" aria-hidden="true">
              <span className="editorial-pill-circle"></span>
            </div>

            {/* Language toggle: ID / EN */}
            <div className="lang-editorial-switch" role="group" aria-label="Pilih Bahasa / Select Language">
              <button
                type="button"
                className={`lang-text-btn ${currentLang === 'id' ? 'active' : ''}`}
                onClick={() => onToggleLang('id')}
                aria-pressed={currentLang === 'id'}
              >
                ID
              </button>
              <span className="lang-divider">/</span>
              <button
                type="button"
                className={`lang-text-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => onToggleLang('en')}
                aria-pressed={currentLang === 'en'}
              >
                EN
              </button>
            </div>

            {/* Compact WhatsApp Action */}
            <a
              href={getWhatsAppUrl(currentLang, 'general') || '#'}
              target={isWhatsAppConfigured() ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="header-whatsapp-pill"
              title="Konsultasi WhatsApp"
            >
              <span>WA</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="square" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="square" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" role="dialog" aria-modal="true">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <div className="lang-editorial-switch" style={{ alignSelf: 'flex-start' }}>
              <button
                type="button"
                className={`lang-text-btn ${currentLang === 'id' ? 'active' : ''}`}
                onClick={() => {
                  onToggleLang('id');
                  setMobileMenuOpen(false);
                }}
              >
                ID
              </button>
              <span className="lang-divider">/</span>
              <button
                type="button"
                className={`lang-text-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => {
                  onToggleLang('en');
                  setMobileMenuOpen(false);
                }}
              >
                EN
              </button>
            </div>

            <a
              href={getWhatsAppUrl(currentLang, 'general') || '#'}
              target={isWhatsAppConfigured() ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleWhatsAppClick(e);
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
