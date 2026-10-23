import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="border-t border-sage-border bg-sage-bg">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-eyebrow">
            // {skills.sectionNum} — {skills.sectionLabel}
          </p>
          <h2 className="section-heading mb-3">
            {skills.title}
          </h2>
          <p className="section-lead">
            {skills.subtitle}
          </p>
        </div>

        {/* Clean Grouped Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, idx) => (
            <div
              key={idx}
              className="card-editorial p-6 bg-white flex flex-col justify-between"
            >
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-sage-text mb-4 pb-3 border-b border-sage-border/60 flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-[11px] text-sage-muted font-normal">
                    {category.skills.length} skills
                  </span>
                </h3>

                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="font-sans text-[13px] text-sage-muted flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-primary/40 shrink-0" />
                      <span className="hover:text-sage-text transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
