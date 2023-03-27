import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  startSuccessful(): string {
    return 'Success!';
  }
  
}
