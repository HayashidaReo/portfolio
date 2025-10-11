import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * MarkdownRenderer - 共通Markdownレンダリングコンポーネント
 * 
 * 【画像プレースホルダー機能】
 * - {{imageKey}} - デフォルトサイズで画像表示
 * - {{imageKey|size}} - サイズ指定 (small|medium|large)
 * - {{imageKey|caption}} - キャプション指定
 * - {{imageKey|size|caption}} - サイズ + キャプション指定
 * 
 * 【使用方法】
 * 1. データファイル(careers.ts/projects.ts)で画像をimport
 * 2. オブジェクトのimagesプロパティに追加
 * 3. Markdownファイル内でプレースホルダー使用
 * 4. 自動でレスポンシブな<img>タグに変換
 */

interface MarkdownRendererProps {
  /** Markdownコンテンツ */
  content: string;
  /** 画像データ（キー: 画像URL） */
  images?: { [key: string]: string };
  /** 読み込み中かどうか */
  isLoading?: boolean;
  /** 読み込み中のメッセージ */
  loadingMessage?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  images,
  isLoading = false,
  loadingMessage = '読み込み中...'
}) => {
  // プレースホルダーを画像URLに置換する処理
  const processPlaceholders = (text: string): string => {
    if (!images) return text;

    let processedText = text;

    Object.entries(images).forEach(([key, imageUrl]) => {
      // サイズ指定 + キャプション付きプレースホルダーの処理
      const placeholderWithSizeAndCaption = new RegExp(`{{${key}\\|(small|medium|large)\\|([^}]+)}}`, 'g');
      processedText = processedText.replace(placeholderWithSizeAndCaption, (_, size, caption) => {
        return `![${caption}-${size}](${imageUrl})`;
      });
      
      // キャプション付きプレースホルダーの処理（サイズ指定なし）
      const placeholderWithCaption = new RegExp(`{{${key}\\|([^}|]+)}}`, 'g');
      processedText = processedText.replace(placeholderWithCaption, (_, caption) => {
        // サイズ指定がない場合はcaptionのみ
        if (!['small', 'medium', 'large'].includes(caption)) {
          return `![${caption}](${imageUrl})`;
        }
        return `{{${key}|${caption}}}`; // サイズ指定の場合は元に戻す
      });
      
      // サイズ指定付きプレースホルダーの処理
      const placeholderWithSize = new RegExp(`{{${key}\\|(small|medium|large)}}`, 'g');
      processedText = processedText.replace(placeholderWithSize, (_, size) => {
        return `![${key}-${size}](${imageUrl})`;
      });
      
      // 通常のプレースホルダーの処理
      const placeholder = `{{${key}}}`;
      const imageMarkdown = `![${key}](${imageUrl})`;
      processedText = processedText.replace(new RegExp(placeholder, 'g'), imageMarkdown);
    });

    return processedText;
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">{loadingMessage}</p>
      </div>
    );
  }

  const processedContent = processPlaceholders(content);

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-2xl font-bold mt-6 mb-3 text-foreground" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-xl font-bold mt-4 mb-2 text-foreground" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-lg font-bold mt-3 mb-2 text-foreground" {...props} />
          ),
          p: ({ ...props }) => (
            <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="text-muted-foreground" {...props} />
          ),
          hr: ({ ...props }) => (
            <hr className="my-8 border-border" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />
          ),
          code: ({ ...props }) => (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
          ),
          pre: ({ ...props }) => (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4" {...props} />
          ),
          img: ({ src, alt, ...props }) => {
            // alt属性からサイズ情報を取得
            const altText = alt || '';
            const isSmall = altText.includes('-small');
            const isMedium = altText.includes('-medium');
            const isLarge = altText.includes('-large');
            
            // サイズに応じたクラスを設定
            let sizeClass = 'max-w-full md:max-w-2xl lg:max-w-3xl'; // デフォルト
            if (isSmall) sizeClass = 'max-w-full md:max-w-md lg:max-w-lg';
            else if (isMedium) sizeClass = 'max-w-full md:max-w-xl lg:max-w-2xl';
            else if (isLarge) sizeClass = 'max-w-full md:max-w-4xl lg:max-w-5xl';
            
            // 表示用のalt属性（サイズ情報を除去）
            const displayAlt = altText.replace(/-(?:small|medium|large)$/, '');
            
            return (
              <div className="my-6 flex flex-col items-center">
                <img 
                  src={src} 
                  alt={displayAlt} 
                  className={`${sizeClass} w-auto h-auto rounded-lg shadow-md border border-border`}
                  {...props}
                />
                {displayAlt && (
                  <p className="text-sm text-muted-foreground mt-2 text-center italic">
                    {displayAlt}
                  </p>
                )}
              </div>
            );
          },
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};