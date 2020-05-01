import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! y estamos en desarrrollo!!!!';
  }
}
