import React from 'react';
import { projectsData } from '../data/projects.js';
import { translations } from '../i18n/translations.js';

export function Projects({ currentLang }) {
  const t = translations[currentLang];

  return (
    <section className="projects-section" id="projects" aria-label="Galeri Proyek Darma Properti">
      <div className="site-container">
        {/* Section Header */}
        <div className="projects-header-wrap">
          <span className="editorial-index">{t.projects.index}</span>
          <h2 className="projects-h2">{t.projects.heading}</h2>
          <p className="projects-subhead">{t.projects.subhead}</p>
        </div>

        {/* Asymmetrical Gallery Composition */}
        <div className="projects-asymmetric-grid">
          {projectsData.map((project) => {
            const spanClass =
              project.spanType === 'feature'
                ? 'project-item-feature'
                : project.spanType === 'tall'
                ? 'project-item-tall'
                : 'project-item-wide';

            return (
              <figure key={project.id} className={spanClass}>
                <div className="project-img-container">
                  <img
                    src={project.image}
                    alt={project.imageAlt[currentLang]}
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                  {project.isPlaceholder && (
                    <div className="project-badge-overlay">
                      {t.projects.referenceBadge}
                    </div>
                  )}
                </div>

                <figcaption className="project-meta">
                  <h3 className="project-title">{project.title[currentLang]}</h3>
                  <span className="project-category">{project.category[currentLang]}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Transparent Reference Disclaimer */}
        <div className="projects-disclaimer-box">
          <span>{t.projects.disclaimer}</span>
          <span className="editorial-badge">{currentLang === 'id' ? 'Standar Mutu' : 'Quality Benchmark'}</span>
        </div>
      </div>
    </section>
  );
}
