import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    /*
      If someone visits:
        http://localhost:3000/users/profile?active=true
      Then req.originalUrl will be:
        /users/profile?active=true
    */
    console.log('middleware',req.originalUrl);

    next();
  }
}