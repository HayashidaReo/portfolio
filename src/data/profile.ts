/**
 * プロフィール情報
 */
import userIcon from '@/assets/userIcon.jpg';

export const profile = {
  // 基本情報
  name: 'れお',
  nameJa: 'れお',
  title: 'native app Developer',
  email: 'hayashida.dev@gmail.com',
  avatarSrc: userIcon,

  // 自己紹介
  vision: `
    モダンなWeb技術を活用し、ユーザーに最高の体験を提供するプロダクトを作りたいと考えています。
    UI/UXにこだわり、パフォーマンスとアクセシビリティを両立したWebアプリケーションの開発に情熱を注いでいます。
  `,

  background: `
    大学時代にプログラミングに出会い、Webサイト制作の面白さに魅了されました。
    特にフロントエンド開発に興味を持ち、独学でReactやTypeScriptを学習してきました。
  `,

  interests: [
    'React',
    'TypeScript',
    'UI/UX Design',
    'Web Performance',
    'Accessibility',
  ],

  // ソーシャルアカウント
  social: {
    github: {
      username: 'hayashidareo',
      url: 'https://github.com/hayashidareo',
    },
    twitter: {
      username: 'h_y_s_d_',
      url: 'https://twitter.com/h_y_s_d_',
    },
    qiita: {
      username: 'h_y_s_d',
      url: 'https://qiita.com/h_y_s_d',
    },
  },
} as const;
