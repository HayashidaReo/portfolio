import React from 'react';
import { SkillCategory } from '@/components/molecules/SkillCategory';
import { SkillItem } from '@/components/molecules/SkillItem';
import { Code2, Layers, Cloud, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  // TODO: 実際のデータに置き換える
  const languageSkills = [
    { name: 'JavaScript', level: 90, experience: '実務経験あり' },
    { name: 'TypeScript', level: 85, experience: '実務経験あり' },
    { name: 'Python', level: 70, experience: '個人開発' },
    { name: 'Dart', level: 65, experience: '個人開発' },
  ];

  const frameworkSkills = [
    { name: 'React', level: 90, experience: '実務経験あり' },
    { name: 'Next.js', level: 80, experience: '個人開発' },
    { name: 'Vue.js', level: 70, experience: '学習中' },
    { name: 'Flutter', level: 65, experience: '個人開発' },
  ];

  const infrastructureSkills = [
    { name: 'AWS', level: 60, experience: '個人開発' },
    { name: 'Vercel', level: 80, experience: '実務経験あり' },
    { name: 'Firebase', level: 75, experience: '個人開発' },
    { name: 'Docker', level: 50, experience: '学習中' },
  ];

  const toolSkills = [
    { name: 'Git/GitHub', level: 85, experience: '実務経験あり' },
    { name: 'Figma', level: 70, experience: '実務経験あり' },
    { name: 'Notion', level: 80, experience: '実務経験あり' },
    { name: 'VSCode', level: 90, experience: '実務経験あり' },
  ];

  return (
    <section id="skills" className="w-full py-16 px-4 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Languages */}
          <SkillCategory title="Languages" icon={Code2}>
            {languageSkills.map((skill, index) => (
              <SkillItem
                key={index}
                name={skill.name}
                level={skill.level}
                experience={skill.experience}
              />
            ))}
          </SkillCategory>

          {/* Frameworks / Libraries */}
          <SkillCategory title="Frameworks / Libraries" icon={Layers}>
            {frameworkSkills.map((skill, index) => (
              <SkillItem
                key={index}
                name={skill.name}
                level={skill.level}
                experience={skill.experience}
              />
            ))}
          </SkillCategory>

          {/* Infrastructure / Cloud */}
          <SkillCategory title="Infrastructure / Cloud" icon={Cloud}>
            {infrastructureSkills.map((skill, index) => (
              <SkillItem
                key={index}
                name={skill.name}
                level={skill.level}
                experience={skill.experience}
              />
            ))}
          </SkillCategory>

          {/* Other Tools */}
          <SkillCategory title="Other Tools" icon={Wrench}>
            {toolSkills.map((skill, index) => (
              <SkillItem
                key={index}
                name={skill.name}
                level={skill.level}
                experience={skill.experience}
              />
            ))}
          </SkillCategory>
        </div>
      </div>
    </section>
  );
};
