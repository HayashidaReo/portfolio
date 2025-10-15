/**
 * お問い合わせフォームのデータ型定義
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * フォーム送信のレスポンス型定義
 */
export interface FormSubmitResponse {
  ok: boolean;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

/**
 * フォーム送信の状態
 */
export type FormSubmitStatus = 'idle' | 'submitting' | 'success' | 'error';
