import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): any;
    createUser(user: CreateUserDto): {
        email: string;
        password: string;
        name: string;
        age: number;
        id: any;
    };
}
