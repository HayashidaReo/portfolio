/**
 * 経歴情報
 */

export interface Career {
  id: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
}

export const careers: Career[] = [
  {
    id: 'starup',
    company: '株式会社STARUP',
    period: '2025年9月 - 現在',
    description:
      '',
    techStack: ['React', 'Next.js', 'GitHub', 'Slack', 'Notion', 'Claude Code'],
  },
  {
    id: 'teamlab',
    company: '株式会社チームラボ',
    period: '2025年8月',
    description:
      '',
    techStack: ['Flutter', 'Dart', 'GitHub', 'Slack', 'Figma','Swagger'],
  },
  {
    id: 'gonmura',
    company: '株式会社Gonmura',
    period: '2025年2月 - 2025年7月',
    description:
      '',
    techStack: ['Flutter', 'Dart', 'GitHub', 'Slack', 'Firebase', 'Supabase', 'Figma', 'Cursor', 'Claude Code'],
  },
  {
    id: 'nagase',
    company: '株式会社ナガセ',
    period: '2024年1月 - 2025年2月',
    description:
      '',
    techStack: ['Python', 'Django', 'AWS', 'Slack', 'Backlog', 'GitHub'],
  },
  {
    id: 'Amerci',
    company: 'Amerci',
    period: '2022年12月 - 現在',
    description:
      '',
    techStack: ['VBA', 'Excel', 'Python', 'Power Automate', 'PyAutoGUI'],
  },
  {
    id: 'university',
    company: '神戸大学 工学部 情報知能工学科',
    period: '2023年4月 - 現在',
    description:
      'コンピュータサイエンスの基礎からWeb開発、データベース、アルゴリズムなどを学習。卒業研究ではWebアプリケーションのパフォーマンス最適化に関する研究を行いました。',
    techStack: ['Python', 'C', 'Java'],
  },
];
