import React from 'react';
import { cx } from 'shared/lib/class-names';
import { Theme, useTheme } from 'app/providers/theme';
import { Button } from 'shared/ui/button';
import { IoIosSunny as SunIcon, IoMdMoon as MoonIcon } from 'react-icons/io';
import styles from './theme-switcher.module.scss';

interface Props{
    className?: string;
}

function ThemeSwitcher(props: Props) {
  const { theme, toggleTheme } = useTheme();
  const { className } = props;
  return (
    <Button className={cx(styles.root, className)} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <SunIcon size={24} /> : <MoonIcon size={24} />}
    </Button>
  );
}

export { ThemeSwitcher };
