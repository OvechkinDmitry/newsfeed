import {LS_THEME_KEY, Theme, ThemeContext} from "./context";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(() => defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return <ThemeContext.Provider value={defaultProps} children={children}/>
}