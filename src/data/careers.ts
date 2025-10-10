/**
 * 経歴情報
 */

export interface Career {
  id: string;
  company: string;
  period: string;
  description: string; // 一覧ページで表示する簡潔な説明
  techStack?: string[];
  // 詳細ページ専用の項目
  detailedContentFile?: string; // Markdownファイル名 (例: 'amerci.md')
  icon?: string; // アイコン画像のパス
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
      '食品・雑貨販売店「Amerci」のExcelとVBAで作成された在庫管理システムを改良。VBAとExcelを用いて、バーコードスキャンによる入出庫管理、在庫レポートの自動生成、発注予測機能などを実装し、手作業によるミスを削減。現在も機能追加や保守を継続中。',
    techStack: ['VBA', 'Excel', 'Python', 'Power Automate', 'PyAutoGUI'],
    detailedContentFile: 'amerci.md',
  },
  {
    id: 'university',
    company: '神戸大学 工学部 情報知能工学科',
    period: '2023年4月 - 現在',
    description:
      'コンピュータサイエンスの基礎から信号解析、シミュレーションやアルゴリズムなどを学習。',
    techStack: ['Python', 'C', 'Java'],
  },
];
