import type { NavigationItem } from '@/types';

/**
 * ヘッダーナビゲーションの項目定義
 * 各項目はポートフォリオサイトの主要セクションに対応
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'About',
    targetId: 'about',
    ariaLabel: '自己紹介セクションへ移動',
  },
  {
    label: 'Skills',
    targetId: 'skills',
    ariaLabel: 'スキルセクションへ移動',
  },
  {
    label: 'Works',
    targetId: 'works',
    ariaLabel: '制作実績セクションへ移動',
  },
  {
    label: 'Career',
    targetId: 'career',
    ariaLabel: '経歴セクションへ移動',
  },
  {
    label: 'Social',
    targetId: 'social',
    ariaLabel: 'SNS・ブログセクションへ移動',
  },
  {
    label: 'Contact',
    targetId: 'contact',
    ariaLabel: 'お問い合わせセクションへ移動',
  },
] as const;