import Layout from "layouts/Layout";
import { RouteObject } from "react-router-dom";
import dashboardRoutes from 'pages/dashboard/dashboard.routes';

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [...dashboardRoutes],
  },
];

export default routes;
