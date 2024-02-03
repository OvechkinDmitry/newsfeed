import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'app/config/route';
import { Loader } from 'widgets/loader';

export function Router() {
  return (
    <div className="page-content">
      <Suspense fallback={<Loader />}>
        <Routes>
          {RouterConfig.map((props) => <Route key={props.path} {...props} />)}
        </Routes>
      </Suspense>
    </div>
  );
}
