import { lazy } from "react";
import { type RoutesInterface } from "./interface";
import { DASHBOARD } from "../constants/routes.constant.ts";

const DashboardPage = lazy(() => import("../../pages/dashboard/dashboard.page"))

export const PUBLIC_ROUTES: RoutesInterface[] = [
  { path: DASHBOARD, element: <DashboardPage/> }
]