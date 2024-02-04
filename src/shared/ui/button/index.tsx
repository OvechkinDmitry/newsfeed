import { ButtonHTMLAttributes } from 'react';
import { cx } from 'shared/lib/class-names';
import styles from './button.module.scss';

enum Theme {
  CLEAN = 'clean',
  OUTLINE = 'outline'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: Theme;
}

function Button(props: Props) {
  const { className, theme = Theme.CLEAN, ...rest } = props;
  return (
    <button
      type="button"
      {...rest}
      className={cx(styles.root, styles[theme], className)}
    />
  );
}

export { Theme as ButtonTheme, Button };
