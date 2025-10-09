import React from 'react';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { CareerCard } from '@/components/molecules/CareerCard';

export const CareerSection: React.FC = () => {
  // TODO: 実際のデータに置き換える
  const careers = [
    {
      company: '株式会社〇〇',
      period: '2023年4月 - 現在',
      description:
        'フロントエンドエンジニアとして、Webアプリケーションの開発に従事。React + TypeScriptを使用した大規模なSPAの開発・保守を担当。UIコンポーネントライブラリの設計・実装、パフォーマンス改善、アクセシビリティ対応などを行っています。',
      techStack: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS'],
    },
    {
      company: '〇〇大学 情報工学部',
      period: '2019年4月 - 2023年3月',
      description:
        'コンピュータサイエンスの基礎からWeb開発、データベース、アルゴリズムなどを学習。卒業研究ではWebアプリケーションのパフォーマンス最適化に関する研究を行いました。',
      techStack: ['Python', 'JavaScript', 'SQL', 'Git'],
    },
  ];

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
                company={career.company}
                period={career.period}
                description={career.description}
                techStack={career.techStack}
              />
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};
