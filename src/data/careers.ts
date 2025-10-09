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
    id: 'company-1',
    company: '株式会社〇〇',
    period: '2023年4月 - 現在',
    description:
      'フロントエンドエンジニアとして、Webアプリケーションの開発に従事。React + TypeScriptを使用した大規模なSPAの開発・保守を担当。UIコンポーネントライブラリの設計・実装、パフォーマンス改善、アクセシビリティ対応などを行っています。',
    techStack: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS'],
  },
  {
    id: 'university-1',
    company: '〇〇大学 情報工学部',
    period: '2019年4月 - 2023年3月',
    description:
      'コンピュータサイエンスの基礎からWeb開発、データベース、アルゴリズムなどを学習。卒業研究ではWebアプリケーションのパフォーマンス最適化に関する研究を行いました。',
    techStack: ['Python', 'JavaScript', 'SQL', 'Git'],
  },
];
