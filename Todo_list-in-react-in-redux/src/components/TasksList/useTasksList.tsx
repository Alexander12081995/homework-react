import {useDispatch} from "react-redux";
import {addTask} from "../../store";

export const useTasksList = (newTask: string, onAdd: () => void) => {
    const dispatch = useDispatch()

    const addTaskHandler = () => {
        if (newTask.trim() === "") {
            return false
        }
        dispatch(addTask({name: newTask, isDone: false}))
        onAdd()
    }

    return {
        addTaskHandler,
    }
}
