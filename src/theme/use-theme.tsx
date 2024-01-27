import {useContext} from "react";
import {LS_THEME_KEY, Theme, ThemeContext} from "./context";

interface UseThemeResult{
    theme: Theme,
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const current = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        localStorage.setItem(LS_THEME_KEY, current)
        setTheme(current)
    }

    return {theme, toggleTheme}
}