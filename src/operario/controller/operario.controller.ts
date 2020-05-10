import { Controller, Post, Body, Get, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateOperarioDto } from '../dto/create-operario-dto';
import { Operario } from '../entities/operario.entity';
import { OperarioService } from '../service/operario.service';


@Controller('operario')
export class OperarioController {
    constructor( private operarioService: OperarioService){} 
    
      @Post()
    async createOperario(@Body() createOperarioDto: CreateOperarioDto){
        const Operario = await this.operarioService.createOperario(createOperarioDto);
        return Operario;
    } 
  
     @Get()
    async getOperarios(): Promise<Operario[]>{
        const Operarios  = await this.operarioService.getAll();
        return Operarios ;
    }     
    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number): Promise<Operario>{
        const Operario = await this.operarioService.get(id);
        return Operario;
    }

    @Put(':id')
    async updateOperario(@Body() actualizaOperarioDto: CreateOperarioDto, @Param('id') id: number){
        const Operario: CreateOperarioDto = await this.operarioService.updateOperario(id, actualizaOperarioDto);
        return Operario;
    } 

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        const Operario = await this.operarioService.deleteOperario(id);
    } 
 
}
