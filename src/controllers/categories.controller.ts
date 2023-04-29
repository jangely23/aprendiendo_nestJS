import { Controller, Get, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get()
    getServices(@Query() params:any){
      const {limit, offset} = params;
      return `products limit = ${limit} y el  offset ${offset}`
    }
}
