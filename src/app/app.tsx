import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {Suspense} from "react";
import {cx} from "shared/lib/class-names";
import {useTheme} from "app/providers/theme";
import {AboutPage} from "pages/about";
import {MainPage} from "pages/main";

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return <div className={cx('app',theme)}>
        <button children={'toggle theme'} onClick={toggleTheme}/>
        <Link to={'/about'} children={'About'}/>
        <br/>
        <Link to={'/'} children={'Main'}/>
        <br/>
        <Suspense fallback={null}>
            <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </Suspense>
    </div>
}