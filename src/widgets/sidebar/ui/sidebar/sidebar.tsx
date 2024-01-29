import React, { useState } from 'react';
import { cx } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import styles from './sidebar.module.scss';

interface Props {
    className?: string;
}

export function Sidebar(props: Props) {
  const [collapsed, setCollapsed] = useState(() => false);
  const { className } = props;
  return (
    <div className={cx(styles.root, collapsed && styles.collapsed, className)}>
      <Button onClick={() => setCollapsed((prev) => !prev)}>collapse</Button>
    </div>
  );
}
