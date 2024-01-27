import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/about";
import {MainPage} from "pages/main";
import {RouterConfig} from "app/config/route";

export const Router = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {RouterConfig.map((props) =>
                        <Route key={props.path} {...props}/>
                )}
            </Routes>
        </Suspense>
    );
};
