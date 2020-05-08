import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";


@Entity('Turno')
export class Turno extends BaseEntity{
    
@PrimaryGeneratedColumn('increment')
id: number;

@Column('varchar')
nombre: string;

@Column('time')
entrada: Date;

@Column('time')
salida: Date;


}
