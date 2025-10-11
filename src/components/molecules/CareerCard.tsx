import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/atoms';
import { TechStackList } from '@/components/molecules';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CareerCardProps {
  id?: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
  hasDetail?: boolean;
  featured?: boolean;
  className?: string;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  id,
  company,
  period,
  description,
  techStack,
  hasDetail = false,
  featured,
  className,
}) => {
  const cardContent = (
    <Card
      className={cn(
        'w-full relative',
        hasDetail && 'hover:shadow-lg transition-all cursor-pointer group',
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
