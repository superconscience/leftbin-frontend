import { createRouteView } from "atomic-router-react";
import { currentRoute } from "./model";
import { MainPage } from "./view";

export const MainRoute = {
  view: createRouteView({ route: currentRoute, view: MainPage }),
  route: currentRoute,
};
