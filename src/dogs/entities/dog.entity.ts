import { AuditI } from "src/common/interfaces/audit.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Dog implements AuditI {
    
   
        @PrimaryGeneratedColumn('uuid')
        id: string;
    
        @Column('text')
        name: string;
    
        @Column('text')
        raza?: string;
    
        @Column('numeric')
        edad : number;
    
        @Column('text')
        genero: string;
        
        @Column('date')
        createdAt: Date;
       
        @Column('date', {nullable:true, default: null})
        edited: Date;
        
        @Column('date',{nullable:true, default:null})
        removed: Date;
    }

    
