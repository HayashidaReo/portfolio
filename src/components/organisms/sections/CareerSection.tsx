import React from 'react';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { CareerCard } from '@/components/molecules/CareerCard';
import { careers } from '@/data/careers';

export const CareerSection: React.FC = () => {

  return (
    <section id="career" className="w-full py-16 px-4 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Career / Experience
        </h2>

        <div className="space-y-0">
          {careers.map((career, index) => (
            <TimelineItem key={index}>
              <CareerCard
                id={career.id}
                company={career.company}
                period={career.period}
                description={career.description}
                techStack={career.techStack}
                hasDetail={!!career.detailedContentFile}
              />
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};
