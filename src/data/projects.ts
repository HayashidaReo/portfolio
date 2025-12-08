/**
 * プロジェクトデータ
 * ポートフォリオに掲載するプロジェクトの一覧
 */
import type { Project } from '@/types';
import studyNote2GraphImage from '@/assets/project/studyNote2_graph.png';

export const projects: Project[] = [
    {
    id: 'nikken-next',
    title: '日本拳法 大会運営支援システム',
    period: '2025年10月後半 - 現在',
    summary:
      '日本拳法の大会運営をDX化する、リアルタイム・スコアリングWebアプリケーションです。現在絶賛開発中です。選手登録、試合組み合わせ、リアルタイム得点板機能まで、運営業務を一気通貫でサポートします。',
    techStack: ['React', 'TypeScript', 'Next.js', 'Authentication', 'Firestore', 'Functions', 'Presentation API', 'SendGrid', 'Tailwind CSS', 'shadcn/ui', 'Zustand'],
    // projectUrl: '',
    detailedContentFile: 'nikken-next.md',
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'ポートフォリオサイト',
    period: '2025年10月',
    summary:
      '自身のスキルと実績を伝えるために構築したポートフォリオサイト。Atomic Designに基づいたコンポーネント設計を行い、shadcn/uiとTailwind CSSでUIを構築。AIを積極的に活用し、ドキュメント整備から開発まで効率的に進めました。',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    githubUrl: 'https://github.com/hayashidareo/portfolio',
    projectUrl: 'https://hysd-portfolio.vercel.app',
    detailedContentFile: 'portfolio-website.md',
  },
  {
    id: 'warikan-app',
    title: '割り勘アプリ',
    period: '2025年9月',
    summary:
      'インターンシップのコーディングテストで開発した割り勘アプリ。ユーザーや支出の管理、リアルタイム計算など、Webアプリの基本的な要件をNext.jsで実装。Storybookによるコンポーネント駆動開発やテストの品質向上にも注力しました。',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'Storybook'],
    githubUrl: 'https://github.com/HayashidaReo/star_up_test',
    detailedContentFile: 'warikan-app.md',
  },
  {
    id: 'link-app',
    title: 'Link App',
    period: '2025年5月 - 2025年7月',
    summary:
      '子供たちの関係性をネットワークグラフで可視化するWebアプリ。Flutter WebとFirebaseを採用し、リアルタイムでのデータ同期を実現。組織ごとのアカウント発行や権限管理が可能な管理者機能も実装しました。',
    techStack: ['Flutter', 'Dart', 'Authentication', 'Firestore', 'Functions', 'Riverpod', 'GoRouter', 'Freezed'],
    githubUrl: 'https://github.com/hayashidareo/link-app',
    projectUrl: 'https://link-map-web.web.app/',
    detailedContentFile: 'link-app.md',
  },
  {
    id: 'github-app',
    title: 'GitHubレポジトリ検索アプリ',
    period: '2025年4月',
    summary:
      '株式会社ゆめみのコーディングテスト課題として作成。GitHub REST APIを利用し、リポジトリ検索から詳細閲覧までを行えるFlutterアプリ。Firebase GitHub認証で取得したトークンでAPIレートリミット対策も実装。',
    techStack: ['Flutter', 'Dart', 'Authentication', 'Riverpod', 'GoRouter', 'Freezed', 'GitHub API'],
    githubUrl: 'https://github.com/HayashidaReo/search_repositories',
    detailedContentFile: 'github-app.md',
  },
  {
    id: 'matching-app',
    title: 'マッチングアプリ',
    period: '2025年2月 - 2025年3月',
    summary:
      '株式会社Gonmuraのインターンシップ最終課題。FlutterとFirebaseを用いて、認証、プロフィール、投稿、マッチング、DMといったコア機能を実装。MVCアーキテクチャやER図に基づく設計など、実践的な開発プロセスを経験しました。',
    techStack: ['Flutter', 'Dart', 'Authentication', 'Firestore', 'Storage', 'Riverpod', 'GoRouter', 'Freezed'],
    githubUrl: 'https://github.com/HayashidaReo/training_matting_app',
    detailedContentFile: 'matching-app.md',
  },
  {
    id: 'studynote2',
    title: 'StudyNote2',
    period: '2025年1月 - 2025年2月',
    summary:
      '自作アプリ「StudyNote」の機能とUI/UXを全面的に刷新した後継アプリ。Flutterを用いてクロスプラットフォーム対応を実現し、より直感的で使いやすい成績管理体験を目指しました。広告やアプリ内課金といった収益化機能も導入。',
    techStack: ['Flutter', 'Dart', 'Authentication', 'Realtime DB', 'Functions', 'Google AdMob', 'in app purchase'],
    projectUrl: 'https://apps.apple.com/jp/app/id6740814731',
    detailedContentFile: 'studynote2.md',
    featured: true,
    images: {
      studyNote2Graph: studyNote2GraphImage,
    },
  },
  {
    id: 'amerci-official-app',
    title: 'Amerci公式アプリ',
    period: '2024年5月 - 2024年8月',
    summary:
      '食品・雑貨販売店「Amerci」の公式アプリ。店舗と共同で企画・開発し、お知らせ配信やポイント機能などをFlutterで実装しました。初のクライアントワークとして、要件定義からリリースまで一貫して担当したプロジェクトです。',
    techStack: ['Flutter', 'Dart', 'Authentication', 'Realtime DB', 'Storage', 'Functions', 'Gemini api', 'VBA'],
    projectUrl: 'https://apps.apple.com/jp/app/id6504146300',
    detailedContentFile: 'amerci-official-app.md',
    featured: true,
  },
  {
    id: 'flima-manager',
    title: 'フリマネ',
    period: '2024年2月',
    summary:
      'フリマアプリの出品・在庫管理を効率化するiOSアプリ。複数アカウントの一括管理や売上分析機能を搭載。UI/UXデザインに注力し、iPadとiPhoneの両デバイスでの使いやすさを追求しました。',
    techStack: ['Swift', 'UIKit', 'Authentication', 'Firestore', 'Google AdMob', 'StoreKit'],
    projectUrl: 'https://apps.apple.com/jp/app/id6478158839',
    detailedContentFile: 'flima-manager.md',
  },
  {
    id: 'country-quiz',
    title: 'ゴージャスな国名クイズ',
    period: '2024年1月',
    summary:
      '国旗から国名を当てるクイズアプリ。クイズを楽しみながら、各国の位置や首都などの情報も学べる教育的な側面も持たせています。初めてFirebaseを導入し、ユーザー投稿型のクイズ機能を実現しました。',
    techStack: ['Swift', 'UIKit', 'Authentication', 'Realtime DB', 'Google Maps API', 'Google AdMob'],
    projectUrl: 'https://apps.apple.com/jp/app/id6476065723',
    detailedContentFile: 'country-quiz.md',
  },
  {
    id: 'number-guessing-game',
    title: '数字当てゲーム',
    period: '2023年12月 - 2024年1月',
    summary:
      '出題された数字を質問を繰り返すことで当てるロジックゲーム。この開発経験を通じて、面白いゲーム性には綿密な企画・設計が不可欠であると学びました。Game Centerを導入し、ランキング機能も実装しています。',
    techStack: ['Swift', 'UIKit', 'Google AdMob', 'Game Center'],
    projectUrl: 'https://apps.apple.com/jp/app/id6474898346',
    detailedContentFile: 'number-guessing-game.md',
  },
  {
    id: 'ikasu-memo',
    title: 'イカすメモ',
    period: '2023年2月',
    summary:
      '人気ゲーム「スプラトゥーン」のギア構成を記録・管理するための特化型メモアプリ。自身の課題解決から生まれたアプリで、結果的に個人開発アプリの中で最も多く利用されています。',
    techStack: ['Swift', 'UIKit', 'Google AdMob'],
    projectUrl: 'https://apps.apple.com/jp/app/id6446800035',
    detailedContentFile: 'ikasu-memo.md',
  },
  {
    id: 'just-stop',
    title: 'ジャストストップ！',
    period: '2023年2月',
    summary:
      'ストップウォッチを5秒ピッタリで止めることを目指すシンプルなゲーム。短期間で企画からリリースまで行い、アプリ開発のサイクルを体験しました。',
    techStack: ['Swift', 'UIKit', 'Google AdMob'],
    projectUrl: 'https://apps.apple.com/jp/app/id6446065460',
    detailedContentFile: 'just-stop.md',
  },
  {
    id: 'studynote',
    title: 'StudyNote',
    period: '2023年1月 - 2023年2月',
    summary:
      '大学受験の過去問や模試の成績を一元管理し、複雑な傾斜配点に自動変換するアプリ。自身が初めてApp Storeにリリースした記念すべきスマートフォンアプリです。',
    techStack: ['Swift', 'UIKit', 'Google AdMob'],
    projectUrl: 'https://apps.apple.com/jp/app/id1670991873',
    detailedContentFile: 'studynote.md',
  },
];
