/**
 * 経歴情報
 */
import amerciStockManagerImage from '@/assets/career/amerci_stockManager.jpeg';

export interface Career {
  id: string;
  company: string;
  period: string;
  description: string; // 一覧ページで表示する簡潔な説明
  techStack?: string[];
  featured?: boolean; // 注目経歴フラグ
  // 詳細ページ専用の項目
  detailedContentFile?: string; // Markdownファイル名 (例: 'amerci.md')
  icon?: string; // アイコン画像のパス
  images?: { [key: string]: string }; // 詳細ページで使用する画像
}

export const careers: Career[] = [
  {
    id: 'starup',
    company: '株式会社STARUP',
    period: '2025年9月 - 現在',
    description:
      'Webフロントエンドエンジニアとして、受託開発と自社SaaS（設計図管理アプリ）を展開する企業にてインターンシップを経験中。実務を通して、未経験であったReact, Next.js, TypeScriptを基礎から実践的に習得しました。設計図管理アプリの品質向上に繋がるバグ修正や機能改善を担当し、自走して学ぶ姿勢と迅速なアウトプットでチームに貢献しています。',
    techStack: ['React', 'Next.js', 'GitHub', 'Slack', 'Notion', 'Claude Code'],
    // detailedContentFile: 'starup.md',

  },
  {
    id: 'teamlab',
    company: '株式会社チームラボ',
    period: '2025年8月18日 - 2025年8月29日',
    description:
      'Flutterエンジニアとして2週間のインターンシップを経験し、未リリースのSNSアプリ開発に参加。お知らせ表示画面の開発を、データ層・ドメイン層の実装からUI実装まで一貫して担当しました。技術的制約のあるUI実装では、エンジニアリング的な解決策だけでなく、デザイナーと直接対話し仕様を見直すことで、双方にとって最適な解決策を導き出しました。この経験を通じ、Atomic Designやテスト手法など、保守性と品質を重視した開発プロセスの重要性も深く学びました。',
    techStack: ['Flutter', 'Dart', 'GitHub', 'Slack', 'Figma','Swagger'],
    detailedContentFile: 'teamlab.md',
  },
  {
    id: 'gonmura',
    company: '株式会社Gonmura',
    period: '2025年2月 - 2025年7月',
    description:
      'Flutter受託開発会社にてインターンシップを経験。1.5ヶ月の研修でRiverpodやMVCなどを学んだ後、実務としてマッチングアプリのWeb管理画面開発に参加。ワイヤーフレーム作成から実装までを一貫して担当し、UI設計やデータモデリングのスキルを深めました。さらに、既存機能の課題を発見し、「よくある質問」機能のFirebaseデータ構造の変更を自ら提案・実装。非効率な更新プロセスを改善し、運用効率とメンテナンス性を大幅に向上させチームに貢献。',
    techStack: ['Flutter', 'Dart', 'GitHub', 'Slack', 'Firebase', 'Supabase', 'Figma', 'Cursor', 'Claude Code'],
    detailedContentFile: 'gonmura.md',
    featured: true,
  },
  {
    id: 'nagase',
    company: '株式会社ナガセ',
    period: '2024年1月 - 2025年2月',
    description:
            '東進などの映像授業を提供する企業の社会人向け部門にて、大学生のみで構成されるシステム開発チームに所属。Django製のデータ登録アプリ開発では、初のWeb開発ながらバックエンド処理を実装し、自走して技術を習得。また、PythonとAWS Lambdaを用いたアンケートレポートのバッチ処理開発では、月次実行のみだった仕様に対し、臨時依頼の多さから任意実行できる機能拡張を自ら提案・実装。さらに操作手順をドキュメント化し、チーム全体の業務効率化に貢献。',
    techStack: ['Python', 'Django', 'AWS', 'Slack', 'Backlog', 'GitHub'],
    detailedContentFile: 'nagase.md',
  },
  {
    id: 'Amerci',
    company: 'Amerci',
    period: '2022年12月 - 現在',
    description:
      'アルバイト先の食品・雑貨販売店「Amerci」のExcel/VBA製レジ・在庫管理システムを、業務効率化とミス削減のため改良。VBAとExcel関数、Python、BASE API、Outlookを組み合わせ、発注書作成の半自動化、納品時QRコード発行の全自動化（3分→30秒）、BASE在庫のリアルタイム自動連携、賞味期限管理・自動割引適用などを実現。手作業を大幅に削減し、在庫管理精度や業務効率、保守性を向上。',
    techStack: ['VBA', 'Excel', 'Python', 'Power Automate', 'PyAutoGUI'],
    detailedContentFile: 'amerci.md',
    featured: true,
    images: {
      stockManager: amerciStockManagerImage,
    },
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
