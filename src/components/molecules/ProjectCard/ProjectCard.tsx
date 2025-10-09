import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/atoms/Card';
import { Badge } from '@/components/atoms/Badge';
import { Avatar } from '@/components/atoms/Avatar';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  period: string;
  description: string;
  techStack: string[];
  icon?: string;
  githubUrl?: string;
  projectUrl?: string;
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
  className,
}) => {
  return (
    <Card className={cn('w-full hover:shadow-lg transition-shadow', className)}>
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
            <CardTitle>{title}</CardTitle>
            <CardDescription>{period}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2 justify-between flex-wrap">
        <div className="flex gap-2 flex-wrap">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}

          {projectUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
                View
              </a>
            </Button>
          )}
        </div>

        <Button variant="default" size="sm" asChild className="ml-auto">
          <Link to={`/works/${id}`}>
            詳細を見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
