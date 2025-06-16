import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Req, Res, Query, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('')
export class HelloController {
  @Get('/hello')
  // Request is used to get the request object
  // Response is used to send a response back to the client
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url); // Prints the requested URL on the console
    // Sends a Json response with a status code of 200
    response.status(200).json({
      message: 'Hello, World!',
    });
  }

  @Get('new')
  @HttpCode(201)
  somethingNew(){
    return 'Something new'
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found'
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'Error Route'
  }

  @Get('ticket/:num')
  // ParseIntPipe works so the Param (in this case 'num') works as an int 
  // If we dont use this, at the moment of the sum the result would be this (num = 10) 1014
  // But if we use ParseIntPipe the result would be 24
  getNumber(@Param('num', ParseIntPipe) num: number){
    console.log(typeof num);
    return num + 14;
  }

  // http://localhost:3000/active/true
  // The same but with Booleans
  @Get('active/:status')
  @UseGuards(AuthGuard)
  isUserActive(@Param('status', ParseBoolPipe) status: boolean){
    console.log(typeof status);
    return status;
  }

  // http://localhost:3000/greet?name=Héctor&age=19
  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
    console.log(typeof query.name);
    console.log(typeof query.age);
    return `Hello ${query.name}, you are ${query.age} years old`
  }
}
