// カスタムSVGアイコンのimport
import admobIcon from '@/assets/icon/admob.svg';
import backlogIcon from '@/assets/icon/backlog.svg';
import claudeIcon from '@/assets/icon/claude.svg';
import cursorIcon from '@/assets/icon/cursor.svg';
import excelIcon from '@/assets/icon/excel.svg';
import gameCenterIcon from '@/assets/icon/gameCenter.svg';
import googleMapIcon from '@/assets/icon/googleMap.svg';
import powerAutomateIcon from '@/assets/icon/powerAutomate.svg';
import qiitaIcon from '@/assets/icon/qiita.svg';
import riverpodIcon from '@/assets/icon/riverpod.svg';
import storekitIcon from '@/assets/icon/storekit.svg';
import uikitIcon from '@/assets/icon/uikit.svg';
import xIcon from '@/assets/icon/x.svg';
import sendGrid from '@/assets/icon/sendGrid.svg';
import gemini from '@/assets/icon/gemini.svg';
import dexieJs from '@/assets/icon/dexiejs.svg';
import antigravity from '@/assets/icon/antigravity.svg';


/**
 * 技術名からDeviconのURLを生成する
 * @param techName - 技術名（例: "React", "TypeScript", "Next.js"）
 * @returns DeviconのURL
 */
export const getDeviconUrl = (techName: string): string => {
  // カスタムSVGアイコンのマッピング(全て小文字)
  const customIconMap: Record<string, string> = {
    'google admob': admobIcon,
    'backlog': backlogIcon,
    'claude code': claudeIcon,
    'cursor': cursorIcon,
    'excel': excelIcon,
    'game center': gameCenterIcon,
    'google maps api': googleMapIcon,
    'power automate': powerAutomateIcon,
    'qiita': qiitaIcon,
    'riverpod': riverpodIcon,
    'storekit': storekitIcon,
    'store kit': storekitIcon,
    'uikit': uikitIcon,
    'x': xIcon,
    'twitter': xIcon,
    'sendgrid': sendGrid,
    'gemini api': gemini,
    'gemini': gemini,
    'dexie.js': dexieJs,
    'antigravity': antigravity,
  };

  const normalizedName = techName.toLowerCase().trim();

  // カスタムアイコンが存在する場合はそれを返す
  if (customIconMap[normalizedName]) {
    return customIconMap[normalizedName];
  }

  // 技術名からDevicon用の名前とバリエーションにマッピング
  const techNameMap: Record<string, { name: string; variant?: string }> = {
    // Languages
    'react': { name: 'react' },
    'typescript': { name: 'typescript' },
    'javascript': { name: 'javascript' },
    'python': { name: 'python' },
    'dart': { name: 'dart' },
    'c++': { name: 'cplusplus' },
    'c#': { name: 'csharp' },
    'swift': { name: 'swift' },
    'vba': { name: 'visualbasic' },
    'visual basic': { name: 'visualbasic' },

    // Frameworks / Libraries
    'vite': { name: 'vitejs' },
    'tailwind css': { name: 'tailwindcss' },
    'shadcn/ui': { name: 'react' },
    'next.js': { name: 'nextjs' },
    'zustand': { name: 'react' },
    'tanstack query': { name: 'react' },
    'flutter': { name: 'flutter' },
    'django': { name: 'django' },
    'flask': { name: 'flask' },
    'pyautogui': { name: 'python' },
    'vue.js': { name: 'vuejs' },
    'angular': { name: 'angularjs' },
    'svelte': { name: 'svelte' },
    'express': { name: 'express' },
    'in app purchase': { name: 'dart' },
    'gorouter': { name: 'dart' },
    'freezed': { name: 'dart' },



    // Infrastructure / Cloud
    'firebase': { name: 'firebase' },
    'firestore': { name: 'firebase' },
    'realtime db': { name: 'firebase' },
    'functions': { name: 'firebase' },
    'authentication': { name: 'firebase' },
    'storage': { name: 'firebase' },
    'supabase': { name: 'supabase' },
    'docker': { name: 'docker' },
    'kubernetes': { name: 'kubernetes' },
    'aws': { name: 'amazonwebservices', variant: 'plain-wordmark' },
    'gcp': { name: 'googlecloud' },
    'azure': { name: 'azure' },
    'vercel': { name: 'vercel' },

    // Tools
    'git': { name: 'git' },
    'github': { name: 'github' },
    'github api': { name: 'github' },
    'gitlab': { name: 'gitlab' },
    'figma': { name: 'figma' },
    'slack': { name: 'slack' },
    'notion': { name: 'notion' },
    'vscode': { name: 'vscode' },

    // Other
    'openweather api': { name: 'openweathermap' },
    'node.js': { name: 'nodejs' },
    'mongodb': { name: 'mongodb' },
    'postgresql': { name: 'postgresql' },
    'mysql': { name: 'mysql' },
    'graphql': { name: 'graphql' },
    'redux': { name: 'redux' },
    'sass': { name: 'sass' },
    'webpack': { name: 'webpack' },
    'presentation api': { name: 'html5' },

    // UI/UX
    'ui/ux design': { name: 'figma' },
    'web performance': { name: 'chrome' },
    'accessibility': { name: 'html5' },
  };

  const config = techNameMap[normalizedName] || {
    name: normalizedName.replace(/\s+/g, ''),
  };

  const iconName = config.name;
  const variant = config.variant || 'original';

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-${variant}.svg`;
};

/**
 * 技術名の配列からDeviconのURLの配列を生成する
 * @param techStack - 技術名の配列
 * @returns DeviconのURLと技術名のペアの配列
 */
export const getTechStackIcons = (
  techStack: string[]
): Array<{ name: string; iconUrl: string }> => {
  return techStack.map((tech) => ({
    name: tech,
    iconUrl: getDeviconUrl(tech),
  }));
};
