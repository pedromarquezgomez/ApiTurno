import { Controller, Post, Body, Get, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateOperarioDto } from '../dto/create-operario-dto';
import { Operario } from '../entities/operario.entity';
import { OperarioService } from '../service/operario.service';
import { createQueryBuilder } from 'typeorm';


@Controller('operario')
export class OperarioController {
    constructor( private operarioService: OperarioService){} 
    
      @Post('create')
    async createOperario(@Body() createOperarioDto: CreateOperarioDto){
        const operario = await this.operarioService.createOperario(createOperarioDto);
        return operario;
    } 
  
     @Get('list')
    async getOperarios(): Promise<Operario[]>{
        const operarios  = await this.operarioService.getAll();
        return operarios ;
    }     
    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number): Promise<Operario>{
        const operario = await this.operarioService.get(id);
        return operario;
    }

    @Put('update/:id')
    async updateOperario(@Body() actualizaOperarioDto: CreateOperarioDto, @Param('id') id: number){
        const operario: CreateOperarioDto = await this.operarioService.updateOperario(id, actualizaOperarioDto);
        return operario;
    } 

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        const operario = await this.operarioService.deleteOperario(id);
    } 
 
}
