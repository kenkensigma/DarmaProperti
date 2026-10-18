import React, { useState } from 'react';
import { propertyCategories, verifiedProperties, draftTemplates } from '../data/properties.js';
import { translations } from '../i18n/translations.js';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../utils/whatsapp.js';

export function Properties({ currentLang, onOpenDevNotice }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDraftPreview, setShowDraftPreview] = useState(false);
  const t = translations[currentLang];

  const handleWhatsAppAction = (e, contextType, title) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      onOpenDevNotice();
    }
  };

  // Listings to display
  const activeListings = showDraftPreview ? draftTemplates : verifiedProperties;
  const filteredListings =
    selectedCategory === 'all'
      ? activeListings
      : activeListings.filter((item) => item.category === selectedCategory);

  return (
    <section className="properties-section" id="properties" aria-label="Katalog Properti Darma Properti">
      <div className="site-container">
        {/* Section Header */}
        <div className="properties-header-wrap">
          <div>
            <span className="editorial-index">{t.properties.index}</span>
            <h2 className="properties-h2">{t.properties.heading}</h2>
          </div>
          <p className="properties-subhead">{t.properties.subhead}</p>
        </div>

        {/* Category Filters */}
        <div className="properties-filter-bar" role="toolbar" aria-label="Filter Kategori Properti">
          {propertyCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label[currentLang]}
            </button>
          ))}
        </div>

        {/* Production Empty State (Displayed when no verified listings are published) */}
        {!showDraftPreview && verifiedProperties.length === 0 ? (
          <div className="properties-empty-state">
            <div className="empty-state-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" strokeLinecap="square" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <h3 className="empty-state-h3">{t.properties.emptyState.title}</h3>
            <p className="empty-state-p">{t.properties.emptyState.description}</p>
            <a
              href={getWhatsAppUrl(currentLang, 'property') || '#'}
              target={isWhatsAppConfigured() ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppAction(e, 'property')}
              className="btn-primary"
              style={{ marginTop: 'var(--space-4)' }}
            >
              {t.properties.emptyState.whatsappBtn}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" />
              </svg>
            </a>
          </div>
        ) : (
          /* Render Listings (Verified or Developer Draft Preview) */
          <div className="property-draft-grid">
            {filteredListings.map((prop) => (
              <article key={prop.id} className="property-draft-card">
                <div className="property-card-img-wrap">
                  <img
                    src={prop.image}
                    alt={prop.title[currentLang]}
                    loading="lazy"
                    width="600"
                    height="340"
                  />
                  {prop.status === 'draft' && (
                    <span className="property-card-badge">
                      {t.properties.card.statusDraft}
                    </span>
                  )}
                </div>

                <div className="property-card-content">
                  <div className="property-card-meta">
                    <span>{prop.typeLabel[currentLang]}</span>
                    <span>{prop.location[currentLang]}</span>
                  </div>

                  <h3 className="property-card-title">{prop.title[currentLang]}</h3>
                  <p className="property-card-desc">{prop.description[currentLang]}</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-2)' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                      {prop.priceDisplay[currentLang]}
                    </span>
                    <a
                      href={getWhatsAppUrl(currentLang, 'property', prop.title[currentLang]) || '#'}
                      target={isWhatsAppConfigured() ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      onClick={(e) => handleWhatsAppAction(e, 'property', prop.title[currentLang])}
                      className="btn-secondary"
                      style={{ padding: '8px 16px', fontSize: '0.75rem', minHeight: 'auto' }}
                    >
                      {t.properties.card.inquire}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Developer / Client Review Switch */}
        <div className="dev-preview-toggle-wrap">
          <button
            type="button"
            className="dev-preview-toggle"
            onClick={() => setShowDraftPreview(!showDraftPreview)}
            title="Klik untuk melihat struktur listing saat data resmi diisi"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>
              {showDraftPreview
                ? t.properties.devToggle.active
                : t.properties.devToggle.label}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
