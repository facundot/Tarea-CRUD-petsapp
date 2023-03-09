import { CatsDTO } from '../../cats/dto/cats.dto';
export declare class UsersDTO {
    name: string;
    edad: number;
    genero: string;
    correo: string;
    cats?: CatsDTO[];
}
