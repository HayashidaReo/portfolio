import React from 'react';
import { PageLayout } from '../templates/PageLayout';
import { Header } from '../organisms/Header';
import { AboutSection } from '../organisms/sections/AboutSection';
import { SkillsSection } from '../organisms/sections/SkillsSection';
import { WorksSection } from '../organisms/sections/WorksSection';
import { CareerSection } from '../organisms/sections/CareerSection';
import { SocialSection } from '../organisms/sections/SocialSection';
import { ContactSection } from '../organisms/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <Header />
      <main className="pt-16">
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <CareerSection />
        <SocialSection />
        <ContactSection />
      </main>
    </PageLayout>
  );
};
