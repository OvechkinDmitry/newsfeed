import React, {ButtonHTMLAttributes} from 'react';
import styles from './button.module.scss'
import {cx} from "shared/lib/class-names";

enum Theme{
    CLEAN = 'clean'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?:Theme;
}

const Button = (props: Props) => {
    const {
        className,
        theme = Theme.CLEAN,
        ...rest
    }
    = props
    return (
        <button {...rest} className={cx(styles.root, styles[theme], className)}/>
    );
};

export { Theme as ButtonTheme, Button }