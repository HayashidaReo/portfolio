import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Lightbulb } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center space-y-4">
            <h1 className="text-2xl font-bold">プロジェクトが見つかりません</h1>
            <p className="text-muted-foreground">
              指定されたプロジェクトは存在しないか、削除された可能性があります。
            </p>
            <Button onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4" />
              ホームに戻る
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl flex h-16 items-center px-4">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            戻る
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-start gap-6 mb-6">
            {project.icon && (
              <Avatar
                src={project.icon}
                alt={project.title}
                fallback={project.title.charAt(0)}
                size="xl"
                className="rounded-lg"
              />
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-muted-foreground">{project.period}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          {(project.githubUrl || project.projectUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
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

        {/* Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </CardContent>
        </Card>

        {/* Detailed Description */}
        {project.detailedDescription && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>詳細説明</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                主な機能
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                技術的な挑戦
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Screenshots - Placeholder for future implementation */}
        {project.screenshots && project.screenshots.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>スクリーンショット</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-lg border"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Back to Top Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4" />
            一覧に戻る
          </Button>
        </div>
      </main>
    </div>
  );
};
