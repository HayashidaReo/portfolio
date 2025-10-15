import React from 'react';
import { Toast } from './Toast';
import type { ToastState } from '@/hooks/useToast';

export interface ToastContainerProps {
  toasts: ToastState[];
  onDismiss: (id: string) => void;
}

/**
 * 複数のToastを管理・表示するコンテナコンポーネント
 */
export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onDismiss,
}) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 pointer-events-none">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          title={toast.title}
          description={toast.description}
          onClose={() => onDismiss(toast.id)}
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
