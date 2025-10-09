import React from 'react';
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
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
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
    <Card className={cn('w-full', className)}>
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
        <p className="text-sm text-muted-foreground leading-relaxed">
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

      {(githubUrl || projectUrl) && (
        <CardFooter className="gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              View Project
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
