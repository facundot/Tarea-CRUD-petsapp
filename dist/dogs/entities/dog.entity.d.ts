import { AuditI } from "src/common/interfaces/audit.interface";
export declare class Dog implements AuditI {
    id: string;
    name: string;
    raza?: string;
    edad: number;
    genero: string;
    createdAt: Date;
    edited: Date;
    removed: Date;
}
