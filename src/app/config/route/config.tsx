import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main';
import { AboutPage } from 'pages/about';
import { NotFound } from 'pages/not-found';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const Config: RouteProps[] = [
  {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  {
    path: RoutePaths['not-found'],
    element: <NotFound />,
  },
];
