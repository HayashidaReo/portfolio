import React, { useState } from 'react';
import { NavigationLink } from '@/components/atoms';
import { Menu, X } from 'lucide-react';
import type { NavigationItem } from '@/types';

interface MobileNavigationProps {
  /** ナビゲーション項目の配列 */
  items: NavigationItem[];
  /** 現在アクティブなセクションのID */
  activeSection?: string;
  /** ナビゲーション項目クリック時のハンドラー */
  onItemClick: (targetId: string) => void;
}

/**
 * モバイル用ナビゲーションのMoleculeコンポーネント
 * 
 * 役割:
 * - ハンバーガーメニューの表示/非表示制御
 * - モバイルデバイスでの操作性を考慮したUI
 * - メニューオープン時のオーバーレイ表示
 */
export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  items,
  activeSection,
  onItemClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (targetId: string) => {
    onItemClick(targetId);
    setIsMenuOpen(false); // メニューを閉じる
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden">
      {/* ハンバーガーメニューボタン */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* オーバーレイ */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* モバイルメニュー */}
      <nav
        className={`
          fixed top-16 right-0 z-50 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="navigation"
        aria-label="モバイルナビゲーション"
      >
        <div className="px-4 py-6">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.targetId}>
                <div className="block">
                  <NavigationLink
                    item={item}
                    isActive={activeSection === item.targetId}
                    onClick={handleItemClick}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};