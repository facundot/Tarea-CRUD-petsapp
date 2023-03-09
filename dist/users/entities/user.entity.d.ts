import { Cat } from 'src/cats/entities/cat.entity';
import { AuditI } from '../../common/interfaces/audit.interface';
export declare class User implements AuditI {
    id: string;
    name: string;
    correo: string;
    edad: number;
    genero: string;
    createdAt: Date;
    edited: Date;
    removed: Date;
    cats?: Cat[];
}
