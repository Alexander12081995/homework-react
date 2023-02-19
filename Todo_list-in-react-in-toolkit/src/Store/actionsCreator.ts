import {ADD_TASK_ACTION, CHANGE_TASK_ACTION, DELETE_TASK_ACTION, Task, TASKS_ACTIONS_TYPES} from "./types";

export const addTask = (task: Omit<Task, 'id'>): ADD_TASK_ACTION => ({
    type: TASKS_ACTIONS_TYPES.ADD_TASK,
    payload: task,
})

export const deleteTask = (id: Task['id']): DELETE_TASK_ACTION => ({
    type: TASKS_ACTIONS_TYPES.DELETE_TASK,
    payload: id,
})

export const changeTask = (id: Task['id'], task: Omit<Partial<Task>, 'id'>): CHANGE_TASK_ACTION => ({
    type: TASKS_ACTIONS_TYPES.CHANGE_TASK,
    payload: {id, task}
})

export const setTasks = (tasks: Task[]) => ({
    type: TASKS_ACTIONS_TYPES.SET_TASK,
    payload: tasks,
})
