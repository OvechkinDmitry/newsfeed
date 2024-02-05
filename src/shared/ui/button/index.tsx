import { ButtonHTMLAttributes } from 'react';
import { cx } from 'shared/lib/class-names';
import styles from './button.module.scss';

enum Theme {
  CLEAN = 'clean',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

enum ButtonSize{
  M = 'm',
  L = 'l',
  XL = 'xl',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: Theme;
  square?: boolean;
  size?: ButtonSize;
}

function Button(props: Props) {
  const {
    className, theme = Theme.CLEAN, square, size, ...rest
  } = props;
  return (
    <button
      type="button"
      {...rest}
      className={cx(styles.root, styles[theme], square && styles.square, styles[size], className)}
    />
  );
}

export { Theme as ButtonTheme, ButtonSize, Button };
