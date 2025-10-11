/**
 * プロフィール情報
 */
import userIcon from '@/assets/profile/userIcon.jpg';

export const profile = {
  // 基本情報
  name: 'れお',
  title: 'スマホアプリエンジニア',
  organization: '神戸大学 工学部 情報知能工学科',
  grade: '学部3年',
  email: 'hayashida.dev@gmail.com',
  avatarSrc: userIcon,

  // 自己紹介
  vision: `
    「これ面白そう！」という自身の好奇心を原動力に、常に一段階上のレベルを目指して開発に取り組んでいます。
    将来的には大規模なシステム開発に携わり、誰かの生活を豊かにすることに貢献したいと考えています。
    そのため、新しいプロジェクトではアーキテクチャや設計を深く考察したり、新しい技術を積極的に採用したりと、常に挑戦を続けています。
  `,

  background: `
    高校時代、Excelでの在庫管理に非効率さを感じ、VBAで自動化システムを自作したことがプログラミングの原体験です。
    小学生の頃からゲームの自動化回路や家電のスマートホーム連携など、システマチックな仕組みづくりへの興味がありました。
    大学入学前の期間には独学でSwiftを学び、座学よりも実際に手を動かして作ることで技術を習得してきました。
  `,

  interests: [
    'Flutter',
    'React',
    'テスト / CI/CDの自動化',
    'インフラ整備',
    'AIを用いた開発',
  ],

  // コンタクト情報
  contact: {
    email: 'hayashida.dev@gmail.com',
    twitterDM: 'https://twitter.com/messages/compose?recipient_id=h_y_s_d_',
  },

  // ソーシャルアカウント
  social: {
    github: {
      username: 'hayashidareo',
      url: 'https://github.com/hayashidareo',
      title: 'GitHub',
      buttonLabel: 'プロフィールを見る',
    },
    twitter: {
      username: 'h_y_s_d_',
      url: 'https://twitter.com/h_y_s_d_',
      title: 'X (Twitter)',
      description: '技術情報や学習記録を発信しています',
      buttonLabel: 'プロフィールを見る',
    },
    qiita: {
      username: 'h_y_s_d',
      url: 'https://qiita.com/h_y_s_d',
      title: 'Qiita',
      description: '技術記事を投稿し、学んだことをアウトプットしています',
      buttonLabel: '記事を読む',
    },
  },
} as const;
