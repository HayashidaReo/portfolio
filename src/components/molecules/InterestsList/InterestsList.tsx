import React from 'react';
import { TechStackList } from '@/components/molecules/TechStackList';

interface InterestsListProps {
  interests: readonly string[];
  className?: string;
}

export const InterestsList: React.FC<InterestsListProps> = ({
  interests,
  className,
}) => {
  return (
    <TechStackList
      techStack={interests}
      size="sm"
      showLabels={true}
      className={className}
    />
  );
};
