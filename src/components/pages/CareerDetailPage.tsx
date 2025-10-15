import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { careers } from '@/data/careers';
import { Card, CardContent, Button, Avatar } from '@/components/atoms';
import { TechStackList, MarkdownRenderer } from '@/components/molecules';
import { FullPageLoading } from '@/components/organisms';
import { useMarkdownLoader } from '@/hooks/useMarkdownLoader';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';

export const CareerDetailPage: React.FC = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const navigate = useNavigate();
  const career = careers.find((c) => c.id === careerId);

  // Markdownファイルの読み込み
  const { content: markdownContent, isLoading } = useMarkdownLoader({
    filePath: career?.detailedContentFile,
    basePath: 'careers'
  });

  // ページ遷移時とローディング完了時にページトップへスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [careerId]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);



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
            <Button onClick={() => navigate(-1)} className="mt-4">
              <ArrowLeft className="h-4 w-4" />
              ホームに戻る
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ローディング中の表示
  if (isLoading) {
    return <FullPageLoading message="読み込み中..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
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
          <MarkdownRenderer
            content={markdownContent}
            images={career.images}
          />

          {/* Back Button */}
          <div className="mt-16 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate(-1)}
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
