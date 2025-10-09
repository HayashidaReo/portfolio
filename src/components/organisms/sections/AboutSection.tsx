import React from 'react';
import { ProfileCard } from '@/components/molecules/ProfileCard';
import { InfoCard } from '@/components/molecules/InfoCard';
import { InterestsList } from '@/components/molecules/InterestsList';
import { Heart, Target, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  // TODO: 実際のデータに置き換える
  const profileData = {
    name: 'Your Name',
    title: 'Frontend Developer',
    avatarSrc: '',
  };

  const interests = [
    'React',
    'TypeScript',
    'UI/UX Design',
    'Web Performance',
    'Accessibility',
  ];

  const vision = `
    モダンなWeb技術を活用し、ユーザーに最高の体験を提供するプロダクトを作りたいと考えています。
    UI/UXにこだわり、パフォーマンスとアクセシビリティを両立したWebアプリケーションの開発に情熱を注いでいます。
  `;

  const background = `
    大学時代にプログラミングに出会い、Webサイト制作の面白さに魅了されました。
    特にフロントエンド開発に興味を持ち、独学でReactやTypeScriptを学習してきました。
  `;

  return (
    <section id="about" className="w-full py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {/* プロフィールカード */}
          <div className="lg:col-span-1">
            <ProfileCard
              name={profileData.name}
              title={profileData.title}
              avatarSrc={profileData.avatarSrc}
            />
          </div>

          {/* 詳細情報 */}
          <div className="lg:col-span-2 space-y-6">
            {/* ビジョン */}
            <InfoCard
              title="Vision"
              content={vision}
              icon={Target}
            />

            {/* 経緯・背景 */}
            <InfoCard
              title="Background"
              content={background}
              icon={Sparkles}
            />

            {/* 興味・関心 */}
            <InfoCard
              title="Interests"
              icon={Heart}
              content={<InterestsList interests={interests} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
