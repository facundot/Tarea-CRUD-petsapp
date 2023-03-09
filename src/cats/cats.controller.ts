import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UpdateCatDTO } from './dto/update-cat.dto';
import { CatsDTO } from './dto/cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService){}

    @Get()
    findAll(){
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id',ParseUUIDPipe) id: string){
        return this.catsService.findOneById(id);
    }

    @Post()
    createCat(@Body() catDTO: CatsDTO){
        return this.catsService.createCat(catDTO);
    }

    @Patch(':id')
    updateCat(@Param('id',ParseUUIDPipe) id:string ,@Body() updateCatDTO: UpdateCatDTO) {
        return this.catsService.updateCat(id,updateCatDTO);
    }

    @Delete(':id')
    deleteCat(@Param('id',ParseUUIDPipe) id: string){
        return this.catsService.deleteCat(id);
    }


}
