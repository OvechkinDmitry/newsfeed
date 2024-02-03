import React from 'react';
import { cx } from 'shared/lib/class-names';
import { AiOutlineLoading as Spinner } from 'react-icons/ai';
import styles from './loading.module.scss';

interface Props {
    className?: string;
}

export const Loading = (props: Props) => {
  const { className } = props;
  return <Spinner size={64} className={cx(styles.root, className)} />;
};
