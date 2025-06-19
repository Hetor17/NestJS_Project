import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
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