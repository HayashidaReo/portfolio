import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms';
import { SocialLink, GitHubContributions } from '@/components/molecules';
import { profile } from '@/data/profile';
import xIcon from '@/assets/icon/xIcon.png';
import qiitaIcon from '@/assets/icon/qiitaIcon.png';

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
                  <img src={xIcon} alt="X" className="h-5 w-5 object-contain" />
                  {twitter.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {twitter.description}
                </p>
                <SocialLink
                  icon={xIcon}
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
                  <img
                    src={qiitaIcon}
                    alt="Qiita"
                    className="h-5 w-5 object-contain"
                  />
                  {qiita.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {qiita.description}
                </p>
                <SocialLink
                  icon={qiitaIcon}
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
