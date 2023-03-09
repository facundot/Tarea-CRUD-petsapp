import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsDTO } from './dto/dogs.dto';
import { UpdateDogDTO } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {

    constructor(private readonly dogsService: DogsService) {}
    
    @Get()
    findAll(){
        return this.dogsService.findAll();
    }

    @Post()
    createUser(@Body() dogDTO: DogsDTO){
        return this.dogsService.createDog(dogDTO);
    }

    @Get(':id')
    findOne(@Param('id',ParseUUIDPipe) id: string){
        return this.dogsService.findOneById(id);
    }

    @Patch(':id')
    updatedog(@Param('id',ParseUUIDPipe) id:string ,@Body() updateDogDTO: UpdateDogDTO) {
        return this.dogsService.updateDog(id,updateDogDTO);
    }

    @Delete(':id')
    deletedog(@Param('id',ParseUUIDPipe) id: string){
        return this.dogsService.deleteDog(id);
    }
}
