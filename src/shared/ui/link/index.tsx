import React from 'react';
import styles from './app-link.module.scss'
import {cx} from "shared/lib/class-names";
import { Link as RouterLink, LinkProps} from "react-router-dom";

export enum Theme{
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface Props extends LinkProps {
    className?: string;
    theme?: Theme;
}

const Link = (props: Props) => {
    const { className, theme = Theme.PRIMARY, ...rest} = props
    return <RouterLink {...rest} className={cx(styles.root, className, styles[theme])} />
};

export { Link , Theme as LinkTheme }