import { IsNotEmpty , IsString, IsBoolean} from 'class-validator';




export class CreateOperarioDto {
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly activo: boolean;

    @IsNotEmpty()
    @IsString()
    readonly role: string;
   
}
