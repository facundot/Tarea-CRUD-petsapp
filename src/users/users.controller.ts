import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UpdateCatDTO } from 'src/cats/dto/update-cat.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Post()
    createUser(@Body() userDTO: UsersDTO){
        return this.usersService.createUser(userDTO);
    }

    @Get(':id')
    findOne(@Param('id',ParseUUIDPipe) id: string): any{
        return this.usersService.findOneById(id);
    }

    @Patch(':id')
    updateCat(@Param('id',ParseUUIDPipe) id:string ,@Body() updateUserDTO: UpdateUserDTO) {
        return this.usersService.updateCat(id,updateUserDTO);
    }

    @Delete(':id')
    deleteCat(@Param('id',ParseUUIDPipe) id: string){
        return this.usersService.deleteUser(id);
    }
}
