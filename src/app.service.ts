oimport { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sayHi() {
    return `Hello Nest JS 😺`;
  }
}
