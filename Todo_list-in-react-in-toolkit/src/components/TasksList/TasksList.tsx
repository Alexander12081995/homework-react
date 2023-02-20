import {Button, Checkbox, Input, Radiogroup} from "../common";
import {useState} from "react";
import {useTasksList} from './useTasksList'

const filters = [
    {id: '1', label: 'all', value: 'all'},
    {id: '2', label: 'completed', value: 'completed'},
    {id: '3', label: 'active', value: 'active'},
]

export const TasksList = () => {

    const [filter, setFilter] = useState('active')
    const [newTask, setNewTask] = useState('')
    const {
        addTaskHandler, deleteTaskHandler, changeTaskHandler, tasks} =
        useTasksList(newTask, () => setNewTask(""))
    const setFilters = (filter: string) => {
        setFilter(filter)
    }

    return (
        <div>
            <Input value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <Button children={'add task'} onClick={addTaskHandler}/>
            <Radiogroup items={filters} name={filter} value={filter} onChange={setFilters}/>
            <ul>
                {tasks.filter((task): boolean => {
                    if (filter === 'all') {
                        return true
                    }
                    if (filter === 'active') {
                        return !task.isDone
                    }
                    return task.isDone
                })
                    .map((task) => (
                        <li>
                            <Checkbox checked={task.isDone}
                                      onChange={() => changeTaskHandler(task.id)}/>
                            <span>{task.name}</span>
                            <Button onClick={() => deleteTaskHandler(task.id)} children={'x'}/>
                        </li>
                    ))}
            </ul>
        </div>
    )
}
