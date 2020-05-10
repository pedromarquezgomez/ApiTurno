import { IsNotEmpty ,  IsDateString, IsNumber} from 'class-validator';

export class CreateJornadaDto {
    @IsNotEmpty()
    @IsDateString()
    readonly fecha: Date;

    @IsNotEmpty()
    @IsNumber()
    readonly operarioId: number;

    @IsNotEmpty()
    @IsNumber()
    readonly turnoId: number;
   
}