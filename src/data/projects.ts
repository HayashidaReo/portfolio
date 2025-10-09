export interface Project {
  id: string;
  title: string;
  period: string;
  summary: string; // 一覧ページで表示する概要
  techStack: string[];
  icon?: string;
  githubUrl?: string;
  projectUrl?: string;
  // 詳細ページ専用の項目
  description?: string; // 詳細ページで表示する詳しい説明
  features?: string[];
  challenges?: string[];
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    period: '2024年10月 - 現在',
    summary:
      'React + TypeScript + Viteで構築したモダンなポートフォリオサイト。Atomic Designの原則に基づき、再利用可能なコンポーネントで構成されています。shadcn/uiを使用してUIを実装し、Tailwind CSSでスタイリングしています。',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    projectUrl: 'https://portfolio-example.vercel.app',
    description: `
このポートフォリオサイトは、モダンなWeb技術を活用して構築した個人サイトです。
Atomic Designの原則に基づいたコンポーネント設計により、高い保守性と再利用性を実現しています。

shadcn/uiをベースにしたUIコンポーネントライブラリを構築し、統一感のあるデザインシステムを実装しました。
また、Tailwind CSSを使用することで、効率的なスタイリングとレスポンシブ対応を実現しています。
    `,
    features: [
      'Atomic Designに基づいたコンポーネント設計',
      'shadcn/ui + Tailwind CSSによる統一的なUIシステム',
      '完全レスポンシブ対応（モバイル/タブレット/デスクトップ）',
      'タイムライン形式での実績・経歴表示',
      'TypeScriptによる型安全な開発',
    ],
    challenges: [
      'Atomic Designの原則を理解し、適切なコンポーネント分割を実現',
      'shadcn/uiのカスタマイズと拡張',
      'パフォーマンスとアクセシビリティの両立',
    ],
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    period: '2024年7月 - 2024年9月',
    summary:
      'チーム向けのタスク管理アプリケーション。Next.js App Routerを使用し、サーバーサイドレンダリングとクライアントサイドレンダリングを適切に使い分けています。Firebaseをバックエンドとしてリアルタイムなデータ同期を実現しました。',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Zustand'],
    githubUrl: 'https://github.com/yourusername/task-app',
    description: `
チームでのタスク管理を効率化するためのWebアプリケーションです。
Next.js 14のApp Routerを活用し、高速なページ表示とSEO対策を実現しています。

Firebaseのリアルタイムデータベースを使用することで、複数のユーザー間でのタスク状態の即座な同期を実現しました。
また、Zustandを使用した軽量な状態管理により、アプリケーション全体のパフォーマンスを最適化しています。
    `,
    features: [
      'リアルタイムなタスク同期機能',
      'ドラッグ&ドロップによる直感的な操作',
      'カンバンボード形式での視覚的なタスク管理',
      'Firebaseによるユーザー認証',
      'チーム招待機能',
    ],
    challenges: [
      'Next.js App Routerの学習とServer Componentsの活用',
      'Firebaseのセキュリティルール設計',
      'リアルタイム更新時のパフォーマンス最適化',
    ],
  },
  {
    id: 'weather-forecast-app',
    title: 'Weather Forecast App',
    period: '2024年4月 - 2024年6月',
    summary:
      'OpenWeather APIを使用した天気予報アプリ。Flutterで開発し、iOS/Android両方に対応しています。位置情報を取得して現在地の天気を表示する機能や、お気に入り地点の登録機能を実装しました。',
    techStack: ['Flutter', 'Dart', 'OpenWeather API'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    description: `
FlutterとDartを使用して開発したクロスプラットフォームの天気予報アプリです。
OpenWeather APIを活用し、現在の天気情報と5日間の予報を表示します。

位置情報サービスを統合し、ユーザーの現在地の天気を自動的に取得・表示する機能を実装しました。
また、複数の地点をお気に入りとして登録し、素早く天気情報を確認できる機能も追加しています。
    `,
    features: [
      '現在地の自動取得と天気表示',
      '5日間の天気予報表示',
      'お気に入り地点の登録・管理',
      '美しいアニメーションとUI',
      'オフライン時のキャッシュ機能',
    ],
    challenges: [
      'Flutterのクロスプラットフォーム開発の学習',
      '位置情報の権限管理とエラーハンドリング',
      'API呼び出しの最適化とキャッシング戦略',
    ],
  },
];
