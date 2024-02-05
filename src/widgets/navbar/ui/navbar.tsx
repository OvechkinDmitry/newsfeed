import { cx } from 'shared/lib/class-names';
import { ThemeSwitcher } from 'widgets/theme-swither';
import styles from './navbar.module.scss';

interface Props {
    className?: string;
}

export function Navbar(props: Props) {
  const { className } = props;
  return (
    <div className={cx(styles.root, className)}>
      <ThemeSwitcher className={cx(styles['theme-switcher'])} />
      <div className={cx(styles.links)}>
        /
      </div>
    </div>
  );
}
