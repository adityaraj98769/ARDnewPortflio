import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experienceAndEducation, personal } = portfolioData;

  return (
    <section id="experience" className="border-t border-sage-border bg-sage-surface/40">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="section-eyebrow">
              // {experienceAndEducation.sectionNum} — {experienceAndEducation.sectionLabel}
            </p>
            <h2 className="section-heading mb-3">
              {experienceAndEducation.title}
            </h2>
            <p className="section-lead">
              {experienceAndEducation.subtitle}
            </p>
          </div>

          <a
            href={personal.resumeUrl}
            download={personal.resumeFilename}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-fit shrink-0"
          >
            <Download className="w-4 h-4 text-sage-primary" />
            <span>Download Résumé (PDF)</span>
          </a>
        </div>

        {/* Clean Editorial Timeline */}
        <div className="max-w-3xl space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-[1px] before:bg-sage-border">
          {experienceAndEducation.timeline.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-5 sm:gap-8 group">
              {/* Timeline Indicator Dot */}
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border border-sage-border flex items-center justify-center shrink-0 z-10 shadow-subtle group-hover:border-sage-primary transition-colors duration-200">
                <span className="w-2 h-2 rounded-full bg-sage-primary" />
              </div>

              {/* Card Body */}
              <div className="card-editorial p-6 sm:p-7 bg-white flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-sage-primary">
                    {item.period}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-sage-muted px-2 py-0.5 rounded bg-sage-surface border border-sage-border/60">
                    {item.type}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-sage-text mb-1">
                  {item.role}
                </h3>
                
                <div className="mb-4">
                  {item.orgUrl ? (
                    <a
                      href={item.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-sage-primary hover:text-sage-hover hover:underline transition-colors group"
                    >
                      {item.institution === 'Mhanth' ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-sage-surface border border-sage-border">
                          <img
                            src="/assets/mhanth-logo-transparent.png"
                            alt="Mhanth."
                            className="h-3.5 w-auto object-contain"
                          />
                        </span>
                      ) : (
                        <span>{item.institution}</span>
                      )}
                      <ArrowUpRight className="w-3.5 h-3.5 text-sage-muted group-hover:text-sage-primary transition-colors" />
                    </a>
                  ) : (
                    <p className="font-sans text-xs sm:text-sm font-semibold text-sage-muted">
                      {item.institution}
                    </p>
                  )}
                </div>

                <ul className="space-y-1.5 mb-5 text-xs sm:text-[13px] text-sage-muted leading-relaxed">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-border mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Associated Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-sage-border/60">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] text-sage-muted px-2 py-0.5 rounded bg-sage-surface border border-sage-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
