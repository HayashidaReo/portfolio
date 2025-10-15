import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/atoms';
import { ArrowLeft } from 'lucide-react';

interface DetailPageHeaderProps {
  /** 戻るボタン押下時の動作（未指定の場合はnavigate(-1)） */
  onBack?: () => void;
  /** ヘッダー右側に表示するコンテンツ */
  rightContent?: React.ReactNode;
}

/**
 * DetailPageHeader - 詳細ページ共通ヘッダーコンポーネント
 *
 * ProjectDetailPageとCareerDetailPageで共通のヘッダーUI
 * Organisms層のコンポーネントとして、ページレイアウトの一部を担当
 */
export const DetailPageHeader: React.FC<DetailPageHeaderProps> = ({
  onBack,
  rightContent,
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4">
        <Button variant="ghost" onClick={handleBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          戻る
        </Button>
        {rightContent && <div className="flex gap-2">{rightContent}</div>}
      </div>
    </header>
  );
};
