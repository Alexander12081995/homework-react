import {useDispatch, useSelector} from "react-redux";
import {addTask, setTasks, deleteTask, changeTask} from "../../Store/slice";
import {useEffect} from "react";
import {RootState} from "../../Store";
import {v4 as uuidv4} from "uuid";


export const useTasksList = (newTask: string, onAdd: () => void) => {

    const tasks = useSelector((state: RootState) => state.todo.tasks)
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
        dispatch(addTask({name: newTask, isDone: false, id: uuidv4()}))
        onAdd()
    }
    const deleteTaskHandler = (id: string) => {
    dispatch(deleteTask(id))
    }
    const changeTaskHandler = (id: string) => {
        dispatch(changeTask(id))
    }

    return {
        addTaskHandler,
        deleteTaskHandler,
        changeTaskHandler,
        tasks
    }
}
