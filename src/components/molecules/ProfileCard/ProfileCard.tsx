import React from 'react';
import { Avatar } from '@/components/atoms/Avatar';
import { Card, CardContent } from '@/components/atoms/Card';
import { cn } from '@/lib/utils';

interface ProfileCardProps {
  name: string;
  title: string;
  avatarSrc?: string;
  avatarAlt?: string;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  avatarSrc,
  avatarAlt,
  className,
}) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardContent className="flex flex-col items-center pt-6 text-center">
        <Avatar
          src={avatarSrc}
          alt={avatarAlt || name}
          fallback={name.charAt(0)}
          size="xl"
          className="mb-4"
        />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-muted-foreground mt-1">{title}</p>
      </CardContent>
    </Card>
  );
};
