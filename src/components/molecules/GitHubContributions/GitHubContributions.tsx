import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/atoms/Card';
import { Github } from 'lucide-react';

interface GitHubContributionsProps {
  username: string;
  className?: string;
}

/**
 * GitHubの草グラフ（コントリビューション）を表示するコンポーネント
 */
export const GitHubContributions: React.FC<GitHubContributionsProps> = ({
  username,
  className = '',
}) => {
  // GitHubのコントリビューショングラフ画像URL
  const contributionUrl = `https://ghchart.rshah.org/${username}`;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="h-5 w-5" />
          GitHub Contributions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <img
            src={contributionUrl}
            alt={`${username}'s GitHub contributions`}
            className="w-full h-auto"
            loading="lazy"
          />
        </a>
      </CardContent>
    </Card>
  );
};
