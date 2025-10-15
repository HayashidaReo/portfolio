import React from 'react';

/**
 * FeaturedRibbon - 「注目」リボンコンポーネント
 *
 * ProjectCardやCareerCardで「featured」フラグが立っている場合に表示される
 * 左上に斜めに配置される赤いリボン
 *
 * Atoms層のコンポーネントとして、単一の視覚的要素を担当
 */
export const FeaturedRibbon: React.FC = () => (
  <div className="absolute top-0 left-0 z-10 overflow-hidden w-16 h-16">
    <div className="absolute transform -rotate-45 bg-red-600 text-white text-center font-semibold py-1 left-[-24px] top-[6px] w-[80px] shadow-md text-xs">
      注目
    </div>
  </div>
);
