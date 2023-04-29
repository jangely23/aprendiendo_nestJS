import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
  Res,
  ParseIntPipe
} from '@nestjs/common';

import { Response, response } from 'express';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from './../dtos/product.dtos'

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService){}

  @Get(':company_id')
  @HttpCode(HttpStatus.ACCEPTED) //Usa el decorador - forma correcta
  getAllProduct(
    @Param('company_id') company_id: number,
    @Param('product_id') product_id: number,
  ) {
    /* return{
      message : `Soy la empresa ${company_id}, con producto ${product_id}`,
    } */
    return this.productService.findAll();
  }


  //ruta de acceso del navegador
  @Get(':company_id/:product_id')
  @HttpCode(HttpStatus.ACCEPTED) //Usa el decorador - forma correcta
  getOneProduct(
    /* @Res() response: Response, */
    @Param('company_id') company_id: number,
    @Param('product_id') product_id: number,
  ) {
    /* //Usa el response de express
    response.status(200).send({
        message : `Soy la empresa ${company_id}, con producto ${product_id}`,
    }); */
    return this.productService.findOne(product_id);
  }

  @Post()
  create(@Body() createDTO: CreateProductDto): any {
    /* return {
      message: 'Esto es una pruebita',
      nameProcut: createDTO.name,
      priceProduct: createDTO.price,
    }; */
    return this.productService.create(createDTO);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
    /* return {
      id,
      payload,
    }; */

    return this.productService.update(id, payload)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
