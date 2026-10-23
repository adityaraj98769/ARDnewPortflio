import React from 'react';
import { ArrowUpRight, Github, Check } from 'lucide-react';

export default function ProjectCard({
  name,
  badge,
  purpose,
  description,
  technologies = [],
  highlights = [],
  liveUrl,
  githubUrl,
}) {
  return (
    <article className="card-editorial p-6 sm:p-8 flex flex-col justify-between group">
      <div>
        {/* Header with Badge & External Links */}
        <div className="flex items-start justify-between gap-4 mb-4">
          {badge ? (
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sage-primary px-2.5 py-1 rounded bg-sage-surface border border-sage-border">
              {badge}
            </span>
          ) : (
            <span className="font-mono text-[11px] font-medium text-sage-muted">
              Case Study
            </span>
          )}

          <div className="flex items-center gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-sage-muted hover:text-sage-text transition-colors"
                aria-label={`View ${name} source code on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-sage-primary hover:text-sage-hover transition-colors"
                aria-label={`View live demo of ${name}`}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="font-display text-2xl font-bold text-sage-text group-hover:text-sage-primary transition-colors duration-200 mb-2">
          {name}
        </h3>

        {/* Purpose Sentence */}
        <p className="font-sans text-sm font-medium text-sage-text leading-relaxed mb-4">
          {purpose}
        </p>

        {/* Technical Narrative */}
        {description && (
          <p className="font-sans text-xs sm:text-[13px] text-sage-muted leading-relaxed mb-5">
            {description}
          </p>
        )}

        {/* Key Engineering Highlights */}
        {highlights.length > 0 && (
          <div className="mb-6 space-y-2 pt-4 border-t border-sage-border/60">
            <span className="font-mono text-[11px] uppercase tracking-wider text-sage-muted font-medium block mb-2">
              Key Capabilities:
            </span>
            <ul className="space-y-1.5">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 font-sans text-xs text-sage-muted leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-primary/60 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer with Technologies & CTAs */}
      <div className="pt-5 border-t border-sage-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Curated Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="font-mono text-[11px] text-sage-text px-2 py-0.5 rounded bg-sage-surface border border-sage-border/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-wider text-sage-primary hover:text-sage-hover transition-colors shrink-0"
          >
            <span>Live demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
