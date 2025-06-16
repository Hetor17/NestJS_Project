import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // Get the current HTTP request object from the execution context
    // Example: http://localhost:3000/greet?name=Hector&age=19
    const request = context.switchToHttp().getRequest() as Request; // Result: /greet?name=Hector&age=19
    console.log(request.url);
    
    // // If the request URL is exactly '/greet' (without query parameters), deny access
    // if (request.url === '/greet') return false // http://localhost:3000/greet

    // If i dont put a Header named authorization it will return false
    if (!request.headers['authorization']) return false;

    // Allow access for any other URL
    return true; // http://localhost:3000/greet?name=Hector&age=19
  }
}
