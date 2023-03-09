import { Injectable, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDTO } from './dto/users.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

import { Cat } from 'src/cats/entities/cat.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>  ){}
    
    async findAll(){
        return  await this.usersRepository.find();
    }

    //Crea un usuario, y se pueden especificar gatos que tenga
    async createUser(userDTO: UsersDTO){
        const {cats, ...userdto} = userDTO;
        const userEnt = {
            ...userdto,
            createdAt: new Date(),
            edited: null,
            removed: null
        }
        if(!cats){
            try{
                const user =this.usersRepository.create(userEnt)
                await this.usersRepository.save(user);
                return user;
             }
             catch(error){ throw new BadRequestException()}
        }
        else{
        const user = this.usersRepository.create({
            ...userEnt,
            cats: cats.map(cat=> this.catRepository.create({
            ...cat,
            createdAt: new Date(),
            edited: null,
            removed: null}))});
        try{
           await this.usersRepository.save(user);
           return user;
        }
        catch(error){
            throw new BadRequestException() ;
        }
    }
        
    }

    async findOneById(id:string){
        return `esto devuelvo el usuario con id:${id} `
    }

    async updateCat(id,updateUserDTO){
        return `esto actualiza el usuario con id : ${id} con la info del dto`
    }

    async deleteUser(id: string){
        return ` esto borra el usuario con id: ${id}`
    }

}
