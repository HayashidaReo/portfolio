import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Avatar,
  TechIcon,
  FeaturedRibbon,
} from '@/components/atoms';
import { TechStackList } from '@/components/molecules';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  period: string;
  description: string;
  techStack: string[];
  icon?: string;
  githubUrl?: string;
  projectUrl?: string;
  featured?: boolean;
  className?: string;
}

/**
 * ProjectCard - プロジェクトカードコンポーネント
 *
 * React.memoでメモ化し、タイムラインで複数表示される際の不要な再レンダリングを防止
 */
export const ProjectCard = React.memo<ProjectCardProps>(({
  id,
  title,
  period,
  description,
  techStack,
  icon,
  githubUrl,
  projectUrl,
  featured,
  className,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/works/${id}`, {
      state: { fromProjectId: id, fromSection: 'works' }
    });
  };
  const cardContent = (
    <Card
      className={cn(
        'w-full hover:shadow-lg transition-all cursor-pointer group relative',
        className
      )}
    >
      {/* Featured Ribbon */}
      {featured && <FeaturedRibbon />}
      <CardHeader>
        <div className="flex items-start gap-4">
          {icon && (
            <Avatar
              src={icon}
              alt={title}
              fallback={title.charAt(0)}
              size="lg"
              className="rounded-lg"
            />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="flex-1">{title}</CardTitle>
              {/* GitHub と Project リンクアイコン */}
              <TooltipProvider>
                <div className="flex gap-1 relative z-10">
                  {githubUrl && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(githubUrl, '_blank', 'noopener,noreferrer');
                          }}
                          className="p-1.5 rounded-md hover:bg-muted transition-colors flex items-center justify-center"
                          aria-label="View on GitHub"
                        >
                          <TechIcon techName="GitHub" size="sm" showLabel={false} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>リポジトリを見る</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {projectUrl && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(projectUrl, '_blank', 'noopener,noreferrer');
                          }}
                          className="p-1.5 rounded-md hover:bg-muted transition-colors flex items-center justify-center"
                          aria-label="View project"
                        >
                          <ExternalLink className="h-6 w-6 text-foreground" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>プロジェクトサイトを見る</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </TooltipProvider>
            </div>
            <CardDescription>{period}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* 技術スタックと矢印アイコンを横並びに */}
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <TechStackList techStack={techStack} size="sm" showLabels={true} />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform shrink-0">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div onClick={handleCardClick} className="block">
      {cardContent}
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
