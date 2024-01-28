import React from 'react';
import styles from './theme-switcher.module.scss'
import {cx} from "shared/lib/class-names";
import {Theme, useTheme} from "app/providers/theme";
import {Button} from "shared/ui/button";
import { IoIosSunny as SunIcon } from "react-icons/io";
import { IoMdMoon as MoonIcon } from "react-icons/io";

interface Props{
    className?: string;
}

const ThemeSwitcher = (props: Props) => {
    const {theme, toggleTheme} = useTheme()
    const { className} = props
    return (
        <Button className={cx(styles.root, className)} onClick={toggleTheme}>
          {theme === Theme.LIGHT ? <SunIcon size={24}/> : <MoonIcon size={24}/>}
        </Button>
    );
};

export { ThemeSwitcher }