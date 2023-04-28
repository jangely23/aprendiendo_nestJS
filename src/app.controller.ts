import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    /* return this.appService.getHello(); */
    return "prueba de Jess"
  }

  @Get('nuevo') //ruta de acceso del navegador
  getEndpoint(){
    return 'yo soy nuevo'
  }


  @Get('products/:company_id/:product_id') //ruta de acceso del navegador
  getProduct(@Param('company_id') company_id: number, @Param('product_id') product_id: number){
    return `Soy la empresa ${company_id}, con producto ${product_id}`
  }

  @Get('services')
  getServices(@Query() params:any){
    const {limit, offset} = params;
    return `products limit = ${limit} y el  offset ${offset}`
  }
}
