import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Logo from './Logo';

export default function Navbar({ onOpenMobileMenu, isMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { personal, navLinks } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'projects', 'client-work', 'skills', 'experience', 'appreciation', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F8F9F6]/92 backdrop-blur-md border-b border-sage-border shadow-subtle'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brandmark */}
          <a
            href="#home"
            className="flex items-center"
            aria-label="Adityaraj Dwivedi Home"
          >
            <Logo showWordmark={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-[13px] font-medium tracking-tight transition-colors duration-150 relative py-1 ${
                    isActive
                      ? 'text-sage-primary font-semibold'
                      : 'text-sage-muted hover:text-sage-text'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-sage-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sage-muted hover:text-sage-text rounded-md transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sage-muted hover:text-sage-text rounded-md transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <div className="w-[1px] h-4 bg-sage-border mx-1" />
            <a
              href={personal.resumeUrl}
              download={personal.resumeFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-sage-muted hover:text-sage-primary px-3 py-1.5 rounded-md hover:bg-sage-surface transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Résumé</span>
            </a>
            <a
              href="#contact"
              className="btn-primary text-xs py-2 px-4 ml-1"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="text-xs font-semibold text-sage-primary px-3 py-1.5 rounded-md bg-sage-surface border border-sage-border"
            >
              Contact
            </a>
            <button
              onClick={onOpenMobileMenu}
              className="p-2 text-sage-text hover:text-sage-primary focus:outline-none focus:ring-2 focus:ring-sage-primary/40 rounded-lg"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
