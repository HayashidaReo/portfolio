import React from 'react';
import { Input } from '@/components/atoms/Input';
import { Textarea } from '@/components/atoms/Textarea';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: フォーム送信処理を実装
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          お名前 <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          name="name"
          placeholder="山田 太郎"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          メールアドレス <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          メッセージ <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="お問い合わせ内容をご記入ください"
          rows={5}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        送信する
      </Button>
    </form>
  );
};
