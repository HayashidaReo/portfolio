/**
 * Careerインターフェース
 * ポートフォリオに掲載する経歴の型定義
 */
export interface Career {
  /** 経歴の一意なID */
  id: string;
  /** 会社名 */
  company: string;
  /** 在籍期間 */
  period: string;
  /** 一覧ページで表示する簡潔な説明 */
  description: string;
  /** 使用技術スタック */
  techStack?: string[];
  /** 注目経歴フラグ */
  featured?: boolean;

  // 詳細ページ専用の項目
  /** Markdownファイル名 (例: 'amerci.md') */
  detailedContentFile?: string;
  /** アイコン画像のパス */
  icon?: string;
  /** 詳細ページで使用する画像（キー: 画像URL） */
  images?: { [key: string]: string };
}
