import React from 'react';
import { Spinner } from '@/components/atoms';

/**
 * LoadingScreen - ローディング画面 (Molecule)
 *
 * SpinnerとメッセージテキストをレイアウトしたローディングUI。
 * 単一の機能単位として、中央寄せレイアウトでローディング状態を表現します。
 */

interface LoadingScreenProps {
  /** 表示するメッセージ */
  message?: string;
  /** スピナーのサイズ */
  spinnerSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** カスタムクラス名 */
  className?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = '読み込み中...',
  spinnerSize = 'lg',
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Spinner size={spinnerSize} />
        </div>
        <p className="text-muted-foreground text-lg">{message}</p>
      </div>
    </div>
  );
};
