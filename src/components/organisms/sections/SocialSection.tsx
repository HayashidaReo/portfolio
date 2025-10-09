import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms/Card';
import { SocialLink } from '@/components/molecules/SocialLink';
import { Github, Twitter, FileText, BookOpen } from 'lucide-react';

export const SocialSection: React.FC = () => {
  // TODO: 実際のURLに置き換える
  const socialLinks = {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    qiita: 'https://qiita.com/yourusername',
    zenn: 'https://zenn.dev/yourusername',
  };

  return (
    <section id="social" className="w-full py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Social Links</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* GitHub */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                日々のコントリビューションやプロジェクトを公開しています
              </p>
              <SocialLink
                icon={Github}
                label="GitHub Profile"
                href={socialLinks.github}
              />
            </CardContent>
          </Card>

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
                href={socialLinks.twitter}
              />
            </CardContent>
          </Card>

          {/* Tech Blog */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Tech Blog
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                技術記事を投稿し、学んだことをアウトプットしています
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <SocialLink
                  icon={FileText}
                  label="Qiita"
                  href={socialLinks.qiita}
                />
                <SocialLink
                  icon={BookOpen}
                  label="Zenn"
                  href={socialLinks.zenn}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
