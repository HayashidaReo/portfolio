import React from 'react';
import { SkillCategory, SkillItem } from '@/components/molecules';
import { skillCategories } from '@/data/skills';
import { Code2, Layers, Cloud, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  // アイコンマッピング
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    languages: Code2,
    frameworks: Layers,
    infrastructure: Cloud,
    tools: Wrench,
  };

  return (
    <section id="skills" className="w-full py-16 px-4 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.id];
            return (
              <SkillCategory
                key={category.id}
                title={category.title}
                icon={IconComponent}
              >
                {category.skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    name={skill.name}
                    iconName={skill.iconName}
                    level={skill.level}
                    experience={skill.experience}
                  />
                ))}
              </SkillCategory>
            );
          })}
        </div>
      </div>
    </section>
  );
};
