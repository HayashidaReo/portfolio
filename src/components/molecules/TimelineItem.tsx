import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('relative pl-8 pb-8 last:pb-0', className)}>
      {/* Timeline marker */}
      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
        <div className="h-3 w-3 rounded-full border-2 border-primary bg-background ring-4 ring-background" />
      </div>

      {/* Timeline line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border last:hidden" />

      {/* Content */}
      <div className="pt-0.5">{children}</div>
    </div>
  );
};
