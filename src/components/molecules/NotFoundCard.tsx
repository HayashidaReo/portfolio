import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Button } from '@/components/atoms';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface NotFoundCardProps {
  /** エンティティ名（例: "プロジェクト"、"経歴"） */
  entityName: string;
  /** 戻るボタン押下時の動作（未指定の場合はnavigate(-1)） */
  onBack?: () => void;
}

/**
 * NotFoundCard - エンティティが見つからない場合のエラー表示コンポーネント
 *
 * ProjectDetailPageとCareerDetailPageで共通の「見つかりません」UI
 * Molecules層のコンポーネントとして、エラー状態の表示を担当
 *
 * 【使用例】
 * ```tsx
 * <NotFoundCard entityName="プロジェクト" />
 * <NotFoundCard entityName="経歴" onBack={() => navigate('/')} />
 * ```
 */
export const NotFoundCard: React.FC<NotFoundCardProps> = ({
  entityName,
  onBack,
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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/20">
      <Card className="max-w-md w-full shadow-lg">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
            <ExternalLink className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold">{entityName}が見つかりません</h1>
          <p className="text-muted-foreground">
            指定された{entityName}は存在しないか、削除された可能性があります。
          </p>
          <Button onClick={handleBack} className="mt-4">
            <ArrowLeft className="h-4 w-4" />
            ホームに戻る
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
