import {TaskType} from "../types/types";
import {Link} from "react-router-dom";
import css from './tasks.module.css';

export const Tasks = () => {

    const tasks: TaskType[] = JSON.parse(localStorage.getItem('tasks') ?? '[]')

    return (
        <div>
            <ul className={css.groupLink}>
                {tasks.map((task) => (
                    <li key={task.id} className={css.li}>
                        <Link to={`/tasks/${task.id}`} className={css.link}>
                            <span>{task.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
