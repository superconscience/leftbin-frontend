import { createStore } from "effector";

type User = {};

const $user = createStore<User | null>(null);

export { $user };
