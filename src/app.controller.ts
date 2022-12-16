import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Post()
  createLocation(@Body() body): string {
    console.log('Body: ',body);
    return "1";
    //return this.appService.getHello();

  }
}
