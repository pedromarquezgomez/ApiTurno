import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Turno } from 'src/turno/entities/turno.entity';
import { Repository } from 'typeorm';
import { CreateTurnoDto } from 'src/turno/dto/create-turno-dto';

@Injectable()
export class TurnoService {
    constructor(
        @InjectRepository(Turno)
        private readonly turnoRepository: Repository<Turno>
      ) {}

    async getAll(): Promise<Turno[]>{
      console.log('service');

         return await this.turnoRepository.find();
      }

    async get(id: number): Promise<Turno>{
        return await this.turnoRepository.findOne(id);
        
     }

    async createTurno(turnoNuevo: CreateTurnoDto): Promise<Turno>{
          const nuevo = new Turno();
          nuevo.nombre = turnoNuevo.nombre;
          nuevo.entrada = turnoNuevo.entrada;
          nuevo.salida = turnoNuevo.salida;

          return await this.turnoRepository.save(nuevo);
      }

    async updateTurno(id: number, turnoActualiza: CreateTurnoDto): Promise<Turno>{
          const actualiza = await this.turnoRepository.findOne(id);
          actualiza.nombre = turnoActualiza.nombre;
          actualiza.entrada = turnoActualiza.entrada;
          actualiza.salida = turnoActualiza.salida;

          return await this.turnoRepository.save(actualiza);
      }

    async deleteTurno(id: number): Promise<any>{
          return await this.turnoRepository.delete(id);
      }
}
