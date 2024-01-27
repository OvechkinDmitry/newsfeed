import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {AsyncAbout} from "./pages/about/async";
import {AsyncMain} from "./pages/main/async";
import {Suspense} from "react";
import {useTheme} from "./theme/use-theme";
import {cx} from "./helpers/class-names";

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
                <Route path={'/about'} element={<AsyncAbout/>}/>
                <Route path={'/'} element={<AsyncMain/>}/>
            </Routes>
        </Suspense>
    </div>
}