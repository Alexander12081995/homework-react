import { Task} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const initialState: { tasks: Task[] } = {
    tasks: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks = [...state.tasks, action.payload]
        },
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = [...state.tasks, ...action.payload]
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = [...state.tasks.filter((task) => task.id !== action.payload)]
        },
        changeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.map((task) => task.id === action.payload ? {...task, isDone: !task.isDone} : task)
        }
    }
})

export const {addTask, setTasks, deleteTask, changeTask} = todoSlice.actions;
export default todoSlice.reducer;
