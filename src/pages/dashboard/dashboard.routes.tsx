import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../../components/Loadable";

const Dashboard = Loadable(lazy(() => import("./Dashboard")));

const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

export default dashboardRoutes;
