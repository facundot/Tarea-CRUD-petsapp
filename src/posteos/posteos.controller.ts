import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { PosteosService } from './posteos.service';
import { PosteosDTO } from './dto/posteos.dto';
import { UpdatePosteoDTO } from './dto/update-posteo.dto';

@Controller('posteos')
export class PosteosController {

    constructor(private readonly posteosService: PosteosService) {}
    
    @Get()
    findAll(){
        return this.posteosService.findAll();
    }

    @Post()
    createPost(@Body() posteoDTO: PosteosDTO){
        return this.posteosService.createPost(posteoDTO);
    }

    @Get(':id')
    findOne(@Param('id',ParseUUIDPipe) id: string){
        return this.posteosService.findOneById(id);
    }

    @Patch(':id')
    updatePost(@Param('id',ParseUUIDPipe) id:string ,@Body() updatePosteoDTO: UpdatePosteoDTO) {
        return this.posteosService.updatePost(id,updatePosteoDTO);
    }

    @Delete(':id')
    deletePost(@Param('id',ParseUUIDPipe) id: string){
        return this.posteosService.deletePost(id);
    }
}
