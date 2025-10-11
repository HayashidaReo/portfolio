import React, { useState } from 'react';
import { getDeviconUrl } from '@/utils/devicon';

interface TechIconProps {
  techName: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const sizeMap = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

/**
 * 技術スタックのアイコンを表示するAtomコンポーネント
 */
export const TechIcon: React.FC<TechIconProps> = ({
  techName,
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [attemptedFallback, setAttemptedFallback] = useState(false);
  const iconUrl = getDeviconUrl(techName);
  const sizeClass = sizeMap[size];

  // ラベルがある場合はコンテナスタイルを適用、ない場合はアイコンのみ
  const containerClass = showLabel
    ? `inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50 hover:bg-secondary transition-colors border border-border/50 ${className}`
    : `inline-flex items-center ${className}`;

  // 画像が読み込めない場合は何も表示しない
  if (!imageLoaded) {
    return showLabel ? (
      <div className={containerClass}>
        <span className="text-sm font-medium text-foreground">{techName}</span>
      </div>
    ) : null;
  }

  return (
    <div className={containerClass}>
      <img
        src={iconUrl}
        alt={`${techName} icon`}
        className={`${sizeClass} object-contain`}
        onError={(e) => {
          // アイコンの読み込みに失敗した場合のフォールバック処理
          const target = e.target as HTMLImageElement;
          const currentSrc = target.src;

          if (!attemptedFallback) {
            // 最初のエラー: フォールバックを試行
            setAttemptedFallback(true);

            // original -> plain へのフォールバック
            if (currentSrc.includes('-original.svg')) {
              target.src = currentSrc.replace('-original.svg', '-plain.svg');
            }
            // plain-wordmark -> plain へのフォールバック
            else if (currentSrc.includes('-plain-wordmark.svg')) {
              target.src = currentSrc.replace('-plain-wordmark.svg', '-plain.svg');
            } else {
              // フォールバックできない場合は非表示
              setImageLoaded(false);
            }
          } else {
            // フォールバックも失敗した場合は非表示
            setImageLoaded(false);
          }
        }}
      />
      {showLabel && (
        <span className="text-sm font-medium text-foreground">{techName}</span>
      )}
    </div>
  );
};
