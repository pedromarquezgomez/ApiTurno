import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Jornada } from "src/jornada/entities/jornada.entity";


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

@OneToMany(type => Jornada, jornada => jornada.operario)
jornadas!: Jornada[];




}
