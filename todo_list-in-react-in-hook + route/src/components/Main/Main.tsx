import React, { useEffect, useState } from 'react';
import { Button, Input, Checkbox, Radiogroup } from '../common';
import { TaskType } from "../types/types";
import { v4 as uuidv4 } from 'uuid';
import css from './main.module.css';

export const Main = () => {


    const todoList: TaskType[] = []
    const filters = [
        { id: '1', label: 'All', value: 'all' },
        { id: '2', label: 'Active', value: 'active' },
        { id: '3', label: 'Completed', value: 'completed' },
    ]

    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState(todoList)
    const [filter, setFilter] = useState('all')
    const [editedId, setEditedId] = useState<string | null>(null)
    const [editTask, setEditTask] = useState('')

    const addTaskHandler = () => {
        if (newTask.trim() === '') {
            return false
        }
        setTasks((prevTask) => [...prevTask, { id: uuidv4(), name: newTask, isDone: false }])
        setNewTask('')
    }
    const deleteTaskHandler = (id: TaskType['id']) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const changeCheckboxHandler = (id: string) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, isDone: !task.isDone } : task))
    }
    const filterChangeHandler = (filter: string) => {
        setFilter(filter)
    }

    const onEditStart = (id: string) => {
        setEditedId(id)
        const task = tasks.find((task) => task.id === id)
        setEditTask(task!.name)
    }
    const onEditEnd = () => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === editedId ? { ...task, name: editTask } : task))
        setEditedId(null)
    }
    const onEditCancel = () => {
        setEditedId(null)
    }

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
        if (tasks.length) {
            setTasks(tasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    return (
        <div className={css.container}>
            <div className={css.groupAddTask}>
                <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='ENTER A TASK' />
                <Button onClick={addTaskHandler} children='Add task' />
            </div>

            <Radiogroup name='filter' value={filter} items={filters} onChange={filterChangeHandler} />
            <ul>
                {tasks.length === 0 && <h2 className={css.subTitle}>Task list is empty</h2>}
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
                        <li key={task.id} className={css.groupTask}>
                            <Checkbox onChange={() => changeCheckboxHandler(task.id)} checked={task.isDone} />
                            {editedId === task.id ? (<Input value={editTask} onChange={(e) => setEditTask(e.target.value)} />) :
                                <span className={css.taskName}>{task.name}</span>}
                            {editedId !== task.id && <Button onClick={() => onEditStart(task.id)} children='Edit' />}
                            {editedId === task.id && (
                                <React.Fragment>
                                    <Button onClick={onEditEnd} children='Save' />
                                    <Button onClick={onEditCancel} children='Cancel' />
                                </React.Fragment>)}
                            <Button children='Delete task' onClick={() => deleteTaskHandler(task.id)} />

                        </li>

                    ))}
            </ul>
        </div>
    )
}

