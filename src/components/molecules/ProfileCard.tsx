import React from 'react';
import { Avatar, Card, CardContent } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface ProfileCardProps {
  name: string;
  title: string;
  organization?: string;
  grade?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  organization,
  grade,
  avatarSrc,
  avatarAlt,
  className,
}) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardContent className="flex flex-col items-center pt-6 text-center space-y-2">
        <Avatar
          src={avatarSrc}
          alt={avatarAlt || name}
          fallback={name.charAt(0)}
          size="xl"
          className="mb-2"
        />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-muted-foreground">{title}</p>
        {(organization || grade) && (
          <div className="text-sm text-muted-foreground space-y-1">
            {organization && <p>{organization}</p>}
            {grade && <p>{grade}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
