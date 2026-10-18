import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Services } from './components/Services.jsx';
import { Projects } from './components/Projects.jsx';
import { Properties } from './components/Properties.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { DevNoticeModal } from './components/DevNoticeModal.jsx';

export function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      return localStorage.getItem('dp_language') || 'id';
    } catch {
      return 'id';
    }
  });

  const [devModalOpen, setDevModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('dp_language', currentLang);
    } catch {
      // Storage unavailable fallback
    }
    document.documentElement.lang = currentLang;
    
    // Update document title dynamically
    if (currentLang === 'en') {
      document.title = "Darma Properti — Construction, Renovation & Property Services";
    } else {
      document.title = "Darma Properti — Konstruksi, Renovasi & Layanan Properti";
    }
  }, [currentLang]);

  const handleToggleLang = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <div className="site-wrapper">
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenDevNotice={() => setDevModalOpen(true)}
      />

      <main>
        <Hero currentLang={currentLang} />
        <About currentLang={currentLang} />
        <Services
          currentLang={currentLang}
          onOpenDevNotice={() => setDevModalOpen(true)}
        />
        <Projects currentLang={currentLang} />
        <Properties
          currentLang={currentLang}
          onOpenDevNotice={() => setDevModalOpen(true)}
        />
        <Contact
          currentLang={currentLang}
          onOpenDevNotice={() => setDevModalOpen(true)}
        />
      </main>

      <Footer
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
      />

      <DevNoticeModal
        isOpen={devModalOpen}
        onClose={() => setDevModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}

export default App;
