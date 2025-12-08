import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, FeaturedRibbon } from '@/components/atoms';
import { TechStackList } from '@/components/molecules';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CareerCardProps {
  id?: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
  hasDetail?: boolean;
  featured?: boolean;
  className?: string;
}

/**
 * CareerCard - 経歴カードコンポーネント
 *
 * React.memoでメモ化し、タイムラインで複数表示される際の不要な再レンダリングを防止
 */
export const CareerCard = React.memo<CareerCardProps>(({
  id,
  company,
  period,
  description,
  techStack,
  hasDetail = false,
  featured,
  className,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (hasDetail && id) {
      navigate(`/careers/${id}`, {
        state: { fromCareerId: id, fromSection: 'career' }
      });
    }
  };
  const cardContent = (
    <Card
      className={cn(
        'w-full relative',
        hasDetail && 'hover:shadow-lg transition-all cursor-pointer group',
        className
      )}
    >
      {/* Featured Ribbon */}
      {featured && <FeaturedRibbon />}
      <CardHeader>
        <CardTitle>{company}</CardTitle>
        <CardDescription>{period}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <TechStackList techStack={techStack} size="sm" showLabels={true} />
            </div>
            {hasDetail && (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform shrink-0">
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (hasDetail && id) {
    return <div onClick={handleCardClick} className="block">{cardContent}</div>;
  }

  return cardContent;
});

CareerCard.displayName = 'CareerCard';
