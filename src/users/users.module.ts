import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from '../prisma.service'; // Fixed import path

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService], // Added PrismaService here
})
// This makes the module able to configure middleware.
export class UsersModule implements NestModule{
  // This method is called by NestJS to set up middleware for this module
  configure(consumer: MiddlewareConsumer) {
    /*
      When someone visits a user route (like /users/profile?active=true), 
      the middleware prints that URL to the console using console.log(req.originalUrl);.

      After logging, it calls next() to let the request continue to the controller.
    */

    // // If you want to use it for all the HTTP methods(GET, POST, PUT, etc...)
    // consumer.apply(LoggerMiddleware).forRoutes('users');

    // If you want to use it for a specific HTTP method (In this case "GET")
    
    // consumer
    // .apply(LoggerMiddleware)
    // .forRoutes(
    //   {path: '/users', method: RequestMethod.GET},
    //   {
    //     path:'/users',
    //     method: RequestMethod.POST,
    //   },
    // )
    // .apply(AuthMiddleware)
    // .forRoutes('users');
  }
}
