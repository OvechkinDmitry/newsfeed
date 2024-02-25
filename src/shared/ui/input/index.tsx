import {
  FocusEvent,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  memo,
  useState,
} from 'react';
import { cx } from 'shared/lib/class-names';
import styles from './input.module.scss';

type NoChildren<T extends { children?: any }> = Omit<T, 'children'>;

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    labelProps?: NoChildren<LabelHTMLAttributes<HTMLLabelElement>>;
    className?: string;
}

export const Input = memo((props: Props) => {
  const {
    className,
    type = 'text',
    labelProps = {},
    label,
    placeholder,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);

  const rootClass = cx(
    styles.root,
    className,
    focused && styles.focused,
  );

  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    rest?.onFocus?.(event);
    setFocused(true);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    rest?.onBlur?.(event);
    setFocused(false);
  };

  return (
    <div className={rootClass}>
      {label && (
      <label
        {...labelProps}
        children={label}
        className={cx(styles.label, labelProps.className)}
      />
      )}
      <div className={cx(styles['input-wrapper'])}>
        <input
          {...rest}
          className={cx(styles.input)}
          placeholder={focused && placeholder}
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
});
