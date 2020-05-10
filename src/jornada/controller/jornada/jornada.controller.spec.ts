import { Test, TestingModule } from '@nestjs/testing';
import { JornadaController } from './jornada.controller';

describe('Jornada Controller', () => {
  let controller: JornadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JornadaController],
    }).compile();

    controller = module.get<JornadaController>(JornadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
