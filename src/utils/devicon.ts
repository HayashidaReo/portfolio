/**
 * 技術名からDeviconのURLを生成する
 * @param techName - 技術名（例: "React", "TypeScript", "Next.js"）
 * @returns DeviconのURL
 */
export const getDeviconUrl = (techName: string): string => {
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
    'flutter': { name: 'flutter' },
    'django': { name: 'django' },
    'flask': { name: 'flask' },
    'vue.js': { name: 'vuejs' },
    'angular': { name: 'angularjs' },
    'svelte': { name: 'svelte' },
    'express': { name: 'express' },

    // Infrastructure / Cloud
    'firebase': { name: 'firebase' },
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

    // UI/UX
    'ui/ux design': { name: 'figma' },
    'web performance': { name: 'chrome' },
    'accessibility': { name: 'html5' },
  };

  const normalizedName = techName.toLowerCase().trim();
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
