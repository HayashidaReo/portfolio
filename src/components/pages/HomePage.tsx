import React from 'react';
import { PageLayout } from '@/components/templates/PageLayout';
import { Header } from '@/components/organisms/Header';
import { AboutSection } from '@/components/organisms/sections/AboutSection';
import { SkillsSection } from '@/components/organisms/sections/SkillsSection';
import { WorksSection } from '@/components/organisms/sections/WorksSection';
import { CareerSection } from '@/components/organisms/sections/CareerSection';
import { SocialSection } from '@/components/organisms/sections/SocialSection';
import { ContactSection } from '@/components/organisms/sections/ContactSection';

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
