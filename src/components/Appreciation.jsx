import React from 'react';
import { Maximize2, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Appreciation({ onSelectImage }) {
  const { appreciation } = portfolioData;

  return (
    <section id="appreciation" className="border-t border-sage-border bg-sage-bg">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-eyebrow">
            // {appreciation.sectionNum} — {appreciation.sectionLabel}
          </p>
          <h2 className="section-heading mb-3">
            {appreciation.title}
          </h2>
          <p className="section-lead">
            {appreciation.subtitle}
          </p>
        </div>

        {/* 2-Column Photo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {appreciation.cards.map((card) => (
            <article
              key={card.id}
              className="card-editorial bg-white overflow-hidden flex flex-col justify-between group"
            >
              {/* Photo Area */}
              <div
                onClick={() => onSelectImage(card)}
                className="relative h-64 sm:h-72 md:h-80 w-full bg-sage-surface overflow-hidden cursor-pointer"
                title="Click to view full photo"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-sage-text/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white text-sage-primary font-mono text-xs font-semibold shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View photo</span>
                  </span>
                </div>
              </div>

              {/* Card Narrative & Metadata */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sage-surface border border-sage-border font-mono text-[11px] font-semibold uppercase tracking-wider text-sage-primary mb-3">
                    <Trophy className="w-3 h-3" />
                    <span>{card.badge}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-sage-text mb-2.5">
                    {card.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-sage-muted leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sage-border/60 space-y-2">
                  {card.metadata.map((meta, mIdx) => (
                    <div key={mIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs font-mono">
                      <span className="uppercase text-sage-muted font-medium tracking-wider min-w-[90px]">
                        {meta.label}:
                      </span>
                      <span className="text-sage-text font-semibold">
                        {meta.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
