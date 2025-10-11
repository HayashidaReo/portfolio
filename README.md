# My Portfolio

> React, Vite, TypeScript で構築されたモダンなパーソナルポートフォリオサイト

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF.svg)](https://vitejs.dev/)

## 🌟 コンセプト

- **高速な表示と優れたUX**  
  Viteによる高速なビルドと最適化で、快適なブラウジング体験を提供

- **コンポーネント指向**  
  Atomic Designの考え方に基づき、再利用可能でメンテナンス性の高いUIを構築

- **型安全な開発**  
  TypeScriptを全面的に採用し、開発段階でのエラーを防止

- **モダンな開発フロー**  
  VercelとGitHub連携によるCI/CD（継続的インテグレーション/継続的デプロイメント）を実現

## 🌐 ライブデモ

完成したサイトはこちらからご覧いただけます：

**➡️ [Portfolio Site](https://portfolio-hayashidareo.vercel.app)** (デプロイ後に更新予定)

## 🛠️ 技術スタック

| 分野 | 技術 |
|------|------|
| **フレームワーク** | React 18 |
| **ビルドツール** | Vite |
| **言語** | TypeScript |
| **スタイリング** | Tailwind CSS |
| **UIコンポーネント** | shadcn/ui |
| **状態管理** | React Hooks (useState, useContext) |
| **テスト** | Vitest + React Testing Library |
| **ホスティング** | Vercel |

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
| `npm run dev` | 開発サーバーを起動します。ホットリロードが有効です。 |
| `npm run build` | 本番環境用の静的ファイルを `dist` フォルダに生成します。 |
| `npm run lint` | ESLintを実行し、コードの静的解析を行います。 |
| `npm run preview` | `build` で生成された本番ファイルをローカルで確認します。 |

## ☁️ デプロイ

このプロジェクトはVercelへのデプロイが最適化されています。

### デプロイ手順

1. **GitHubリポジトリの準備**  
   このGitHubリポジトリをあなたのGitHubアカウントにフォークまたはプッシュします。

2. **Vercelでのインポート**  
   [Vercel](https://vercel.com/)にログインし、"Add New... > Project" を選択します。

3. **リポジトリの接続**  
   作成したGitHubリポジトリをインポートします。

4. **デプロイの実行**  
   Vercelが自動でViteプロジェクトを検出し、最適なビルド設定を提案します。設定を変更せず "Deploy" をクリックします。

**🎉 完了！**  
以降、`main`ブランチにプッシュするたびに、Vercelが自動で新しいバージョンをビルドし、公開サイトに反映します。

## 🏗️ プロジェクト構成 (Atomic Design)

UIコンポーネントは、再利用性と責務の分離を目的として**Atomic Design**の原則に基づいて構成されています。

```
src/
├── components/
│   ├── atoms/            # ボタンやインプットなど、最小のUI単位
│   ├── molecules/        # atomsを組み合わせた小さな機能単位 (例: 検索フォーム)
│   ├── organisms/        # moleculesやatomsで構成されるUIセクション (例: ヘッダー)
│   ├── templates/        # ページのレイアウト構造
│   └── pages/            # 具体的なページコンポーネント
├── hooks/                # カスタムReactフック
├── services/             # API通信や外部サービス連携
├── utils/                # 純粋関数とユーティリティ
├── types/                # TypeScriptの型定義
├── constants/            # 定数定義
├── styles/               # グローバルスタイルとテーマ
└── assets/               # 画像やアイコンなどの静的リソース
```

### Atomic Designの階層

| レベル | 役割 | 例 |
|--------|------|-----|
| **Atoms** | 最小単位のUI要素 | Button, Input, Icon |
| **Molecules** | Atomsの組み合わせ | SearchBox, Card |
| **Organisms** | MoleculesとAtomsの複合体 | Header, ProductList |
| **Templates** | ページのレイアウト構造 | PageLayout, GridLayout |
| **Pages** | 具体的なページコンポーネント | HomePage, AboutPage |

### 🖼️ 画像プレースホルダー機能

Markdownファイル内で画像を表示する際の機能です。assetsディレクトリで画像を一元管理しながら、Viteの最適化機能を活用できます。

**使用手順：**
1. `src/assets/career/` に画像を配置
2. `src/data/careers.ts` で画像をimport
3. Career オブジェクトの `images` プロパティに追加
4. Markdownファイル内で `{{imageKey}}` として使用

**例：**
```typescript
// careers.ts
import stockImage from '@/assets/career/stock-manager.jpeg';

export const careers = [{
  // ...
  images: { stockManager: stockImage }
}];
```

```markdown
<!-- Markdownファイル内 -->
{{stockManager}}  <!-- 自動で<img>タグに置換 -->
```

## 🤝 開発への貢献

機能追加の提案やバグ報告は、GitHubの[Issues](https://github.com/HayashidaReo/portfolio/issues)にて歓迎します。

### 開発フロー

- **ブランチ戦略**: `feature/機能名` の形式でブランチを作成してください
- **コミット**: [Conventional Commits](https://www.conventionalcommits.org/) の規約に従うことを推奨します
- **プルリクエスト**: `main`ブランチへのプルリクエストを作成してください

### コミット例

```bash
feat: ヘッダーコンポーネントを追加
fix: ボタンのスタイル修正
docs: READMEの更新
style: ESLintエラーの修正
```

## 📄 ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

---

**Built with ❤️ by [HayashidaReo](https://github.com/HayashidaReo)**