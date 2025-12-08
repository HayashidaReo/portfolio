/**
 * スキル情報
 */

export interface Skill {
  name: string; // 表示名
  iconName?: string; // Devicon用の技術名（指定しない場合はnameを使用）
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
      { name: 'Dart', level: 80, experience: '実務経験あり' },
      { name: 'VBA', iconName: 'Visual Basic', level: 70, experience: '実務経験あり' },
      { name: 'Python', level: 60, experience: '個人開発' },
      { name: 'C', level: 75, experience: '大学授業' },
      { name: 'Swift', level: 50, experience: '個人開発' },
      { name: 'TypeScript', level: 40, experience: '学習中' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks / Libraries',
    skills: [
      { name: 'Flutter', level: 90, experience: '個人開発' },
      { name: 'UIKit', level: 40, experience: '個人開発' },
      { name: 'React', level: 65, experience: '学習中' },
      { name: 'Next.js', iconName: 'Next.js', level: 65, experience: '学習中' },
      { name: 'Vite', iconName: 'Vite', level: 30, experience: '学習中' },
      { name: 'Django', level: 20, experience: '使用経験あり' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure / Cloud',
    skills: [
      { name: 'Firebase', level: 85, experience: '実務経験あり' },
      { name: 'Supabase', level: 60, experience: '使用経験あり' },
      { name: 'Docker', level: 60, experience: '学習中' },
      { name: 'Vercel', level: 45, experience: '学習中' },
      { name: 'AWS', level: 15, experience: '使用経験あり' },
    ],
  },
  {
    id: 'tools',
    title: 'Other Tools',
    skills: [
      { name: 'GitHub', level: 90, experience: '実務経験あり' },
      { name: 'Figma', level: 60, experience: '実務経験あり' },
      { name: 'Slack', level: 85, experience: '実務経験あり' },
      { name: 'Notion', level: 80, experience: '実務経験あり' },
      { name: 'VSCode', level: 90, experience: '実務経験あり' },
      { name: 'Cursor', level: 75, experience: '実務経験あり' },
      { name: 'Claude Code', level: 80, experience: '実務経験あり' },
      { name: 'Antigravity', level: 40, experience: '個人開発' },
      { name: 'Xcode', level: 50, experience: '個人開発' },
    ],
  },
];
