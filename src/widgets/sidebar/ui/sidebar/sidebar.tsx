import { useState } from 'react';
import { cx } from 'shared/lib/class-names';
import { Button, ButtonTheme } from 'shared/ui/button';
import styles from './sidebar.module.scss';

interface Props {
    className?: string;
}

export function Sidebar(props: Props) {
  const [collapsed, setCollapsed] = useState(() => false);
  const { className } = props;
  return (
    <div data-testid="sidebar" className={cx(styles.root, collapsed && styles.collapsed, className)}>
      <Button
        className={cx(styles.button)}
        theme={ButtonTheme.CLEAN}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        collapse
      </Button>
    </div>
  );
}
