import React, { FC, MouseEvent, useCallback } from 'react';
import { IoIosClose as CloseIcon } from 'react-icons/io';
import { cx } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import { useKeyDown } from 'shared/lib/hooks/use-key-down';
import styles from './modal.module.scss';

interface Props {
    className?: string;
    onClose?: () => void;
}

export const Modal: FC<Props> = (props) => {
  const {
    className,
    onClose, children,
  } = props;

  const onModalClick = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  const onOverlayClick = useCallback(() => {
    onClose();
  }, [onClose]);

  useKeyDown('Escape', onClose);

  return (
    <div className={cx(styles.root)}>
      <div className={cx(styles.overlay)} onClick={onOverlayClick}>
        <div onClick={onModalClick} className={cx(styles.modal, className)}>
          <Button className={cx(styles.close)} onClick={onClose}>
            <CloseIcon size={64} />
          </Button>
          {children}
        </div>
      </div>
    </div>
  );
};
