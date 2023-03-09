import { DogsService } from './dogs.service';
import { DogsDTO } from './dto/dogs.dto';
import { UpdateDogDTO } from './dto/update-dog.dto';
export declare class DogsController {
    private readonly dogsService;
    constructor(dogsService: DogsService);
    findAll(): Promise<string>;
    createUser(dogDTO: DogsDTO): Promise<string>;
    findOne(id: string): Promise<string>;
    updatedog(id: string, updateDogDTO: UpdateDogDTO): Promise<string>;
    deletedog(id: string): Promise<string>;
}
