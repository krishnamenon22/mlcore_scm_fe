import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../../../components/Loadable";

const Userprofile = Loadable(lazy(() => import("./Userprofile")));

const userprofileRoutes: RouteObject[] = [
    {
        path: "/userprofile",
        element: <Userprofile />,
    },
];

export default userprofileRoutes;
