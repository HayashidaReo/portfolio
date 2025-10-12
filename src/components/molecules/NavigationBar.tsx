import React from 'react';
import { NavigationLink } from '@/components/atoms';
import type { NavigationItem } from '@/types';

interface NavigationBarProps {
  /** ナビゲーション項目の配列 */
  items: NavigationItem[];
  /** 現在アクティブなセクションのID */
  activeSection?: string;
  /** ナビゲーション項目クリック時のハンドラー */
  onItemClick: (targetId: string) => void;
}

/**
 * ナビゲーションバーのMoleculeコンポーネント
 * 
 * 役割:
 * - 複数のNavigationLinkを組み合わせてナビゲーションバーを構成
 * - レスポンシブデザインに対応
 * - アクティブ状態の管理
 */
export const NavigationBar: React.FC<NavigationBarProps> = ({
  items,
  activeSection,
  onItemClick,
}) => {
  return (
    <nav 
      className="hidden md:flex"
      role="navigation"
      aria-label="メインナビゲーション"
    >
      <ul className="flex space-x-2">
        {items.map((item) => (
          <li key={item.targetId}>
            <NavigationLink
              item={item}
              isActive={activeSection === item.targetId}
              onClick={onItemClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};