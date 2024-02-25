import React, { useCallback } from 'react';
import { Modal } from 'shared/ui/modal';
import { LoginForm } from 'features/auth-by-username/ui/login-form';

interface Props {
    className?: string;
    onClose: VoidFunction
}

export const LoginModal = (props: Props) => {
  const { className, onClose } = props;

  return (
    <Modal onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};
