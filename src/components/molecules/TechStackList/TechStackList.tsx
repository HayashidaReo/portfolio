import { TechIcon } from '@/components/atoms/TechIcon';

interface TechStackListProps {
  techStack: string[];
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  className?: string;
}

/**
 * 技術スタックのアイコンリストを表示するMoleculeコンポーネント
 */
export const TechStackList: React.FC<TechStackListProps> = ({
  techStack,
  size = 'md',
  showLabels = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {techStack.map((tech, index) => (
        <TechIcon
          key={`${tech}-${index}`}
          techName={tech}
          size={size}
          showLabel={showLabels}
        />
      ))}
    </div>
  );
};
