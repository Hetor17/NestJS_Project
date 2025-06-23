import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('') // If you want to put a base path, you can specify it here
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  // ApiOperation is used to describe the operation on the Api
  // Example: GET /users Get all Users
  @ApiOperation({summary: 'Get all Users'})
  // ApiResponse is used to describe the response of the operation
  @ApiResponse({ status: 200, description: 'Return all users'})
  @ApiResponse({ status:404, description: 'Not Found'})
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
  @ApiOperation({summary: 'Create a new User'})
  createUser(@Body() user: CreateUserDto){
    return this.usersService.createUser(user);
  }
}