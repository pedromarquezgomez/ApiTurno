import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateTurnoDto } from '../dto/create-turno-dto';
import { TurnoService } from 'src/services/turno/turno.service';
import { response } from 'express';

@Controller('turno')
export class TurnoController {
    constructor(private turnoService: TurnoService){

    }

    @Post()
    create(@Body() createTurnoDto: CreateTurnoDto, @Res() response){
        this.turnoService.createTurno(createTurnoDto).then( turno => {
            response.satatus(HttpStatus.CREATED).json(turno);
        }).catch ( ()=> {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'error al crear el turno'});
        });

    }

    @Get()
    getAll(@Res()response){
        this.turnoService.getAll().then(turnoList =>{
            response.status(HttpStatus.OK).json(turnoList)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la obtencion de los turnos'});
        });
    }

    @Put(':id')
    update(@Body() actualizaTurnoDto: CreateTurnoDto, @Res() response, @Param('id') idTurno){
        this.turnoService.updateTurno(idTurno, actualizaTurnoDto).then(turno => {
            response.status(HttpStatus.OK).json(turno);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error al actualizar el turno'});
         });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idTurno){
        this.turnoService.deleteTurno(idTurno).then(res =>{
            response.status(HttpStatus.OK).json(res);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error al borrar el turno'});
        });
    }
}
