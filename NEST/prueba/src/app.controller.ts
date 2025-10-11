import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

/*usuario*/
  @Get() /* Endpoint Raiz */
  public getHello(): string {
    return "API usuarios funcionando";
  }

 
}
