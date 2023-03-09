import { UsersDTO } from './dto/users.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Cat } from 'src/cats/entities/cat.entity';
export declare class UsersService {
    private readonly usersRepository;
    private readonly catRepository;
    constructor(usersRepository: Repository<User>, catRepository: Repository<Cat>);
    findAll(): Promise<User[]>;
    createUser(userDTO: UsersDTO): Promise<User>;
    findOneById(id: string): Promise<string>;
    updateCat(id: any, updateUserDTO: any): Promise<string>;
    deleteUser(id: string): Promise<string>;
}
