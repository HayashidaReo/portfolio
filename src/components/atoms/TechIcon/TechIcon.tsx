import { getDeviconUrl } from '@/utils/devicon';

interface TechIconProps {
  techName: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const sizeMap = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

/**
 * 技術スタックのアイコンを表示するAtomコンポーネント
 */
export const TechIcon: React.FC<TechIconProps> = ({
  techName,
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const iconUrl = getDeviconUrl(techName);
  const sizeClass = sizeMap[size];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50 hover:bg-secondary transition-colors border border-border/50 ${className}`}
    >
      <img
        src={iconUrl}
        alt={`${techName} icon`}
        className={`${sizeClass} object-contain`}
        onError={(e) => {
          // アイコンの読み込みに失敗した場合は、plain バリエーションにフォールバック
          const target = e.target as HTMLImageElement;
          if (target.src.includes('-original.svg')) {
            const plainUrl = target.src.replace('-original.svg', '-plain.svg');
            target.src = plainUrl;
          }
        }}
      />
      {showLabel && (
        <span className="text-sm font-medium text-foreground">{techName}</span>
      )}
    </div>
  );
};
