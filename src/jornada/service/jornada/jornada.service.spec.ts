import { Test, TestingModule } from '@nestjs/testing';
import { JornadaService } from './jornada.service';

describe('JornadaService', () => {
  let service: JornadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JornadaService],
    }).compile();

    service = module.get<JornadaService>(JornadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
