/**
 * 技術名からDeviconのURLを生成する
 * @param techName - 技術名（例: "React", "TypeScript", "Next.js"）
 * @returns DeviconのURL
 */
export const getDeviconUrl = (techName: string): string => {
  // 技術名からDevicon用の名前にマッピング
  const techNameMap: Record<string, string> = {
    'react': 'react',
    'typescript': 'typescript',
    'javascript': 'javascript',
    'vite': 'vitejs',
    'tailwind css': 'tailwindcss',
    'shadcn/ui': 'react', // shadcn/uiはReactベースなのでReactのアイコンを使用
    'next.js': 'nextjs',
    'firebase': 'firebase',
    'zustand': 'react', // Zustandは専用アイコンがないのでReactを使用
    'flutter': 'flutter',
    'dart': 'dart',
    'openweather api': 'openweathermap',
    'node.js': 'nodejs',
    'express': 'express',
    'mongodb': 'mongodb',
    'postgresql': 'postgresql',
    'mysql': 'mysql',
    'python': 'python',
    'django': 'django',
    'flask': 'flask',
    'vue.js': 'vuejs',
    'angular': 'angularjs',
    'svelte': 'svelte',
    'docker': 'docker',
    'kubernetes': 'kubernetes',
    'aws': 'amazonwebservices',
    'gcp': 'googlecloud',
    'azure': 'azure',
    'vercel': 'vercel',
    'git': 'git',
    'github': 'github',
    'gitlab': 'gitlab',
    'figma': 'figma',
    'graphql': 'graphql',
    'redux': 'redux',
    'sass': 'sass',
    'webpack': 'webpack',
  };

  const normalizedName = techName.toLowerCase().trim();
  const iconName = techNameMap[normalizedName] || normalizedName.replace(/\s+/g, '');

  // Deviconは複数のバリエーションがあるが、original を優先して使用
  // もしoriginalがない場合はplainにフォールバック
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`;
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
