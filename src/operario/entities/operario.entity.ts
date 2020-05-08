import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";


@Entity('Operario')
export class Operario extends BaseEntity{
    
@PrimaryGeneratedColumn('increment')
id: number;

@Column('varchar')
nombre: string;

@Column('boolean')
activo: boolean;

@Column('varchar')
role: string;


}
