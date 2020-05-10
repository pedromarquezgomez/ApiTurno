import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jornada } from 'src/jornada/entities/jornada.entity';
import { Repository } from 'typeorm';
import { CreateJornadaDto } from 'src/jornada/dto/create-jornada-dto';

@Injectable()
export class JornadaService {
    constructor(
        @InjectRepository(Jornada)
        private readonly JornadaRepository: Repository<Jornada>
      ) {}

    async getAll(): Promise<Jornada[]>{
         return await this.JornadaRepository.find();
      }

    async get(id: number): Promise<Jornada>{
        return await this.JornadaRepository.findOne(id);
        
     }

    async createJornada(JornadaNuevo: CreateJornadaDto): Promise<Jornada>{
          const nuevo = new Jornada();
          nuevo.fecha = JornadaNuevo.fecha;
          nuevo.operarioId = JornadaNuevo.operarioId;
          nuevo.turnoId = JornadaNuevo.turnoId;

          return await this.JornadaRepository.save(nuevo);
      }

    async updateJornada(id: number, JornadaActualiza: CreateJornadaDto): Promise<Jornada>{
          const actualiza = await this.JornadaRepository.findOne(id);
          actualiza.fecha = JornadaActualiza.fecha;
          actualiza.operarioId = JornadaActualiza.operarioId;
          actualiza.turnoId = JornadaActualiza.turnoId;

          return await this.JornadaRepository.save(actualiza);
      }

    async deleteJornada(id: number): Promise<any>{
          return await this.JornadaRepository.delete(id);
      }
}
