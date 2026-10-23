import React, { useEffect } from 'react';
import { Download, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Logo from './Logo';

export default function MobileMenu({ isOpen, onClose }) {
  const { personal, navLinks } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-sage-bg/98 backdrop-blur-xl transition-all duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between h-20 px-6 border-b border-sage-border">
        <a href="#home" onClick={onClose}>
          <Logo showWordmark={true} />
        </a>
        <button
          onClick={onClose}
          className="p-2 text-sage-text hover:text-sage-primary focus:outline-none focus:ring-2 focus:ring-sage-primary/40 rounded-lg"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-base font-display font-semibold text-sage-text hover:bg-sage-surface hover:text-sage-primary transition-colors"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-sage-muted" />
            </a>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-sage-border space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={personal.resumeUrl}
              download={personal.resumeFilename}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-secondary w-full text-xs justify-center"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Résumé (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary w-full text-xs justify-center"
            >
              <span>Let's talk</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2 text-sage-muted">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-sage-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personal.whatsappUrl || `https://wa.me/917318124388`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors p-2"
              aria-label="WhatsApp (+91 7318124388)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.06 8.02 12.23C8.14 12.4 9.74 14.87 12.19 15.93C12.78 16.18 13.23 16.33 13.59 16.45C14.17 16.63 14.7 16.61 15.12 16.55C15.59 16.47 16.57 15.95 16.77 15.37C16.97 14.79 16.97 14.3 16.91 14.2C16.85 14.1 16.7 14.04 16.47 13.92C16.25 13.81 15.14 13.26 14.93 13.19C14.73 13.11 14.58 13.08 14.43 13.31C14.28 13.54 13.86 14.04 13.73 14.19C13.6 14.33 13.47 14.35 13.25 14.24C13.02 14.12 12.3 13.89 11.45 13.13C10.79 12.54 10.34 11.81 10.21 11.59C10.09 11.36 10.2 11.24 10.31 11.13C10.42 11.02 10.55 10.85 10.67 10.71C10.79 10.57 10.83 10.47 10.91 10.31C10.99 10.14 10.95 10 10.89 9.89C10.83 9.77 10.38 8.67 10.2 8.22C10.02 7.78 9.84 7.84 9.71 7.83C9.58 7.83 9.43 7.82 9.28 7.82C9.13 7.82 8.89 7.88 8.69 8.1C8.48 8.32 7.89 8.9 7.89 10.1C7.89 11.3 8.77 12.45 8.9 12.63L8.53 7.33Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
