import React from 'react';
import { siteConfig } from '../config/site.js';
import { translations } from '../i18n/translations.js';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../utils/whatsapp.js';

export function Contact({ currentLang, onOpenDevNotice }) {
  const t = translations[currentLang];
  const isConfigured = isWhatsAppConfigured();

  const handleWhatsAppClick = (e) => {
    if (!isConfigured) {
      e.preventDefault();
      onOpenDevNotice();
    }
  };

  return (
    <section className="contact-section" id="contact" aria-label="Kontak Darma Properti">
      <div className="site-container">
        <div className="contact-grid">
          {/* Main Action Column */}
          <div className="contact-main-col">
            <span className="editorial-index">{t.contact.index}</span>
            <h2 className="contact-h2">{t.contact.heading}</h2>
            <p className="contact-subhead">{t.contact.subhead}</p>

            <div className="contact-cta-wrap">
              <a
                href={getWhatsAppUrl(currentLang, 'general') || '#'}
                target={isConfigured ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="btn-primary"
                style={{ fontSize: '0.95rem', padding: '18px 36px' }}
              >
                {/* Minimal WhatsApp Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="square" />
                </svg>
                <span>{t.contact.whatsappBtn}</span>
              </a>

              {!isConfigured && (
                <div
                  className="contact-unverified-box"
                  role="button"
                  tabIndex={0}
                  onClick={onOpenDevNotice}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenDevNotice()}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{t.contact.unverifiedAlert}</span>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar: Verified Contact Details */}
          <div className="contact-sidebar-col">
            {/* Region / Service Area */}
            <div className="contact-info-block">
              <span className="contact-info-label">{t.contact.regionLabel}</span>
              <span className="contact-info-val">{siteConfig.regionDisplay[currentLang]}</span>
            </div>

            {/* Operating Hours */}
            {siteConfig.operatingHours && (
              <div className="contact-info-block">
                <span className="contact-info-label">{t.contact.hoursLabel}</span>
                <span className="contact-info-val">{siteConfig.operatingHours[currentLang]}</span>
              </div>
            )}

            {/* Phone Display (Only if verified) */}
            {siteConfig.phoneDisplay && (
              <div className="contact-info-block">
                <span className="contact-info-label">{t.contact.phoneLabel}</span>
                <span className="contact-info-val">{siteConfig.phoneDisplay}</span>
              </div>
            )}

            {/* Address (Only if verified) */}
            {siteConfig.address && (
              <div className="contact-info-block">
                <span className="contact-info-label">{t.contact.addressLabel}</span>
                <span className="contact-info-val">{siteConfig.address}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
