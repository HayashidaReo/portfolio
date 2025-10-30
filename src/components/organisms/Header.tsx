import React from 'react';
import { NavigationBar, MobileNavigation } from '@/components/molecules';
import { useActiveSection, useSectionUrl } from '@/hooks';
import { NAVIGATION_ITEMS } from '@/constants';

export const Header: React.FC = () => {
  // 全ナビゲーション項目のIDを抽出
  const sectionIds = NAVIGATION_ITEMS.map((item) => item.targetId);
  
  // 現在アクティブなセクションを検知
  const activeSection = useActiveSection({
    sectionIds,
    offset: 4, // ヘッダーの高さに合わせる
    throttleMs: 16, // 60FPSでスムーズな更新
  });

  // セクションURL管理（URLハッシュとの同期）
  const { navigateToSection } = useSectionUrl({
    sectionIds,
    activeSection,
  });

  const handleNavigationClick = (targetId: string) => {
    // URL管理機能を使用（URLハッシュ更新 + スムーズスクロール）
    navigateToSection(targetId);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* ロゴエリア */}
            <div className="flex-shrink-0">
              <button
                onClick={() => navigateToSection('about')}
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
                aria-label="ページトップへ戻る"
              >
                Portfolio
              </button>
            </div>

            {/* ナビゲーションエリア */}
            <NavigationBar
              items={NAVIGATION_ITEMS}
              activeSection={activeSection}
              onItemClick={handleNavigationClick}
            />

            {/* モバイルナビゲーション */}
            <MobileNavigation
              items={NAVIGATION_ITEMS}
              activeSection={activeSection}
              onItemClick={handleNavigationClick}
            />
          </div>
        </div>
      </header>
    </>
  );
};
