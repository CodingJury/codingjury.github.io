import { type RoutesInterface } from "../routes/interface.ts";
import { PRIVATE_ROUTES } from "../routes/private.route.tsx";
import { PUBLIC_ROUTES } from "../routes/public.route.tsx";

 export function getRoutesBasedOnAuthentication(isLoggedIn: boolean): RoutesInterface[] {
  return isLoggedIn ? PRIVATE_ROUTES : PUBLIC_ROUTES
 }