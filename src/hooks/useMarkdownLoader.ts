import { useState, useEffect } from 'react';

/**
 * Markdownファイル読み込み用カスタムフック
 * 
 * @param filePath - 読み込むMarkdownファイルのパス
 * @param basePath - ベースパス ('careers' または 'projects')
 */
interface UseMarkdownLoaderProps {
  filePath?: string;
  basePath: 'careers' | 'projects';
}

interface UseMarkdownLoaderResult {
  content: string;
  isLoading: boolean;
  error: Error | null;
}

export const useMarkdownLoader = ({ 
  filePath, 
  basePath
}: UseMarkdownLoaderProps): UseMarkdownLoaderResult => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      if (!filePath) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`/markdown/${basePath}/${filePath}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.status}`);
        }
        
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error('Failed to load markdown:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setContent('');
      } finally {
        setIsLoading(false);
      }
    };

    loadMarkdown();
  }, [filePath, basePath]);

  return { content, isLoading, error };
};