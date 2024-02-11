import { useState } from 'react';
import { cx } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import {
  AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineHome, AiOutlineInfoCircle,
} from 'react-icons/ai';
import { Link } from 'shared/ui/link';
import { RoutePaths } from 'app/config/route/config';
import styles from './sidebar.module.scss';

interface Props {
    className?: string;
}

export function Sidebar(props: Props) {
  const [collapsed, setCollapsed] = useState(() => false);
  const { className } = props;
  const Icon = collapsed ? AiOutlineMenuFold : AiOutlineMenuUnfold;
  return (
    <div data-testid="sidebar" className={cx(styles.root, collapsed && styles.collapsed, className)}>
      <div className={cx(styles['sidebar-control'])}>
        <Button
          square
          className={cx(styles.button)}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <Icon size={28} fill="currentColor" />
        </Button>
      </div>
      <div className={cx(styles.items)}>
        <Link className={styles.item} to={RoutePaths.main}>
          <AiOutlineHome size={28} />
          <span children="Главная" />
        </Link>
        <Link className={styles.item} to={RoutePaths.about}>
          <AiOutlineInfoCircle size={28} />
          <span children="О сайте" />
        </Link>
      </div>
    </div>
  );
}
