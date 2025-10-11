import React from 'react';
import { Progress, Badge, TechIcon } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface SkillItemProps {
  name: string;
  iconName?: string; // アイコン表示用の技術名
  level?: number;
  experience?: string;
  className?: string;
}

export const SkillItem: React.FC<SkillItemProps> = ({
  name,
  iconName,
  level,
  experience,
  className,
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <TechIcon
            techName={iconName || name}
            size="sm"
            showLabel={false}
            className="shrink-0"
          />
          <span className="font-medium text-sm truncate">{name}</span>
        </div>
        {experience && (
          <Badge variant="outline" className="text-xs shrink-0">
            {experience}
          </Badge>
        )}
      </div>
      {level !== undefined && <Progress value={level} className="h-2" />}
    </div>
  );
};
