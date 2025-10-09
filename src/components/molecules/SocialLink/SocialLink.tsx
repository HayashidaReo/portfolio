import React from 'react';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon: Icon,
  label,
  href,
  className,
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      asChild
      className={cn('w-full justify-start', className)}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="h-5 w-5" />
        {label}
      </a>
    </Button>
  );
};
