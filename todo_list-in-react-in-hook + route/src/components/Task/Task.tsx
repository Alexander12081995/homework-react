import {useParams} from "react-router-dom";
import {TaskType} from "../types/types";
import css from './task.module.css';
import {Checkbox} from "../common";

export const Task = () => {
    const {id} = useParams()

    const tasks = JSON.parse(localStorage.getItem("tasks") ?? '[]')

    const task = tasks.find((task: TaskType) => task.id === id)

    return (
        <div className={css.groupTask}>
            <p><span style={{fontWeight: 'bold', fontSize: 50, textDecoration: "underline"}}>Title:</span> {task.name}</p>
            <p><span style={{fontWeight: 'bold', fontSize: 50, textDecoration: "underline"}}>Completed:</span> <Checkbox checked={task.isDone} /></p>
            <div>

            </div>

        </div>
    )

}
