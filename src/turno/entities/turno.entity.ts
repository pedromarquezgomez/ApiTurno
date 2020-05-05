import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Turno {
    
@PrimaryGeneratedColumn()
id: number;

@Column('varchar')
nombre: string;

@Column('varchar')
entrada: string;

@Column('varchar')
salida: string;


}
