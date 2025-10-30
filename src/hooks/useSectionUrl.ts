import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseSectionUrlOptions {
  /** セクションIDの配列 */
  sectionIds: string[];
  /** 現在のアクティブセクション */
  activeSection: string;
}

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
   */
  const navigateToSection = useCallback((sectionId: string) => {
    if (!sectionIds.includes(sectionId)) return;

    setIsUserInitiated(true);
    
    // URLハッシュを更新
    if (sectionId === sectionIds[0]) {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${sectionId}`);
    }

    // セクションにスムーズスクロール
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 遅延してフラグをリセット
    setTimeout(() => {
      setIsUserInitiated(false);
    }, 1000);
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
        }, 100);
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
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
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