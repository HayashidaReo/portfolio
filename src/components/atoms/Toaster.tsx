import React from 'react';
import { ToastContainer } from './ToastContainer';
import { useToast } from '@/hooks';

/**
 * アプリ全体のToast表示を管理するコンポーネント
 * App.tsxのルートレベルに配置して使用する
 */
export const Toaster: React.FC = () => {
  const { toasts, dismiss } = useToast();

  return <ToastContainer toasts={toasts} onDismiss={dismiss} />;
};
