import {Action, Store, TASKS_ACTIONS_TYPES} from "./types";
import {v4 as uuidv4} from 'uuid';

export const initialStore: Store = {
    tasks: []
}

export const reducer = (store = initialStore, action: Action) => {
   switch (action.type) {
       case TASKS_ACTIONS_TYPES.ADD_TASK: {
           return {tasks: [...store.tasks, {...action.payload, id: uuidv4()}]}
       }
       case TASKS_ACTIONS_TYPES.DELETE_TASK: {
           return {tasks: [...store.tasks.filter((task) => task.id !== action.payload)]}
       }
       case TASKS_ACTIONS_TYPES.CHANGE_TASK: {
           const {id, task: newTask} = action.payload
           return {tasks: store.tasks.map((task) => task.id === id ? {...task, ...newTask} : task)}
       }
       case TASKS_ACTIONS_TYPES.SET_TASK: {
           return {tasks: action.payload}
       }


       default: {
           return store
       }
   }
}
