import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
/**
 * Service responsible for managing user-related operations.
 * 
 * The `UsersService` class provides methods to interact with the user data in the database.
 * It leverages the injected `PrismaService` to perform database operations such as retrieving all users
 * and creating new users.
 * 
 * - The `getUsers` method fetches and returns all user records from the database.
 * - The `createUser` method creates a new user record using the provided `CreateUserDto` data transfer object.
 * 
 * This service acts as an abstraction layer between the controller and the database, ensuring that
 * all user-related data access logic is centralized and reusable.
 */
export class UsersService {
  
  // Injects the PrismaService to interact with the database  npm install --legacy-peer-deps
  constructor(private prisma: PrismaService) {}

  // Returns all users from the database
  
  getUsers() {
    return this.prisma.user.findMany();
  }

  // Creates a new user in the database using the provided DTO
  createUser(user: CreateUserDto){
    return this.prisma.user.create({data:user})
  }
}