/**
 * ナビゲーション関連の型定義
 */

export interface NavigationItem {
  /** ナビゲーション項目のラベル */
  label: string;
  /** スクロール先の要素ID（#は含まない） */
  targetId: string;
  /** アクセシビリティ用のaria-label（任意） */
  ariaLabel?: string;
}

export interface NavigationProps {
  /** ナビゲーション項目の配列 */
  items: NavigationItem[];
  /** 現在アクティブなセクションのID（任意） */
  activeSection?: string;
  /** ナビゲーション項目がクリックされた時のコールバック */
  onItemClick?: (targetId: string) => void;
}