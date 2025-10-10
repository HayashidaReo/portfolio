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
    period: '2025年10月',
    summary:
      'React + TypeScript + Viteで構築したモダンなポートフォリオサイト。Atomic Designの原則に基づき、再利用可能なコンポーネントで構成されています。shadcn/uiを使用してUIを実装し、Tailwind CSSでスタイリングしています。ドキュメントを整備しAIをフル活用して開発を行いました。',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    githubUrl: 'https://github.com/hayashidareo/portfolio',
    projectUrl: 'https://portfolio-example.vercel.app',
    description: `
このポートフォリオサイトは、モダンなWeb技術を活用して構築した個人サイトです。
Atomic Designの原則に基づいたコンポーネント設計により、高い保守性と再利用性を実現しています。

shadcn/uiをベースにしたUIコンポーネントライブラリを構築し、統一感のあるデザインシステムを実装しました。
また、Tailwind CSSを使用することで、効率的なスタイリングとレスポンシブ対応を実現しています。
ドキュメントを整備し、AIツールを活用してコード生成やレビューを行うことで、開発効率を大幅に向上させました。
`,
    features: [
      'Atomic Designに基づいたコンポーネント設計',
      'shadcn/ui + Tailwind CSSによる統一的なUIシステム',
      '完全レスポンシブ対応',
      'タイムライン形式での実績・経歴表示',
      'AIを活用したドキュメント整備とコード生成',
    ],
    challenges: [
      'Atomic Designの原則を理解し、適切なコンポーネント分割を実現',
      'shadcn/uiのカスタマイズと拡張',
      'アニメーションの実装とパフォーマンス最適化',
    ],
  },
  {
    id: 'warikan-app',
    title: '割り勘アプリ',
    period: '2025年9月',
    summary:
      'Next.jsで開発した割り勘アプリ。ユーザー追加、支出の追加、通貨変換、リアルタイムでの割り勘計算などの機能を備えています。Dockerを使用してコンテナ化しています。Storybookでコンポーネントのドキュメントを整備し、テストも充実させています。',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS','Docker', 'Storybook'],
    githubUrl: 'https://github.com/HayashidaReo/star_up_test',
    description: `株式会社STARUPのインターンシップのコーディングテストで作成したサービスです。`,
    features: [
      'ユーザーの追加・編集・削除',
      '支出の追加・編集・削除',
      '通貨変換機能',
      'リアルタイムでの割り勘計算',
      'レスポンシブデザインでモバイル・タブレット・デスクトップに対応',
      'Storybookでのコンポーネントドキュメント整備',
      'ユニットテストと統合テストの充実',
    ],
    challenges: [
'ブランチ戦略の策定と運用',
'Storybookでのコンポーネントドキュメント整備',
'テストカバレッジの向上と品質保証',
'copilotを活用したレビュー体制の構築',
'ドキュメントの整備',
    ],
  },
  {
    id: 'link-app',
    title: 'Link App',
    period: '2024年5月 - 2024年7月',
    summary:
      '子供の関係性を可視化するためのWebアプリ。Flutter Webを使用して開発し、リアルタイムでのデータ同期を実現しています。Firebaseをバックエンドに採用し、ユーザー認証やデータ管理を行っています。管理者画面も作成し、適切なアカウント権限を設定することも可能です。',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    githubUrl: 'https://github.com/hayashidareo/link-app',
    projectUrl: 'https://link-map-web.web.app/',
    description: ``,
    features: [
      '子供の関係の可視化',
      'インタラクティブなネットワークグラフ',
      '活動,グループの管理',
      '組織に所属するアカウントの発行・権限管理',
      '学年や所属クラスなどのタグのカスタマイズ',
      'リアルタイムでのデータ同期',
      'レスポンシブデザインでモバイル・タブレット・デスクトップに対応',
      '管理者画面の実装',
      'アプリ紹介ページの実装',
    ],
    challenges: [
    ],
  },
  {
    id: 'studynote2',
    title: 'StudyNote2',
    period: '2025年1月 - 2025年2月',
    summary:
      'StudyNoteの後継アプリ。Flutterで開発したクロスプラットフォーム対応の成績管理アプリです。わかりやすいUIや動線を意識したデザインにして使いやすさを意識しました。',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google AdMob', 'in app purchase'],
    projectUrl: 'https://apps.apple.com/jp/app/id6740814731',
    description: ``,
    features: [
'テスト成績の管理',
'傾斜配点（圧縮配点）に自動で変換',
'グラフで可視化',
'目標点と現在の点数の比較',
'試験日などのイベントまでの残り日数のカウントダウン',
'テスト成績へのコメント機能',
'志望大学の登録、管理',
'複数端末で共有管理',
    ],
    challenges: [
    ],
  },
  {
    id: 'amerci-official-app',
    title: 'Amerci公式アプリ',
    period: '2024年5月 - 2024年8月',
    summary:
      'Amerciの公式アプリ。Flutterで開発したクロスプラットフォーム対応のアプリです。お知らせのプッシュ通知やレジとの連携などの機能を備えています。初めて、店舗と共同で行なったアプリ開発だったので緊張感を持って開発に取り組みました。アプリ利用者数もまだまだ増加しているので、アップデートを定期的に行いユーザー体験の向上を目指していきたいです！',
    techStack: ['Flutter', 'Dart', 'Firebase', 'VBA'],
    projectUrl: 'https://apps.apple.com/jp/app/id6504146300',
    description: ``,
    features: [
'認証機能',
'お知らせ配信(アプリ内のお知らせページとプッシュ通知配信)',
'会員限定で販売している賞味期限が近い or 切れた商品の情報の掲載',
'オリジナルレシピの配信',
'買い物で貯まるポイント機能',
'BASEに出品している商品の紹介',
    ],
    challenges: [
    ],
  },
  {
    id: 'flima-manager',
    title: 'フリマネ',
    period: '2024年2月',
    summary:
      'フリマアプリの出品管理を効率化するためのデスクトップアプリ。swiftのUIkitで開発し、複数アカウントの一括管理、出品テンプレートの保存、売上分析などの機能を備えています。UI/UXデザインにこだわり、使いやすさを追求しました。DBとの通信に時間がかかったり、アプリ内の線移動線が悪いと完成後に感じ後悔しています。iPadとihponeの両方に対応できるようにUIを設計したことや課金機能など初めての機能に沢山挑戦したアプリになりました。',
    techStack: ['Flutter', 'Dart', 'Firebase', 'StoreKit'],
    projectUrl: 'https://apps.apple.com/jp/app/id6478158839',
    description: '',
    features: [
      '取り扱い商品の管理',
'発注した商品の管理',
'在庫の管理',
'販売記録の管理',
'販売記録をグラフで可視化',
    ],
    challenges: [
    ],
  },
  {
    id: 'country-quiz',
    title: 'ゴージャスな国名クイズ',
    period: '2024年1月',
    summary:
      '国名を当てるクイズアプリ。swiftのUIKitで開発し、国名のクイズをモチーフにしたアプリです。クイズを楽しみながら、国の地図上での場所や人口、面積、首都などを学ぶことができます。初めてfirebaseを利用し、アプリ開発の世界が広がったきっかけとなったアプリです。各国の面積や人口などの情報も勉強できるアプリにしようと思いデータの収集・整形やマップの表示を頑張りました。',
    techStack: ['Swift', 'UIKit', 'Google Maps API', 'Google AdMob'],
    projectUrl: 'https://apps.apple.com/jp/app/id6476065723',
    description: '',
    features: [
      '世界中のユーザーにクイズを投稿する',
      '世界中のユーザーが作ったクイズで遊ぶ',
      '国別の基本情報の学習',
    ],
    challenges: [
    ],
  },
  {
    id: 'number-guessing-game',
    title: '数字当てゲーム',
    period: '2023年12月 - 2024年1月',
    summary:
      '数字を当てるゲームアプリ。swiftのUIKitで開発し、出題された数字を質問していくことで当てるゲーム。アキネーターのようなゲームを作りたかったが、質問で質問のヴァリエーションが少なく、２分探索のように解いてしまうゲームになってしまったので、企画段階でもっと深く考える必要があったと、反省しています。',
    techStack: ['Swift', 'UIKit','Google AdMob', 'Game Center'],
    projectUrl: 'https://apps.apple.com/jp/app/id6474898346',
    description: '',
    features: [
      '１桁の数字、２桁の数字、３桁の数字の３種類のモードを用意',
'ランキング機能で世界中のプレイヤーと競える',
    ],
    challenges: [
    ],
  },
  {
    id: 'just-stop',
    title: 'ジャストストップ！',
    period: '2023年2月',
    summary:
      'ストップウォッチを5秒ピッタリで止めるゲームアプリです。最大で小数第四位まで一致させるモードがあります。',
    techStack: ['Swift', 'UIKit'],
    projectUrl: 'https://apps.apple.com/jp/app/id6446065460',
    description: '',
    features: [
    ],
    challenges: [
    ],
  },
  {
    id: 'ikasu-memo',
    title: 'イカすメモ',
    period: '2023年2月',
    summary:
      'スプラトゥーンのギアメモアプリ。swiftのUIKitで開発し、ユーザーが選択したギアの情報を表示する機能を備えています。シンプルなアプリでありながら、自分のアプリで一番ダウンロード,利用されているアプリです。',
    techStack: ['Swift', 'UIKit', 'Google AdMob'],
    projectUrl: 'https://apps.apple.com/jp/app/id6446800035',
    description: '',
    features: [
      '各ステージ、各ルールごとに武器とギアを登録',
      'よく使うセットをテンプレートに保存して素早く登録',
      'メモコメント機能',
    ],
    challenges: [
    ],
  },
  {
    id: 'studynote',
    title: 'StudyNote',
    period: '2023年1月 - 2023年2月',
    summary:
      '過去問、模試、予想問題など様々なテスト成績を管理して、必要な時にいつでも傾斜配点（圧縮配点）に変換してくれるアプリです。初めて作ったスマホアプリで、swiftやxcodeについて学習を行いながら開発を行いました。',
    techStack: ['Swift', 'UIKit', 'Google AdMob'],
    projectUrl: 'https://apps.apple.com/jp/app/id1670991873',
    description: '',
    features: [
      'テスト成績の管理',
      '傾斜配点（圧縮配点）に自動で変換',
      '合格最低点.平均点.最高点と自分の点数の比較',
      '試験日までの残り日数のカウントダウン',
      'テスト成績へのコメント機能',
    ],
    challenges: [
    ],
  },
];
