import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToItemOptions {
  /** 遅延時間（ms）- DOMがレンダリングされるのを待つ */
  delay?: number;
}

/**
 * useScrollToItem - 詳細画面から戻る際に特定の項目までスクロールするカスタムフック
 * 
 * React Router stateから受け取ったプロジェクトIDや経歴IDを基に、
 * 該当する項目の位置までスムーズにスクロールします。
 * prefers-reduced-motionも考慮します。
 * 
 * @param options - スクロール動作のオプション
 */
export const useScrollToItem = (options: ScrollToItemOptions = {}) => {
  const { delay = 100 } = options;
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { 
      scrollToProject?: string; 
      scrollToCareer?: string; 
    } | null;

    if (!state) return;

    const { scrollToProject, scrollToCareer } = state;
    let targetElementId: string | null = null;

    if (scrollToProject) {
      targetElementId = `project-${scrollToProject}`;
    } else if (scrollToCareer) {
      targetElementId = `career-${scrollToCareer}`;
    }

    if (!targetElementId) return;

    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetElementId!);
      if (targetElement) {
        // prefers-reduced-motionが有効な場合は即座にスクロール
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const behavior = prefersReducedMotion ? 'auto' : 'smooth';
        
        // ヘッダーの高さを考慮したオフセット
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: behavior as ScrollBehavior
        });

        // stateをクリアして再実行を防ぐ
        window.history.replaceState({}, document.title, location.pathname + location.hash);
      }
    };

    // 少し遅延してスクロール（DOMの準備完了を待つ）
    const timeoutId = setTimeout(scrollToTarget, delay);

    return () => clearTimeout(timeoutId);
  }, [location.state, location.pathname, location.hash, delay]);
};