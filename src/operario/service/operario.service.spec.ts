import { Test, TestingModule } from '@nestjs/testing';
import { OperarioService } from './operario.service';

describe('OperarioService', () => {
  let service: OperarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperarioService],
    }).compile();

    service = module.get<OperarioService>(OperarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
