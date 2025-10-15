import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, Button, TechIcon } from '@/components/atoms';
import { ContactForm } from '@/components/molecules';
import { Mail } from 'lucide-react';
import { profile } from '@/data';

export const ContactSection: React.FC = () => {
  const { email, twitterDM } = profile.contact;

  return (
    <section id="contact" className="w-full py-16 px-4 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* お問い合わせフォーム */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                お問い合わせフォーム
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* メールアドレス */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                直接メールでもお問い合わせいただけます
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href={`mailto:${email}`}>
                  {email}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* SNS DM */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TechIcon techName="x" size="sm" />
                Direct Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                X (Twitter) のDMでもご連絡いただけます
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href={twitterDM} target="_blank" rel="noopener noreferrer">
                  Send DM
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
