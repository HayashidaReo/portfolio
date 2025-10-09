import React from 'react';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { ProjectCard } from '@/components/molecules/ProjectCard';

export const WorksSection: React.FC = () => {
  // TODO: 実際のデータに置き換える
  const projects = [
    {
      title: 'Portfolio Website',
      period: '2024年10月 - 現在',
      description:
        'React + TypeScript + Viteで構築したモダンなポートフォリオサイト。Atomic Designの原則に基づき、再利用可能なコンポーネントで構成されています。shadcn/uiを使用してUIを実装し、Tailwind CSSでスタイリングしています。',
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      projectUrl: 'https://portfolio-example.vercel.app',
    },
    {
      title: 'Task Management App',
      period: '2024年7月 - 2024年9月',
      description:
        'チーム向けのタスク管理アプリケーション。Next.js App Routerを使用し、サーバーサイドレンダリングとクライアントサイドレンダリングを適切に使い分けています。Firebaseをバックエンドとしてリアルタイムなデータ同期を実現しました。',
      techStack: ['Next.js', 'TypeScript', 'Firebase', 'Zustand'],
      githubUrl: 'https://github.com/yourusername/task-app',
    },
    {
      title: 'Weather Forecast App',
      period: '2024年4月 - 2024年6月',
      description:
        'OpenWeather APIを使用した天気予報アプリ。Flutterで開発し、iOS/Android両方に対応しています。位置情報を取得して現在地の天気を表示する機能や、お気に入り地点の登録機能を実装しました。',
      techStack: ['Flutter', 'Dart', 'OpenWeather API'],
      githubUrl: 'https://github.com/yourusername/weather-app',
    },
  ];

  return (
    <section id="works" className="w-full py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Works / Projects
        </h2>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <TimelineItem key={index}>
              <ProjectCard
                title={project.title}
                period={project.period}
                description={project.description}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                projectUrl={project.projectUrl}
              />
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};
