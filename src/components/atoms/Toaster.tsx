import React from 'react';
import { Toast } from './Toast';
import { useToast } from '@/hooks';

/**
 * アプリ全体のToast表示を管理するコンポーネント
 * App.tsxのルートレベルに配置して使用する
 */
export const Toaster: React.FC = () => {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 pointer-events-none">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          title={toast.title}
          description={toast.description}
          onClose={() => dismiss(toast.id)}
          className={
            toast.visible
              ? 'animate-in slide-in-from-bottom-5'
              : 'animate-out slide-out-to-bottom-5'
          }
        />
      ))}
    </div>
  );
};
