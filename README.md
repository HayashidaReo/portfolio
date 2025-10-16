# My Portfolio

> React 19 + Vite 5 + TypeScript 5 で構築されたモダンなパーソナルポートフォリオサイト

[![React](https://img.shields.io/badge/React-19.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)

## 🌟 コンセプト

- **高速な表示と優れたUX**
  Vite 5による高速なビルドと最適化、React 19の最新機能で快適なブラウジング体験を提供

- **厳格なAtomic Design**
  Atoms / Molecules / Organisms / Templates / Pagesの5階層を厳密に適用し、再利用可能でメンテナンス性の高いUIを構築

- **完全な型安全性**
  TypeScript 5.9を全面採用し、any型の使用を禁止。開発段階でのエラーを徹底的に防止

- **AI協調開発最適化**
  明確な命名規則、詳細な型定義、自己説明的なコード構造により、AIと開発者が効率的に協業できる設計

- **モダンな開発フロー**
  Vercel自動デプロイ、React Router v7フューチャーフラグ対応、最新のReact開発プラクティスを採用

## 🌐 ライブデモ

完成したサイトはこちらからご覧いただけます：

**➡️ [Portfolio Site](https://hysd-portfolio.vercel.app/)

## 🛠️ 技術スタック

| 分野 | 技術 |
|------|------|
| **フレームワーク** | React 19.1 |
| **ビルドツール** | Vite 5.4 |
| **言語** | TypeScript 5.9 |
| **スタイリング** | Tailwind CSS 3.4 + CVA (Class Variance Authority) |
| **UIコンポーネント** | shadcn/ui + Radix UI |
| **ルーティング** | React Router DOM 6.30 (v7 フューチャーフラグ対応) |
| **状態管理** | React Hooks (useState, useContext, useRef) |
| **Markdown** | React Markdown + remark-gfm + rehype-raw |
| **外部サービス** | Formspree (コンタクトフォーム), GitHub API (コントリビューション) |
| **テスト** | Vitest 3.2 + React Testing Library + Happy DOM |
| **コード品質** | ESLint 9.36 + TypeScript ESLint |
| **ホスティング** | Vercel (自動デプロイ) |

## 🚀 セットアップとローカル開発

このプロジェクトをローカル環境で動かすための手順です。

### 前提条件

- **Node.js**: v20.19.0 以上、または v22.12.0 以上 ([公式サイト](https://nodejs.org/)からインストール)
- **npm**: v10 以上 (Node.jsに同梱)
- **Git**: 最新版

### 🎯 セットアップ手順

```bash
# 1. このリポジトリをクローン
git clone https://github.com/HayashidaReo/portfolio.git
cd portfolio

# 2. 依存関係をインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くと、開発中のポートフォリオサイトが表示されます。

## 📜 利用可能なスクリプト

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバーを起動します (http://localhost:5173)。ホットリロードが有効です。 |
| `npm run build` | TypeScriptコンパイル + Viteビルドを実行し、本番用静的ファイルを `dist` に生成します。 |
| `npm run lint` | ESLint 9.36を実行し、コードの静的解析を行います。 |
| `npm run preview` | `build` で生成された本番ファイルをローカルで確認します。 |
| `npm run test` | Vitestを実行し、ユニットテストを実行します。 |
| `npm run test:ui` | Vitestの対話的UIを起動し、テストをブラウザで確認します。 |
| `npm run test:coverage` | テストカバレッジレポートを生成します。 |


## 🏗️ プロジェクト構成 (Atomic Design)

UIコンポーネントは、再利用性と責務の分離を目的として**Atomic Design**の原則を厳格に適用しています。

```
src/
├── components/
│   ├── atoms/            # 最小単位のUI要素 (Button, Input, Badge, Tooltip等)
│   ├── molecules/        # atomsを組み合わせた機能単位 (ProjectCard, ContactForm等)
│   ├── organisms/        # moleculesやatomsで構成される複合体 (Header, セクション群)
│   │   └── sections/     # ホームページのセクション (About, Skills, Works, Career, Social, Contact)
│   ├── templates/        # ページのレイアウト構造 (PageLayout)
│   └── pages/            # 具体的なページコンポーネント
├── hooks/                # カスタムReactフック
├── services/             # 外部サービス連携 (Formspree, GitHub API)
├── utils/                # ユーティリティ関数
├── types/                # TypeScript型定義
├── data/                 # アプリケーションデータ (projects.ts, careers.ts, skills.ts, profile.ts)
├── constants/            # 定数定義
├── lib/                  # ライブラリ関連設定
├── styles/               # グローバルスタイルとTailwind設定
├── assets/               # 静的リソース (画像、カスタムSVGアイコン)
│   ├── career/          # 経歴関連画像
│   ├── project/         # プロジェクト関連画像
│   ├── profile/         # プロフィール画像
│   └── icon/            # 12個のカスタムSVGアイコン (Devicon未対応技術用)
└── test/                 # テスト設定とセットアップ
```

### Atomic Designの階層と責務

| レベル | 役割 | 実装例 |
|--------|------|--------|
| **Atoms** | 単一責務の最小要素。propsのみで見た目が変わる | Button, Input, Badge, Avatar, TechIcon, Tooltip |
| **Molecules** | 複数Atomsの組み合わせ。単一機能を提供 | ProjectCard, ContactForm, GitHubContributions, SkillItem |
| **Organisms** | ビジネスロジックを含む複合体。データフェッチング可能 | Header, AboutSection, WorksSection, CareerSection |
| **Templates** | レイアウトのみを責務とする。データに依存しない | PageLayout (ヘッダー + コンテンツエリア) |
| **Pages** | 具体的なデータとテンプレートを組み合わせる | HomePage, ProjectDetailPage, CareerDetailPage |

## 🎨 主要機能と実装

### 📄 ページ構成とルーティング

React Router v6によるSPA構成（v7フューチャーフラグ対応）：

| ルート | ページ | 説明 |
|--------|--------|------|
| `/` | HomePage | 6つのセクション統合ページ (About, Skills, Works, Career, Social, Contact) |
| `/works/:projectId` | ProjectDetailPage | プロジェクト詳細ページ（Markdown対応） |
| `/careers/:careerId` | CareerDetailPage | 経歴詳細ページ（Markdown対応） |

### 🔄 状態管理とフック

- **Context API** - グローバルなToast通知管理 (ToastProvider)
- **カスタムフック** - 5個のフックで機能を分離
  - `useToast` - Toast通知の表示管理
  - `useMarkdownLoader` - Markdown動的読み込み
  - `useActiveSection` - Intersection Observerによるアクティブセクション検出
  - `useSmoothScroll` - スムーズスクロール機能
  - `useScrollToTop` - ページ遷移時の自動トップスクロール

### 🎯 技術アイコン自動表示システム

**Devicon統合** - 100種類以上の技術アイコンに対応：

```typescript
// utils/devicon.ts
getDeviconUrl('react');  // → React公式アイコン
getDeviconUrl('flutter'); // → Flutterロゴ
getTechStackIcons(['React', 'TypeScript', 'Vite']); // → 複数アイコン取得
```

**カスタムSVGアイコン** - Devicon未対応技術用に12個のSVGを用意：
- UIKit, Cursor, Claude Code, Excel等

### 📝 Markdown詳細コンテンツ機能

プロジェクト・経歴の詳細説明をMarkdownで管理：

**使用手順：**
1. `/public/markdown/projects/` または `/public/markdown/careers/` にMDファイルを配置
2. `projects.ts` / `careers.ts` で `detailedContentFile` プロパティに指定
3. 詳細ページで自動読み込み・表示

**対応拡張機能：**
- GitHub Flavored Markdown (remark-gfm)
- HTML埋め込み対応 (rehype-raw)
- 画像プレースホルダー (`{{imageKey}}`) - images配列から自動変換

**画像プレースホルダー例：**
```typescript
// projects.ts
import screenshot from '@/assets/project/app-screenshot.png';

export const projects = [{
  id: 'my-app',
  // ...
  images: { screenshot: screenshot }
}];
```

```markdown
<!-- /public/markdown/projects/my-app.md -->
## アプリ画面
{{screenshot}}  <!-- 自動で<img>タグに変換 -->
```

### 🎨 スタイリング実装

- **Tailwind CSS 3.4** - ユーティリティファーストCSS
- **CVA (Class Variance Authority)** - Buttonコンポーネント等でバリアント管理
- **cn()関数** - clsx + tailwind-mergeによる動的クラス結合
- **shadcn/ui + Radix UI** - HeadlessコンポーネントとTooltip
- **レスポンシブデザイン** - モバイルファースト設計 (md:, lg: ブレークポイント)

## 🧪 テスト

- **Vitest 3.2** - ユニットテスト実行環境
- **React Testing Library** - コンポーネントテスト
- **Happy DOM / JSDOM** - テスト用DOM環境

```bash
npm run test         # テスト実行
npm run test:ui      # 対話的UIでテスト
npm run test:coverage # カバレッジ確認
```

## 🚀 パフォーマンス最適化

- **React.memo** - ProjectCardコンポーネントで最適化
- **遅延読み込み** - Markdownコンテンツのオンデマンド取得
- **Intersection Observer** - スクロール検出の効率化
- **Vite最適化** - Tree shaking、コード分割、画像最適化

### 開発フロー

- **メインブランチ**: `main` (本番環境)
- **開発ブランチ**: `develop`
- **フィーチャーブランチ**: `feature/機能名`, `fix/バグ名`
- **コミット規約**: [Conventional Commits](https://www.conventionalcommits.org/)推奨
- **プルリクエスト**: `develop` → `main`

## 🎯 開発のベストプラクティス

### コーディング規約

詳細は [CODING_RULES.md](./CODING_RULES.md) を参照：

- **Atomic Design厳守** - コンポーネントは必ず適切な階層に配置
- **型安全性** - `any`型の使用禁止、すべてのpropsに型定義
- **命名規則** - コンポーネント: PascalCase、フック: camelCase + useプレフィックス
- **エクスポート** - Named export優先、barrel export (index.ts) でモジュール整理
- **インポート** - 絶対パス (@/) を使用

### AI協調開発

- 明確で一貫した命名規則
- 詳細なTypeScript型注釈
- 自己説明的なコード構造
- 意図を明確化するコメント
---

**Built with ❤️ by [HayashidaReo](https://github.com/HayashidaReo)**