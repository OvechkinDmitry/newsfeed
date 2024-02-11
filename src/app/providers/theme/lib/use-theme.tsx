import { useContext, useEffect } from 'react';
import { LS_THEME_KEY, Theme, ThemeContext } from 'app/providers/theme/lib/context';

interface UseThemeResult{
    theme: Theme,
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const current = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem(LS_THEME_KEY, current);
    setTheme(current);
  };

  return { theme, toggleTheme };
};
