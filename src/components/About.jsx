import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="border-t border-sage-border bg-sage-surface/40">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="section-eyebrow">
            // {about.sectionNum} — {about.sectionLabel}
          </p>
          <h2 className="section-heading">
            {about.title}
          </h2>
        </div>

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sage-muted text-base sm:text-[17px] leading-relaxed">
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className={idx === 0 ? "text-sage-text font-medium" : ""}>
                {para}
              </p>
            ))}
          </div>

          {/* Structured Factual Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-card bg-white border border-sage-border shadow-card divide-y divide-sage-border/70">
              {about.facts.map((fact, idx) => (
                <div key={idx} className={`${idx !== 0 ? 'pt-4 mt-4' : ''}`}>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-sage-muted font-medium mb-1">
                    {fact.label}
                  </div>
                  <div className="font-display font-bold text-base text-sage-text mb-0.5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      {fact.label === 'Current Position' && (
                        <img
                          src="/assets/mhanth-logo-transparent.png"
                          alt="Mhanth."
                          className="h-4 w-auto object-contain shrink-0"
                        />
                      )}
                      <span>{fact.value}</span>
                    </div>
                    {fact.link && (
                      <a
                        href={fact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs font-medium text-sage-primary hover:text-sage-hover hover:underline transition-colors shrink-0"
                      >
                        <span>{fact.linkLabel || 'Visit ↗'}</span>
                      </a>
                    )}
                  </div>
                  <div className="font-sans text-xs text-sage-muted leading-relaxed">
                    {fact.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
