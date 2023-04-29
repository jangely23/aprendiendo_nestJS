import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dtos';

@Injectable()
export class ProductsService {
    private counter = 1
    private products: Product[] = [
        {
            id: 1,
            name: 'producto 1111',
            description: 'Esta es la descripcion de producto 1111',
            price: 12435,
            stock: 234,
            image: '',
        }
    ];

    findAll(){
        return this.products;
    }

    findOne(id: number){
        const product = this.products.find((item) => item.id === id);
        if(!product){
           throw new NotFoundException('El producto no existe ');
        }
        return product
    }

    create(payload: CreateProductDto){
        this.counter = this.counter+1;
        const newProduct ={
            id:  this.counter,
            ...payload,
        }
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: UpdateProductDto){
        const product = this.findOne(id);
        if(product){
            const index = this.products.findIndex((item)=> item.id === id);
            this.products[index] = {
                ...product,
                ...payload
            };
            return this.products[index]
        }
    }

    remove(id: number){
        const index = this.products.findIndex((item)=> item.id === id);

        if(!index){
            throw new NotFoundException('Producto no existe')
        }

        this.products.splice(index,1);
        return true;
    }
}
