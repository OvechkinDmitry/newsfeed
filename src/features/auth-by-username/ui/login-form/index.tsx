import React from 'react';
import { cx } from 'shared/lib/class-names';
import { Button, ButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import styles from './login-form.module.scss';

interface Props {
    className?: string;
}

export const LoginForm = (props: Props) => {
  const { className } = props;
  return (
    <div className={cx(styles.root, className)}>
      <Input labelProps={{ title: 'QWERTY' }} />
      <Input />
      <Button theme={ButtonTheme.BACKGROUND} className={cx(styles.button)} children="Sign in" />
    </div>
  );
};
