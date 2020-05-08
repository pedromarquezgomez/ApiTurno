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


@Module({
  imports:[ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'pedro',
    password: 'pedro',
    database: 'ApiTurno',
    entities: [Turno, Operario],
    synchronize: true,
  }),TypeOrmModule.forFeature([Turno, Operario]) ],
  controllers: [AppController, TurnoController, OperarioController],
  providers: [AppService, TurnoService, OperarioService, ],
})
export class AppModule {}
