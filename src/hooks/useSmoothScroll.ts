import { useCallback } from 'react';

export interface UseSmoothScrollOptions {
  /** スクロールの継続時間（ms）デフォルト: 800 */
  duration?: number;
  /** イージング関数の種類 デフォルト: 'ease-in-out' */
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  /** ヘッダーの高さなどを考慮したオフセット（px）デフォルト: 80 */
  offset?: number;
}

/**
 * スムーズスクロール機能を提供するカスタムフック
 * 
 * @param options - スクロール動作のオプション
 * @returns scrollToElement - 指定された要素までスムーズにスクロールする関数
 */
export const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const {
    duration = 800,
    easing = 'ease-in-out',
    offset = 80,
  } = options;

  // イージング関数の定義
  const getEasingFunction = useCallback((easingType: string) => {
    switch (easingType) {
      case 'linear':
        return (t: number) => t;
      case 'ease-in':
        return (t: number) => t * t;
      case 'ease-out':
        return (t: number) => t * (2 - t);
      case 'ease-in-out':
        return (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      default:
        return (t: number) => t * (2 - t); // デフォルトはease-out
    }
  }, []);

  const scrollToElement = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) {
      console.warn(`Element with id "${targetId}" not found`);
      return;
    }

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - offset;
    const distance = targetPosition - startPosition;
    const easingFunction = getEasingFunction(easing);
    
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easingFunction(progress);
      
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, [duration, easing, offset, getEasingFunction]);

  return { scrollToElement };
};