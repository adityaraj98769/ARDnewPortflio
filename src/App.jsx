import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ClientWork from './components/ClientWork';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Appreciation from './components/Appreciation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  return (
    <div className="min-h-screen bg-sage-bg text-sage-text flex flex-col font-sans selection:bg-sage-highlight selection:text-sage-text">
      {/* Navigation */}
      <Navbar
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <ClientWork />
        <Skills />
        <Experience />
        <Appreciation onSelectImage={(item) => setActiveLightboxItem(item)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal for Appreciation Photos */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      {/* Floating WhatsApp Quick Connect Widget */}
      <WhatsAppWidget />
    </div>
  );
}
