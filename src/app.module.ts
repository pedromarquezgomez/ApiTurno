import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurnoController } from './turno/controllers/turno.controller';
import { Turno } from './turno/entities/turno.entity';
import { TurnoService } from './services/turno/turno.service';


@Module({
  imports:[ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'pedro',
    password: 'pedro',
    database: 'ApiTurno',
    entities: [Turno],
    synchronize: true,
  }),TypeOrmModule.forFeature([Turno]) ],
  controllers: [AppController, TurnoController],
  providers: [AppService, TurnoService, ],
})
export class AppModule {}
