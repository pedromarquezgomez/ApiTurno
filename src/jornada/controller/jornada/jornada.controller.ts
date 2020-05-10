import { Controller, Post, Body, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { Jornada } from 'src/jornada/entities/jornada.entity';
import { CreateJornadaDto } from 'src/jornada/dto/create-jornada-dto';
import { JornadaService } from 'src/jornada/service/jornada/jornada.service';


@Controller('jornada')
export class JornadaController {
     constructor(private jornadaService: JornadaService){}

    @Post()
    async createjornada(@Body() createjornadaDto: CreateJornadaDto){
        const jornada = await this.jornadaService.createJornada(createjornadaDto);
        return jornada;
    }
    @Get()
    async getTurnos():Promise<Jornada[]>{
        const turnos  = await this.jornadaService.getAll();
        return turnos ;
    }

     @Get()
    async getjornadas():Promise<Jornada[]>{
        console.log('controller JORNADA');
        console.log('entra en get');
        const jornadas  = await this.jornadaService.getAll();
        return jornadas ; 
    }
 
    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number): Promise<Jornada>{
        const jornada = await this.jornadaService.get(id);
        return jornada;
    }

    @Put(':id')
    async updatejornada(@Body() actualizajornadaDto: CreateJornadaDto, @Param('id') id: number){
        const jornada: CreateJornadaDto = await this.jornadaService.updateJornada(id, actualizajornadaDto);
        return jornada;
    } 

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        const jornada = await this.jornadaService.deleteJornada(id);
    } 

 
}
