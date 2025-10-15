import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
  Avatar,
  TechIcon,
} from '@/components/atoms';
import { TechStackList, MarkdownRenderer, NotFoundCard } from '@/components/molecules';
import { FullPageLoading, DetailPageHeader } from '@/components/organisms';
import { useMarkdownLoader, useScrollToTop } from '@/hooks';
import { ExternalLink, Calendar, ArrowLeft } from 'lucide-react';


export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  // Markdownファイルの読み込み
  const { content: markdownContent, isLoading } = useMarkdownLoader({
    filePath: project?.detailedContentFile,
    basePath: 'projects'
  });

  // ページ遷移時とローディング完了時にページトップへスクロール
  useScrollToTop({ dependencies: [projectId], isLoading });

  if (!project) {
    return <NotFoundCard entityName="プロジェクト" />;
  }

  // プロジェクト外部リンク用のUIコンポーネント
  const renderProjectLinks = () => (
    <TooltipProvider>
      <div className="flex gap-2">
        {project.githubUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent>
              <p>リポジトリを見る</p>
            </TooltipContent>
          </Tooltip>
        )}
        {project.projectUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent>
              <p>プロジェクトサイトを見る</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );

  // ローディング中の表示
  if (isLoading) {
    return (
      <FullPageLoading
        message="読み込み中..."
        headerRight={renderProjectLinks()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      {/* Header */}
      <DetailPageHeader
        onBack={() => navigate(-1)}
        rightContent={renderProjectLinks()}
      />

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
          <MarkdownRenderer
            content={markdownContent}
            images={project?.images}
          />

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
