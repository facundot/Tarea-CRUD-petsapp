import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PosteosDTO } from './dto/posteos.dto';
import { Posteo } from './entity/posteo.entity';

@Injectable()
export class PosteosService {
    
    constructor(@InjectRepository(Posteo) private readonly dogRepository: Repository<Posteo>){}
    
    async findAll(){
        return `esto devuelve todos los posts`
    }

    async createPost(postDTO: PosteosDTO){
        return `esto crea un post`
    }

    async findOneById(id:string){
        return `esto devuelvo el post con id:${id} `
    }

    async updatePost(id,updateDogDTO){
        return `esto actualiza el post con id : ${id} con la info del dto`
    }

    async deletePost(id: string){
        return ` esto borra el post con id: ${id}`
    }
}
