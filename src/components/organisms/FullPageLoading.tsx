import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/atoms';
import { LoadingScreen } from '@/components/molecules';
import { ArrowLeft } from 'lucide-react';

/**
 * FullPageLoading - フルページローディング (Organism)
 *
 * ヘッダー（戻るボタン）とローディング画面を組み合わせた、
 * 詳細ページ用のローディングUIコンポーネント。
 * ビジネスロジック（ナビゲーション）を含む複合コンポーネント。
 */

interface FullPageLoadingProps {
  /** 表示するメッセージ */
  message?: string;
  /** 戻るボタンのラベル */
  backLabel?: string;
  /** 戻るボタンのクリックハンドラ（未指定の場合はnavigate(-1)） */
  onBack?: () => void;
  /** ヘッダーの右側に表示するコンテンツ */
  headerRight?: React.ReactNode;
}

export const FullPageLoading: React.FC<FullPageLoadingProps> = ({
  message = '読み込み中...',
  backLabel = '戻る',
  onBack,
  headerRight
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4">
          <Button variant="ghost" onClick={handleBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Button>
          {headerRight && <div>{headerRight}</div>}
        </div>
      </header>

      {/* Loading Content */}
      <LoadingScreen
        message={message}
        spinnerSize="lg"
        className="min-h-[calc(100vh-4rem)]"
      />
    </div>
  );
};
