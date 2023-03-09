import { IsEmail, IsIn, IsString, IsInt, Min, Length, IsOptional } from 'class-validator';
import { CatsDTO } from '../../cats/dto/cats.dto';

export class UsersDTO {
    @IsString()
    @Length(3,10)
    name: string;
    @IsInt()
    @Min(18)
    edad: number;
    @IsString()
    @IsIn(['masculino','femenino'])
    genero: string;
    @IsEmail()
    correo: string;

    @IsOptional()
    cats?: CatsDTO[]


}