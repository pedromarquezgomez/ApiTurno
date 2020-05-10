import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Turno } from "src/turno/entities/turno.entity";
import { Operario } from "src/operario/entities/operario.entity";


@Entity('Jornada')
export class Jornada extends BaseEntity{
    
@PrimaryGeneratedColumn('increment')
id: number;

@Column('int')
turnoId: number;

@Column('int')
operarioId: number;

@Column('date')
fecha: Date;

@ManyToOne(type => Turno, turno => turno.jornadas)
turno!: Turno;

@ManyToOne(type => Operario, operario => operario.jornadas)
operario!: Operario;

}