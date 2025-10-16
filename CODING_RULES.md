# Portfolio Project - コーディングルール

## 🎯 プロジェクトの設計思想

このプロジェクトは以下の5つの原則に基づいて設計・実装されています：

- **シンプルさと表現力**: 少ない記述量で直感的に扱えるコード
- **完全な型安全性**: `any`型禁止、実行時エラーを未然に防ぐ厳格な型システム
- **厳格なAtomic Design**: 5階層（Atoms/Molecules/Organisms/Templates/Pages）を厳密に適用
- **AI協調開発最適化**: 明確な命名規則と詳細な型定義により、AIと開発者が効率的に協業
- **パフォーマンス重視**: React.memo、遅延読み込み、Intersection Observer等の最適化を積極導入

## 🏗️ アーキテクチャ設計ルール

### 1. アトミックデザインによるコンポーネント設計

実装済みのディレクトリ構造：

```
src/
├── components/
│   ├── atoms/            # 16個 - 最小単位のUI要素
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx   # CVA使用
│   │   ├── Card.tsx     # Header, Title, Description, Content, Footer
│   │   ├── FeaturedRibbon.tsx
│   │   ├── Input.tsx
│   │   ├── NavigationLink.tsx
│   │   ├── Progress.tsx
│   │   ├── Spinner.tsx
│   │   ├── TechIcon.tsx # Devicon統合
│   │   ├── Textarea.tsx
│   │   ├── Toast.tsx
│   │   ├── Toaster.tsx
│   │   ├── Tooltip.tsx  # Radix UI
│   │   └── index.ts     # Barrel export
│   │
│   ├── molecules/        # 19個 - atomsの組み合わせ
│   │   ├── CareerCard.tsx
│   │   ├── ContactForm.tsx         # Formspree連携
│   │   ├── GitHubContributions.tsx # GitHub API
│   │   ├── InfoCard.tsx
│   │   ├── InterestsList.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── MarkdownRenderer.tsx    # react-markdown
│   │   ├── MobileNavigation.tsx
│   │   ├── NavigationBar.tsx
│   │   ├── NotFoundCard.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── ProjectCard.tsx         # React.memo最適化
│   │   ├── SkillCategory.tsx
│   │   ├── SkillItem.tsx
│   │   ├── SocialLink.tsx
│   │   ├── TechStackList.tsx
│   │   ├── TimelineItem.tsx
│   │   └── index.ts
│   │
│   ├── organisms/        # 8個 - ビジネスロジック含む複合体
│   │   ├── Header.tsx
│   │   ├── DetailPageHeader.tsx
│   │   ├── FullPageLoading.tsx
│   │   ├── sections/     # 6個のセクション
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── WorksSection.tsx    # タイムライン
│   │   │   ├── CareerSection.tsx   # タイムライン
│   │   │   ├── SocialSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── index.ts
│   │
│   ├── templates/        # 1個 - レイアウト構造
│   │   ├── PageLayout.tsx
│   │   └── index.ts
│   │
│   └── pages/            # 3個 - 具体的なページ
│       ├── HomePage.tsx
│       ├── ProjectDetailPage.tsx
│       ├── CareerDetailPage.tsx
│       └── index.ts
│
├── hooks/                # 5個 - カスタムフック
│   ├── useToast.ts       # Context API使用
│   ├── useMarkdownLoader.ts
│   ├── useActiveSection.ts
│   ├── useSmoothScroll.ts
│   └── useScrollToTop.ts
│
├── services/             # 外部サービス連携
│   ├── formspree.ts      # Formspree API
│   └── github.ts         # GitHub API (予定)
│
├── utils/                # ユーティリティ関数
│   ├── devicon.ts        # 100+ 技術アイコンマッピング
│   ├── formspree.ts      # フォーム送信
│   └── utils.ts          # cn関数 (clsx + tailwind-merge)
│
├── types/                # 5ファイル - 型定義
│   ├── project.ts
│   ├── career.ts
│   ├── skill.ts
│   ├── profile.ts
│   └── social.ts
│
├── data/                 # アプリケーションデータ
│   ├── projects.ts       # 12件
│   ├── careers.ts        # 6件
│   ├── skills.ts         # 25スキル (4カテゴリ)
│   └── profile.ts        # プロフィール情報
│
├── lib/                  # ライブラリ関連設定
│   └── utils.ts
│
├── constants/            # 定数定義
│   └── sectionIds.ts
│
├── styles/               # グローバルスタイル
│   └── index.css         # Tailwind directives
│
├── assets/               # 静的リソース
│   ├── career/          # 経歴関連画像
│   ├── project/         # プロジェクト関連画像
│   ├── profile/         # プロフィール画像
│   └── icon/            # 12個のカスタムSVGアイコン
│
└── test/                 # テスト設定
    └── setup.ts
```

