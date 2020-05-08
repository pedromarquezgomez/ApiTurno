import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { OperarioService } from '../service/operario.service';
import { CreateOperarioDto } from '../dto/create-operario-dto';

@Controller('operario')
export class OperarioController {
    constructor( private operarioService: OperarioService){}
    
    @Post()
    create(@Body() createOperario: CreateOperarioDto, @Res() response){
        this.operarioService.createOperario(createOperario).then( turno => {
            response.status(HttpStatus.OK).json(turno);
        }).catch ( ()=> {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'error al crear el operario'});
        });

    }

    @Get()
    getAll(@Res()response){
        this.operarioService.getAll().then(operarioList =>{
            response.status(HttpStatus.OK).json(operarioList)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la obtencion de los operarios'});
        });
    }

}
