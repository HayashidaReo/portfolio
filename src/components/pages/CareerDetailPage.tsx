import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { careers } from '@/data/careers';
import {
  Card,
  CardContent,
} from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Avatar } from '@/components/atoms/Avatar';
import { TechStackList } from '@/components/molecules/TechStackList';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';

export const CareerDetailPage: React.FC = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const career = careers.find((c) => c.id === careerId);

  useEffect(() => {
    const loadMarkdown = async () => {
      if (!career?.detailedContentFile) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`/src/data/careers/${career.detailedContentFile}`);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Failed to load markdown:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMarkdown();
  }, [career]);

  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/20">
        <Card className="max-w-md w-full shadow-lg">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
              <ExternalLink className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold">経歴が見つかりません</h1>
            <p className="text-muted-foreground">
              指定された経歴は存在しないか、削除された可能性があります。
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
        </div>
      </header>

      {/* Hero Section */}
      <div className="border-b bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {career.icon && (
              <div className="shrink-0">
                <Avatar
                  src={career.icon}
                  alt={career.company}
                  fallback={career.company.charAt(0)}
                  size="xl"
                  className="rounded-2xl shadow-lg w-24 h-24 md:w-32 md:h-32"
                />
              </div>
            )}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  {career.company}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{career.period}</span>
                </div>
              </div>

              {/* Tech Stack */}
              {career.techStack && career.techStack.length > 0 && (
                <TechStackList
                  techStack={career.techStack}
                  size="md"
                  showLabels={true}
                />
              )}

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base">
                {career.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Markdown without Card */}
      {career.detailedContentFile && (
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
                }}
              >
                {markdownContent}
              </ReactMarkdown>
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
