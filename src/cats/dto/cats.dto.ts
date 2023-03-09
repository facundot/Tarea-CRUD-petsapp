import { IsIn, IsInt, IsOptional, IsString, Min } from "class-validator";
import { UsersDTO } from '../../users/dto/users.dto';

    export class CatsDTO{
    @IsString()
    name: string; 

    @IsString()
    @IsOptional()
    raza?: string;

    @IsInt()
    @Min(0)
    edad: number;
    
    @IsString()
    @IsIn(['masculino','femenino'])
    genero: string;
    
    @IsString()
    @IsOptional()
    owner? : UsersDTO;
}