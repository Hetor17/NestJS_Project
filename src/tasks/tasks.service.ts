import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// This interface defines the structure of a User Object
export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private tasks: any[] = [];

  getTasks() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.tasks;
  }

  getTask(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({
      id: this.tasks.length + 1,
      ...task,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'Actualizando tareas';
  }

  deleteTask() {
    return 'Eliminando tareas';
  }

  updateTaskStatus() {
    return 'Actualizando el estado de una tarea';
  }
}
