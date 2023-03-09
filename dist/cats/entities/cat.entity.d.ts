import { User } from "src/users/entities/user.entity";
import { AuditI } from '../../common/interfaces/audit.interface';
export declare class Cat implements AuditI {
    id: string;
    name: string;
    raza?: string;
    edad: number;
    genero: string;
    createdAt: Date;
    edited: Date;
    removed: Date;
    owner?: User;
}
