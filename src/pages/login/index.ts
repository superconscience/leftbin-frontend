import { createRouteView } from "atomic-router-react";
import { currentRoute } from "./model";
import { LoginPage } from "./view";

export const LoginRoute = {
  view: createRouteView({ route: currentRoute, view: LoginPage }),
  route: currentRoute,
};
