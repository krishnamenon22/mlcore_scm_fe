import Layout from "layouts/Layout";
import { RouteObject } from "react-router-dom";
import dashboardRoutes from 'pages/dashboard/dashboard.routes';
import userprofileRoutes from 'pages/dashboard/userprofile/userprofile.routes';

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [...dashboardRoutes],
  },
  {
    element: <Layout />,
    children: [...userprofileRoutes],
  },
];

export default routes;
