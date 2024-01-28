import React from 'react';
import styles from './navbar.module.scss'
import {cx} from "shared/lib/class-names";
import {Link} from "shared/ui/link";
import {ThemeSwitcher} from "widgets/theme-swither";

interface Props {
    className?: string;
}

export const Navbar = (props: Props) => {
    const { className} = props
    return (
        <div className={cx(styles.root, className)}>
            <ThemeSwitcher className={cx(styles['theme-switcher'])}/>
            <div className={cx(styles.links)}>
                <Link to={'/about'} children={'About'}/>
                <Link to={'/'} children={'Main'}/>
            </div>
        </div>
    );
};