### 2. コンポーネントの責務分離原則（実装ベース）

#### **Atoms**
- 単一責務の最小要素
- propsのみで見た目が変わる
- ビジネスロジックを含まない
- 他のコンポーネントに依存しない

#### **Molecules**
- 2つ以上のAtomsを組み合わせ
- 単一の機能を提供
- 再利用可能な設計
- ビジネスロジックは最小限


#### **Organisms**
- MoleculesとAtomsの複合体
- ビジネスロジックを含む
- カスタムフックでロジックを分離
- データフェッチング可能
- ページ固有の要素を避ける

#### **Templates**
- レイアウト構造のみを責務とする
- データに依存しない
- childrenで内容を受け取る

#### **Pages**
- 具体的なデータとテンプレートを組み合わせる
- ルーティングのエントリーポイント
- 複数のOrganismsを組み合わせる

### 3. 状態管理の階層化（実装済み）

#### **ローカル状態** - useState, useRef
```typescript
// ContactForm.tsx
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
```

#### **コンポーネント間共有** - Context API
```typescript
// hooks/useToast.ts - Context APIによるグローバル通知管理
import { createContext, useContext, useState, useCallback, useRef } from 'react';

interface Toast {
  id: number;
  message: string;
  type: 'default' | 'success' | 'error' | 'warning' | 'info';
}

interface ToastContextValue {
  toasts: Toast[];
  toast: (message: string, type?: Toast['type']) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastIdRef = useRef(0);

  const toast = useCallback((message: string, type: Toast['type'] = 'default') => {
    const id = toastIdRef.current++;
    setToasts((prev) => [...prev, { id, message, type }]);

    // 自動削除
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, []);

  const success = useCallback((message: string) => toast(message, 'success'), [toast]);
  const error = useCallback((message: string) => toast(message, 'error'), [toast]);
  const warning = useCallback((message: string) => toast(message, 'warning'), [toast]);
  const info = useCallback((message: string) => toast(message, 'info'), [toast]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, success, error, warning, info, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
```

#### **データ状態** - 静的データ管理
- プロジェクト、経歴、スキル、プロフィールデータは `src/data/` で管理
- 単一データソース原則に従い、一覧・詳細で同じデータを使用
```typescript
// data/projects.ts
export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'ポートフォリオサイト',
    period: '2025年10月',
    summary: 'React + TypeScript + Viteで構築した...',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/HayashidaReo/portfolio',
    detailedContentFile: 'portfolio-website.md',
    images: { /* 画像パス */ },
  },
  // ... 11件
];
```

## 🔒 型安全性ルール

### 4. 型定義の厳格な管理（実装済み）

**必須ルール:**
- すべてのコンポーネントpropsに型定義を必須化
- `any`型の使用を**完全禁止**
- オプショナルプロパティの明確な区別 (`?`)
- Union型による厳密な値制限

**実装例:**
```typescript
// types/project.ts - 厳密な型定義
export interface Project {
  id: string;
  title: string;
  period: string;
  summary: string;
  techStack: string[];
  githubUrl?: string;          // オプショナル
  projectUrl?: string;         // オプショナル
  detailedContentFile?: string;// オプショナル
  featured?: boolean;          // オプショナル
  images?: Record<string, string>; // 画像プレースホルダー用
}

// types/skill.ts
export interface Skill {
  name: string;
  iconName?: string;
  level: number;              // 0-100
  experience: '実務経験' | '個人開発' | '学習中'; // Union型
}

export interface SkillCategory {
  category: 'Languages' | 'Frameworks' | 'Infrastructure' | 'Tools'; // Union型
  skills: Skill[];
}
```

