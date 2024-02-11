import { cx } from 'shared/lib/class-names';
import { ThemeSwitcher } from 'widgets/theme-swither';
import { Modal } from 'shared/ui/modal';
import { useState } from 'react';
import { Portal } from 'shared/ui/portal';
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
      <div className={cx(styles.links)} onClick={() => setOpened(true)}>
        toggle
      </div>
      {opened && (
      <Portal>
        <Modal onClose={() => setOpened(false)}>
          Some text text text text text text text text text text text text text text text text text text
          ext text text text text te xt text text text
          text text text text text text text text text text text text
        </Modal>
      </Portal>
      )}
    </div>
  );
}
