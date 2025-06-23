import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  
  // Injects the PrismaService to interact with the database  npm install --legacy-peer-deps
  constructor(private prisma: PrismaService) {}

  // Returns all users from the database
  // This works by calling the Prisma client to find many user records
  getUsers() {
    return this.prisma.user.findMany();
  }

  // Creates a new user in the database using the provided DTO
  // This method takes a CreateUserDto object and uses the prisma client 
  createUser(user: CreateUserDto){
    return this.prisma.user.create({data:user})
  }
}
