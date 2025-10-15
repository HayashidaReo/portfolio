import React from 'react';
import { Button, TechIcon } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  icon?: React.ComponentType<{ className?: string }>; // Lucide icon
  techName?: string; // 技術名（TechIconを使用する場合）
  label: string;
  href: string;
  bgColor?: string; // カスタム背景色
  textColor?: string; // カスタムテキスト色
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  techName,
  label,
  href,
  bgColor,
  className,
}) => {
  const IconComponent = icon;

  // 背景色をCSSの色コードに変換（bg-[#xxxxx]形式から#xxxxxを抽出）
  const extractColor = (colorClass: string) => {
    const match = colorClass.match(/\[([^\]]+)\]/);
    return match ? match[1] : '';
  };

  const bgColorValue = bgColor ? extractColor(bgColor) : '';

  return (
    <Button
      variant={bgColor ? 'default' : 'outline'}
      size="lg"
      asChild
      className={cn(
        'w-full justify-start transition-all duration-300',
        'hover:shadow-lg hover:-translate-y-0.5',
        !bgColor && 'hover:bg-accent hover:text-accent-foreground',
        className
      )}
      style={
        bgColor
          ? {
              backgroundColor: bgColorValue,
              color: 'white',
            }
          : undefined
      }
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3"
        style={
          bgColor
            ? {
                backgroundColor: bgColorValue,
                color: 'white',
              }
            : undefined
        }
      >
        {techName ? (
          <TechIcon techName={techName} size="sm" />
        ) : (
          IconComponent && <IconComponent className="h-5 w-5" />
        )}
        <span>{label}</span>
      </a>
    </Button>
  );
};
