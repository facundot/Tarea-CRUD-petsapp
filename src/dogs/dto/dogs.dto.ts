import { IsIn, IsInt, IsPositive, IsString, Min } from "class-validator";


export class DogsDTO {
    
    @IsString()
    name: string; 

    @IsString()
    raza?: string;

    @IsInt()
    @Min(0)
    edad: number;
    
    @IsString()
    @IsIn(['masculino','femenino'])
    genero: string;
}