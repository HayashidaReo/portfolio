/**
 * Projectインターフェース
 * ポートフォリオに掲載するプロジェクトの型定義
 */
export interface Project {
  /** プロジェクトの一意なID */
  id: string;
  /** プロジェクト名 */
  title: string;
  /** 制作期間 */
  period: string;
  /** 一覧ページで表示する簡潔な概要 */
  summary: string;
  /** 使用技術スタック */
  techStack: string[];
  /** アイコン画像のパス */
  icon?: string;
  /** GitHubリポジトリのURL */
  githubUrl?: string;
  /** 公開しているサイトやストアのURL */
  projectUrl?: string;
  /** 注目プロジェクトフラグ */
  featured?: boolean;

  // 詳細ページ専用の項目
  /** Markdownファイル名 (例: 'portfolio-website.md') */
  detailedContentFile?: string;
  /** スクリーンショット画像のパスの配列 */
  screenshots?: string[];
  /** 詳細ページで使用する画像（キー: 画像URL） */
  images?: { [key: string]: string };
}
