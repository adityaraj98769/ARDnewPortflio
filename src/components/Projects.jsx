import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { featuredProjects, personal } = portfolioData;

  return (
    <section id="projects" className="border-t border-sage-border bg-sage-bg">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="section-eyebrow">
              // 02 — Work
            </p>
            <h2 className="section-heading mb-3">
              Featured Projects
            </h2>
            <p className="section-lead">
              Case studies in applied artificial intelligence, full-stack systems, and practical software engineering.
            </p>
          </div>

          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-fit shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>View all repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-Column Responsive Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              badge={project.badge}
              purpose={project.purpose}
              description={project.description}
              technologies={project.technologies}
              highlights={project.highlights}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
