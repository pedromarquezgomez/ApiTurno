import { Controller, Post, Body, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { Jornada } from 'src/jornada/entities/jornada.entity';
import { CreateJornadaDto } from 'src/jornada/dto/create-jornada-dto';
import { JornadaService } from 'src/jornada/service/jornada/jornada.service';


@Controller('jornada')
export class JornadaController {
     constructor(private jornadaService: JornadaService){}

    @Post()
    async createJornada(@Body() createjornadaDto: CreateJornadaDto){
        const jornada = await this.jornadaService.createJornada(createjornadaDto);
        return jornada;
    }

    @Get('list')
    async getJornadas():Promise<Jornada[]>{
        const jornadas  = await this.jornadaService.getJornadas();
        return jornadas ; 
    }
    @Get(':id')
    async getJornada(@Param('id', ParseIntPipe) id: number):Promise<Jornada>{
        const jornada  = await this.jornadaService.getJornada(id);
        return jornada ;
    }

    @Get('jornadaOperario/:idOperario')
    async get(@Param('idOperario', ParseIntPipe) idOperario: number): Promise<Jornada []>{
        const jornada: Jornada [] = await this.jornadaService.getJornadasByIdOperario(idOperario);
        return jornada;
    }

    @Put(':id')
    async updateJornada(@Body() actualizajornadaDto: CreateJornadaDto, @Param('id') id: number){
        const jornada: CreateJornadaDto = await this.jornadaService.updateJornada(id, actualizajornadaDto);
        return jornada;
    } 

    @Delete(':id')
    async deleteJornada(@Param('id', ParseIntPipe) id: number){
        const jornada = await this.jornadaService.deleteJornada(id);
    } 

 
}
