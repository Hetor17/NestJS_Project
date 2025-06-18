import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(query: any): any[];
    getTasks(id: string): any;
    createTask(task: CreateTaskDto): CreateTaskDto;
    updateTask(task: UpdateTaskDto): string;
    deleteTask(): string;
    updateTaskStatus(): string;
}