**コンポーネントprops型定義:**
```typescript
// ProjectCard.tsx
interface ProjectCardProps {
  project: Project;           // 型エイリアス使用
  onClick?: () => void;       // オプショナル、型注釈
  className?: string;         // オプショナル
}

// MarkdownRenderer.tsx
interface MarkdownRendererProps {
  content: string;
  images?: Record<string, string>; // オプショナル
}
```

### 5. 型推論とTypeScript厳格モード（実装済み）

**tsconfig.json 設定:**
```json
{
  "compilerOptions": {
    "strict": true,                    // 厳格モード有効
    "noImplicitAny": true,            // any型の暗黙的使用禁止
    "strictNullChecks": true,         // null/undefinedチェック厳格化
    "strictFunctionTypes": true,      // 関数型の厳格チェック
    "strictPropertyInitialization": true,
    "noUnusedLocals": true,           // 未使用ローカル変数エラー
    "noUnusedParameters": true,       // 未使用パラメータエラー
    "noFallthroughCasesInSwitch": true
  }
}
```

**Generic型の活用:**
```typescript
// utils/devicon.ts
export function getTechStackIcons<T extends string>(
  techStack: T[]
): Array<{ tech: T; iconUrl: string }> {
  return techStack.map((tech) => ({
    tech,
    iconUrl: getDeviconUrl(tech),
  }));
}

// React.forwardRef の型定義
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // ...
  }
);
```

## 🎨 アトミックデザイン実装ルール（実装済み）

### 6. 実装されたAtomsの特徴

**CVA (Class Variance Authority) 活用:**
```typescript
// Button.tsx - バリアント管理の実装例
const buttonVariants = cva(baseStyles, {
  variants: {
    variant: { default, destructive, outline, secondary, ghost, link },
    size: { default, sm, lg, icon }
  }
});
```

**shadcn/ui スタイル:**
- Card (Header, Title, Description, Content, Footer)
- Tooltip (Radix UI ベース)
- Badge, Progress, Input, Textarea

**カスタムAtoms:**
- TechIcon - Devicon統合、100+技術対応
- FeaturedRibbon - 注目マーク表示
- NavigationLink - アクティブ状態管理

### 7. 実装されたMoleculesの特徴

**React.memo最適化:**
```typescript
// ProjectCard.tsx
export const ProjectCard = React.memo<ProjectCardProps>(({ project, onClick, className }) => {
  // ... 再レンダリング最適化
});
```

## 📝 コーディングスタイル（実装済み）

### 9. ファイル命名規則の実践

**実装されている命名:**
- コンポーネント: PascalCase
  - `Button.tsx`, `ProjectCard.tsx`, `WorksSection.tsx`
- フック: camelCase + `use` プレフィックス
  - `useToast.ts`, `useMarkdownLoader.ts`, `useActiveSection.ts`
- ユーティリティ: camelCase
  - `devicon.ts`, `formspree.ts`, `utils.ts`
- 型定義: camelCase
  - `project.ts`, `career.ts`, `skill.ts`
- データ: camelCase + 複数形
  - `projects.ts`, `careers.ts`, `skills.ts`

### 10. 実装されているコンポーネント構造

**Tailwind CSS スタイル:**
```typescript
// WorksSection.tsx
export const WorksSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="works" className="py-20">
      <h2 className="text-3xl font-bold mb-12">Works</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <TimelineItem key={project.id} date={project.period}>
            <ProjectCard
              project={project}
              onClick={() => navigate(`/works/${project.id}`)}
            />
          </TimelineItem>
        ))}
      </div>
    </section>
  );
};
```

**cn()関数による動的クラス管理:**
```typescript
// utils/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 使用例
<Card className={cn('w-full hover:shadow-lg transition-all', className)} />
```

### 11. Export/Import規則の実践

**Named export 実装:**
```typescript
// components/atoms/index.ts - Barrel export
export { Avatar } from './Avatar';
export { Badge } from './Badge';
export { Button } from './Button';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
// ... 全Atomsをエクスポート
```

