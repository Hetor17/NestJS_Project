import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export interface User {
    name: string;
    age: number;
}
export declare class TasksService {
    private tasks;
    getTasks(): any[];
    getTask(id: number): any;
    createTask(task: CreateTaskDto): CreateTaskDto;
    updateTask(task: UpdateTaskDto): string;
    deleteTask(): string;
    updateTaskStatus(): string;
}
