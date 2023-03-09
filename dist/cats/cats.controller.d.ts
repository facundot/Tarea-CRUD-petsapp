import { UpdateCatDTO } from './dto/update-cat.dto';
import { CatsDTO } from './dto/cats.dto';
import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    findAll(): Promise<import("./entities/cat.entity").Cat[]>;
    findOne(id: string): Promise<import("./entities/cat.entity").Cat>;
    createCat(catDTO: CatsDTO): Promise<{
        id: string;
        name: string;
        raza?: string;
        edad: number;
        genero: string;
        createdAt: Date;
        edited: Date;
        removed: Date;
        owner?: import("../users/entities/user.entity").User;
    }>;
    updateCat(id: string, updateCatDTO: UpdateCatDTO): Promise<import("./entities/cat.entity").Cat>;
    deleteCat(id: string): Promise<import("./entities/cat.entity").Cat>;
}
