import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurnoController } from './turno/controllers/turno.controller';
import { Turno } from './turno/entities/turno.entity';
import { TurnoService } from './turno/service/turno.service';
import { OperarioController } from './operario/controller/operario.controller';
import { OperarioService } from './operario/service/operario.service';
import { Operario } from './operario/entities/operario.entity';
import { Jornada } from './jornada/entities/jornada.entity';
import { JornadaService } from './jornada/service/jornada/jornada.service';
import { JornadaController } from './jornada/controller/jornada/jornada.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports:[ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'apiserve.mysql.database.azure.com',
    port: 3306,
    username: 'pedro@apiserve',
    password: 'Aa13042013',
    database: 'ApiTurno',
    entities: [Turno, Operario, Jornada],
    synchronize: false ,
  }),TypeOrmModule.forFeature([Turno, Operario, Jornada]), AuthModule, UsersModule ],
  controllers: [AppController, TurnoController, OperarioController, JornadaController],
  providers: [AppService, TurnoService, OperarioService, JornadaService ],
})
export class AppModule {}