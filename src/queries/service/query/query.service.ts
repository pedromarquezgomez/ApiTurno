import { Injectable } from '@nestjs/common';
import { JornadaService } from 'src/jornada/service/jornada/jornada.service';
import { TurnoService } from 'src/turno/service/turno.service';
import { OperarioService } from 'src/operario/service/operario.service';

@Injectable()
export class QueryService {
    constructor(
        private jornadaService: JornadaService,
        private turnoService: TurnoService,
        private operarioService:OperarioService
    ){}

  /*   async getTurnoByNameAndDate(name: string, fecha: Date): Promise<any>{
        const operarioId = await this.operarioService.getId(name);
        const jornada = await this.jornadaService.getTurnosByIdOperario(operarioId);
        return await CreateJornadaDto;
    } */

}
