import { IsNotEmpty , IsString, IsDateString} from 'class-validator';




export class CreateTurnoDto {
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;

    @IsNotEmpty()
    @IsDateString()
    readonly entrada: Date;

    @IsNotEmpty()
    @IsDateString()
    readonly salida: Date;

}
