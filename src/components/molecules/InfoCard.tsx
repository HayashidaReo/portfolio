import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  content: string | React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  content,
  icon: Icon,
  className,
}) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 text-primary" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {typeof content === 'string' ? (
          <p className="text-muted-foreground leading-relaxed">{content}</p>
        ) : (
          content
        )}
      </CardContent>
    </Card>
  );
};
