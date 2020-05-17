import { Injectable } from '@nestjs/common';
import { CreateOperarioDto } from '../dto/create-operario-dto';
import { Operario } from '../entities/operario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';


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

     async get(id: number): Promise<Operario>{
        return await this.operarioRepository.findOne(id);
     }


     async updateOperario(id: number, operarioActualiza: CreateOperarioDto): Promise<Operario>{
        const actualiza = await this.operarioRepository.findOne(id);
        actualiza.nombre = operarioActualiza.nombre;
        actualiza.activo = operarioActualiza.activo;
        actualiza.role = operarioActualiza.role;

        return await this.operarioRepository.save(actualiza);
    }

    async deleteOperario(id: number): Promise<any>{
        return await this.operarioRepository.delete(id);
    }

    async getId(nombre: string): Promise<number>{

        const oper = await this.operarioRepository.findOne({ nombre : 'nombre'})
        return oper.id;
    }


}
