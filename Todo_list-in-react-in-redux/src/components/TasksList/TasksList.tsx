import {Button, Checkbox, Input} from "../common";
import {useState} from "react";
import {useTasksList} from './useTasksList'
import {useSelector} from "react-redux";
import {getTasks} from "../../store";

export const TasksList = () => {
  const tasks = useSelector(getTasks)


    const [newTask, setNewTask] = useState('')
    const {addTaskHandler} = useTasksList(newTask, () => setNewTask(""))

    return (
        <div>
            <Input value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <Button children={'add task'} onClick={() => alert('delete')}/>
            <ul>
                {/*{tasks.map((task) => (*/}
                {/*    <li>*/}
                {/*        <Checkbox checked={task.isDone}/>*/}
                {/*        <span>{task.name}</span>*/}
                {/*        <Button onClick={() => alert('delete')} children={'x'}/>*/}
                {/*    </li>*/}
                {/*))}*/}
            </ul>
        </div>
    )
}
