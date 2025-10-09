import React from 'react';
import { Badge } from '@/components/atoms/Badge';
import { cn } from '@/lib/utils';

interface InterestsListProps {
  interests: string[];
  className?: string;
}

export const InterestsList: React.FC<InterestsListProps> = ({
  interests,
  className,
}) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {interests.map((interest, index) => (
        <Badge key={index} variant="secondary">
          {interest}
        </Badge>
      ))}
    </div>
  );
};
