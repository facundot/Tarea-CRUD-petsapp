import { Repository } from 'typeorm';
import { CatsDTO } from './dto/cats.dto';
import { Cat } from './entities/cat.entity';
import { UpdateCatDTO } from './dto/update-cat.dto';
import { User } from 'src/users/entities/user.entity';
export declare class CatsService {
    private readonly catsRepository;
    private readonly userRepository;
    constructor(catsRepository: Repository<Cat>, userRepository: Repository<User>);
    findAll(): Promise<Cat[]>;
    createCat(catDTO: CatsDTO): Promise<{
        id: string;
        name: string;
        raza?: string;
        edad: number;
        genero: string;
        createdAt: Date;
        edited: Date;
        removed: Date;
        owner?: User;
    }>;
    findOneById(id: string): Promise<Cat>;
    deleteCat(id: string): Promise<Cat>;
    updateCat(id: string, updateCatDTO: UpdateCatDTO): Promise<Cat>;
}
