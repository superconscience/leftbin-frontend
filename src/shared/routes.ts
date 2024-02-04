import {
  createHistoryRouter,
  createRoute,
  createRouterControls,
} from "atomic-router";
import { sample } from "effector";
import { appStarted } from "./config/init";
import { createBrowserHistory } from "history";

export const routes = {
  main: createRoute(),
  login: createRoute(),
};

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: "/login",
      route: routes.login,
    },
    {
      path: "/",
      route: routes.main,
    },
  ],
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
