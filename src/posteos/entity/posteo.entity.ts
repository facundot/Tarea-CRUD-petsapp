import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Posteo {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    titulo: string;

    @Column('text')
    contenido: string;

    @Column('numeric')
    tags? : string[];

    @Column('text')
    images?: string[];
    
    @Column('date')
    createdAt: Date;
   
    @Column('date', {nullable:true, default: null})
    edited: Date;
    
    @Column('date',{nullable:true,default:null})
    removed: Date;

}