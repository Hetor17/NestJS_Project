import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    // This middleware check if the request has an 'authorization' header.
    const {authorization} = req.headers;

    // If there isn't a header named 'authorization', an HTTP 401 Unauthorized error is returned to the client
    if (!authorization) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);}

    // If 'authorization' isn't 'xyz123', an HTTP 403 Forbidden error is returned to the client
    if (authorization !== 'xyz123') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
