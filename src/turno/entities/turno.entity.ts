import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Jornada } from "src/jornada/entities/jornada.entity";


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

@OneToMany(type => Jornada, jornada => jornada.turno)
jornadas!: Jornada[];


}
