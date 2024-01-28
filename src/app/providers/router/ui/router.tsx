import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterConfig} from "app/config/route";

export const Router = () => {
    return (
        <div className='page-content'>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {RouterConfig.map((props) =>
                            <Route key={props.path} {...props}/>
                )}
            </Routes>
        </Suspense>
        </div>
    );
};
