export interface Task {
    id: string;
    name: string;
    isDone: boolean;
}

export interface Store {
    tasks: Task[];
}

export enum TASKS_ACTIONS_TYPES {
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    CHANGE_TASK = 'CHANGE_TASK',
    SET_TASK = 'SET_TASK',
}

export type ADD_TASK_ACTION = {type: TASKS_ACTIONS_TYPES.ADD_TASK, payload: Omit<Task, 'id'>}
export type DELETE_TASK_ACTION = {type: TASKS_ACTIONS_TYPES.DELETE_TASK, payload: Task['id']}
export type CHANGE_TASK_ACTION = {
    type: TASKS_ACTIONS_TYPES.CHANGE_TASK,
    payload: {id: Task['id'], task: Omit<Partial<Task>, 'id'>}
}
export type SET_TASK_ACTION = {type: TASKS_ACTIONS_TYPES.SET_TASK, payload: Task[]}

export type Action = ADD_TASK_ACTION | DELETE_TASK_ACTION | CHANGE_TASK_ACTION | SET_TASK_ACTION
