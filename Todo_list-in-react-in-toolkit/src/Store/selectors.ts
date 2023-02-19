import {Store, Task} from "./types";

export const getTasks = (store: Store): Task[] => store.tasks;
