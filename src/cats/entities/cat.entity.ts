import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditI } from '../../common/interfaces/audit.interface';

@Entity()
export class Cat implements AuditI {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text',)
    raza?: string;

    @Column('numeric')
    edad : number;

    @Column('text')
    genero: string;
    
    @Column('date')
    createdAt: Date;
   
    @Column('date', {nullable:true, default: null})
    edited: Date;
    
    @Column('date',{nullable:true,default:null})
    removed: Date;

    @ManyToOne(()=>User,(user)=>user.cats)
    owner?: User;

}