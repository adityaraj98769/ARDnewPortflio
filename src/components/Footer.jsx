import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Logo from './Logo';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-sage-border bg-sage-bg py-12 text-sage-muted">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Descriptor */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-center sm:text-left">
            <a href="#home" aria-label="Back to home">
              <Logo showWordmark={true} />
            </a>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-sage-border" />
            <span className="font-mono text-xs text-sage-muted">
              Software Engineer at <a href="https://www.mhanth.club/" target="_blank" rel="noopener noreferrer" className="text-sage-primary hover:underline">Mhanth</a> · Freelancer
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-5">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-muted hover:text-sage-primary transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-muted hover:text-sage-primary transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-sage-muted hover:text-sage-primary transition-colors p-1"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.whatsappUrl || `https://wa.me/917318124388`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-muted hover:text-[#25D366] transition-colors p-1"
              aria-label="Chat on WhatsApp (+91 7318124388)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.06 8.02 12.23C8.14 12.4 9.74 14.87 12.19 15.93C12.78 16.18 13.23 16.33 13.59 16.45C14.17 16.63 14.7 16.61 15.12 16.55C15.59 16.47 16.57 15.95 16.77 15.37C16.97 14.79 16.97 14.3 16.91 14.2C16.85 14.1 16.7 14.04 16.47 13.92C16.25 13.81 15.14 13.26 14.93 13.19C14.73 13.11 14.58 13.08 14.43 13.31C14.28 13.54 13.86 14.04 13.73 14.19C13.6 14.33 13.47 14.35 13.25 14.24C13.02 14.12 12.3 13.89 11.45 13.13C10.79 12.54 10.34 11.81 10.21 11.59C10.09 11.36 10.2 11.24 10.31 11.13C10.42 11.02 10.55 10.85 10.67 10.71C10.79 10.57 10.83 10.47 10.91 10.31C10.99 10.14 10.95 10 10.89 9.89C10.83 9.77 10.38 8.67 10.2 8.22C10.02 7.78 9.84 7.84 9.71 7.83C9.58 7.83 9.43 7.82 9.28 7.82C9.13 7.82 8.89 7.88 8.69 8.1C8.48 8.32 7.89 8.9 7.89 10.1C7.89 11.3 8.77 12.45 8.9 12.63L8.53 7.33Z" />
              </svg>
            </a>
            <div className="w-[1px] h-4 bg-sage-border" />
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-mono text-xs text-sage-muted hover:text-sage-primary transition-colors font-medium"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-sage-border/60 text-center sm:text-left font-mono text-[11px] text-sage-muted/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          <span>Designed &amp; engineered with React, Tailwind CSS, and Vite.</span>
        </div>
      </div>
    </footer>
  );
}
