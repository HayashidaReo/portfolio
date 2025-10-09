import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/atoms/Card';
import { Avatar } from '@/components/atoms/Avatar';
import { TechStackList } from '@/components/molecules/TechStackList';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  period: string;
  description: string;
  techStack: string[];
  icon?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  period,
  description,
  techStack,
  icon,
  className,
}) => {
  return (
    <Link to={`/works/${id}`} className="block">
      <Card
        className={cn(
          'w-full hover:shadow-lg transition-all cursor-pointer group',
          className
        )}
      >
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
