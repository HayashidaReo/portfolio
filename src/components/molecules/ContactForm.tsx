import React, { useState } from 'react';
import { Input, Textarea, Button } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { submitContactForm } from '@/utils/formspree';
import { useToast } from '@/hooks';
import type { ContactFormData, FormSubmitStatus } from '@/types';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [status, setStatus] = useState<FormSubmitStatus>('idle');
  const { success, error } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    console.log('Submitting form...', data);

    const result = await submitContactForm(data);

    console.log('Submit result:', result);

    if (result.ok) {
      setStatus('success');
      // 成功メッセージをスナックバーで表示
      success('送信完了', 'お問い合わせいただきありがとうございます。確認後ご連絡させていただきます。');
      // フォームをリセット（状態更新後に実行）
      setTimeout(() => {
        form.reset();
      }, 100);
    } else {
      setStatus('error');
      const generalError = result.errors?.find((err) => err.field === 'general');
      const errorMsg =
        generalError?.message || '送信に失敗しました。もう一度お試しください。';
      // エラーメッセージをスナックバーで表示
      error('送信失敗', errorMsg);
    }

    // 送信完了後、状態をリセット
    setTimeout(() => {
      setStatus('idle');
    }, 500);
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
