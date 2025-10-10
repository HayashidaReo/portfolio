import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/atoms/Card';
import { TechStackList } from '@/components/molecules/TechStackList';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CareerCardProps {
  id?: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
  hasDetail?: boolean;
  className?: string;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  id,
  company,
  period,
  description,
  techStack,
  hasDetail = false,
  className,
}) => {
  const cardContent = (
    <Card
      className={cn(
        'w-full',
        hasDetail && 'hover:shadow-lg transition-all cursor-pointer group',
        className
      )}
    >
      <CardHeader>
        <CardTitle>{company}</CardTitle>
        <CardDescription>{period}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <TechStackList techStack={techStack} size="sm" showLabels={true} />
            </div>
            {hasDetail && (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform shrink-0">
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (hasDetail && id) {
    return <Link to={`/careers/${id}`} className="block">{cardContent}</Link>;
  }

  return cardContent;
};
