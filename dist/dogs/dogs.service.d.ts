import { Repository } from 'typeorm';
import { DogsDTO } from './dto/dogs.dto';
import { Dog } from './entities/dog.entity';
export declare class DogsService {
    private readonly dogRepository;
    constructor(dogRepository: Repository<Dog>);
    findAll(): Promise<string>;
    createDog(dogDTO: DogsDTO): Promise<string>;
    findOneById(id: string): Promise<string>;
    updateDog(id: any, updateDogDTO: any): Promise<string>;
    deleteDog(id: string): Promise<string>;
}
