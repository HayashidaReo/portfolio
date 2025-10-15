import { describe, it, expect } from 'vitest';
import { getDeviconUrl, getTechStackIcons } from './devicon';

describe('getDeviconUrl', () => {
  describe('カスタムアイコンのテスト', () => {
    it('Google AdMobのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Google AdMob');
      expect(result).toContain('admob.svg');
    });

    it('Backlogのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Backlog');
      expect(result).toContain('backlog.svg');
    });

    it('Claude Codeのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Claude Code');
      expect(result).toContain('claude.svg');
    });

    it('Cursorのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Cursor');
      expect(result).toContain('cursor.svg');
    });

    it('Excelのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Excel');
      expect(result).toContain('excel.svg');
    });

    it('Game Centerのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Game Center');
      expect(result).toContain('gameCenter.svg');
    });

    it('Google Maps APIのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Google Maps API');
      expect(result).toContain('googleMap.svg');
    });

    it('Power Automateのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Power Automate');
      expect(result).toContain('powerAutomate.svg');
    });

    it('Qiitaのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Qiita');
      expect(result).toContain('qiita.svg');
    });

    it('Riverpodのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('Riverpod');
      expect(result).toContain('riverpod.svg');
    });

    it('StoreKitのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('StoreKit');
      expect(result).toContain('storekit.svg');
    });

    it('Store Kitのカスタムアイコンを返す（スペース区切り）', () => {
      const result = getDeviconUrl('Store Kit');
      expect(result).toContain('storekit.svg');
    });

    it('UIKitのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('UIKit');
      expect(result).toContain('uikit.svg');
    });

    it('Xのカスタムアイコンを返す', () => {
      const result = getDeviconUrl('X');
      expect(result).toContain('x.svg');
    });

    it('Twitterのカスタムアイコンを返す（エイリアス）', () => {
      const result = getDeviconUrl('Twitter');
      expect(result).toContain('x.svg');
    });

    it('大文字小文字を区別しない', () => {
      const lowerCase = getDeviconUrl('qiita');
      const upperCase = getDeviconUrl('QIITA');
      const mixedCase = getDeviconUrl('QiItA');
      expect(lowerCase).toBe(upperCase);
      expect(lowerCase).toBe(mixedCase);
    });

    it('前後の空白を無視する', () => {
      const result = getDeviconUrl('  Qiita  ');
      expect(result).toContain('qiita.svg');
    });
  });

  describe('プログラミング言語のテスト', () => {
    it('ReactのDeviconURLを返す', () => {
      const result = getDeviconUrl('React');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg');
    });

    it('TypeScriptのDeviconURLを返す', () => {
      const result = getDeviconUrl('TypeScript');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg');
    });

    it('JavaScriptのDeviconURLを返す', () => {
      const result = getDeviconUrl('JavaScript');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg');
    });

    it('PythonのDeviconURLを返す', () => {
      const result = getDeviconUrl('Python');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg');
    });

    it('DartのDeviconURLを返す', () => {
      const result = getDeviconUrl('Dart');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg');
    });

    it('C++のDeviconURLを返す', () => {
      const result = getDeviconUrl('C++');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg');
    });

    it('C#のDeviconURLを返す', () => {
      const result = getDeviconUrl('C#');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg');
    });

    it('SwiftのDeviconURLを返す', () => {
      const result = getDeviconUrl('Swift');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg');
    });

    it('VBAのDeviconURLを返す', () => {
      const result = getDeviconUrl('VBA');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg');
    });

    it('Visual BasicのDeviconURLを返す', () => {
      const result = getDeviconUrl('Visual Basic');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg');
    });
  });

  describe('フレームワーク/ライブラリのテスト', () => {
    it('ViteのDeviconURLを返す', () => {
      const result = getDeviconUrl('Vite');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg');
    });

    it('Tailwind CSSのDeviconURLを返す', () => {
      const result = getDeviconUrl('Tailwind CSS');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg');
    });

    it('shadcn/uiのDeviconURLを返す（Reactのアイコンを使用）', () => {
      const result = getDeviconUrl('shadcn/ui');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg');
    });

    it('Next.jsのDeviconURLを返す', () => {
      const result = getDeviconUrl('Next.js');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg');
    });

    it('ZustandのDeviconURLを返す（Reactのアイコンを使用）', () => {
      const result = getDeviconUrl('Zustand');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg');
    });

    it('FlutterのDeviconURLを返す', () => {
      const result = getDeviconUrl('Flutter');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg');
    });

    it('DjangoのDeviconURLを返す', () => {
      const result = getDeviconUrl('Django');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg');
    });

    it('FlaskのDeviconURLを返す', () => {
      const result = getDeviconUrl('Flask');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg');
    });

    it('Vue.jsのDeviconURLを返す', () => {
      const result = getDeviconUrl('Vue.js');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg');
    });

    it('AngularのDeviconURLを返す', () => {
      const result = getDeviconUrl('Angular');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg');
    });

    it('SvelteのDeviconURLを返す', () => {
      const result = getDeviconUrl('Svelte');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg');
    });

    it('ExpressのDeviconURLを返す', () => {
      const result = getDeviconUrl('Express');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg');
    });
  });

  describe('インフラ/クラウドのテスト', () => {
    it('FirebaseのDeviconURLを返す', () => {
      const result = getDeviconUrl('Firebase');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg');
    });

    it('SupabaseのDeviconURLを返す', () => {
      const result = getDeviconUrl('Supabase');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg');
    });

    it('DockerのDeviconURLを返す', () => {
      const result = getDeviconUrl('Docker');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg');
    });

    it('KubernetesのDeviconURLを返す', () => {
      const result = getDeviconUrl('Kubernetes');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg');
    });

    it('AWSのDeviconURLを返す（カスタムバリアント）', () => {
      const result = getDeviconUrl('AWS');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg');
    });

    it('GCPのDeviconURLを返す', () => {
      const result = getDeviconUrl('GCP');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg');
    });

    it('AzureのDeviconURLを返す', () => {
      const result = getDeviconUrl('Azure');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg');
    });

    it('VercelのDeviconURLを返す', () => {
      const result = getDeviconUrl('Vercel');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg');
    });
  });

  describe('ツールのテスト', () => {
    it('GitのDeviconURLを返す', () => {
      const result = getDeviconUrl('Git');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg');
    });

    it('GitHubのDeviconURLを返す', () => {
      const result = getDeviconUrl('GitHub');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg');
    });

    it('GitHub APIのDeviconURLを返す', () => {
      const result = getDeviconUrl('GitHub API');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg');
    });

    it('GitLabのDeviconURLを返す', () => {
      const result = getDeviconUrl('GitLab');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg');
    });

    it('FigmaのDeviconURLを返す', () => {
      const result = getDeviconUrl('Figma');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg');
    });

    it('SlackのDeviconURLを返す', () => {
      const result = getDeviconUrl('Slack');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg');
    });

    it('NotionのDeviconURLを返す', () => {
      const result = getDeviconUrl('Notion');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg');
    });

    it('VSCodeのDeviconURLを返す', () => {
      const result = getDeviconUrl('VSCode');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg');
    });
  });

  describe('その他のテスト', () => {
    it('OpenWeather APIのDeviconURLを返す', () => {
      const result = getDeviconUrl('OpenWeather API');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openweathermap/openweathermap-original.svg');
    });

    it('Node.jsのDeviconURLを返す', () => {
      const result = getDeviconUrl('Node.js');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg');
    });

    it('MongoDBのDeviconURLを返す', () => {
      const result = getDeviconUrl('MongoDB');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg');
    });

    it('PostgreSQLのDeviconURLを返す', () => {
      const result = getDeviconUrl('PostgreSQL');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg');
    });

    it('MySQLのDeviconURLを返す', () => {
      const result = getDeviconUrl('MySQL');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg');
    });

    it('GraphQLのDeviconURLを返す', () => {
      const result = getDeviconUrl('GraphQL');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-original.svg');
    });

    it('ReduxのDeviconURLを返す', () => {
      const result = getDeviconUrl('Redux');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg');
    });

    it('SassのDeviconURLを返す', () => {
      const result = getDeviconUrl('Sass');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg');
    });

    it('WebpackのDeviconURLを返す', () => {
      const result = getDeviconUrl('Webpack');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg');
    });
  });

  describe('UI/UXのテスト', () => {
    it('UI/UX DesignのDeviconURLを返す（Figmaアイコン）', () => {
      const result = getDeviconUrl('UI/UX Design');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg');
    });

    it('Web PerformanceのDeviconURLを返す（Chromeアイコン）', () => {
      const result = getDeviconUrl('Web Performance');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg');
    });

    it('AccessibilityのDeviconURLを返す（HTML5アイコン）', () => {
      const result = getDeviconUrl('Accessibility');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg');
    });
  });

  describe('未登録の技術名のテスト', () => {
    it('未登録の技術名でも正常なURLを生成する', () => {
      const result = getDeviconUrl('UnknownTech');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unknowntech/unknowntech-original.svg');
    });

    it('スペースを含む未登録の技術名ではスペースを削除する', () => {
      const result = getDeviconUrl('Unknown Tech Stack');
      expect(result).toBe('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unknowntechstack/unknowntechstack-original.svg');
    });
  });
});

