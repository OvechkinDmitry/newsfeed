import {Link} from 'react-router-dom'
import './styles/index.scss'
import {cx} from "shared/lib/class-names";
import {useTheme} from "app/providers/theme";
import { Router } from "app/providers/router";

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return <div className={cx('app',theme)}>
        <button children={'toggle theme'} onClick={toggleTheme}/>
        <Link to={'/about'} children={'About'}/>
        <br/>
        <Link to={'/'} children={'Main'}/>
        <br/>
        <Router/>
    </div>
}