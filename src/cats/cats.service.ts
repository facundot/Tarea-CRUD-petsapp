import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatsDTO } from './dto/cats.dto';
import { Cat } from './entities/cat.entity';
import { UpdateCatDTO } from './dto/update-cat.dto';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class CatsService {

    constructor(@InjectRepository(Cat) 
    private readonly catsRepository: Repository<Cat>,
    @InjectRepository(User) private readonly userRepository: Repository<User>){}



    async findAll(){
      return await this.catsRepository.find();
    }

   async createCat(catDTO: CatsDTO){
        const catEnt = {
            ...catDTO,
            createdAt: new Date(),
            edited: null,
            removed: null,
        }
        const cat =this.catsRepository.create(catEnt);
        console.log(cat);
        try{
            await this.catsRepository.save(cat);
            return {...cat}
            }
            catch(error){
                console.log(error)
                throw new BadRequestException()
            }
    }

    async findOneById(id: string){
        const cat = await this.catsRepository.findOneBy({id:id});

        if(!cat) throw new NotFoundException();
        
        return cat;

    }

    async deleteCat(id: string){
        const cat = await this.findOneById(id);
        return await this.catsRepository.remove(cat);
    }

    async updateCat(id: string, updateCatDTO:UpdateCatDTO){
        const cat =  await this.catsRepository.preload({
            id:id,
            ...updateCatDTO,
            edited: new Date(),
            
        })
        if (!cat) throw new BadRequestException()

        try{
            await this.catsRepository.save(cat);
            return cat;
        }
        catch(error){
            console.log(error)
            throw new InternalServerErrorException()
        }
        return
    }


}
