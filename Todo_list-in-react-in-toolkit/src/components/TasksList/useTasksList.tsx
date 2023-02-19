import {useDispatch, useSelector} from "react-redux";
import {getTasks, addTask, deleteTask, changeTask, setTasks} from "../../Store";
import {Task} from "../../Store/types";
import {useEffect} from "react";


export const useTasksList = (newTask: string, onAdd: () => void) => {

    const tasks = useSelector(getTasks)
    const dispatch = useDispatch()

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]')

        dispatch(setTasks(tasks))
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTaskHandler = () => {
        if (newTask.trim() === '') {
            return false
        }
        dispatch(addTask({name: newTask, isDone: false}))
        onAdd()
    }
    const deleteTaskHandler = (id: string) => {
    dispatch(deleteTask(id))
    }
    const changeTaskHandler = (id: string, task: Partial<Task>) => {
        dispatch(changeTask(id, task))
    }

    return {
        addTaskHandler,
        deleteTaskHandler,
        changeTaskHandler,
        tasks
    }
}
