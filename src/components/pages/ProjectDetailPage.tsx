import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projects } from '@/data/projects';
import {
  Card,
  CardContent,
} from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Avatar } from '@/components/atoms/Avatar';
import { TechStackList } from '@/components/molecules/TechStackList';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import { TechIcon } from '@/components/atoms/TechIcon';

/**
 * ProjectDetailPage - プロジェクト詳細ページコンポーネント
 * 
 * 【画像プレースホルダー機能の使用方法】
 * CareerDetailPageと同様の機能をサポートしています。
 * 
 * 1. 画像ファイルの配置:
 *    src/assets/project/ ディレクトリに画像を配置
 *    例: src/assets/project/studyNote2_graph.jpg
 * 
 * 2. projects.ts でのimport:
 *    import imageFile from '@/assets/project/image.jpg';
 * 
 * 3. Project オブジェクトに画像を追加:
 *    {
 *      id: 'example',
 *      // ... other properties
 *      images: {
 *        studyNote2Graph: imageFile,  // キー名は任意
 *        screenshot: anotherImage     // 複数画像も可能
 *      }
 *    }
 * 
 * 4. Markdownファイル内でのプレースホルダー使用:
 *    {{studyNote2Graph}}  // 自動で<img>タグに置換される
 */

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    const loadMarkdown = async () => {
      if (!project?.detailedContentFile) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`/src/data/projects/${project.detailedContentFile}`);
        let text = await response.text();
        
        // プレースホルダーを画像URLに置換
        // 使用方法:
        // 1. projects.tsでimport: import imageFile from '@/assets/project/image.jpg';
        // 2. projectオブジェクトのimagesに追加: images: { myImage: imageFile }
        // 3. Markdownファイル内でプレースホルダー使用: 
        //    {{myImage}} または {{myImage|サイズ指定|キャプション}}
        //    例: {{myImage|medium|志望校別得点率の比較画面}}
        // 4. 自動で![キャプション](optimized-image-url)に置換される
        if (project.images) {
          Object.entries(project.images).forEach(([key, imageUrl]) => {
            // サイズ指定 + キャプション付きプレースホルダーの処理
            const placeholderWithSizeAndCaption = new RegExp(`{{${key}\\|(small|medium|large)\\|([^}]+)}}`, 'g');
            text = text.replace(placeholderWithSizeAndCaption, (_, size, caption) => {
              return `![${caption}-${size}](${imageUrl})`;
            });
            
            // キャプション付きプレースホルダーの処理（サイズ指定なし）
            const placeholderWithCaption = new RegExp(`{{${key}\\|([^}|]+)}}`, 'g');
            text = text.replace(placeholderWithCaption, (_, caption) => {
              // サイズ指定がない場合はcaptionのみ
              if (!['small', 'medium', 'large'].includes(caption)) {
                return `![${caption}](${imageUrl})`;
              }
              return `{{${key}|${caption}}}`; // サイズ指定の場合は元に戻す
            });
            
            // サイズ指定付きプレースホルダーの処理
            const placeholderWithSize = new RegExp(`{{${key}\\|(small|medium|large)}}`, 'g');
            text = text.replace(placeholderWithSize, (_, size) => {
              return `![${key}-${size}](${imageUrl})`;
            });
            
            // 通常のプレースホルダーの処理
            const placeholder = `{{${key}}}`;
            const imageMarkdown = `![${key}](${imageUrl})`;
            text = text.replace(new RegExp(placeholder, 'g'), imageMarkdown);
          });
        }
        
        setMarkdownContent(text);
      } catch (error) {
        console.error('Failed to load markdown:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMarkdown();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/20">
        <Card className="max-w-md w-full shadow-lg">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
              <ExternalLink className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold">プロジェクトが見つかりません</h1>
            <p className="text-muted-foreground">
              指定されたプロジェクトは存在しないか、削除された可能性があります。
            </p>
            <Button onClick={() => navigate('/')} className="mt-4">
              <ArrowLeft className="h-4 w-4" />
              ホームに戻る
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            戻る
          </Button>
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <TechIcon techName="GitHub" size="sm" showLabel={false} />
                </a>
              </Button>
            )}
            {project.projectUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="h-6 w-6 text-foreground" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="border-b bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {project.icon && (
              <div className="shrink-0">
                <Avatar
                  src={project.icon}
                  alt={project.title}
                  fallback={project.title.charAt(0)}
                  size="xl"
                  className="rounded-2xl shadow-lg w-24 h-24 md:w-32 md:h-32"
                />
              </div>
            )}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  {project.title}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
              </div>

              {/* Tech Stack */}
              <TechStackList
                techStack={project.techStack}
                size="md"
                showLabels={true}
              />

              {/* Links */}
              {(project.githubUrl || project.projectUrl) && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TechIcon techName="GitHub" size="sm" showLabel={false} />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {project.projectUrl && (
                    <Button asChild>
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-5 w-5" />
                        プロジェクトを見る
                      </a>
                    </Button>
                  )}
                </div>
              )}

              {/* Summary */}
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Markdown without Card */}
      {project.detailedContentFile && (
        <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">読み込み中...</p>
            </div>
          ) : (
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
                {markdownContent}
              </ReactMarkdown>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">スクリーンショット</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border bg-muted/20 hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-16 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="shadow-md hover:shadow-lg transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              一覧に戻る
            </Button>
          </div>
        </main>
      )}

      {/* Footer Spacer */}
      <div className="h-16"></div>
    </div>
  );
};
