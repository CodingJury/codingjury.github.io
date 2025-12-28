import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { getRoutesBasedOnAuthentication } from "../helpers/routes.helper.tsx";
import { useMemo } from "react";

const RoutesProvider = () => {
  const routeActive = useMemo(() => getRoutesBasedOnAuthentication(false), []);
  // console.log({ routeActive });

  const router = createBrowserRouter(routeActive)

  return (
    <RouterProvider router={router}/>
  )
}

export default RoutesProvider