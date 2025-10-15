import React, { useState } from 'react';
import { Input, Textarea, Button } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { submitContactForm } from '@/utils/formspree';
import type { ContactFormData, FormSubmitStatus } from '@/types';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [status, setStatus] = useState<FormSubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    const result = await submitContactForm(data);

    if (result.ok) {
      setStatus('success');
      // フォームをリセット
      e.currentTarget.reset();
    } else {
      setStatus('error');
      const generalError = result.errors?.find((err) => err.field === 'general');
      setErrorMessage(
        generalError?.message || '送信に失敗しました。もう一度お試しください。'
      );
    }
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
          disabled={status === 'submitting'}
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
          disabled={status === 'submitting'}
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
          disabled={status === 'submitting'}
        />
      </div>

      {status === 'success' && (
        <div className="rounded-md bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
          メッセージを送信しました。お問い合わせありがとうございます!
        </div>
      )}

      {status === 'error' && errorMessage && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-400">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? '送信中...' : '送信する'}
      </Button>
    </form>
  );
};
