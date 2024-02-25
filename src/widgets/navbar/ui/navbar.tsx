import { cx } from 'shared/lib/class-names';
import { ThemeSwitcher } from 'widgets/theme-swither';
import { Modal } from 'shared/ui/modal';
import { useState } from 'react';
import { Portal } from 'shared/ui/portal';
import { LoginModal } from 'features/auth-by-username';
import { Button } from 'shared/ui/button';
import styles from './navbar.module.scss';

interface Props {
    className?: string;
}

export function Navbar(props: Props) {
  const { className } = props;
  const [opened, setOpened] = useState(false);
  return (
    <div className={cx(styles.root, className)}>
      <ThemeSwitcher className={cx(styles['theme-switcher'])} />
      <Button className={cx(styles.links)} onClick={() => setOpened(true)}>
        Sign in
      </Button>
      {opened && (
      <Portal>
        <LoginModal onClose={() => setOpened(false)} />
      </Portal>
      )}
    </div>
  );
}
