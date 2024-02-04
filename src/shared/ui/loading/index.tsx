import { cx } from 'shared/lib/class-names';
import { AiOutlineLoading as SpinnerSVG } from 'react-icons/ai';
import styles from './loading.module.scss';

interface Props {
  className?: string;
}

export const Spinner = (props: Props) => {
  const { className } = props;
  return <SpinnerSVG size={64} className={cx(styles.root, className)} />;
};
