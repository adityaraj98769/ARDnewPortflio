import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ClientWork() {
  const { clientProjects } = portfolioData;

  return (
    <section id="client-work" className="border-t border-sage-border bg-sage-surface/40">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-eyebrow">
            // Client &amp; Production Deployments
          </p>
          <h2 className="section-heading mb-3">
            Production &amp; Client Projects
          </h2>
          <p className="section-lead">
            Commercial web platforms, client websites, and production software engineered for reliability, responsiveness, and performance.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {clientProjects.map((proj, idx) => (
            <article
              key={idx}
              className="card-editorial p-6 sm:p-7 bg-white flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sage-muted px-2.5 py-0.5 rounded bg-sage-surface border border-sage-border">
                    {proj.category}
                  </span>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-primary hover:text-sage-hover transition-colors"
                      aria-label={`Open ${proj.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-sage-text group-hover:text-sage-primary transition-colors duration-200 mb-2">
                  {proj.name}
                </h3>

                <p className="font-sans text-xs sm:text-[13px] text-sage-muted leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sage-border/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] text-sage-muted px-2 py-0.5 rounded bg-sage-surface border border-sage-border/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-sage-primary hover:text-sage-hover transition-colors"
                  >
                    <span>Visit site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
