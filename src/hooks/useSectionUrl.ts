import { useState, useEffect, useCallback, useRef } from 'react';

// 定数定義
const USER_NAVIGATION_RESET_DELAY = 1000; // ユーザーナビゲーションフラグリセット時間(ms)
const SYSTEM_URL_UPDATE_RESET_DELAY = 100; // システムURL更新フラグリセット時間(ms)

export interface UseSectionUrlOptions {
  /** セクションIDの配列 */
  sectionIds: string[];
  /** 現在のアクティブセクション */
  activeSection: string;
}

/**
 * URLハッシュを更新するヘルパー関数
 */
const updateUrlHash = (sectionId: string, sectionIds: string[]): void => {
  if (sectionId === sectionIds[0]) {
    window.history.pushState(null, '', window.location.pathname);
  } else {
    window.history.pushState(null, '', `#${sectionId}`);
  }
};

/**
 * スクロール動作の種類
 */
type ScrollBehavior = 'smooth' | 'auto';

/**
 * セクションにスクロールするヘルパー関数
 * prefers-reduced-motionユーザー設定を考慮したスクロール動作
 */
const scrollToSection = (sectionId: string, behavior: ScrollBehavior = 'smooth'): boolean => {
  const element = document.getElementById(sectionId);
  if (element) {
    // prefers-reduced-motionが有効な場合は即座にスクロール
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finalBehavior = prefersReducedMotion ? 'auto' : behavior;
    
    element.scrollIntoView({ behavior: finalBehavior, block: 'start' });
    return true;
  }
  console.warn(`[useSectionUrl] Section element not found: ${sectionId}`);
  return false;
};

/**
 * セクションURLの管理とハッシュナビゲーションを担当するカスタムフック
 * 
 * - ヘッダーのアクティブ表示と同じタイミングでURLハッシュを更新
 * - システムがURL更新した場合はフラグで制御してスクロール処理をスキップ
 * 
 * @param options - セクション管理のオプション
 * @returns セクション管理に必要な関数群
 */
export const useSectionUrl = (options: UseSectionUrlOptions) => {
  const { sectionIds, activeSection } = options;
  const [isUserInitiated, setIsUserInitiated] = useState(false);
  const isSystemUrlUpdateRef = useRef(false);
  const isUserInitiatedRef = useRef(false);
  const sectionIdsRef = useRef(sectionIds);
  const previousActiveSectionRef = useRef<string>('');

  // refs を最新の値で同期
  useEffect(() => {
    isUserInitiatedRef.current = isUserInitiated;
    sectionIdsRef.current = sectionIds;
  });

  /**
   * ユーザーが意図的にセクションに移動（ナビゲーションクリック）
   * 
   * @param sectionId - 移動先のセクションID
   * @returns void
   * 
   * @example
   * ```typescript
   * const { navigateToSection } = useSectionUrl({ sectionIds, activeSection });
   * navigateToSection('about'); // aboutセクションにスムーズスクロール
   * ```
   */
  const navigateToSection = useCallback((sectionId: string) => {
    if (!sectionIds.includes(sectionId)) return;

    setIsUserInitiated(true);
    
    // URLハッシュを更新
    updateUrlHash(sectionId, sectionIds);

    // セクションにスムーズスクロール
    scrollToSection(sectionId, 'smooth');

    // 遅延してフラグをリセット
    setTimeout(() => {
      setIsUserInitiated(false);
    }, USER_NAVIGATION_RESET_DELAY);
  }, [sectionIds]);

  /**
   * アクティブセクションの変更でURL更新
   */
  useEffect(() => {
    if (isUserInitiated || activeSection === previousActiveSectionRef.current) {
      return;
    }

    if (activeSection) {
      const currentHash = window.location.hash.slice(1);
      const newHash = activeSection === sectionIds[0] ? '' : activeSection;

      if (currentHash !== newHash) {
        isSystemUrlUpdateRef.current = true;
        
        if (newHash) {
          window.history.replaceState(null, '', `#${newHash}`);
        } else {
          window.history.replaceState(null, '', window.location.pathname);
        }
        
        // 少し後にフラグをリセット
        setTimeout(() => {
          isSystemUrlUpdateRef.current = false;
        }, SYSTEM_URL_UPDATE_RESET_DELAY);
      }
    }
    
    previousActiveSectionRef.current = activeSection;
  }, [activeSection, sectionIds, isUserInitiated]);

  /**
   * 外部からのURL変更を処理
   */
  useEffect(() => {
    const handleUrlChange = () => {
      if (isUserInitiatedRef.current || isSystemUrlUpdateRef.current) {
        return;
      }

      const hash = window.location.hash.slice(1);
      const targetSection = hash || sectionIdsRef.current[0] || '';

      if (targetSection && sectionIdsRef.current.includes(targetSection)) {
        scrollToSection(targetSection, 'auto');
      }
    };

    // 初回処理
    handleUrlChange();

    // イベントリスナー
    const handlePopState = () => handleUrlChange();
    const handleHashChange = () => handleUrlChange();

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // 空の依存配列で一度だけ実行

  return {
    navigateToSection,
    isUserInitiated,
  };
};