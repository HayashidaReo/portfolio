import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/atoms/Card';
import { TechStackList } from '@/components/molecules/TechStackList';
import { cn } from '@/lib/utils';

interface CareerCardProps {
  company: string;
  period: string;
  description: string;
  techStack?: string[];
  className?: string;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  company,
  period,
  description,
  techStack,
  className,
}) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>{company}</CardTitle>
        <CardDescription>{period}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <TechStackList techStack={techStack} size="sm" showLabels={true} />
        )}
      </CardContent>
    </Card>
  );
};
