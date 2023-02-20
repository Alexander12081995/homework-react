export interface Task {
    id: string;
    name: string;
    isDone: boolean;
}

export interface Store {
    tasks: Task[];
}
