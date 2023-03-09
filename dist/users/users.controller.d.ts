import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersDTO } from './dto/users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./entities/user.entity").User[]>;
    createUser(userDTO: UsersDTO): Promise<import("./entities/user.entity").User>;
    findOne(id: string): any;
    updateCat(id: string, updateUserDTO: UpdateUserDTO): Promise<string>;
    deleteCat(id: string): Promise<string>;
}
