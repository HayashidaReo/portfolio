import React from 'react';
import { TimelineItem, ProjectCard } from '@/components/molecules';
import { projects } from '@/data/projects';

export const WorksSection: React.FC = () => {
  return (
    <section id="works" className="w-full py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Works / Projects
        </h2>

        <div className="space-y-0">
          {projects.map((project) => (
            <TimelineItem key={project.id}>
              <ProjectCard
                id={project.id}
                title={project.title}
                period={project.period}
                description={project.summary}
                techStack={project.techStack}
                icon={project.icon}
                githubUrl={project.githubUrl}
                projectUrl={project.projectUrl}
                featured={project.featured}
              />
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};
