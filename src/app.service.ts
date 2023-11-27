import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sayHi(name: string) {
    return `Hi ${name}! how you going?`;
  }
}
