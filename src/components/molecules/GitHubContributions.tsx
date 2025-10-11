import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, Button, TechIcon } from '@/components/atoms';

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
  const githubUrl = `https://github.com/${username}`;

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <TechIcon techName="GitHub" size="sm" showLabel={false} />
            GitHub Contributions
          </CardTitle>
          <Button
            size="sm"
            asChild
            className="transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              backgroundColor: '#24292e',
              color: 'white',
            }}
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#24292e',
                color: 'white',
              }}
            >
              プロフィールを見る
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <a
          href={githubUrl}
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
