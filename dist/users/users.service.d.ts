import { CreateUserDto } from './dto/create-user-dto';
export declare class UsersService {
    private users;
    getUsers(): any;
    createUser(user: CreateUserDto): {
        email: string;
        password: string;
        name: string;
        age: number;
        id: any;
    };
}
