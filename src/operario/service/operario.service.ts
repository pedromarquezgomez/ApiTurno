import { Injectable } from '@nestjs/common';
import { CreateOperarioDto } from '../dto/create-operario-dto';
import { Operario } from '../entities/operario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class OperarioService {
    constructor(
        @InjectRepository(Operario)
        private readonly operarioRepository: Repository<Operario>
      ) {}

    async createOperario(operarioNuevo: CreateOperarioDto): Promise<Operario>{
        const nuevo = new Operario();
        nuevo.nombre = operarioNuevo.nombre;
        nuevo.activo = operarioNuevo.activo;
        nuevo.role = operarioNuevo.role;

        return await this.operarioRepository.save(nuevo);
    }

    async getAll(): Promise<Operario[]>{
        return await this.operarioRepository.find();
     }
}
