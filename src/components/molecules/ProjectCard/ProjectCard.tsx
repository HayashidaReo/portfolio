import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/atoms/Card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/atoms/Tooltip';
import { Avatar } from '@/components/atoms/Avatar';
import { TechStackList } from '@/components/molecules/TechStackList';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { TechIcon } from '@/components/atoms/TechIcon';

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

export const ProjectCard: React.FC<ProjectCardProps> = ({
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
  return (
    <Link to={`/works/${id}`} className="block">
      <Card
        className={cn(
          'w-full hover:shadow-lg transition-all cursor-pointer group relative',
          className
        )}
      >
        {/* Featured Ribbon */}
        {featured && (
          <div className="absolute top-0 left-0 z-10 overflow-hidden w-16 h-16">
            <div className="absolute transform -rotate-45 bg-red-600 text-white text-center font-semibold py-1 left-[-24px] top-[6px] w-[80px] shadow-md text-xs">
              注目
            </div>
          </div>
        )}
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
                  <div className="flex gap-1">
                    {githubUrl && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-md hover:bg-muted transition-colors flex items-center justify-center"
                            aria-label="View on GitHub"
                          >
                            <TechIcon techName="GitHub" size="sm" showLabel={false} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>リポジトリを見る</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    {projectUrl && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-md hover:bg-muted transition-colors flex items-center justify-center"
                            aria-label="View project"
                          >
                            <ExternalLink className="h-6 w-6 text-foreground" />
                          </a>
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
    </Link>
  );
};
