import { IsString, IsOptional, IsInt, Min, IsIn, MinLength, Length, IsArray } from "class-validator";

export class PosteosDTO{
        
    @IsString()
    titulo: string; 

    @IsString()
    @Length(1,250)
    contenido: string;

    @IsArray()
    @IsString({each: true})
    @IsOptional()
    tags?: string[];
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    images?: string[];
}