import { Test, TestingModule } from '@nestjs/testing';
import { OperarioController } from './operario.controller';

describe('Operario Controller', () => {
  let controller: OperarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperarioController],
    }).compile();

    controller = module.get<OperarioController>(OperarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
