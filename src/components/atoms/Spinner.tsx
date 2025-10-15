import React from 'react';

/**
 * Spinner - ローディングインジケーター (Atom)
 *
 * 最小単位のUI要素として、回転するスピナーを表示します。
 * サイズをpropsで制御可能で、さまざまな場所で再利用できます。
 */

interface SpinnerProps {
  /** スピナーのサイズ */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** カスタムクラス名 */
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 border-2',
  md: 'w-12 h-12 border-3',
  lg: 'w-16 h-16 border-4',
  xl: 'w-20 h-20 border-4',
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  className = ''
}) => {
  return (
    <div
      className={`
        ${sizeClasses[size]}
        border-primary
        border-t-transparent
        rounded-full
        animate-spin
        ${className}
      `}
      role="status"
      aria-label="読み込み中"
    />
  );
};
