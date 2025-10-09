import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/atoms/Card';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Avatar } from '@/components/atoms/Avatar';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Lightbulb, Calendar } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

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
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.projectUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
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
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>

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
                        <Github className="h-4 w-4" />
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
                      >
                        <ExternalLink className="h-4 w-4" />
                        プロジェクトを見る
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">{/* Remaining content stays the same */}

        {/* Overview */}
        <Card className="mb-6 border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
              {project.description}
            </p>
          </CardContent>
        </Card>

        {/* Detailed Description */}
        {project.detailedDescription && (
          <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-2xl">詳細説明</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                {project.detailedDescription}
              </p>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          {/* Features */}
          {project.features && project.features.length > 0 && (
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  主な機能
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="mt-0.5 p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-amber-500/5">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                  </div>
                  技術的な挑戦
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="mt-0.5 p-1 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                        <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-2xl">スクリーンショット</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
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
            </CardContent>
          </Card>
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

      {/* Footer Spacer */}
      <div className="h-16"></div>
    </div>
  );
};
