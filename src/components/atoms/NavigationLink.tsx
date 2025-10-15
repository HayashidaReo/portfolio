import React from 'react';
import type { NavigationItem } from '@/types';

interface NavigationLinkProps {
  /** ナビゲーション項目のデータ */
  item: NavigationItem;
  /** アクティブ状態かどうか */
  isActive?: boolean;
  /** クリック時のハンドラー */
  onClick: (targetId: string) => void;
}

/**
 * ナビゲーションリンクのAtomコンポーネント
 * 
 * 役割:
 * - 単一のナビゲーション項目を表示
 * - スムーズスクロールのトリガー
 * - アクティブ状態の表示
 */
export const NavigationLink: React.FC<NavigationLinkProps> = ({
  item,
  isActive = false,
  onClick,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(item.targetId);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={item.ariaLabel || `${item.label}セクションへ移動`}
      aria-current={isActive ? 'page' : undefined}
      className={`
        relative w-full text-left px-4 py-3 md:py-2 text-base md:text-sm font-medium
        transition-all duration-300 ease-in-out
        hover:text-blue-600 hover:bg-blue-50 md:hover:bg-transparent
        focus:outline-none
        rounded-md md:rounded-none
        ${isActive
          ? 'text-blue-600 bg-blue-100 md:bg-transparent font-semibold'
          : 'text-gray-700 hover:text-blue-600'
        }
      `}
    >
      {item.label}
      {/* デスクトップ用のアクティブインディケーター */}
      {isActive && (
        <span className="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
      )}
    </button>
  );
};