import { useCallback, useEffect } from 'react';

export const useKeyDown = (key: string, callBack: ((event: KeyboardEvent) => void)) => {
  const onKeyDown = useCallback((event: KeyboardEvent) => {
    const isValidKey = event.key === key;
    if (isValidKey) {
      callBack(event);
    }
  }, [callBack]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};
