import { cx } from 'shared/lib/class-names';
import styles from './not-found.module.scss';

interface Props {
    className?: string;
}

export const NotFound = (props: Props) => {
  const { className } = props;
  return (
    <div className={cx(styles.root, className)}>
      Страница не найдена
    </div>
  );
};
