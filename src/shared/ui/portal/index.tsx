import { FC } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  container?: Element;
}

export const Portal: FC<Props> = (props) => {
  const { children, container = document.body } = props;
  return createPortal(children, container);
};
