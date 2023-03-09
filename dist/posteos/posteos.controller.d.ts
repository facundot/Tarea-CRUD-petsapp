import { PosteosService } from './posteos.service';
import { PosteosDTO } from './dto/posteos.dto';
import { UpdatePosteoDTO } from './dto/update-posteo.dto';
export declare class PosteosController {
    private readonly posteosService;
    constructor(posteosService: PosteosService);
    findAll(): Promise<string>;
    createPost(posteoDTO: PosteosDTO): Promise<string>;
    findOne(id: string): Promise<string>;
    updatePost(id: string, updatePosteoDTO: UpdatePosteoDTO): Promise<string>;
    deletePost(id: string): Promise<string>;
}
