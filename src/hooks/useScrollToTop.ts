import { useEffect } from 'react';

interface UseScrollToTopOptions {
  /** ページ遷移を監視する依存配列（例: [projectId]） */
  dependencies?: unknown[];
  /** ローディング状態（ローディング完了後にスクロールする） */
  isLoading?: boolean;
}

/**
 * useScrollToTop - ページトップへのスクロールを制御するカスタムフック
 *
 * 【使用用途】
 * - ページ遷移時に自動でページトップへスクロール
 * - データローディング完了後にページトップへスクロール
 *
 * 【使用例】
 * ```tsx
 * // パターン1: ページ遷移時のみ
 * useScrollToTop({ dependencies: [projectId] });
 *
 * // パターン2: ローディング完了時も含める
 * useScrollToTop({ dependencies: [projectId], isLoading });
 * ```
 */
export const useScrollToTop = ({
  dependencies = [],
  isLoading,
}: UseScrollToTopOptions = {}) => {
  // ページ遷移時のスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, dependencies);

  // ローディング完了時のスクロール（isLoadingが指定されている場合のみ）
  useEffect(() => {
    if (isLoading === false) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);
};
