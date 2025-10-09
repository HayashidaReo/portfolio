import React from 'react';
import { Progress } from '@/components/atoms/Progress';
import { Badge } from '@/components/atoms/Badge';
import { cn } from '@/lib/utils';

interface SkillItemProps {
  name: string;
  level?: number;
  experience?: string;
  className?: string;
}

export const SkillItem: React.FC<SkillItemProps> = ({
  name,
  level,
  experience,
  className,
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm">{name}</span>
        {experience && (
          <Badge variant="outline" className="text-xs">
            {experience}
          </Badge>
        )}
      </div>
      {level !== undefined && (
        <Progress value={level} className="h-2" />
      )}
    </div>
  );
};
