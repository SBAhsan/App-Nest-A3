import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
            path: 'apps',
            loader: () => fetch('/allApps.json'),
            Component: Apps
        },
        {
            path: 'appDetails/:id',
            loader: () => fetch('/allApps.json'),
            Component: AppDetails
        },
        {
            path: 'installation',
            Component: Installation
        },
    ]
  }
])