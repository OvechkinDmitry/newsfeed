import {ReactNode} from "react";
import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/main";
import {AboutPage} from "pages/about";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

interface Route {
   path: AppRoutes,
   element: ReactNode
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const Config: RouteProps[] = [
    {
        path: RoutePaths.main,
        element: <MainPage/>,
    },
    {
        path: RoutePaths.about,
        element: <AboutPage/>,
    }
]