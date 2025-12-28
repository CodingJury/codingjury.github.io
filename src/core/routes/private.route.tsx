import { type RoutesInterface } from "./interface";
import { PUBLIC_ROUTES } from "./public.route";

export const PRIVATE_ROUTES: RoutesInterface[] = [
  ...PUBLIC_ROUTES,
]