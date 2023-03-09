import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DogsDTO } from './dto/dogs.dto';
import { Dog } from './entities/dog.entity';

@Injectable()
export class DogsService {
    constructor(@InjectRepository(Dog) private readonly dogRepository: Repository<Dog>){}
    
    async findAll(){
        return `esto devuelve todos los dogs`
    }

    async createDog(dogDTO: DogsDTO){
        return `esto crea un perro`
    }

    async findOneById(id:string){
        return `esto devuelvo el perro con id:${id} `
    }

    async updateDog(id,updateDogDTO){
        return `esto actualiza el perro con id : ${id} con la info del dto`
    }

    async deleteDog(id: string){
        return ` esto borra el perro con id: ${id}`
    }
}