describe('getTechStackIcons', () => {
  it('空の配列を渡すと空の配列を返す', () => {
    const result = getTechStackIcons([]);
    expect(result).toEqual([]);
  });

  it('単一の技術名を渡すと正しい形式の配列を返す', () => {
    const result = getTechStackIcons(['React']);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      name: 'React',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    });
  });

  it('複数の技術名を渡すと正しい形式の配列を返す', () => {
    const result = getTechStackIcons(['React', 'TypeScript', 'Vite']);
    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({
      name: 'React',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    });
    expect(result[1]).toEqual({
      name: 'TypeScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    });
    expect(result[2]).toEqual({
      name: 'Vite',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    });
  });

  it('カスタムアイコンを含む技術名を渡すと正しい形式の配列を返す', () => {
    const result = getTechStackIcons(['React', 'Qiita', 'TypeScript']);
    expect(result).toHaveLength(3);
    expect(result[0].name).toBe('React');
    expect(result[1].name).toBe('Qiita');
    expect(result[1].iconUrl).toContain('qiita.svg');
    expect(result[2].name).toBe('TypeScript');
  });

  it('元の技術名を保持する（大文字小文字を変更しない）', () => {
    const result = getTechStackIcons(['React', 'TYPESCRIPT', 'vite']);
    expect(result[0].name).toBe('React');
    expect(result[1].name).toBe('TYPESCRIPT');
    expect(result[2].name).toBe('vite');
  });

  it('未登録の技術名を含んでも正常に動作する', () => {
    const result = getTechStackIcons(['React', 'UnknownTech', 'TypeScript']);
    expect(result).toHaveLength(3);
    expect(result[1]).toEqual({
      name: 'UnknownTech',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unknowntech/unknowntech-original.svg',
    });
  });
});
