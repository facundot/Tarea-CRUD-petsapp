import { Cat } from 'src/cats/entities/cat.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { AuditI } from '../../common/interfaces/audit.interface';
@Entity()
export class User implements AuditI{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    correo: string;

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

    @OneToMany(()=> Cat,(Cat) => Cat.owner,{cascade:true})
    cats?: Cat[];

}