**絶対パス import (@/ alias):**
```typescript
// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

// 使用例
import { Button } from '@/components/atoms';
import { projects } from '@/data/projects';
import { getDeviconUrl } from '@/utils/devicon';
import type { Project } from '@/types/project';
```

## 🧪 テストとストーリー

### 12. テスト戦略

- **Atoms**: Props別の見た目テスト
- **Molecules**: 相互作用テスト
- **Organisms**: ビジネスロジックテスト
- **Hooks**: ロジックの単体テスト


## 🤖 AI協調開発ルール

### 13. AIフレンドリーなコード構造

- 明確で一貫した命名規則
- 詳細なTypeScript型注釈
- 自己説明的なコード構造
- コメントによる意図の明確化

### 14. プロンプト効率化

- コンポーネントの種類を明確に指定
- 期待する型定義を具体的に記述
- 既存パターンとの一貫性を要求
- テストケースの考慮を依頼

## 🚀 パフォーマンス最適化（実装済み）

### 15. React最適化の実践

**React.memo 実装:**
```typescript
// ProjectCard.tsx - リスト表示の最適化
export const ProjectCard = React.memo<ProjectCardProps>(({ project, onClick, className }) => {
  // propsが変わらない限り再レンダリングしない
  return <Card>...</Card>;
});
```

**useCallback 実装:**
```typescript
// useToast.ts
const toast = useCallback((message: string, type: Toast['type'] = 'default') => {
  // ... 関数メモ化
}, []);

const success = useCallback((message: string) => toast(message, 'success'), [toast]);
```

**key属性の適切な設定:**
```typescript
{projects.map((project) => (
  <TimelineItem key={project.id} date={project.period}>
    <ProjectCard project={project} />
  </TimelineItem>
))}
```

**遅延読み込み:**
```typescript
// useMarkdownLoader.ts - Markdownのオンデマンド読み込み
const [content, setContent] = useState<string>('');
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  if (!detailedContentFile) return;

  fetch(`/markdown/${type}/${detailedContentFile}`)
    .then((res) => res.text())
    .then((text) => setContent(text))
    .finally(() => setIsLoading(false));
}, [detailedContentFile, type]);
```

**Intersection Observer活用:**
```typescript
// useActiveSection.ts - スクロール検出の効率化
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}, []);
```

### 16. バンドル最適化の実践

**Vite設定:**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'markdown': ['react-markdown', 'remark-gfm', 'rehype-raw'],
        },
      },
    },
  },
});
```

**Tree shaking:**
- Named exportの使用
- 未使用コードの自動削除

**画像最適化:**
- assetsディレクトリでViteが自動最適化
- import文による画像読み込み（ハッシュ付きURL生成）

```typescript
// data/projects.ts
import portfolioImage from '@/assets/project/portfolio.png';

export const projects: Project[] = [
  {
    // ...
    images: { screenshot: portfolioImage }, // Viteが最適化
  },
];
```

## 🔄 開発フロー

### 17. レビュー観点

- アトミックデザイン原則の遵守
- 型安全性の確認
- 再利用可能性の検証
- アクセシビリティの考慮

## 📚 ドキュメント化

### 18. コンポーネントドキュメント

- 各コンポーネントの役割と使用例
- propsの型定義と説明
- 使用上の注意点とベストプラクティス
- デザインシステムへの準拠状況

### 19. アーキテクチャドキュメント

- アトミックデザインの適用方針
- 状態管理の戦略
- パフォーマンス考慮事項
- AI協調開発のベストプラクティス

## ⚠️ 重要な注意事項

- **段階的導入**: 一度にすべてを導入せず、必要に応じて段階的に技術を追加
- **一貫性の維持**: 既存コードとの整合性を最優先
- **パフォーマンス重視**: 機能追加時は必ずパフォーマンスへの影響を評価
- **アクセシビリティ**: すべてのUIコンポーネントでWCAG準拠を目指す
- **AI協調**: AIの提案を鵜呑みにせず、プロジェクトの文脈で適切か判断する

---

## 🎯 このルールの目的

このコーディングルールは、AIと開発者が協力して高品質なポートフォリオサイトを構築するための指針です。アトミックデザインによる体系的なUI構築と、TypeScriptによる型安全性を軸に、保守性と拡張性を両立したコードベースの実現を目指します。