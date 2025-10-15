import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, TechIcon } from '@/components/atoms';
import { SocialLink, GitHubContributions } from '@/components/molecules';
import { profile } from '@/data/profile';

export const SocialSection: React.FC = () => {
  const { github, twitter, qiita } = profile.social;

  return (
    <section id="social" className="w-full py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Social Links</h2>

        <div className="space-y-6">
          {/* GitHub Contributions - 横一面 */}
          <GitHubContributions username={github.username} />

          {/* X (Twitter) と Qiita */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* X (Twitter) */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TechIcon techName="x" size="sm" />
                  {twitter.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {twitter.description}
                </p>
                <SocialLink
                  techName="x"
                  label={twitter.buttonLabel}
                  href={twitter.url}
                  bgColor="bg-[#1DA1F2]"
                  textColor="text-white"
                />
              </CardContent>
            </Card>

            {/* Qiita */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TechIcon techName="qiita" size="sm" />
                  {qiita.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {qiita.description}
                </p>
                <SocialLink
                  techName="qiita"
                  label={qiita.buttonLabel}
                  href={qiita.url}
                  bgColor="bg-[#55C500]"
                  textColor="text-white"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
