import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
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
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
