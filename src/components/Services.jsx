import React from 'react';
import { servicesData } from '../data/services.js';
import { translations } from '../i18n/translations.js';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../utils/whatsapp.js';

export function Services({ currentLang, onOpenDevNotice }) {
  const t = translations[currentLang];

  const handleInquireClick = (e, contextType) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      onOpenDevNotice();
    }
  };

  return (
    <section className="services-section" id="services" aria-label="Layanan Darma Properti">
      <div className="site-container">
        {/* Section Header */}
        <div className="services-header-wrap">
          <div>
            <span className="editorial-index">{t.services.index}</span>
            <h2 className="services-h2">{t.services.heading}</h2>
          </div>
          <p className="services-subhead">{t.services.subhead}</p>
        </div>

        {/* 3 Architectural Service Rows */}
        <div className="services-rows-container">
          {servicesData.map((svc) => (
            <article key={svc.id} className="service-row">
              {/* Row Index */}
              <div className="service-num-col">
                <span>{svc.number}</span>
              </div>

              {/* Text Information */}
              <div className="service-text-col">
                <span className="service-tag">{svc.shortTag[currentLang]}</span>
                <h3 className="service-title">{svc.title[currentLang]}</h3>
                <p className="service-desc">{svc.description[currentLang]}</p>

                <a
                  href={getWhatsAppUrl(currentLang, svc.contextType) || '#'}
                  target={isWhatsAppConfigured() ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onClick={(e) => handleInquireClick(e, svc.contextType)}
                  className="service-action-link"
                >
                  <span>{t.services.inquireBtn}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" />
                  </svg>
                </a>
              </div>

              {/* Contextual Architectural Photo */}
              <div className="service-image-col">
                <div className="service-image-box">
                  <img
                    src={svc.image}
                    alt={svc.imageAlt[currentLang]}
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
