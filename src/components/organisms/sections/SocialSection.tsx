import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms/Card';
import { SocialLink } from '@/components/molecules/SocialLink';
import { GitHubContributions } from '@/components/molecules/GitHubContributions';
import { profile } from '@/data/profile';
import { Github, Twitter, FileText, BookOpen } from 'lucide-react';

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
                  <Twitter className="h-5 w-5" />
                  X (Twitter)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  技術情報や学習記録を発信しています
                </p>
                <SocialLink
                  icon={Twitter}
                  label="Twitter Profile"
                  href={twitter.url}
                />
              </CardContent>
            </Card>

            {/* Qiita */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Qiita
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  技術記事を投稿し、学んだことをアウトプットしています
                </p>
                <SocialLink
                  icon={FileText}
                  label="Qiita Profile"
                  href={qiita.url}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
