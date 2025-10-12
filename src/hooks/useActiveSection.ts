import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseActiveSectionOptions {
  /** セクションIDの配列 */
  sectionIds: string[];
  /** 検知範囲のオフセット（px）デフォルト: 100 */
  offset?: number;
  /** スクロールイベントのスロットリング間隔（ms）デフォルト: 16 */
  throttleMs?: number;
}

/**
 * 現在表示されているセクションを検知するカスタムフック
 * 
 * IntersectionObserver APIとスクロール位置の計算を組み合わせて、
 * より正確にアクティブセクションを判定します。
 * 複数のセクションが表示されている場合は、より多く表示されているセクションを優先します。
 * 
 * @param options - セクション検知のオプション
 * @returns 現在アクティブなセクションのID
 */
export const useActiveSection = (options: UseActiveSectionOptions) => {
  const { sectionIds, offset = 100, throttleMs = 16 } = options;
  const [activeSection, setActiveSection] = useState<string>('');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const throttleTimeoutRef = useRef<number | null>(null);

  // スクロール位置から最も適切なアクティブセクションを計算
  const calculateActiveSection = useCallback(() => {
    if (visibleSections.size === 0) return '';
    if (visibleSections.size === 1) return Array.from(visibleSections)[0];

    // 複数のセクションが表示されている場合、スクロール位置から判定
    let bestSection = '';
    let bestScore = -1;

    Array.from(visibleSections).forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const headerHeight = offset;

      // セクションの可視部分を計算
      const visibleTop = Math.max(rect.top, headerHeight);
      const visibleBottom = Math.min(rect.bottom, viewportHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
      // スコア計算（可視部分の割合 + 画面中央に近いほど高スコア）
      const totalHeight = rect.height;
      const visibilityRatio = visibleHeight / totalHeight;
      
      // 画面中央からの距離を考慮したボーナススコア
      const sectionCenter = (visibleTop + visibleBottom) / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
      const centerBonus = 1 - (distanceFromCenter / viewportCenter);
      
      const score = visibilityRatio * 0.7 + centerBonus * 0.3;

      if (score > bestScore) {
        bestScore = score;
        bestSection = sectionId;
      }
    });

    return bestSection;
  }, [visibleSections, offset]);

  // スロットル付きのアクティブセクション更新
  const updateActiveSection = useCallback(() => {
    if (throttleTimeoutRef.current) {
      clearTimeout(throttleTimeoutRef.current);
    }

    throttleTimeoutRef.current = setTimeout(() => {
      const newActiveSection = calculateActiveSection();
      if (newActiveSection && newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    }, throttleMs);
  }, [calculateActiveSection, activeSection, throttleMs]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // 各セクションに対してIntersectionObserverを設定
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setVisibleSections((prev) => {
                const newSet = new Set(prev);
                if (entry.isIntersecting) {
                  newSet.add(entry.target.id);
                } else {
                  newSet.delete(entry.target.id);
                }
                return newSet;
              });
            });
          },
          {
            // ルートマージンを設定（ヘッダーの高さを考慮）
            rootMargin: `-${offset - 1}px 0px 0px 0px`,
            threshold: [0, 0.25, 0.5, 0.75, 1.0], // より細かい検知
          }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    // 初期アクティブセクションの設定（少し遅延させて確実に要素が読み込まれるのを待つ）
    const initializeActiveSection = () => {
      if (sectionIds.length > 0) {
        // 現在のスクロール位置から最適なセクションを判定
        let closestSection = sectionIds[0];
        let minDistance = Infinity;

        sectionIds.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - offset);
            
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = sectionId;
            }
          }
        });

        setActiveSection(closestSection);
      }
    };

    // 初期化を少し遅延実行
    const initTimeout = setTimeout(initializeActiveSection, 100);
    
    // 即座にも実行（フォールバック）
    initializeActiveSection();

    // クリーンアップ関数
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
      clearTimeout(initTimeout);
    };
  }, [sectionIds, offset, calculateActiveSection]);

  // 可視セクションが変更されたときにアクティブセクションを更新
  useEffect(() => {
    updateActiveSection();
  }, [visibleSections, updateActiveSection]);

  // スクロールイベントリスナーを追加して、より細かい制御を行う
  useEffect(() => {
    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateActiveSection]);

  return activeSection;
};