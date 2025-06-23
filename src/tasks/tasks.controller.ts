import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
  UsePipes,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/tasks')
export class TasksController {
  // tasksService: TasksService;

  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService;
  // }

  // @Get('/')
  // // Request is used to get the request object
  // // Response is used to send a response back to the client
  // index(@Req() request: Request) {
  //   console.log(request.url); // Prints the requested URL on the console
  //   // Sends a Json response with a status code of 200
  //   return this.tasksService.getTasks();
  // }

  // It's the same as the code above, but using a shorthand syntax
  constructor(private tasksService: TasksService) {}

  // Get is used to receive the data of an object
  @Get()
  // Query reads the query parameters from the URL (e.g., /tasks?limit=10)
  @ApiOperation({summary: 'Get all Tasks'})
  @ApiResponse({ status: 200, description: 'Return all Tasks'})
  getAllTasks(@Query() query: any) {
    console.log({ ...query });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  // @Get('/:id') is used to get a specific task by its id
  getTasks(@Param('id') id: string) {
    // Param is used to get the parameters from the URL
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.tasksService.getTask(parseInt(id));
  }

  // Post is used to create a new object
  @Post()
  @ApiOperation({ summary: 'Create a new Task' })
  @ApiResponse({ status: 201, description: 'Create a new Task' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  // Put is used to update the whole object
  @Put() // {title: 'primer tarea', status: false} => {title: "tarea actualizando", status: true}
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  // Delete is used to delete an object
  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  // Patch is used to update an especific field of an object
  @Patch() // {title: 'primer tarea, status: false} => {status: true}
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
