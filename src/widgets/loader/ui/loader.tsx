import React from 'react';
import { cx } from 'shared/lib/class-names';
import { Loading } from 'shared/ui/loading';
import styles from './loader.module.scss';

interface Props {
    className?: string;
}

export const Loader = (props: Props) => {
  const { className } = props;
  return (
    <div className={cx(styles.root, className)}>
      <Loading />
    </div>
  );
};
