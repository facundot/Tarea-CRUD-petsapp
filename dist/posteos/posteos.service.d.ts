import { Repository } from 'typeorm';
import { PosteosDTO } from './dto/posteos.dto';
import { Posteo } from './entity/posteo.entity';
export declare class PosteosService {
    private readonly dogRepository;
    constructor(dogRepository: Repository<Posteo>);
    findAll(): Promise<string>;
    createPost(postDTO: PosteosDTO): Promise<string>;
    findOneById(id: string): Promise<string>;
    updatePost(id: any, updateDogDTO: any): Promise<string>;
    deletePost(id: string): Promise<string>;
}
