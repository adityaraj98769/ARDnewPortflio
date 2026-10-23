import React from 'react';
import { Github, ArrowUpRight, GitBranch, GitCommit } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function OpenSource() {
  const { openSource } = portfolioData;

  return (
    <section id="github" className="border-t border-sage-border bg-sage-surface/50 text-center">
      <div className="section-container">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {/* GitHub Icon Circle */}
          <div className="w-16 h-16 rounded-full bg-white border border-sage-border flex items-center justify-center text-sage-primary shadow-soft mb-6 hover:scale-110 transition-transform duration-300">
            <Github className="w-8 h-8" />
          </div>

          <p className="section-label justify-center">
            <span>// {openSource.sectionNum} — {openSource.sectionLabel}</span>
          </p>

          <h2 className="section-title mb-6">
            {openSource.title}
          </h2>

          <p className="text-sage-muted text-base leading-relaxed mb-6">
            {openSource.description}
          </p>

          <span className="font-mono text-sm text-sage-primary font-semibold mb-8 tracking-wider block">
            {openSource.githubHandle}
          </span>

          <a
            href={openSource.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github className="w-4 h-4" />
            <span>Explore My GitHub →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
