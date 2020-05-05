import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Turno {
    
@PrimaryGeneratedColumn()
id: number;

@Column('varchar')
nombre: string;

@Column('datetime')
entrada: Date;

@Column('datetime')
salida: Date;


}
