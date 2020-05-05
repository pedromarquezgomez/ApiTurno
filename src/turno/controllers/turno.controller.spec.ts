import { Test, TestingModule } from '@nestjs/testing';
import { TurnoController } from './turno.controller';

describe('Turno Controller', () => {
  let controller: TurnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurnoController],
    }).compile();

    controller = module.get<TurnoController>(TurnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
