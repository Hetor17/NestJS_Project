import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('') // If you want to put a base path, you can specify it here
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
  createUser(@Body() user: CreateUserDto){
    return this.usersService.createUser(user);
  }
}