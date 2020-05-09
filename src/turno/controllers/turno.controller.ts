import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { CreateTurnoDto } from '../dto/create-turno-dto';
import { TurnoService } from 'src/turno/service/turno.service';
import { Turno } from '../entities/turno.entity';

@Controller('turno')
export class TurnoController {
    constructor(private turnoService: TurnoService){}

    @Post()
    async createTurno(@Body() createTurnoDto: CreateTurnoDto){
        const turno = await this.turnoService.createTurno(createTurnoDto);
        return turno;
    }

    @Get()
    async getTurnos(): Promise<Turno[]>{
        const turnos  = await this.turnoService.getAll();
        return turnos ;
    }

    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number): Promise<Turno>{
        const turno = await this.turnoService.get(id);
        return turno;
    }

    @Put(':id')
    async updateTurno(@Body() actualizaTurnoDto: CreateTurnoDto, @Param('id') id: number){
        const turno: CreateTurnoDto = await this.turnoService.updateTurno(id, actualizaTurnoDto);
        return turno;
    } 

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        const turno = await this.turnoService.deleteTurno(id);
    } 
}