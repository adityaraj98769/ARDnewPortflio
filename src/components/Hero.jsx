import React from 'react';
import { ArrowUpRight, ArrowDown, Download, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 bg-sage-bg overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Availability Indicator & Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="section-eyebrow mb-0">
                {personal.eyebrow}
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-sage-border" />
              <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-sage-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>{personal.availability}</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-extrabold tracking-tight text-sage-text leading-[1.08] mb-6 max-w-2xl">
              {personal.headline}
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-sans text-base sm:text-lg text-sage-muted font-normal leading-relaxed max-w-xl mb-8">
              {personal.subheadline}
            </p>

            {/* Technical Context Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-9">
              <span className="font-mono text-xs text-sage-muted uppercase tracking-wider mr-1">
                Core Stack:
              </span>
              {personal.coreStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                Explore my work
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
              <a
                href={personal.resumeUrl}
                download={personal.resumeFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost ml-1"
              >
                <span>View résumé</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative">
              {/* Quiet frame with double border */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-white p-2 border border-sage-border shadow-card">
                <div className="w-full h-full rounded-xl overflow-hidden bg-sage-surface border border-sage-border/60">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Current Role & Freelance Status */}
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={personal.currentCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-sage-border hover:border-sage-primary text-xs font-mono text-sage-text hover:text-sage-primary shadow-subtle transition-all duration-200"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <img
                    src="/assets/mhanth-logo-transparent.png"
                    alt="Mhanth."
                    className="h-3.5 w-auto object-contain inline-block"
                  />
                  <span className="text-sage-border">·</span>
                  <span>Software Engineer</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sage-muted group-hover:text-sage-primary transition-colors ml-0.5" />
                </a>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-sage-surface border border-sage-border/60 text-[11px] font-mono text-sage-muted w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-primary" />
                  <span>Freelance Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
