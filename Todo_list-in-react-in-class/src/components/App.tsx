import { Input, Button, Checkbox, Radiogroup } from './common';
import { Component } from 'react';
import css from './app.module.css';


interface Task {
    id: number;
    label: string;
    isDone: boolean;
}

interface AppState {
    newTaskInput: string
    tasks: Task[];
    filter: string;
}

export class App extends Component<{}, AppState> {

    state: AppState = {
        newTaskInput: '',
        tasks: [],
        filter: 'all',
    }

    filters = [
        {id: '1', label: 'Выполненые', value: 'completed'},
        {id: '2', label: 'Невыполненые', value: 'unCompleted'},
        {id: '3', label: 'Все', value: 'all'}
    ];

    localStorageKey = '__tasks__';


    addTaskHandler = () => {
        if (this.state.newTaskInput.trim().length === 0) {
            return alert('Некорректное имя задачи')
        }

        this.setState((prevState) => ({
            tasks: [ ...prevState.tasks, { id: prevState.tasks.length + 1, label: prevState.newTaskInput, isDone: false }],
            newTaskInput: '',
        }));
    }

    deleteTaskHandler = (id: Task['id']) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((user) => user.id !== id)
        }))
    }

    changeFilterHandler = (filter: string) => {
        this.setState({ filter })
    }

    toggleUserHandle = (id: Task['id']) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) => task.id === id ? { ...task, isDone: !task.isDone } : task),
        }))
    }

    componentDidMount () {
        const tasks = JSON.parse(localStorage.getItem(this.localStorageKey) ?? '[]');
    
        if (tasks.length) {
          this.setState({
            tasks
          });
        }
      }
    
      componentDidUpdate (prevProps: any, prevState: any) {
        if (prevState.tasks !== this.state.tasks) {
          localStorage.setItem(this.localStorageKey, JSON.stringify(this.state.tasks));
        }
      }
    
    render () {
        return (<div className = { css.todolist }>
            <h1 className = { css.title } >Todo List на React</h1>
            
            <div className = { css.groupAddTask } >
                <Input value = { this.state.newTaskInput } onChange = { (e) => this.setState({ newTaskInput: e.target.value }) } />
                <Button onClick={ this.addTaskHandler } children='Добавить задачу'></Button>
            </div>
    
            <Radiogroup onChange = { this.changeFilterHandler } items={ this.filters } name='filter' value={ this.state.filter } />

            {this.state.tasks.length === 0 && <h2 className = { css.subTitle }>Спсок задач пуст</h2>}
    
            <ul className = { css.groupTask }>
                {this.state.tasks.filter((task): boolean => {
                    if (this.state.filter === 'all') {
                        return true
                    }
    
                    if (this.state.filter === 'completed') {
                        return task.isDone
                    }
    
                    return !task.isDone
                })
                .map((task) => 
                (<li key={ task.id } className = { css.task }>
                    <div>
                        <Checkbox checked={ task.isDone } onChange = { () => this.toggleUserHandle(task.id) } ></Checkbox>
                        { task.label }
                    </div>
                    <div>
                        { task.isDone && <Button onClick={ () => this.deleteTaskHandler(task.id) } className = { css.deleteTask } children='Удалить задачу'></Button> }
                    </div>
                </li>))}
            </ul>
        </div>)

    }
}
