import {Counter} from "./components/counter";
import {Routes, Route, Link} from 'react-router-dom'
import './index.scss'
import {AsyncAbout} from "./pages/about/async";
import {AsyncMain} from "./pages/main/async";
import {Suspense} from "react";

export const App = () => {
    return <div className='app'>
        <Link to={'/about'} children={'About'}/>
        <Link to={'/'} children={'Main'}/>
        <Suspense fallback={null}>
            <Routes>
                <Route path={'/about'} element={<AsyncAbout/>}/>
                <Route path={'/'} element={<AsyncMain/>}/>
            </Routes>
        </Suspense>
        <Counter/>
    </div>
}