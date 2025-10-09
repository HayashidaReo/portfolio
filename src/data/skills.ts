/**
 * スキル情報
 */

export interface Skill {
  name: string;
  level: number; // 0-100
  experience: string; // '実務経験あり', '個人開発', '学習中' など
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90, experience: '実務経験あり' },
      { name: 'TypeScript', level: 85, experience: '実務経験あり' },
      { name: 'Python', level: 70, experience: '個人開発' },
      { name: 'Dart', level: 65, experience: '個人開発' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks / Libraries',
    skills: [
      { name: 'React', level: 90, experience: '実務経験あり' },
      { name: 'Next.js', level: 80, experience: '個人開発' },
      { name: 'Vue.js', level: 70, experience: '学習中' },
      { name: 'Flutter', level: 65, experience: '個人開発' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure / Cloud',
    skills: [
      { name: 'AWS', level: 60, experience: '個人開発' },
      { name: 'Vercel', level: 80, experience: '実務経験あり' },
      { name: 'Firebase', level: 75, experience: '個人開発' },
      { name: 'Docker', level: 50, experience: '学習中' },
    ],
  },
  {
    id: 'tools',
    title: 'Other Tools',
    skills: [
      { name: 'Git/GitHub', level: 85, experience: '実務経験あり' },
      { name: 'Figma', level: 70, experience: '実務経験あり' },
      { name: 'Notion', level: 80, experience: '実務経験あり' },
      { name: 'VSCode', level: 90, experience: '実務経験あり' },
    ],
  },
];
